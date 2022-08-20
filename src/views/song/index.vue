<template>
  <div class="song-container">
    <div class="song-header">
      <svg-icon icon="arrow-down" size="24" color="#7c7c7c" @click="appStore.songShow = false" />
      <svg-icon icon="logo" />
    </div>
    <div class="song-content">
      <Disc />
      <Detail />
      <Recommend />
    </div>
    <div class="song-comment"></div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
import Disc from './components/Disc.vue'
import Detail from './components/Detail.vue'
import Recommend from './components/Recommend.vue'

const appStore = useAppStore()
</script>

<style lang="scss" scoped>
.song-container {
  @include basicFlexBox($justifyContent: flex-start);
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: linear-gradient(#f2f2f2, #fff);
  .song-header {
    @include basicFlexBox();
    width: 100%;
    height: 50px;
    padding: 0 24px;
    margin-bottom: 20px;
    box-sizing: border-box;
    .svg-icon {
      cursor: pointer;
    }
  }
  .song-content {
    @include basicFlexBox($justifyContent: space-around);
    width: 100%;
    height: 480px;
    padding: 0 24px;
    box-sizing: border-box;
  }
}
</style>