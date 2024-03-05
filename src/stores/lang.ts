import { onMounted, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { LOCALES } from '@/constants'
import { browserLocale } from '@/hooks/useLocale'
import { useRoute, useRouter } from 'vue-router'

export const useLangStore = defineStore('lang', () => {
  const router = useRouter()
  const route = useRoute()
  const lang = ref<LOCALES>(browserLocale())

  onMounted(() => {
    switch (route.params.lang) {
      case 'zh':
        lang.value = LOCALES.ZH
        break
      case 'ja':
        lang.value = LOCALES.JA
        break
      default:
        lang.value = browserLocale()
        break
    }
  })

  // 改变语言 lang 时,改变路由
  watch(lang, (val) => {
    router.push({ params: { lang: val } })
  })

  const setLangJa = () => {
    lang.value = LOCALES.JA
  }

  const setLangZh = () => {
    lang.value = LOCALES.ZH
  }
  // 切换路由时使用 moveTo 方法
  const moveTo = (path?: string) => {
    if (path === route.path) return
    router.push({ path: '/' + lang.value + path })
  }

  return { lang, setLangJa, setLangZh, moveTo }
})
