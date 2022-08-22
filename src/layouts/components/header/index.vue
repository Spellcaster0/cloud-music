<template>
  <div class="header-container">
    <div class="logo" @click="$router.push('/')">
      <svg-icon icon="logo" size="36" color="pink" />
      <span>music</span>
    </div>
    
    <div class="menu">
      <div class="guide">
        <el-button :icon="ArrowLeft" size="small" circle @click="$router.go(-1)" />
        <el-button :icon="ArrowRight" size="small" circle @click="$router.go(1)" />
      </div>
      <div class="search">
        <el-input
          v-model="searchContent"
          class="w-50 m-2"
          size="large"
          placeholder="搜索"
          :prefix-icon="Search"
        />
      </div>
      <div class="setting">
        <el-icon><Setting /></el-icon>
        <div 
          class="user-login" 
          v-if="userStore.token === null"
          @click="appStore.showLoginBox = true"
        >
          登录
        </div>
        <div class="user" v-else>
          <el-avatar :size="36" :src="userStore.profile.avatarUrl" />
          <span>{{ userStore.profile.nickname }}</span>
          <el-icon><CaretBottom /></el-icon>
        </div>
      </div>
    </div>

    <!-- 登录框 -->
    <LoginBox v-if="appStore.showLoginBox" />

  </div>
</template>

<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  Search,
  Setting,
  CaretBottom
} from '@element-plus/icons-vue'
import LoginBox from './LoginBox.vue'
import { useUserStore } from '@/store/user'
import { useAppStore } from '@/store/app'
import { ref } from 'vue'

const userStore = useUserStore()
const appStore = useAppStore()

let searchContent = ref('')

</script>

<style lang="scss" scoped>
.header-container {
  @include basicFlexBox();
  width: 100%;
  height: 100%;
  .logo {
    width: 140px;
    height: 100%;
    font-size: 24px;
    line-height: 55px;
    color: $themeColor;
    cursor: pointer;
    .svg-icon {
      margin-right: 5px;
      vertical-align: -0.25em;
    }
  }
  .menu {
    @include basicFlexBox();
    width: calc(100% - 260px + 24px);
    height: 100%;
    .guide {
      :deep(.el-button):hover,
      :deep(.el-button):focus {
        background-color: #fff;
        border-color: #dcdfe6;
        .el-icon {
          color: #606266;
        }
      }
    }
    .search {
      width: 280px;
      :deep(.el-input) {
        .is-focus {
          box-shadow:  0 0 0 1px var(--el-input-hover-border-color) inset;
        }
        .el-input__wrapper {
          border-radius: 20px;
        }
      }
    }
    .setting {
      @include basicFlexBox();
      width: 160px;
      height: 100%;
      .user-login {
        width: 36px;
        height: 36px;
        background-color: #f2f2f2;
        border-radius: 18px;
        font-size: 14px;
        text-align: center;
        line-height: 36px;
        color: $themeColor;
        cursor: pointer;
      } 
      .user {
        @include basicFlexBox();
        cursor: pointer;
        .el-avatar {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>