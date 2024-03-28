import type { LOCALES } from '@/constants'
import { cata } from '@/model/catalogue/index'

export interface File {
  name: string
  id: string
  path: string
  descript: string
  unitId: string
}

export const searchMd = (lang: LOCALES, key: string) => {
  const data = cata[lang]
  // 只要有一个字符满足就可以匹配到
  const regex = new RegExp(key, 'i') // 'i'表示不区分大小写
  // 全部的 md 文件
  const allMd: File[] = []

  data.forEach((item) => {
    item.files.forEach((iitem) => {
      allMd.push({ ...iitem, path: item.path + '/' + iitem.path, unitId: item.id })
    })
  })
  if (!key) return []
  return allMd.filter((item) => {
    return regex.test(item.name) || regex.test(item.descript)
  })
}
