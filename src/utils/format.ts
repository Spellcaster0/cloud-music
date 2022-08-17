/**
 * @description 格式化相关的函数 
 */

import dayjs from 'dayjs'

/**
 * @description 数字格式化
 * @param {number} number
 * @return {string}
 */
export const numFormatter = (number: number): string => {
  if (number >= 100000000) {
    return Math.trunc(number / 100000000) + '亿'
  } else if (number >= 100000) {
    return Math.trunc(number / 10000) + '万'
  } else {
    return number + ''
  }
}

/**
 * @description 日期格式化
 * @param { number } timeStamp
 * @return { string }
 */
export const dateFormatter = (timeStamp: number) => {
  return dayjs(timeStamp).format('YYYY-MM-DD')
}

/**
 * @description 时间格式化
 * @param { number } time(ms)
 * @return { string } mm:ss
 */
export const timeFormatter = (time: number) => {
  // 总的秒数
  const seconds = Math.trunc(time / 1000)
  // 格式化的分
  let m: number | string = Math.trunc(seconds / 60)
  m >= 10 ? m : m = '0' + m
  // 格式化的秒
  let s: number | string = seconds % 60
  s >= 10 ? s : s = '0' + s

  return m + ':' + s
}