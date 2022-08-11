<template>
  <div class="recommend-container">
    <Banner :banners="banners" />
    <Playlist />
  </div>
</template>

<script setup lang="ts">
import Banner from './Banner.vue'
import Playlist from './Playlist.vue'
import { getBanner } from '@/service/recommend'
import { ref, reactive } from 'vue'

let banners = reactive<Banner[]>([])

getBanner().then(res => {
  banners.push(...res.banners)  
})
</script>

<style lang="scss" scoped>

</style>