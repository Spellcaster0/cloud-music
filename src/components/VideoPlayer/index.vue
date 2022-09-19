<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import VideoCanvas from './VideoCanvas.vue'
import VideoControl from './VideoControl.vue'

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

onMounted(() => {
  videoPlayer.value!.style.height = videoPlayer.value!.offsetWidth / 16 * 9 + 'px'
})

</script>

<template>
  <div class="video-player" ref="videoPlayer">
    <video-canvas 
      v-if="typeof videoPlayer !== 'undefined'" 
      :videoUrl="videoUrl" 
      :width="videoPlayer!.offsetWidth" 
    />
    
    <video-control />
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
}
</style>