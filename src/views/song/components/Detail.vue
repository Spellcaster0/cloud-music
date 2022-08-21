<script setup lang="ts">
import { usePlaylistStore } from '@/store/playlist'
import { storeToRefs } from 'pinia'
import { useSongStore } from '@/store/song'
import { ref, watch } from 'vue'

const playlistStore = usePlaylistStore()
const { currentSong } = storeToRefs(playlistStore)
const songStore = useSongStore()
const { lyricList, currentTime } = storeToRefs(songStore)

// 歌词容器
const lyricsWrap = ref<HTMLElement>()
// 歌词列表
const pRefs = ref<HTMLElement[]>([])

// 监听歌曲播放, 滚动歌词
watch(() => songStore.currentTime, () => {  
  let activeOffsetTop = 0
  pRefs.value.forEach((item) => {
    if (Array.from(item.classList).includes('lyric-active')) {
      activeOffsetTop = item.offsetTop
    }
  })
  if (lyricsWrap.value instanceof HTMLElement) {
    lyricsWrap.value.scrollTop = activeOffsetTop - 330
  }
})

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
    .lyrics {
      margin: 160px auto;
      p {
        color: #5c5b5b;
        margin: 32px 0;
      }
      .lyric-active {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 1px;
        color: #000;
      }
      // 距下一句时间较长
      .lyric-long {
        margin: 32px 0 60px;
      }
    }
    
  }
}
</style>