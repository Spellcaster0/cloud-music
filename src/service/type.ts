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
  // 别名
  alia: string[]
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
  }>,
  [propName: string]: any
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

// 歌词
export interface Lyric {
  code: number
  lrc: {
    lyric: string
  }
  // 翻译歌词
  tlyric: {
    lyric: string
  }
} 

// 评论
export interface Comment {
  commentId: 5733122034
  content: string
  time: number
  likedCount: number
  timeStr: string
  user: {
    userId: number
    avatarUrl: string,
    nickname: string
  }
  // 回复用户
  beReplied: Array<{
    content: string
    user: {
      userId: number
      nickname: string
    }
  }>
}

// 搜索结果
export interface SearchSong {
    id: number
    name: string
    mvid: number                // mv为0是表示没有
    duration: number                // 时长(毫秒)
    // 别名
    alia: string[]
    // 专辑
    album: {
      id: number
      name: string
      [propName: string]: any
    }
    // 作者
    artists: Array<{
      id: number
      name: string
    }>,
    [propName: string]: any
}

export interface SearchResult {
  songCount: number
  songs: Array<SearchSong>
}

export interface VideoCategory {
  id: number,
  name: string,
  url: null,
  relatedVideoType: string,
  selectTab: boolean,
  abExtInfo: null
}

export interface VideoListItem {
  type: number,
  displayed: boolean,
  alg: string,
  extAlg: null,
  data: {
    coverUrl: string,
    height: number,
    width: number,
    title: string,
    description: string,
    previewUrl: string,
    previewDurationms: number,
    durationms: number,
    playTime: number,
    vid: string,
    videoGroup: Array<{
      id: number,
      name: string,
      alg: null
    }>,
    creator: {
      userId: number,
      nickname: string
    }
  }
}

export interface VideoUrl {
  id: string
  url: string
  size: number
  validityTime: number,
  needPay: boolean
  payInfo: null,
  r: number
}