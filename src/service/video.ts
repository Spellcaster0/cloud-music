import request from './request'
import type { VideoCategory, VideoListItem } from './type'

// 获取视频分类
export function getVideoCategory() {
  return request.get<any, ResList<VideoCategory>>('/video/category/list')
}

// 获取视频标签
export function getVideoGroup() {
  return request.get<any, ResList<VideoCategory>>('/video/group/list')
}

export function getVideoList(id: number, offset=0) {
  if (id === 0) 
    return request.get<any, ResList<VideoListItem>>(
      `/video/timeline/all?offset=${offset}`
    )
  else
    return request.get<any, ResList<VideoListItem>>(
      '/video/group',
      {
        params: {
          id,
          offset,
          timestamp: Date.now()
        }
      }
    )
}
