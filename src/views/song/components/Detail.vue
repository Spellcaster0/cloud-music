<script setup lang="ts">
import { usePlaylistStore } from '@/store/playlist'
import { storeToRefs } from 'pinia'
import { useSongStore } from '@/store/song'
import { ref, watch } from 'vue'
import throttle from '@/utils/throttle'

const playlistStore = usePlaylistStore()
const { currentSong } = storeToRefs(playlistStore)
const songStore = useSongStore()
const { lyricList, currentTime } = storeToRefs(songStore)

// 歌词容器
const lyricsWrap = ref<HTMLElement>()
// 歌词列表
const pRefs = ref<HTMLElement[]>([])

function linear(x: number): number {
  return x
}
function easeInOutSine(x: number): number {
  return -(Math.cos(Math.PI * x) - 1) / 2
}
function easeOutSine(x: number): number {
  return Math.sin((x * Math.PI) / 2)
}

let flag = true
// 监听歌曲播放, 滚动歌词
watch(() => songStore.currentTime, throttle(() => {
  if (!flag) return

  let activeOffsetTop = 0
  pRefs.value.forEach((item) => {
    if (Array.from(item.classList).includes('lyric-active')) {
      activeOffsetTop = item.offsetTop
      return
    }
  })
  if (lyricsWrap.value instanceof HTMLElement) {
    const end = activeOffsetTop - 320
    const begin = lyricsWrap.value.scrollTop
    const duration = end - begin
    let time = lyricsWrap.value.scrollTop
    const anime = () => {
      flag = false
      if (end > begin) {
        time = Math.min(time + duration / 30, end)
      } else {
        time = Math.max(time + duration / 30, end)
      }
      
      lyricsWrap.value!.scrollTop = linear(time / end) * end
      
      if ((begin < end && time < end) || (begin > end && time > end)) {
        requestAnimationFrame(anime)
      } else {
        flag = true
      }
    }
    anime()
  }
}, 500))

</script>

<template>
  <div class="song-detail">
    <div class="description">
      <h3>{{ currentSong.name }}</h3>
      <p>{{ currentSong.alia.join(' ') }}</p>
      <p>
        <span v-for="item in currentSong.ar.slice(0, -1)" :key="item.id">
          <span>{{ item.name }}</span>/
        </span>
        <span>{{ currentSong.ar.at(-1)?.name }}</span>
        -{{ currentSong.al.name }}</p>
    </div>
    <div class="lyrics-wrap" ref="lyricsWrap">
      <div class="lyrics">
        <p 
          v-for="(item) in lyricList"
          :key="item.time"
          :class="{ 
            'lyric-active': item.time <= currentTime && currentTime < item.next,
            'lyric-long': item.next - item.time >= 5000 
          }"
          ref="pRefs"
        >{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.song-detail {
  @include basicFlexBox();
  flex-direction: column;
  width: 420px;
  height: 100%;
  text-align: center;
  .description {
    margin-bottom: 24px;
    h3 {
      margin: 15px;
      font-size: 24px;
      
    }
    p {
      margin: 6px;
      font-size: 14px;
      color: #a6a6a6;
    }
  }
  .lyrics-wrap {
    width: 100%;
    height: 360px;
    padding: 0 10px;
    overflow-y: scroll;
    box-sizing: border-box;
    &::-webkit-scrollbar {
      width: 6px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #bebebe00;
      border-radius: 3px;
      transition: background-color 0.3s ease;
    }
    &:hover::-webkit-scrollbar-thumb {
      background-color: #bebebe;
    }
    .lyrics {
      margin: 160px auto;
      p {
        color: #5c5b5b;
        margin: 60px 0;
      }
      .lyric-active {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 1px;
        color: #000;
      }
      // 距下一句时间较长
      .lyric-long {
        margin: 32px 0 100px;
      }
    }
    
  }
}
</style>