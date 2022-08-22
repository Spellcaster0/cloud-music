import { defineStore } from 'pinia'
import { loginPhoneApi } from '@/service/login'
import localCache from '@/utils/cache'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    profile: localCache.getCache('profile'),
    token: localCache.getCache('token') as string,
    cookie: localCache.getCache('cookie') as string
  }),
  getters: {

  },
  actions: {
    // 使用手机号密码登录
    async loginPhone(phone: number, password: string) {
      const res = await loginPhoneApi(phone, password)
      
      this.$patch({
        profile: res.profile,
        token: res.token,
        cookie: res.cookie
      })
      localCache.setCache('profile', res.profile)
      localCache.setCache('token', res.token)
      localCache.setCache('cookie', res.cookie)
    }
  },
})
