import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 15000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    ElMessage.error('请求失败！')
    return Promise.reject(new Error(err))
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    if (response.data.code === 200 || response.data.data.code === 200) {
      return response.data
    } else {
      return Promise.reject(new Error('错误！'))
    }
  },
  (err) => {
    ElMessage({
      message: err.response.message || err.response.data.message || err.response.data.msg,
      type: 'error'
    })
    return Promise.reject(err.response)
  }
)

export default service