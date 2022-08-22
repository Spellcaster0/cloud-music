import request from './request'

/**
 * @description 获取用户歌单
 * @param {number} uid
 * @return
 */
export const getUserPlaylist = (uid: number) => {
  return request.post<any, ResList<{ id: number, name: string, userId: number }>>(
    '/user/playlist',
    { uid }
  )
}