<script setup lang="ts">
import { usePlaylistStore } from '@/store/playlist'

const playlistStore = usePlaylistStore()
</script>

<template>
  <div class="song-disc">
    <img 
      class="needle" 
      src="@/assets/image/needle-ab.png"
      :class="{ 'needle-pause': !playlistStore.playing }"
    />
    <div class="disc-box" :class="{ 'rotate-pause': !playlistStore.playing }">
      <img class="disc" src="@/assets/image/disc.png" >
      <img class="cover" :src="playlistStore.currentSong.al.picUrl" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.song-disc {
  position: relative;
  width: 320px;
  height: 100%;
  box-sizing: border-box;
  .needle {
    position: absolute;
    top: 12%;
    left: 46%;
    width: 72px;
    transform-origin: 10% 8%;
    transform: rotateZ(-8deg);
    z-index: 1002;
    transition: transform 0.3s ease;
  }
  .needle-pause {
    transform: rotateZ(-25deg);
  }
  .disc-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 260px;
    height: 260px;
    animation: rotate 24s linear infinite;
    .disc {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      z-index: 1001;
    }
    .cover {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 180px;
      border-radius: 50%;
      z-index: 1000;
    }
  }
  .rotate-pause {
    animation-play-state: paused;
  }
  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotateZ(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotateZ(360deg);
    }
  }
}
</style>