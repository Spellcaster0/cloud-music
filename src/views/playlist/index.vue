<template>
  <div class="playlist-container">
    <Detail v-if="playlistDetail?.coverImgUrl" :detail="(playlistDetail as PlaylistDetail)" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Detail from './components/Detail.vue'
import { useRoute } from 'vue-router'
import { getPlaylistDetailApi, getPlaylistApi } from '@/service/playlist'
import type { PlaylistDetail } from '@/service/type'

const route = useRoute()

let playlistDetail = ref<PlaylistDetail>()

getPlaylistDetailApi(parseInt(route.query.id as string)).then(res => {
  playlistDetail.value = res.playlist
  
})
</script>

<style lang="scss" scoped>

</style>