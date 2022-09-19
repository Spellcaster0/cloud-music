<script setup lang="ts">
import { ref, onMounted, inject, watch } from 'vue'
import type { Ref } from 'vue'

const props = defineProps<{
  videoUrl: string,
  width: number
}>()

const videoMeta = ref<HTMLVideoElement>()
const videoCanvas = ref<HTMLCanvasElement>()

class VideoClass {
  canvas: HTMLCanvasElement
  videoMeta: HTMLVideoElement
  ctx: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement, videoMeta: HTMLVideoElement) {
    this.canvas = canvas
    this.videoMeta = videoMeta
    this.canvas.width = videoMeta.videoWidth
    this.canvas.height = videoMeta.videoHeight
    this.ctx = this.canvas.getContext('2d')!
  }
  
  drawFrame() {
    this.ctx.drawImage(
      this.videoMeta, 
      0, 
      0, 
      this.canvas.width, 
      this.canvas.height
    )
  }

}

let playing = inject('playing') as Ref

watch(playing, (newVal) => {
  if (newVal)
    videoMeta.value?.play()
  else
    videoMeta.value?.pause()
  
})

function initPlay() {
  const videoClass = new VideoClass(videoCanvas.value!, videoMeta.value!)
  drawVideo()

  function drawVideo() {
    if (playing) videoClass.drawFrame()
    setTimeout(drawVideo, 1000 / 24)
  }

}

const videoCanPlay = () => initPlay()
onMounted(() => {
  videoCanvas.value!.style.width = props.width + 'px'

})
</script>

<template>
  <div class="video">
    <canvas id="video-canvas" ref="videoCanvas" width="320" height="180"></canvas>
    <video 
      class="video-meta"
      :src="videoUrl" 
      autoplay
      controls
      ref="videoMeta"
      @play="playing = true"
      @pause="playing = false"
      @canplay="videoCanPlay"
    ></video>
  </div>
</template>

<style lang="scss" scoped>

</style>