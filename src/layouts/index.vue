<template>
  <div class="app-container">
    <div class="app-header">
      <Header />
    </div>
    <div class="app-main clearFix">
      <div class="app-aside fl"></div>
      <div class="app-content fl"></div>
    </div>
    <div class="app-footer"></div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/header/index.vue'

</script>

<style lang="scss" scoped>
.app-container {
  @include basicFlexBox();
  flex-direction: column;
  width: 100%;
  height: 100vh;
  min-width: 800px;
  min-height: 500px;
  background: #eee;
  .app-header {
    width: 100%;
    height: 55px;
    padding: 0 24px;
    border-bottom: 1px solid $borderColor;
    background: #fff;
    box-sizing: border-box;
  }
  .app-main {
    width: 100%;
    flex-grow: 1;
    background: #666;
    .app-aside {
      width: 260px;
      height: 100%;
      background: #95d475;
    }
    .app-content {
      width: calc(100% - 260px);
      height: 100%;
      background: #f3d19e;
    }
  }
  .app-footer {
    width: 100%;
    height: 70px;
    background: hotpink;
  }
}
</style>