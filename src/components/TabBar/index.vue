<template>
  <el-menu
    :default-active="defaultActive"
    class="tab-bar"
    mode="horizontal"
    :router="router"
    @select="handle"
  >
    <el-menu-item
      v-for="item in menuList"
      :key="item.index"
      :index="item.index"
    >
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface PropsType {
  menuList: Array<{ name: string, index: string, component?: Component }>,
  defaultActive?: any,
  router?: boolean,
}

const props = withDefaults(defineProps<PropsType>(), {
  menuList: () => [
    {
      name: '个性推荐',
      index: 'recommend'
    },
    {
      name: '歌单',
      index: 'playlist'
    }
  ],
  defaultActive: '',
  router: false
})

const emits = defineEmits(['handleSelect'])
const handle = (index: string) => emits('handleSelect', index)
</script>

<style lang="scss" scoped>
.tab-bar {
  border: none;
  .el-menu-item {
    height: 36px;
    margin: 0 10px;
    padding: 0 2px;
    line-height: 36px;
    font-size: 16px;
    letter-spacing: 1px;
    &:hover,
    &:focus {
      color: #000;
      background-color: #fff;
    }
  }
  .is-active {
    color: #000 !important;
    font-size: 18px;
    font-weight: 700;
    background-color: #fff;
    border-bottom: 2px solid $themeColor !important;
  }
}
</style>