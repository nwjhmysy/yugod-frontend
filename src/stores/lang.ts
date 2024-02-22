import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { LOCALES } from '@/constants'
import { browserLocale } from '@/hooks/useLocale'
import { useRoute, useRouter } from 'vue-router'

export const useLangStore = defineStore('lang', () => {
  const router = useRouter()
  const route = useRoute()
  const lang = ref<LOCALES>(browserLocale())

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

  const moveTo = (path: string) => {
    if (path === route.path) return
    router.push({ path: '/' + lang.value + path })
  }

  return { lang, setLangJa, setLangZh, moveTo }
})
