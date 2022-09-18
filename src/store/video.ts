import { defineStore } from 'pinia'
import { getVideoCategory, getVideoGroup, getVideoList } from '@/service/video'
import localCache from '@/utils/cache'
import type { VideoListItem } from '@/service/type'

export const useVideoStore = defineStore({
  id: 'video',
  state: () => ({
    showVideoGroupBox: false,                 // 是否显示视频标签
    videoGroupBox: HTMLElement.prototype,     // 视频标签盒子
    videoCategoryList: [{
      id: 0,
      name: '全部视频',
      url: null,
      relatedVideoType: '',
      selectTab: false,
      abExtInfo: null
    }],
    videoGroupList: [{
      id: 0,
      name: '全部视频',
      url: null,
      relatedVideoType: '',
      selectTab: false,
      abExtInfo: null
    }],
    groupSelect: localCache.getCache('groupSelect') ?? 'ACG音乐', // 默认选中项
    groupSelectId: localCache.getCache('groupSelectId') ?? 57104,
    videoList: [{
      type: 1,
      displayed: false,
      alg: '',
      extAlg: null,
      data: {
        coverUrl: 'https://p2.music.126.net/Ra_Noiwca65T571ZjjV7yw==/109951164318586944.jpg',
        height: 1080,
        width: 1920,
        title: '',
        description: '',
        previewUrl: '',
        previewDurationms: 0,
        durationms: 0,
        playTime: 0,
        creator: {
          userId: 0,
          nickname: ''
        },
        vid: '4A1A87EBE6CDE46DB8B9D02A7577244D'
      }
    }],
    offset: 0
  }),
  getters: {
    
  },
  actions: {
    async initVideoCategory() {
      const res = await getVideoCategory()
      this.$state.videoCategoryList = res.data
    },
    async initVideoGroup() {
      const res = await getVideoGroup()
      this.$state.videoGroupList = res.data
    },
    async initVideoList(id: number) {
      this.$state.videoList = []
      let datasList: VideoListItem[] = []
      for (let i = 0; i < 8; i++) {
        const res = await getVideoList(id, i)     
        datasList = datasList.concat(res.datas)
      }
      this.$state.videoList = datasList
      this.$state.offset = 8
    },
    
  }
})