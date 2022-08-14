<template>
  <div class="playlist-detail clearFix">
    <el-image class="fl" src="https://p1.music.126.net/uJXp5G8X3Ku55DuYJSJHZg==/109951165899595122.jpg" fit="cover"></el-image>
    <div class="detail-content fl">
      <h2><span>歌单</span>《動く、動く》今天从TA听起|私人雷达</h2>
      <div class="author">作者</div>
      <div class="menu">菜单</div>
      <div class="tag">标签</div>
      <p class="count">播放量</p>
      <p class="description">简介</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.playlist-detail {
  padding: 10px;
  .el-image {
    width: 180px;
    border-radius: 5px;
  }
  .detail-content {
    width: calc(100% - 190px);
    height: 100%;
    margin-left: 10px;
  }
}
</style>