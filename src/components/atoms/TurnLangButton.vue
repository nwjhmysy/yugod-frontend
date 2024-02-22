<script setup lang="ts">
import { LOCALES } from '@/constants'
import { useLangStore } from '@/stores/lang'
import { storeToRefs } from 'pinia'

const { lang } = storeToRefs(useLangStore())
const { setLangZh, setLangJa } = useLangStore()
</script>
<template>
  <div
    class="w-12 h-12 text-center fixed top-32 right-[50%] translate-x-[50%] bg-cyan-200 cursor-pointer"
    @click="
      () => {
        if (lang === LOCALES.JA) {
          setLangZh()
          return
        }
        if (lang === LOCALES.ZH) {
          setLangJa()
          return
        }
      }
    "
  >
    {{ lang === LOCALES.ZH ? '切换语言' : '切り替える' }}
  </div>
</template>

<style scoped></style>
