import { defineStore } from 'pinia'
import { getLyricApi } from '@/service/song'
import { usePlaylistStore } from './playlist'

const playlistStore = usePlaylistStore()

export const useSongStore = defineStore({
  id: 'song',
  state: () => ({
    lyricList: [{
      text: '',
      minute: '60',
      second: '60',
      time: 100000,
      next: 100000
    }],                   // 歌词列表
    currentTime: 0,       // 当前播放时间
    duration: 0           // 总时间
  }),
  getters: {
    
  },
  actions: {
    // 获取和处理歌词
    async setLyricList() {
      const res = await getLyricApi(playlistStore.currentSong.id)
      const sentences = res.lrc.lyric.split('\n')
      const arr = sentences.map(item => {
        if (item.length === 0) {
          return { text: '', minute: '60', second: '60', time: 10000000 }
        }
        // [03:58.01]或[03:58.010]
        // 判断9位是不是NaN
        if (isNaN(parseInt(item[9]))) {
          const text = item.slice(10)
          const minute = item.slice(1, 3)
          const second = item.slice(4, 6)
          // 单位毫秒
          const time = parseInt(minute) * 60 * 1000 + parseInt(second) * 1000 + parseInt(item.slice(7, 9)) * 10
          return { text, minute, second, time }
        } else {
          const text = item.slice(11)
          const minute = item.slice(1, 3)
          const second = item.slice(4, 6)
          // 单位毫秒
          const time = parseInt(minute) * 60 * 1000 + parseInt(second) * 1000 + parseInt(item.slice(7, 10))
          return { text, minute, second, time }
        }

      }).map((item, index, array) => {
        if (index === array.length - 1) {
          return { ...item, next: 10000000 }
        }
        const next = array[index + 1].time
        return { ...item, next }
      })
      this.lyricList = arr
    }
  }
})