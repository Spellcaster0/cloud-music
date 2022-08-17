<template>
  <div class="detail-container">
    <el-image :src="playlistStore.currentSong.al.picUrl" fit="cover" />
    <div class="detail-text">
      <h3>
        {{ playlistStore.currentSong.name }}
        <span v-if="playlistStore.currentSong.alia.length !== 0">
          (<span v-for="item in playlistStore.currentSong.alia" :key="item">
            {{ item }}
          </span>)
        </span>
      </h3>
      <p>
        <span v-for="item in playlistStore.currentSong.ar" :key="item.id">
          {{ item.name }}
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlaylistStore } from '@/store/playlist'

const playlistStore = usePlaylistStore()

</script>

<style lang="scss" scoped>
.detail-container {
  @include basicFlexBox($justifyContent: flex-start);
  width: 248px;
  .el-image {
    width: 50px;
    height: 50px;
    margin-right: 12px;
    border-radius: 5px;
  }
  .detail-text {
    width: calc(248px - 12px - 50px);
    white-space: nowrap;
    overflow: hidden;
    h3 {
      margin: 0;
      font-size: 18px;
    }
    p {
      
      margin: 0;
    }
  }
}
</style>