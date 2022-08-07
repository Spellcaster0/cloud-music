import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'fa'
  }),
  actions: {
    setName(name: string) {
      this.$patch({
        name: name
      })
    }
  }
})