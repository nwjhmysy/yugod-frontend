export enum LOCALES {
  ZH = 'zh',
  JA = 'ja'
}
export const DefaultLang = LOCALES.ZH

export enum STORAGE {
  ACCESS_TOKEN = 'access_token'
}
// 验证用户名和密码
export const REG_NAME_PASSWORD = /^[a-zA-Z0-9_@&]{8,}$/
// 验证邮箱
export const REG_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+. [a-zA-Z]{2,}$/
