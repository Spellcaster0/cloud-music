<template>
  <div 
    class="playlist-card"
    :style="{ width: size }"
  >
    <el-image :src="pic" fit="cover" />
    <div class="playlist-name">{{ name }}</div>
    <div class="playlist-count">
      <svg-icon icon="card-play-count" size="14" color="#f2f2f2" />
      <span>{{ numFormatter(playCount) }}</span>
    </div>
    <div class="playlist-play">
      <svg-icon icon="card-play" size="16" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { numFormatter } from '@/utils/format'

interface Props {
  size?: string
  id?: number,
  pic?: string,
  name?: string,
  playCount?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: '160px',
  pic: 'https://p2.music.126.net/XHPUPIqc3arcAVWW8_oyrw==/109951164675908812.jpg',
  name: '温柔晚安曲 | 我想在梦里飞向宇宙的另一边',
  playCount: 10203502
})

</script>

<style lang="scss" scoped>
.playlist-card {
  position: relative;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover .playlist-play {
    opacity: 1;
  }
  .el-image {
    width: 100%;
    border-radius: 6px;
  }
  .playlist-name {
    height: 40px;
    font-size: 16px;
    line-height: 20px;
    // 多行文本溢出显示省略号
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .playlist-count {
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: 12px;
    color: #f2f2f2;
    .svg-icon {
      vertical-align: -0.2em;
    }
  }
  .playlist-play {
    position: absolute;
    bottom: 54px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #f2f2f2;
    opacity: 0;
    transition: opacity 0.5s ease;
    .svg-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-46%, -50%);
      color: $themeColor;
    }
  }
}
</style>