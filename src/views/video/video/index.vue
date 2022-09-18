<script setup lang="ts">
import Menu from './Menu.vue'
import VideoList from './VideoList.vue'
import { useVideoStore } from '@/store/video'
import { onMounted, watch } from 'vue'

const videoStore = useVideoStore()

onMounted(() => {
  videoStore.initVideoCategory()
  videoStore.initVideoGroup()
  videoStore.initVideoList(videoStore.groupSelectId)
})

watch(() => videoStore.groupSelectId, (newVal) => {
  videoStore.initVideoList(newVal)
})

</script>

<template>
  <div class="video">
    <Menu />
    <video-list />
  </div>
</template>

<style lang="scss" scoped>

</style>