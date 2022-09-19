<script setup lang="ts">
import VideoPlayer from '@/components/VideoPlayer/index.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref, watch, onMounted } from 'vue'
import { getVideoUrl } from '@/service/video'

let scrollHeight = window.innerHeight - 55

const route = useRoute()
const router = useRouter()

let videoUrl = ref<string>('')
onMounted(() => {
  getVideoUrl(route.query.id as string).then(res => {
    videoUrl.value = res.urls[0].url
  })
})

watch(() => route.query.id, (newVal) => {
  getVideoUrl(newVal as string).then(res => {
    videoUrl.value = res.urls[0].url
  })
})

</script>

<template>
  <el-scrollbar class="video-play-scrollbar" :height="scrollHeight">
    <div class="video-play">
      <div class="video-detail">
        <div class="title" @click="router.back()">
          <svg-icon icon="arrow-left" size="24" />
          <span>视频详情</span>
        </div>
        <video-player v-if="videoUrl !== ''" :video-url="videoUrl" />
        <div class="video-info">
          作者
          标题
          发布时间
          标签
          数据
        </div>
        <div class="video-comment">评论</div>
      </div>
      <div class="video-recommend">相关推荐</div>
    </div>

  </el-scrollbar>
</template>

<style lang="scss" scoped>
.video-play {
  @include basicFlexBox($justifyContent: center, $alignItems: flex-start);
  .video-detail {
    width: 650px;
    height: 1000px;
    margin-right: 30px;
    .title {
      height: 48px;
      line-height: 48px;
      cursor: pointer;
      .svg-icon {
        vertical-align: -0.25em;
      }
      span {
        font-size: 18px;
      }
    }
    .video-player {
      width: 100%;
    }
  }
  .video-recommend {
    width: 200px;
    height: 800px;
    background-color: aquamarine;
  }
}
</style>