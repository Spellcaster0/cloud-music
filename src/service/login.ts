import request from './request'
import type { LoginType } from './type'

/**
 * @description
 * @param {string} phone
 * @param {string} password
 */
export const loginPhoneApi = (phone: number, password: string) => {
  return request.post<any, LoginType>(
    '/login/cellphone',
    {
      phone,
      password
    }
  )
}