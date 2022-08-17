<template>
  <div class="app-container">
    <div class="app-header">
      <Header />
    </div>
    <div class="app-main clearFix">
      <div class="app-aside fl">
        <Aside />
      </div>
      <div class="app-content fl">
        <router-view />
      </div>
    </div>
    <div class="app-footer"></div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/header/index.vue'
import Aside from './components/aside/index.vue'

</script>

<style lang="scss" scoped>
.app-container {
  @include basicFlexBox();
  flex-direction: column;
  width: 100%;
  height: 100vh;
  min-width: 800px;
  min-height: 500px;
  max-height: 100vh;
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
    background: #fff;
    .app-aside {
      width: 260px;
      height: 100%;
      padding: 10px;
      border-right: 1px solid $borderColor;
      background: #fff;
      box-sizing: border-box;
    }
    .app-content {
      width: calc(100% - 260px);
      height: 100%;
      background: #fff;
      box-sizing: border-box;
    }
  }
  .app-footer {
    width: 100%;
    height: 70px;
    background: hotpink;
  }
}
</style>