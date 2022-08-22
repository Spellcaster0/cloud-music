import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    songShow: false,         // 是否显示歌曲详情页
    showLoginBox: false      // 是否显示登录框
  }),
  getters: {
    
  },
  actions: {

  }
})