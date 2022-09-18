<template>
  <div class="found-container">
    <Menu />
    <el-scrollbar :height="scrollHeight">
      <div class="found-content">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </el-scrollbar>

  </div>
</template>

<script setup lang="ts">
import Menu from './components/Menu.vue'

const scrollHeight = window.innerHeight - 55 - 36 - 70 -16
</script>

<style lang="scss" scoped>
.found-container {
  overflow: hidden;
  padding: $contentPaddingTop 0 0 $contentPaddingLeft;
  .found-content {
    margin-top: 20px;
    padding-right: $contentPaddingLeft;
    box-sizing: border-box;
    overflow: hidden;
  }
}
</style>