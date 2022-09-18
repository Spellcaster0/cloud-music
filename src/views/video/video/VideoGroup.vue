<script setup lang="ts">
import { useVideoStore } from '@/store/video'
import { onMounted, ref } from 'vue'
import localCache from '@/utils/cache'

const videoStore = useVideoStore()
const videoGroupBox = ref<HTMLElement>()

onMounted(() => {
  videoStore.videoGroupBox = videoGroupBox.value!
})

const groupList = [
  {
    id: 0,
    name: '全部视频',
    url: null,
    relatedVideoType: '',
    selectTab: false,
    abExtInfo: null
  },
  ...videoStore.videoGroupList
]

function clickHandle(id: number) {
  groupList.forEach(item => {
    item.selectTab = false
    if (item.id === id) {
      item.selectTab = true
      videoStore.groupSelect = item.name
      videoStore.groupSelectId = item.id
      localCache.setCache('groupSelect', item.name)
      localCache.setCache('groupSelectId', item.id)
    }
  })
}
</script>

<template>
  <div class="video-group" ref="videoGroupBox">
    <el-scrollbar :height="500">
      <div class="total">
        <span 
          class="video-group-item" 
          @click="clickHandle(0)"
          :class="{ 'is-active': groupList[0].selectTab }"
        >全部视频</span>
      </div>
      <div class="video-group-list">
        <span 
          class="video-group-item"
          v-for="item in groupList.slice(1)"
          :key="item.id"
          :class="{ 'is-active': item.selectTab }"
          @click="clickHandle(item.id)"
        >{{ item.name }}</span>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.video-group {
  position: absolute;
  top: 60px;
  left: 0;
  width: 650px;
  height: 500px;
  background-color: #fff;
  border: 1px solid rgba(123, 123, 123, 0.1);
  border-radius: 10px;
  box-shadow: 1px -1px 10px -6px #666;
  z-index: 999;
  .el-scrollbar {
    padding: 0 20px;
    .total {
      width: 100%;
      height: 50px;
      padding-top: 10px;
      line-height: 50px;
      border-bottom: 1px solid #e2e2e2;
    }
    .video-group-list {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  }
  .video-group-item {
    height: 20px;
    margin: 6px 0;
    padding: 4px 14px;
    font-size: 12px;
    text-align: center;
    line-height: 20px;

    border-radius: 16px;
    cursor: pointer;
  }
  .is-active {
    background-color: #f9f3f4;
    color: $themeColor;
  }
}
</style>