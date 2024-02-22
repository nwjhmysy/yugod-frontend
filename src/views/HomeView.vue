<script setup lang="ts">
import { LOCALES } from '@/constants'
import { computed } from 'vue'
import HOME_VALUE from '@/model/home'
import { storeToRefs } from 'pinia'
import { useLangStore } from '@/stores/lang'

const { lang } = storeToRefs(useLangStore())

const data = computed(() => {
  const key = lang?.value || LOCALES.ZH
  return HOME_VALUE[key]
})
</script>

<template>
  <h2>{{ data.header }}</h2>
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
    <p>
      <span>{{ value.descript }}</span>
      <a class="hover:text-orange-600" :href="value.link" target="_blank">{{ value.link }}</a>
    </p>
  </template>
</template>
