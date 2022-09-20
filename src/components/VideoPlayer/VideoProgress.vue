<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  duration: number
  currentTime: number
  buffered: number
}>()

const emits = defineEmits(['setCurrentTime'])
const setCurrentTime = (val: number) => emits('setCurrentTime', val)

const handleInput = (val: number) => {
  setCurrentTime(val)
}

const videoBuffered = ref<HTMLElement>()
watch(() => props.buffered, (newVal) => {  
  videoBuffered.value!.style.width = newVal / props.duration * 100 + '%'
})

</script>

<template>
  <div class="video-progress">
    <el-slider 
      :model-value="currentTime" 
      :min="0" 
      :max="duration" 
      :step="0.01" 
      :show-tooltip="false"
      @input="handleInput"
    />
    <div class="video-buffered" ref="videoBuffered"></div>
  </div>
</template>

<style lang="scss" scoped>
.video-progress {
  width: 100%;
  overflow: hidden;
  .video-buffered {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 0;
    height: 2px;
    background-color: rgba(255,255,255,0.8);
    z-index: 1;
  }
  :deep(.el-slider) {
    width: 100%;
    height: 10px;
    position: relative;
    z-index: 2;
    .el-slider__runway {
      height: 2px;
      background-color: rgba(255,255,255, 0.3);
      .el-slider__bar {
        height: 2px;
        background-color: $themeColor;
      }
      .el-slider__button-wrapper {
        top: -17px;
        cursor: pointer;
        .el-slider__button {
          width: 0;
          height: 0;
          border: none;
          background-color: $themeColor;
          cursor: pointer;
        }
      }
    }
    &:hover .el-slider__runway {
      height: 4px;
      .el-slider__bar {
        height: 4px;
      }
      .el-slider__button-wrapper {
        top: -16px;
        .el-slider__button {
          width: 8px;
          height: 8px;
        }
      }
    }
    &:hover ~ .video-buffered {
      height: 4px;
    }
    
  }

}
</style>