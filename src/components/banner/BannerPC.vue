<script setup lang="ts">
import rainLgog from '@/assets/images/rain_logo.svg'
import { GithubOutlined } from '@ant-design/icons-vue'
import { useLangStore } from '@/stores/lang'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { LOCALES } from '@/constants'
import NAVS from '@/model/nav'
import BaseSearch from '@/components/atoms/BaseSearch.vue'

const { moveTo } = useLangStore()
const { lang } = storeToRefs(useLangStore())
const data = computed(() => {
  const key = lang?.value || LOCALES.ZH
  return NAVS[key]
})
</script>
<template>
  <div
    class="w-full h-20 bg-zinc-100 box-border px-8 shadow-down flex justify-between items-center"
  >
    <div class="w-full flex justify-start items-center">
      <div class="flex justify-start items-center mr-3 cursor-pointer" @click="moveTo('/')">
        <img :src="rainLgog" alt="" class="max-w-[60px] h-[60px] mr-2" />
        <span class="whitespace-nowrap text-lg font-bold">YuGod</span>
      </div>
      <div class="w-full m-6 flex justify-start items-center cursor-pointer">
        <div
          v-for="nav in data"
          :key="nav.id"
          class="h-20 min-w-[80px] text-[#fff] box-border px-4 hover:shadow-picker-panel hover:z-10 bg-[#b7b7b7] flex items-center"
          @click="moveTo(nav.navLink)"
        >
          {{ nav.navName }}
        </div>
      </div>
    </div>
    <div class="w-full flex justify-end items-center">
      <BaseSearch />
      <a
        href="https://github.com/nwjhmysy"
        target="_blank"
        class="flex flex-col justify-center ml-5"
      >
        <GithubOutlined class="text-2xl" />
        <strong>GitHub</strong>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.border-search:hover {
  border: 2px solid #4592c4;
}
.border-hover-b:hover {
  box-shadow: 4px 4px 4px 4px white inset;
}
</style>
