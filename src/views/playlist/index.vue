<template>
  <div class="playlist-container">
    <Detail />
  </div>
</template>

<script setup lang="ts">
import Detail from './components/Detail.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

route.query.id
</script>

<style lang="scss" scoped>

</style>