<script setup lang="ts">
import { LOCALES } from '@/constants'
import { computed } from 'vue'
import HOME_VALUE from '@/model/home'
import { storeToRefs } from 'pinia'
import { useLangStore } from '@/stores/lang'

const { lang } = storeToRefs(useLangStore())
const { setLangZh, setLangJa } = useLangStore()
const data = computed(() => {
  const key = lang?.value || LOCALES.ZH
  return HOME_VALUE[key]
})
</script>

<template>
  <button
    class="p-4 bg-gray-500"
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
    切换语言
  </button>
  <h1>{{ data.header }}</h1>
  <br />
  <strong>{{ data.main.title }}</strong>
  <ul>
    <li
      v-for="(value, index) in data.main.list"
      :key="index"
      :class="['text-base', `text-[#4592c4]`]"
    >
      {{ value }}
    </li>
  </ul>
  <template v-for="(value, index) in data.content" :key="index">
    <br />
    <p class="break-all break-words">
      <span>{{ value.descript }}</span>
      <a class="hover:text-orange-600" :href="value.link" target="_blank">{{ value.link }}</a>
    </p>
  </template>
  <p v-for="index in 30" :key="index">cfedwv</p>
</template>
