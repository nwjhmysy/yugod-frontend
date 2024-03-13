import type { LOCALES } from '@/constants'
import { info_zh } from './info_zh'
import type { Info } from './type'
import { info_ja } from './info_ja'

export const info: Record<LOCALES, Info> = {
  zh: info_zh,
  ja: info_ja
}
