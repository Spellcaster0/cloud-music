import request from './request'
import type { Lyric } from './type'

/**
 * @description 获取歌词
 * @param { number } id
 * @return 
 */
export const getLyricApi = (id: number) => {
  return request.post<any, Lyric>('/lyric', { id })
}