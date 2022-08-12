import request from './request'

// 获取登录状态
export const getLoginStatus = () => {
  return request.get('/login/status')
}