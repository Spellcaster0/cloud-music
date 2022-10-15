<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store/user'
import { getCodeApi } from '@/service/login'

const userStore = useUserStore()

const formRef = ref<FormInstance>()

const loginForm = reactive({
  phone: '',
  code: '',
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
  code: [
    { 
      required: true, 
      message: '请输入验证码', 
      trigger: 'blur' 
    }
  ],
})

const isSent = ref(false)
const isSentTime = ref(60)

const getCode = () => {
  getCodeApi(+loginForm.phone)
  isSent.value = true
  let timer = setInterval(() => {
    isSentTime.value--
    if (isSentTime.value < 0) {
      isSent.value = false
      isSentTime.value = 60
      clearInterval(timer)
    }
  }, 1000)
}

const submit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      userStore.loginPhone(+loginForm.phone, '', +loginForm.code)
      ElMessage({
        message: '登录成功',
        type: 'success'
      })
    } else {
      ElMessage({
        message: '账号密码格式错误',
        type: 'error'
      })
    }
  })
}
</script>

<template>
  <el-form
    ref="formRef"
    :model="loginForm"
    :rules="rules"
    class="login-code"
  >
    <el-form-item prop="phone" :rules="rules.phone">
      <el-input v-model.number="loginForm.phone" type="text" placeholder="手机号" />
    </el-form-item>
    <el-form-item prop="code" :rules="rules.code">
      <el-input v-model="loginForm.code" type="text" placeholder="验证码" />
      <el-button 
        type="primary" 
        :disabled="isSent"
        @click="getCode"
      >
        {{ isSent ? isSentTime + 's' : '获取验证码' }}
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button 
        type="primary"
        @click="submit(formRef)"
      >登录</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
.login-code {
  .el-form-item {
    margin-bottom: 24px;
    &:nth-child(2) {
      margin-bottom: 54px;
      :deep(.el-form-item__content) {
        justify-content: space-between;
      }
      .el-input {
        width: 58%;
      }
      .el-button {
        width: 36%;
      }
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