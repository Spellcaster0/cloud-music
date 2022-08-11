<template>
  <el-carousel
    class="banner-container"
    type="card" 
    height="200px"
    :autoplay="false" 
  >
    <el-carousel-item v-for="item in banners" :key="item.targetId">
        <el-image :src="item.imageUrl" fit="cover" />
    </el-carousel-item>

  </el-carousel>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Banner {
  imageUrl: string,
  targetId: number
}

const props = defineProps<{
  banners: Banner[]
}>()

console.log(props.banners)

</script>

<style lang="scss" scoped>
.banner-container {
  .el-carousel__item--card {
    background-color: #666;
    border-radius: 10px;
    .el-image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>