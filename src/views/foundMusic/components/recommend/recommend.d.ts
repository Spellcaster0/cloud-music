declare interface Banner {
  imageUrl: string,
  targetId: number
}

declare interface ResBanner<T> {
  banners: T[]
  code: number
}