/**
 * 定义响应数据类型
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ResData<T> {
  data: T,
  code: number
}