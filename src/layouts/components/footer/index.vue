<template>
  <div class="footer-container">
    <Detail />
    <Play />
    <Option />
  </div>
</template>

<script setup lang="ts">
import Detail from './Detail.vue'
import Play from './Play.vue'
import Option from './Option.vue'


</script>

<style lang="scss" scoped>
.footer-container {
  @include basicFlexBox();
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>