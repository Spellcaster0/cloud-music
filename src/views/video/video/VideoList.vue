<script setup lang="ts">
import VideoCard from '@/components/VideoCard/index.vue'
import { useVideoStore } from '@/store/video'

const videoStore = useVideoStore()

</script>

<template>
  <div class="video-list">
    <video-card
      v-for="item in videoStore.videoList"
      :key="item.data.vid"
      :id="item.data.vid"
      :cover="item.data.coverUrl"
      :duration="item.data.durationms"
      :name="item.data.title"
      :creator="item.data.creator.nickname"
      :creator-id="item.data.creator.userId"
      :play-count="item.data.playTime"
      :preview-url="item.data.previewUrl"
    />
  </div>
</template>

<style lang="scss" scoped>
.video-list {
  @include basicFlexBox();
  flex-wrap: wrap;
}
</style>