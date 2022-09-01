import request from './request'
import type { SearchResult } from './type'

/**
 * @description 通过关键词搜索
 * @param {string} keywords
 * @return
 */
export const getSearchResult = (keywords: string, limit=30, offset=0, type=1) => {
  return request.get<any, ResObj<SearchResult>>(
    '/search', 
    { 
      params: { 
        keywords, 
        limit,
        offset,
        type
      } 
    }
  )
}