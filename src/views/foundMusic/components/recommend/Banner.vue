<template>
  <el-carousel
    class="banner-container"
    type="card" 
    height="200px"
    :interval="4000"
    ref="carousel"
  >
    <el-carousel-item v-for="item in banners" :key="item.targetId">
        <el-image :src="item.imageUrl" fit="cover" />
    </el-carousel-item>

  </el-carousel>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { ElCarousel } from 'element-plus'

interface Banner {
  imageUrl: string,
  targetId: number
}

const props = defineProps<{
  banners: Banner[]
}>()

const carousel = ref<typeof ElCarousel>()

onMounted(() => {
  carousel.value!.setActiveItem(0)
})

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