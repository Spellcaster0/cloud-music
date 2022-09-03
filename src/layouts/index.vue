<template>
  <div class="app-container" ref="app" @click="appClick($event)" >
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
    <div class="app-footer">
      <Footer />
    </div>
    <!-- 这里使用v-if不行 -->
    <div class="app-song" v-show="show">
      <transition name="drawer">
        <Song v-if="appStore.songShow" />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/header/index.vue'
import Aside from './components/aside/index.vue'
import Footer from './components/footer/index.vue'
import Song from '@/views/song/index.vue'
import { useAppStore } from '@/store/app'
import { ref, watch } from 'vue'

const appStore = useAppStore()
const show = ref(false)
watch(() => appStore.songShow, (newVal) => {
  if (newVal) {
    show.value = true
  } else {
    setTimeout(() => {
      show.value = false
    }, 500)
  }
})

// 点击非搜索盒子区域时, 关闭盒子
const app = ref<HTMLElement>()
const appClick = (e: MouseEvent) => {
  if (appStore.searchBox === HTMLElement.prototype || appStore.searchInput === HTMLElement.prototype) return
  
  if (
    appStore.searchBox.contains(e.target as HTMLElement) ||
      appStore.searchInput.contains(e.target as HTMLElement) 
  ) return
  appStore.showSearchBox = false  
}

</script>

<style>
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.5s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateY(calc(100vh - 70px));
}
</style>
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
    background: #fff;
    border-top: 1px solid $borderColor;
    box-sizing: border-box;
  }
  .app-song {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    z-index: 998;
    overflow: hidden;
  }
}
</style>