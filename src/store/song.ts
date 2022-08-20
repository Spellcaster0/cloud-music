import { defineStore, storeToRefs } from 'pinia'
import { getLyricApi } from '@/service/song'
import { usePlaylistStore } from './playlist'

const playlistStore = usePlaylistStore()
const { currentSong } = storeToRefs(playlistStore)

export const useSongStore = defineStore({
  id: 'song',
  state: () => ({
    lyricList: [{
      text: '',
      minute: '60',
      second: '60',
      time: 100000,
      next: 100000
    }]         // 歌词列表
  }),
  getters: {
    
  },
  actions: {
    async setLyricList() {
      const res = await getLyricApi(currentSong.value.id)
      const sentences = res.lrc.lyric.split('\n')
      const arr = sentences.map(item => {
        if (item.length === 0) {
          return { text: '', minute: '60', second: '60', time: 1000000 }
        }
        const text = item.slice(10)
        const minute = item.slice(1, 3)
        const second = item.slice(4, 6)
        // 0.01s
        const time = parseInt(minute) * 60 * 100 + parseInt(second) * 100 + parseInt(item.slice(7, 9))
  
        return { text, minute, second, time }
      }).map((item, index, array) => {
        if (index === array.length - 1) {
          return { ...item, next: 1000000 }
        }
        const next = array[index + 1].time
        return { ...item, next }
      })
      this.lyricList = arr
    }
  }
})