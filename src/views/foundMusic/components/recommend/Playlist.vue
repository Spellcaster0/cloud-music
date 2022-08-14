<template>
  <div class="playlist-container">
    <router-link class="title" to="playlist">
      <span>推荐歌单</span>
      <el-icon><ArrowRight /></el-icon>
    </router-link>
    <div class="playlist">
      <playlist-card size="18%" />
      <playlist-card 
        size="18%" 
        v-for="item in playlist"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :pic="item.picUrl"
        :play-count="item.playCount"
        @click="$router.push({ path: '/playlist', query: {id: item.id} })"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRight
} from '@element-plus/icons-vue'
import PlaylistCard from '@/components/PlaylistCard/index.vue'

import { getPlaylistApi } from '@/service/playlist'

interface Playlist {
  id: number,
  name: string,
  picUrl: string,
  playCount: number
}

const props = defineProps<{
  playlist: Playlist[]
}>()

</script>

<style lang="scss" scoped>
.playlist-container {
  padding-top: 10px;
  .title {
    font-size: 18px;
    span {
      letter-spacing: 2px;
      &:hover {
        color: #000;
      }
    }
    .el-icon {
      margin-left: 2px;
      vertical-align: -0.1em;
    }
  }
  .playlist {
    @include basicFlexBox();
    flex-wrap: wrap;
    padding: 10px 0;
  }
}
</style>