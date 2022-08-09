<template>
  <div class="aside-container">
    <el-menu
      default-active="/foundmusic"
      class="aside-menu"
      :router="true"
    >
      <el-menu-item index="/foundmusic">
        <span>发现音乐</span>
      </el-menu-item>
      <el-menu-item index="/video">
        <span>视频</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.aside-container {
  width: 100%;
  .el-menu {
    border: none;
    .el-menu-item {
      height: 36px;
      padding: 0 10px;
      margin: 0 0 5px 5px ;
      line-height: 36px;
      font-size: 15px;
      letter-spacing: 1px;
      color: #000;
      border-radius: 5px;
      &:hover {
        background-color: #ececec7d;
      }
    }
    .is-active {
      font-size: 16px;
      font-weight: 700;
      background-color: #ececec7d;
    }
  }
}
</style>