<script setup lang="ts">
import { usePlaylistStore } from '@/store/playlist'
import { storeToRefs } from 'pinia'

const playlistStore = usePlaylistStore()
const { currentSong } = storeToRefs(playlistStore)

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
    <div class="lyrics">歌词</div>
  </div>
</template>

<style lang="scss" scoped>
.song-detail {
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
}
</style>