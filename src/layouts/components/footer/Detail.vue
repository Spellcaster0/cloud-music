<template>
  <div class="detail-container">
    <div class="image">
      <el-image :src="playlistStore.currentSong.al.picUrl" fit="cover" />
      <svg-icon icon="arrow-up" size="24" color="#cacaca" />
    </div>
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
  .image {
    position: relative;
    width: 50px;
    height: 50px;
    margin-right: 12px;
    cursor: pointer;
    overflow: hidden;
    .svg-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
    .el-image {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
    &:hover {
      .el-image {
        filter: blur(1px) brightness(60%);
      }
      .svg-icon {
        opacity: 1;
      }
    }

  }

  .detail-text {
    width: calc(248px - 12px - 50px);
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 400;
      span {
        color: #666;
      }
    }
    p {
      margin: 5px 0 0 0;
      font-size: 14px;
    }
  }
}
</style>