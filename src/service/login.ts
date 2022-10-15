import request from './request'
import type { LoginType } from './type'

/**
 * @description
 * @param {string} phone
 * @param {string} password
 */
// export const loginPhoneApi = (phone: number, password: string) => {
//   return request.post<any, LoginType>(
//     '/login/cellphone',
//     {
//       phone,
//       password,
//       timestamp: Date.now()
//     }
//   )
// }
export const loginPhoneApi = (phone: number, password: string, captcha?: number) => {
  if (captcha) {
    return request.get<any, LoginType>(
      '/login/cellphone',
      {
        params: {
          phone,
          password,
          captcha
        }
      }
    )
  }
  return request.get<any, LoginType>(
    '/login/cellphone',
    {
      params: {
        phone,
        password,
      }
    }
  )
}

export const getCodeApi = (phone: number) => {
  return request.get(
    `/captcha/sent?phone=${phone}&timestamp=${Date.now()}`
  )
}
