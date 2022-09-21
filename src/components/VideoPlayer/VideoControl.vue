<script setup lang="ts">
import { inject, ref } from 'vue'
import type { Ref } from 'vue'
import { timeFormatter } from '@/utils/format'
import VideoControlSpeed from './VideoControlSpeed.vue'

const props = defineProps<{
  videoMeta: HTMLVideoElement
  duration: number,
  currentTime: number
}>()

let playing = inject('playing')
type updatePlayingFunc = (val: boolean) => void
const updatePlaying = inject('updatePlaying') as updatePlayingFunc

function updatePlay() {  
  updatePlaying(!(playing as Ref).value)
}

</script>

<template>
  <div class="video-control">
    <div class="video-control-play">
      <svg-icon 
        :icon="playing ? 'pause' : 'card-play'" 
        size="24"
        @click="updatePlay"
      />
      <div class="video-time">
        <span class="video-current-time">{{ timeFormatter(currentTime * 1000) }}</span>
        <span>/</span>
        <span 
          class="video-duration"
          v-if="videoMeta.duration"
        >
          {{ timeFormatter(duration * 1000) }}
        </span>
      </div>
    </div>
    <div class="video-control-menu">
      <video-control-speed class="menu-item" />
      <div class="menu-item">音量</div>
      <div class="menu-item">设置</div>
      <div class="menu-item">画中画</div>
      <div class="menu-item">全屏</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-control {
  position: absolute;
  bottom: 0;
  left: 0;
  @include basicFlexBox();
  width: 100%;
  height: 40px;
  padding: 0 10px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
  color: #fff;
  box-sizing: border-box;
  .video-control-play {
    @include basicFlexBox();
    .svg-icon {
      cursor: pointer;
    }
    .video-time {
      margin-left: 10px;
      font-size: 14px;
      span {
        margin: 0 3px;
      }
    }
  }
  .video-control-menu {
    @include basicFlexBox();
    height: 100%;
    .menu-item {
      width: 48px;
      font-size: 14px;
    }
  }
}
</style>