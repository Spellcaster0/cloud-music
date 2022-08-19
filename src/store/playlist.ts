import { defineStore } from 'pinia'

export const usePlaylistStore = defineStore({
  id: 'playlist',
  state: () => ({
    playlist: [{
      id: 786262,
      name: 'you',
      mv: 0,
      dt: 214845,
      // 别名
      alia: [
        'TV动画《寒蝉鸣泣之时 解》原声'
      ],
      // 专辑
      al: {
        id: 77700,
        name: 'Thanks You',
        picUrl: 'https://p1.music.126.net/KK6lEOnt-ADbrvT7cflDaQ==/109951163296300547.jpg'
      },
      // 歌手
      ar: [{
        id: 20579,
        name: 'M.Graveyard'
      }]
    }],
    playlistId: 0,    // 当前播放歌单id
    playIndex: 0,     // 播放列表索引
    playing: false    // 是否正在播放
  }),
  getters: {
    // 当前歌曲
    currentSong (state) {
      return state.playlist[state.playIndex]
    }
  },
  actions: {

  }
})