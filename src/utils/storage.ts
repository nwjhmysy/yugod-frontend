import { STORAGE } from '@/constants'

// 存放 token
export const setTokenStorage = (token: string) => {
  localStorage.setItem(STORAGE.ACCESS_TOKEN, token)
}

// 获取 token
export const getTokenStorage = () => {
  return localStorage.getItem(STORAGE.ACCESS_TOKEN)
}

// 移除 token
export const clearTokenStorage = () => {
  localStorage.removeItem(STORAGE.ACCESS_TOKEN)
}
