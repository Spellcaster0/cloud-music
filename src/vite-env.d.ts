/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare global {
  interface ResponseSuccess<T = Record<string, unknown>> {
    data: T,
    status: number,
    statusText: string
  }
}
export {}