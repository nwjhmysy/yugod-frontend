import type { LOCALES } from '@/constants'
import type { NavItem } from './type'
import { nav_zh } from './nav_zh'
import { nav_ja } from './nav_ja'

const navs: Record<LOCALES, NavItem[]> = {
  zh: nav_zh,
  ja: nav_ja
}

export default navs
