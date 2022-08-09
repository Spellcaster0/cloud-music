import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    redirect: '/foundmusic',
    children: [
      {
        path: 'foundmusic',
        name: 'foundMusic',
        component: () => import('@/views/foundMusic/index.vue'),
        redirect: '/foundmusic/recommend',
        children: [
          {
            path: 'recommend',
            name: 'recommend',
            component: () => import('@/views/foundMusic/components/recommend/index.vue')
          },
          {
            path: 'playlist',
            name: 'playlist',
            component: () => import('@/views/foundMusic/components/playlist/index.vue')
          }
        ]
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
