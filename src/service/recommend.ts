import request from './request'

// 获取轮播图
export const getBanner = () => {
  return request.get<any, ResList<Banner>>('/banner')
}

/**
 * @description 获取推荐歌单
 * @param {number} limit
 */
export const getPersonalPlaylist = (limit = 10) => {
  return request.post<any, ResList<Playlist>>('/personalized', { limit })
}