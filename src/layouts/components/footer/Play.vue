<template>
  <div class="play-container">
    <div class="controls">
      <el-button link >
        <svg-icon icon="list-play" size="14" />
      </el-button>
      <el-button link class="play-step">
        <svg-icon icon="step-backward" size="18" />
      </el-button>
      <el-button circle class="play-button">
        <svg-icon icon="card-play" size="16" />
      </el-button>
      <el-button link class="play-step">
        <svg-icon icon="step-forward" size="18" />
      </el-button>
      <el-button link>
        词
      </el-button>
    </div>
    <div class="progress">
      <span class="currentTime">01:30</span>
      <el-slider 
        v-model="sliderValue"
        :show-tooltip="false"
        :min="0" 
        :max="100"
      />
      <span class="totalTime">02:30</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let sliderValue = ref(0)
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