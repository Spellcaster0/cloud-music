<script setup lang="ts">
import { inject, ref } from 'vue'
import type { Ref } from 'vue'
import { timeFormatter } from '@/utils/format'

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
    <div class="video-control-setting">分辨率/倍速/音量/设置/画中画/全屏</div>
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
  padding: 10px;
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
}
</style>