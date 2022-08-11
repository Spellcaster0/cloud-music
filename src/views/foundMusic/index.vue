<template>
  <div class="found-container">
    <Menu />
    <div class="found-content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from './components/Menu.vue'
</script>

<style lang="scss" scoped>
.found-container {
  .found-content {
    margin-top: 20px;
    padding: 0 12px;
    box-sizing: border-box;
  }
}
</style>