<template>
  <div class="recommend-container">
    <Banner :banners="banners" />
    <Playlist :playlist="playlist" />
  </div>
</template>

<script setup lang="ts">
import Banner from './Banner.vue'
import Playlist from './Playlist.vue'
import { getBanner, getPersonalPlaylist } from '@/service/recommend'
import { reactive } from 'vue'

let banners = reactive<Banner[]>([])
let playlist = reactive<Playlist[]>([])

getBanner().then(res => {
  banners.push(...res.banners)  
})

getPersonalPlaylist(9).then(res => {
  playlist.push(...res.result)  
})
</script>

<style lang="scss" scoped>

</style>