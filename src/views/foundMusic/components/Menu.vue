<template>
  <el-menu
    :default-active="$route.path.split('/')[2]"
    class="found-menu"
    mode="horizontal"
    :router="true"
  >
    <el-menu-item index="recommend">
      <span>个性推荐</span>
    </el-menu-item>
    <el-menu-item index="playlist">
      <span>歌单</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.found-menu {
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