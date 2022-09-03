<template>
  <div class="footer-container">
    <Detail />
    <Play :current-time="currentTime" :duration="audio?.duration" @time-change="timeChange" />
    <Option />
    <audio 
      :src="`https://music.163.com/song/media/outer/url?id=${currentSong.id}.mp3`" 
      ref="audio"
      :autoplay="autoplay"
      @timeupdate="timeUpdate"
      @ended="end"
    ></audio>
  </div>
</template>

<script setup lang="ts">
import Detail from './Detail.vue'
import Play from './Play.vue'
import Option from './Option.vue'
import { usePlaylistStore } from '@/store/playlist'
import { useSongStore } from '@/store/song'
import { storeToRefs } from 'pinia'
import { ref, watch, onMounted } from 'vue'

const playlistStore = usePlaylistStore()
const { currentSong, playing } = storeToRefs(playlistStore)

const songStore = useSongStore()
// 初始化歌词
onMounted(() => {
  songStore.setLyricList()
})

// 监听歌曲变化
watch([() => playlistStore.playIndex, () => playlistStore.playlistId], () => {  
  songStore.setLyricList()
})

const audio = ref<HTMLAudioElement>()
const autoplay = ref(false)
const currentTime = ref(0)


// 监听播放状态
watch(playing, (newVal) => {  
  if (!autoplay.value) {
    autoplay.value = true
  }
  if (newVal) {
    audio?.value?.play()
  } else {
    audio?.value?.pause()
  }
})

// 监听播放进度
const timeUpdate = () => {
  currentTime.value = audio.value?.currentTime as number
  songStore.currentTime = (audio.value?.currentTime as number) * 1000
}

const timeChange = (time: number) => {
  audio.value!.currentTime = time
}
// 播放结束, 继续播放下一首
const end = () => {
  if (playlistStore.playIndex === playlistStore.playlist.length - 1) {
    playlistStore.playIndex = 0
  } else {
    playlistStore.playIndex += 1
  }
}
</script>

<style lang="scss" scoped>
.footer-container {
  @include basicFlexBox();
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>