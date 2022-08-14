import { defineStore } from 'pinia'

export const usePlaylistStore = defineStore({
  id: 'playlist',
  state: () => ({
    playlist: [{
      id: 1490104654,
      name: '我又想你了',
      mv: 0,
      // 专辑
      al: {
        id: 96799251,
        name: '我又想你了',
        picUrl: 'https://p1.music.126.net/XnLAbFfmIEyHW3_mtvvKrA==/109951165416746532.jpg'
      },
      // 作者
      ar: [{
        id: 34171281,
        name: '善喜'
      }]
    }]
  }),
  getters: {

  },
  actions: {

  }
})