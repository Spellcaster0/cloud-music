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
  mv: number
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