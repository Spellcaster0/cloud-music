/**
 * 定义响应数据类型
 */

export interface LoginType {
  code: number,
  token: string,
  cookie: string,
  profile: any,
  account: any
}

export interface Song {
  id: number
  name: string
  mv: number                // mv为0是表示没有
  dt: number                // 时长(毫秒)
  // 专辑
  al: {
    id: number
    name: string
    picUrl: string
    [propName: string]: any
  }
  // 作者
  ar: Array<{
    id: number
    name: string
  }>
}

// 歌单详情
export interface PlaylistDetail {
  id: number
  name: string
  tags: string[]            // 标签
  trackCount: number        // 歌曲数
  playCount: number         // 播放量
  subscribed: boolean       // 是否收藏
  subscribedCount: number   // 收藏量
  commentCount: number      // 评论数
  shareCount: number        // 分享量
  coverImgUrl: string       // 封面
  createTime: number        // 时间戳
  description: string       // 简介
  creator: {
    nickname: string        // 作者
    avatarUrl: string       // 头像
  }
}