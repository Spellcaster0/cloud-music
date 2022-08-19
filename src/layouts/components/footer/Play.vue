<template>
  <div class="play-container">
    <div class="controls">
      <el-button link >
        <svg-icon icon="list-play" size="14" />
      </el-button>
      <el-button link class="play-step" @click="backward">
        <svg-icon icon="step-backward" size="18" />
      </el-button>
      <el-button circle class="play-button" @click="playChange">
        <svg-icon :icon="playlistStore.playing ? 'pause' : 'card-play'" size="16" />
      </el-button>
      <el-button link class="play-step" @click="forward">
        <svg-icon icon="step-forward" size="18" />
      </el-button>
      <el-button link>
        词
      </el-button>
    </div>
    <div class="progress">
      <span class="currentTime">{{ timeFormatter(currentTimeValue) }}</span>
      <el-slider 
        v-model="currentTimeValue"
        :show-tooltip="false"
        :min="0" 
        :max="typeof duration === 'undefined' ? 1 * 60 * 1000 : duration * 1000"
        @change="sliderChange"
        @input="sliderInput"
      />
      <span class="totalTime">
        {{ typeof duration === 'undefined' ? '' : timeFormatter(duration * 1000) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePlaylistStore } from '@/store/playlist'
import { timeFormatter } from '@/utils/format'

const playlistStore = usePlaylistStore()

const emit = defineEmits(['timeChange'])
const props = defineProps<{
  currentTime: number
  duration: number | undefined
}>()

// 绑定和展示的当前时间, 单位毫秒
const currentTimeValue = ref(props.currentTime)
let timeInterval = setInterval(() => {
  currentTimeValue.value = props.currentTime * 1000
}, 10)

const sliderChange = () => {
  // 滑动结束时, 更改父组件中audio的currentTime
  emit('timeChange', currentTimeValue.value / 1000)
  // 恢复定时器
  timeInterval = setInterval(() => {
    currentTimeValue.value = props.currentTime * 1000
  }, 10)
}
const sliderInput = () => {
  // 拖动滑块时暂时停止侦听
  clearInterval(timeInterval)
}

// 点击播放按钮
const playChange = () => {
  playlistStore.playing = !playlistStore.playing
}
// 上一首
const backward = () => {
  if (playlistStore.playIndex === 0) {
    playlistStore.playIndex = playlistStore.playlist.length - 1
  } else {
    playlistStore.playIndex -= 1
  }
}
// 下一首
const forward = () => {
  if (playlistStore.playIndex === playlistStore.playlist.length - 1) {
    playlistStore.playIndex = 0
  } else {
    playlistStore.playIndex += 1
  }
}
</script>

<style lang="scss" scoped>
.play-container {
  @include basicFlexBox();
  flex-direction: column;
  width: 420px;
  .controls {
    @include basicFlexBox();
    width: 200px;
    .el-button {
      font-size: 12px;
      color: #3b3b3b;
      &:hover {
        color: $themeColor;
      }
    }
    .play-button {
      width: 32px;
      height: 32px;
      background-color: #f7f7f7;
      border: none;
      color: #333;
      &:hover {
        background-color: #f2f2f2;
      }
    }
    .play-step {
      color: #333;
    }
  }
  .progress {
    @include basicFlexBox();
    width: 100%;
    height: 16px;
    span {
      font-size: 12px;
      color: #828282;
    }
    .el-slider {
      height: 20px;
      margin: 0 10px;
      :deep(.el-slider__runway) {
        height: 3px;
        .el-slider__bar {
          height: 100%;
          background-color: $themeColor;
          cursor: auto;
        }
        .el-slider__button-wrapper {
          width: 5px;
          height: 5px;
          top: -10px;
          transform: translateX(-46%);
          opacity: 0;
          cursor: auto;
          .el-slider__button {
            width: 10px;
            height: 10px;
            background-color: $themeColor;
            border: none;
            cursor: auto;
            &:hover {
              transform: scale(1);
            }
          }
        }
      }
      &:hover {
        :deep(.el-slider__runway) {
          height: 4px;
          .el-slider__button-wrapper {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>