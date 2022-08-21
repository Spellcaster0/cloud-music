import request from './request'
import type { Song, PlaylistDetail } from './type'

/**
 * @description 获取歌单详情
 * @param {number} id
 */
// 只能用get方法, 网易云的接口使用post请求加上时间戳, 还是会缓存...
export const getPlaylistDetailApi = (id: number) => {
  return request.get<any, ResObj<PlaylistDetail>>(
    '/playlist/detail',
    { 
      params: {
        id, 
        timestamp: Date.now() 
      }
    }
  )
}

/**
 * @description 获取歌单所有歌曲
 * @param {number} id
 * @param {number} limit
 * @param {number} offset
 * @return playlist
 */
export const getPlaylistApi = (id: number, limit?: number, offset?: number) => {
  return request.get<any, ResList<Song>>(
    '/playlist/track/all',
    {
      params: {
        id,
        limit,
        offset,
        timestamp: Date.now() 
      }
    }
  )
}