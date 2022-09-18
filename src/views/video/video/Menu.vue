<script setup lang="ts">
import TabBar from '@/components/TabBar/index.vue'
import { watch, ref } from 'vue'
import VideoGroup from './VideoGroup.vue'
import { useVideoStore } from '@/store/video'
import localCache from '@/utils/cache'

const videoStore = useVideoStore()

interface videoCategoryTab {
  name: string, 
  index: string
}

const videoCategoryList = ref<videoCategoryTab[]>([])

function setvideoCategory() {
  videoCategoryList.value = videoStore.videoCategoryList.map((item) => {
    return {
      name: item.name,
      index: item.id + ''
    }
  })
}

watch(() => videoStore.videoCategoryList[0], () => {
  setvideoCategory()
})

function clickHandle() {
  videoStore.showVideoGroupBox = !videoStore.showVideoGroupBox
}

const handleSelect = (key: string) => {  
  videoStore.videoGroupList.forEach(item => {
    item.selectTab = false
    if (item.id === +key) {
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
  <div class="video-menu">
    <el-button round @click.stop="clickHandle">{{ videoStore.groupSelect }}</el-button>
    <video-group v-if="videoStore.showVideoGroupBox" />
    <tab-bar 
      v-if="videoCategoryList.length !== 0" 
      :menu-list="videoCategoryList"
      :default-active="videoStore.groupSelectId + ''"
      @handle-select="handleSelect"
    />
  </div>
</template>

<style lang="scss" scoped>
.video-menu {
  @include basicFlexBox();
  width: 100%;
  height: 80px;
  position: relative;

  .el-button {
    &:hover, &:focus {
      color: #666;
      background-color: #f2f2f2;
      border: 1px solid #cacaca;
    }
  }

  .tab-bar {
    :deep(.el-menu-item) {
      height: 26px;
      padding: 0 10px;
      font-size: 14px;
      border-radius: 13px;
    }
    :deep(.is-active) {
      font-weight: 400;
      color: $themeColor !important;
      background-color: #f9f3f4;
      border-bottom: 2px solid transparent !important;
    }
  }

}
</style>