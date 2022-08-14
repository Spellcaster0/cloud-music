<template>
  <div class="login-container" @click="closeLoginBox">
    <div class="login-box" @click.stop>
      <div class="login-header">
        <span>music</span>
        <el-icon @click="closeLoginBox"><Close /></el-icon>
      </div>
      <div class="login-menu clearFix">
        <div 
          class="login-menu-item fl"
          v-for="item in menuList"
          :key="item.name"
          :class="{ 'is-active': item.active }"
          @click="changeLogin(item.name)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="login-form">
        <component :is="loginComponent"></component>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Close
} from '@element-plus/icons-vue'
import LoginPassword from './LoginPassword.vue'
import LoginCode from './LoginCode.vue'
import { reactive, shallowRef } from 'vue'

const emit = defineEmits(['closeLoginBox'])

const closeLoginBox = () => emit('closeLoginBox')

// 动态登录方式组件
let loginComponent = shallowRef(LoginPassword)

// 登录方式列表
const menuList = reactive([
  { name: '密码登录', active: true, component: LoginPassword },
  { name: '验证码登录', active: false, component: LoginCode }
])
const changeLogin = (name: string) => {
  menuList.forEach(item => {
    if (item.name === name) {
      item.active = true
      loginComponent.value = item.component
    } else {
      item.active = false
    }
  })
}


</script>

<style lang="scss" scoped>
.login-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  min-width: 800px;
  min-height: 500px;
  background-color: rgba(0, 0, 0, 0.65);
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 340px;
    background-color: #fff;
    border-radius: 6px;
    .login-header {
      @include basicFlexBox();
      padding: 5px 10px;
      font-size: 24px;
      color: $themeColor;
      .el-icon {
        color: #a2a2a2;
        cursor: pointer;
      }
    }
    .login-menu {
      margin-top: 30px;
      padding: 0 10px;
      .login-menu-item {
        margin: 0 10px;
        padding: 5px 0;
        cursor: pointer;
      }
      .is-active {
        font-weight: 700;
        border-bottom: 2px solid $themeColor;
      }
    }
    .login-form {
      margin-top: 20px;
      padding: 20px;
    }
  }
}

</style>