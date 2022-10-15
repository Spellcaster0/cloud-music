<template>
  <div class="aside-container">
    <!-- default-active设置为根据当前路由变化，解决不使用点击菜单跳转导致菜单样式不变化的问题 -->
    <el-menu
      :default-active="'/' + $route.path.split('/')[1]"
      class="aside-menu"
      :router="true"
    >
      <el-menu-item index="/foundmusic">
        <span>发现音乐</span>
      </el-menu-item>
      <el-menu-item index="/video">
        <span>视频</span>
      </el-menu-item>
      <template v-if="userStore.playlist[0].id !== 0">
        <el-menu-item
          v-for="item in userStore.playlist"
          :key="item.id"
          :index="`/playlist?id=${item.id}`"
        >
          <div>{{ item.name }}</div>
        </el-menu-item>
      </template>
      
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { getUserPlaylist } from '@/service/user'
import { useUserStore } from '@/store/user'
import { onMounted } from 'vue'

const userStore = useUserStore()

onMounted(async() => {
  if (userStore.profile) {
    const res = await getUserPlaylist(userStore.profile.userId)
    userStore.playlist = res.playlist
  }
})

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
      div {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
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