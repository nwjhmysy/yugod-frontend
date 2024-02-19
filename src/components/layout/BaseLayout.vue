<script setup lang="ts">
import type { LOCALES } from '@/constants'
import { browserLocale, useLocale } from '@/hooks/useLocale'
import { provide, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TurnLangButton from '../atoms/TurnLangButton.vue'

const router = useRouter()
const route = useRoute()
// 切换路由时,更新 lang
const { lang, updateLocale } = useLocale(
  (route.params['lang'] as LOCALES | undefined) || browserLocale()
)

// 改变语言 lang 时,改变路由
watch(lang, (val) => {
  router.push({ params: { lang: val } })
})

provide('lang', lang)
provide('updateLocale', updateLocale)
</script>

<template>
  <!-- nav -->
  <div>
    <nav>
      <button class="p-2 bg-cyan-700">
        <router-link to="/"> home </router-link>
      </button>
      <button class="p-2 bg-fuchsia-600">
        <router-link to="/about"> about </router-link>
      </button>
    </nav>
  </div>
  <!-- body -->
  <div>
    <router-view />
  </div>
  <!-- footer -->
  <div></div>
  <TurnLangButton />
</template>

<style scoped></style>
