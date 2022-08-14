<template>
  <el-form
    ref="formRef"
    :model="loginForm"
    :rules="rules"
    class="login-password"
  >
    <el-form-item prop="phone" :rules="rules.phone">
      <el-input v-model.number="loginForm.phone" type="text" placeholder="手机号" />
    </el-form-item>
    <el-form-item prop="password" :rules="rules.password">
      <el-input v-model="loginForm.password" type="password" placeholder="密码" show-password />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit(formRef)">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const formRef = ref<FormInstance>()

const loginForm = reactive({
  phone: '',
  password: '',
})

const rules = reactive<FormRules>({
  phone: [
    { 
      required: true,
      message: '请输入手机号',
      trigger: 'blur' 
    },
    {
      type: 'number',
      message: '请输入正确的手机号',
      trigger: 'blur',
    }
  ],
  password: [
    { 
      required: true, 
      message: '请输入密码', 
      trigger: 'blur' 
    }
  ],
})

const submit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      userStore.loginPhone(+loginForm.phone, loginForm.password)
    } else {
      ElMessage({
        message: '账号密码格式错误',
        type: 'error'
      })
    }
  })
}
</script>

<style lang="scss" scoped>
.login-password {
  .el-form-item {
    margin-bottom: 24px;
    &:nth-child(2) {
      margin-bottom: 54px;
    }
    &:last-child {
      .el-form-item__content {
        justify-content: center;
        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>