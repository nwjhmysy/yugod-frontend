import type { LOCALES } from '@/constants'
import type { HomeContent } from './type'
import { home_zh } from './home_zh'
import { home_ja } from './home_ja'

const home: Record<LOCALES, HomeContent> = {
  zh: home_zh,
  ja: home_ja
}

export default home
