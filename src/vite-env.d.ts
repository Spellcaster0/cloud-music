/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare global {
  interface ResList<T> {
    [propName: string]: T[],
    code: number
  }
  interface ResObj<T> {
    [propName: string]: T,
    code: number
  }
}
export {}