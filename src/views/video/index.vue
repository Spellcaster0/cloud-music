<script setup lang="ts">
import TabBar from '@/components/TabBar/index.vue'

const scrollHeight = window.innerHeight - 55 - 36 - 70 -16

const menuList = [
  {
    name: '视频',
    index: 'video'
  },
  {
    name: 'MV',
    index: 'mv'
  }
]

</script>

<template>
  <div class="video-container">
    <tab-bar :menu-list="menuList" :default-active="$route.path.split('/')[2]" :router="true"></tab-bar>

    <el-scrollbar :height="scrollHeight">
      <div class="video-content">
        <router-view />
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.video-container {
  padding: $contentPaddingTop 0 0 $contentPaddingLeft;
  .video-content {
    padding-right: $contentPaddingLeft;
  }
}
</style>