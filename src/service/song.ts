import request from './request'
import type { Lyric, Comment, Song } from './type'

/**
 * @description 获取歌词
 * @param { number } id
 * @return 
 */
export const getLyricApi = (id: number) => {
  return request.get<any, Lyric>(`/lyric?id=${id}&timestamp=${Date.now()}`)
}

/**
 * @description 获取评论
 * @param {number} id
 * @param {number} limit
 * @param {number} offset
 * @return
 */
export const getSongComment = (id: number, limit?: number, offset?: number) => {
  return request.get<any, { code: number, comments: Comment[], total: number }>(
    '/comment/music',
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

/**
 * @description 获取评论
 * @param {number} ids
 * @return
 */
export const getSongDetail = (ids: number) => {
  return request.get<any, ResList<Song>>(
    '/song/detail',
    {
      params: {
        ids
      }
    }
  )
}
