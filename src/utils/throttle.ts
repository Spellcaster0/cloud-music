/**
 * 节流
 */

// eslint-disable-next-line @typescript-eslint/ban-types
function throttle(fn: Function, wait: number) {
  let timer: any = null

  return function() {
    if (!timer) {
      timer = setTimeout(() => {
        fn()
        timer = null
      }, wait)
    }
  }
}

export default throttle 
