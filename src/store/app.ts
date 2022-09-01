import { defineStore } from 'pinia'

interface AppState {
  songShow: boolean
}

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    songShow: false,                          // 是否显示歌曲详情页
    showLoginBox: false,                      // 是否显示登录框
    showSearchBox: false,                     // 搜索内容
    searchBox: HTMLElement.prototype,         // 搜索盒子
    searchInput: HTMLElement.prototype        // 搜索输入框
  }),
  getters: {
    
  },
  actions: {

  }
})