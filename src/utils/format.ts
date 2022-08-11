/**
 * @description 格式化相关的函数 
 */


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
