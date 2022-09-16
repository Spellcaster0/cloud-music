// [缓动函数](https://easings.net/)

export function linear(x: number): number {
  return x
}

export function easeInOutSine(x: number): number {
  return -(Math.cos(Math.PI * x) - 1) / 2
}

export function easeOutSine(x: number): number {
  return Math.sin((x * Math.PI) / 2)
}
