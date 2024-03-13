import type { LOCALES } from '@/constants'
import type { Catalogue } from './type'
import { cata_zh } from './cata_zh'
import { cata_ja } from './cata_ja'

export const cata: Record<LOCALES, Catalogue[]> = {
  zh: cata_zh,
  ja: cata_ja
}

export const title: Record<LOCALES, string> = {
  zh: '目录',
  ja: '目次'
}
