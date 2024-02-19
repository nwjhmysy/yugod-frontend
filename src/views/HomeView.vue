<script setup lang="ts">
import { LOCALES } from '@/constants'
import { computed, inject, type Ref } from 'vue'
import HOME_VALUE from '@/model/home'

const lang = inject<Ref<LOCALES>>('lang')

const data = computed(() => {
  const key = lang?.value || LOCALES.ZH
  return HOME_VALUE[key]
})
</script>

<template>
  <h1>{{ data.header }}</h1>
  <template v-for="(value, index) in data.content" :key="index">
    <br />
    <p>
      <span>{{ value.descript }}</span>
      <a class="hover:text-orange-600" :href="value.link" target="_blank">{{ value.link }}</a>
    </p>
  </template>
</template>
