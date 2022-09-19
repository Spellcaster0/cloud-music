<script setup lang="ts">
import { ref } from 'vue'
import { numFormatter, timeFormatter } from '@/utils/format'
import { useRouter } from 'vue-router'

const router = useRouter()

interface PropsType {
  id: string,
  cover: string,
  previewUrl?: string,
  duration?: number,
  playCount: number,
  name: string,
  creator: string,
  creatorId: number
}

const props = withDefaults(defineProps<PropsType>(), {
  id: 'A0B907997CBAE20928D475D9E420FC6F',
  cover: 'https://p1.music.126.net/9VTMWkeciauFpp0nK02Eqw==/109951163573152225.jpg',
  playCount: 2543840,
  name: '宝宝巴士儿歌-洗手歌',
  creator: '宝宝巴士儿歌-故事',
  creatorId: 287561901
})

const showPreview = ref(false)

const pushVideo = () => router.push({ path: '/videoplay', query: { id: props.id } })
</script>

<template>
  <div class="video-card">
    <div 
      class="video-card-img" 
      @mouseover="showPreview = true"
      @mouseleave="showPreview = false"
      @click="pushVideo"
    >
      <el-image class="video-cover" :src="cover" fit="cover" />
      <div 
        class="play-count" 
        v-if="typeof playCount !== 'undefined'">
        <svg-icon icon="card-play-count" color="#ffffff" />
        {{ numFormatter(playCount) }}
      </div>
      <div 
        class="video-duration" 
        v-if="typeof duration !== 'undefined'">
        {{ timeFormatter(duration) }}
      </div>
      <el-image
        class="preview" 
        v-if="previewUrl !== null && showPreview"
        fit="cover"
        :src="previewUrl"
      />
    </div>
    <h3 class="video-title" @click="pushVideo">{{ name }}</h3>
    <p class="video-creator">by <span>{{ creator }}</span></p>
  </div>
</template>

<style lang="scss" scoped>
.video-card {
  width: 250px;
  margin-bottom: 24px;
  .video-card-img {
    position: relative;
    width: 100%;
    height: calc(250px / 16 * 9);
    overflow: hidden;
    border-radius: 5px;
    cursor: pointer;
    .video-cover {
      width: 100%;
      border-radius: 5px;
    }
    .play-count {
      position: absolute;
      top: 5px;
      right: 5px;
      color: #fff;
      font-size: 12px;
    }
    .video-duration {
      position: absolute;
      bottom: 5px;
      right: 5px;
      color: #fff;
      font-size: 12px;
    }
    .preview {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      border-radius: 5px;
    }
  }
  .video-title {
    margin: 8px 0 5px;
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .video-creator {
    margin: 0;
    font-size: 14px;
    color: #c2c2c2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &>span {
      cursor: pointer;
      &:hover {
        color: #a2a2a2;
      }
    }
  }
}
</style>