<script setup lang="ts">
import { userStore } from '@/store/user'
import { onMounted } from 'vue'

const store = userStore()
onMounted((): void => {
  console.log(store.$state.name)
})

</script>

<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
  <div class="userStore">{{ store.$state.name }}</div>
  <svg-icon icon="logo" size="32" color="#e2e2e2" />
</template>

<style lang="scss" scoped>
.userStore {
  width: 100px;
  height: 100px;
  background: #42b883aa;
  &::after {
    content: 'hao';
  }
}
</style>
