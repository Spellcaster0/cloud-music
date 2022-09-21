<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import VideoCanvas from './VideoCanvas.vue'
import VideoControl from './VideoControl.vue'
import VideoProgress from './VideoProgress.vue'
import throttle from '@/utils/throttle'

interface PropsType {
  videoUrl?: string,  
}

const props = withDefaults(defineProps<PropsType>(), {
  videoUrl: 'http://vodkgeyttp9.vod.126.net/vodkgeyttp8/FTVnOhhk_1583247849_uhd.mp4?ts=1663593614&rid=858E40B214B9470577BAE4C4309AD499&rl=3&rs=lApIVpjISJIlrdsTwfBtyKZtVRCsFnPA&sign=79183f86cdea9108629d1c9cdf48943e&ext=WqxbSeFac3H%2B%2FaQ%2FzliaDllNtD%2FN5Jz%2FrXysZXBt1foQD%2BafO82B9aY98s7RMMT0zGir1aS6N47pYlJzXszp9MWkSSVXA6V9qEE5pPRBop8378YMGJAVaJNedgOSibGP2datH9585QhrDK2Fr7OQl1i6GFEjNMs8xCbMOyfs%2Fg%2FTu2z3JSAt72FzvKofZUQ4TNmwAOSBb5Mlw1ZKye2brEUOVd6pFLlYXEx4x1BoJBqZv4idejl0kWsfuZKPNb4H'
})

let playing = ref(true)
const updatePlaying = (val: boolean) => playing.value = val
provide('playing', playing)
provide('updatePlaying', updatePlaying)

const videoPlayer = ref<HTMLElement>()
const videoMeta = ref<HTMLVideoElement>()

const duration = ref<number>(0)
const currentTime = ref<number>(0)
const buffered = ref(0)

const setCurrentTime = (val: number) => {
  videoMeta.value!.currentTime = val
}
const setPlayRate = (val: number) => videoMeta.value!.playbackRate = val
provide('setPlayRate', setPlayRate)

onMounted(() => {
  videoPlayer.value!.style.height = videoPlayer.value!.offsetWidth / 16 * 9 + 'px'
  if (videoMeta.value instanceof HTMLVideoElement) {
    videoMeta.value.addEventListener('canplay', () => {
      duration.value = videoMeta.value!.duration
    })
    videoMeta.value.addEventListener('timeupdate', throttle(() => {
      currentTime.value = videoMeta.value!.currentTime
      buffered.value = videoMeta.value!.buffered.end(0)
      
    }, 16))
  }

})

</script>

<template>
  <div class="video-player" ref="videoPlayer">
    <video-canvas 
      v-if="typeof videoMeta !== 'undefined'" 
      :video-meta="videoMeta!"
      :width="videoPlayer!.offsetWidth" 
    />

    <video-progress 
      v-if="typeof videoMeta !== 'undefined'" 
      :duration="duration"
      :current-time="currentTime"
      :buffered="buffered"
      @set-current-time="setCurrentTime"
    />
    <video-control 
      v-if="typeof videoMeta !== 'undefined'" 
      :video-meta="videoMeta"
      :duration="duration"
      :current-time="currentTime"
    />

    <video 
      class="video-meta"
      :src="videoUrl" 
      autoplay
      controls
      ref="videoMeta"
      @play="playing = true"
      @pause="playing = false"
    ></video>
  </div>
</template>

<style lang="scss" scoped>
.video-player {
  position: relative;
  width: 500px;
  overflow: hidden;
  .video-meta {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    z-index: 1;
  }
  .video-progress {
    position: absolute;
    left: 0;
    bottom: 36px;
  }
}
</style>