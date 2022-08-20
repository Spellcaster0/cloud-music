<template>
  <div class="song-container">
    <div class="song-header">
      <svg-icon icon="arrow-down" />
    </div>
    <div class="song-detail"></div>
    <div class="song-comment"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.song-container {
  @include basicFlexBox($justifyContent: flex-start);
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: linear-gradient(#f2f2f2, #fff);
}
</style>