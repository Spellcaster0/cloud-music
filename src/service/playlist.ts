import request from './request'
import type { Song, PlaylistDetail } from './type'

/**
 * @description 获取歌单详情
 * @param {number} id
 */
export const getPlaylistDetailApi = (id: number) => {
  return request.post<any, ResObj<PlaylistDetail>>(
    '/playlist/detail',
    { id }
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
  return request.post<any, ResList<Song>>(
    '/playlist/track/all',
    {
      id,
      limit,
      offset
    }
  )
}