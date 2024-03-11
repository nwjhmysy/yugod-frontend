<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import useIsSP from '@/hooks/useIsSP'
import { useLangStore } from '@/stores/lang'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import NAV from '@/model/nav'
import rainLgog from '@/assets/images/rain_logo.svg'

const { isSP } = useIsSP(500)
const { lang } = storeToRefs(useLangStore())
const { moveTo } = useLangStore()
const data = computed(() => {
  const key = lang.value
  return NAV[key]
})
</script>

<template>
  <div class="w-full text-center bg-black text-[#ddd] p-8">
    <div
      :class="[
        'w-full flex',
        isSP ? 'flex-col justify-center items-center' : 'justify-between items-start'
      ]"
    >
      <ul :class="['w-full', isSP ? 'space-y-4 mb-6' : 'flex justify-start space-x-4']">
        <li v-for="item in data" :key="item.id" @click="moveTo(item.navLink)">
          {{ item.navName }}
        </li>
      </ul>
      <div>
        <div class="flex justify-start items-center mr-3">
          <img :src="rainLgog" alt="" class="max-w-[60px] h-[60px] mr-2" />
          <span class="whitespace-nowrap text-lg font-bold">YuGod</span>
        </div>
      </div>
    </div>
    <div class="mt-4">中文｜日本語</div>
  </div>
</template>

<style scoped></style>
