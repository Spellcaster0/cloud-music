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