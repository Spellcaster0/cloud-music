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
        component: () => import('@/views/video/index.vue'),
        redirect: '/video/video',
        children: [
          {
            path: 'video',
            name: 'video-video',
            component: () => import('@/views/video/video/index.vue')
          },
          {
            path: 'mv',
            name: 'mv',
            component: () => import('@/views/video/mv/index.vue')
          }
        ]
      },
      {
        path: 'playlist',
        name: 'playlist',
        component: () => import('@/views/playlist/index.vue')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/search/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
