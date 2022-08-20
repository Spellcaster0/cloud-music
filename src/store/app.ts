import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    songShow: false         // 是否显示歌曲详情页
    
  }),
  getters: {
    
  },
  actions: {

  }
})