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
