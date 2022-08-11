import request from './request'

// 获取轮播图
export const getBanner = () => {
  return request.get<any, ResBanner<Banner>>('/banner')
}