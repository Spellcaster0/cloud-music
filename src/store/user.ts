import { defineStore } from 'pinia'
import { getLoginStatus } from '@/service/login'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    status: 0   // 登录状态, 0: 未登录, 1: 已登录
  }),
  getters: {

  },
  actions: {
    async setLoginStatus() {
      const res: any = await getLoginStatus()      
      res.data.profile === null ? this.status = 0 : this.status = 1
    }
  },
})
