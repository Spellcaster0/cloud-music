<script setup lang="ts">
import { usePlaylistStore } from '@/store/playlist'
import { storeToRefs } from 'pinia'
import { useSongStore } from '@/store/song'

const playlistStore = usePlaylistStore()
const { currentSong } = storeToRefs(playlistStore)
const songStore = useSongStore()

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
    <el-scrollbar class="lyrics" height="360">
      <p 
        v-for="item in songStore.lyricList"
        :key="item.time"
      >{{ item.text }}</p>
    </el-scrollbar>
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
  .lyrics {
    width: 100%;
    height: 360px;
    overflow: hidden;
    p {
      color: #828282;
      margin: 50px 0;
    }
  }
}
</style>