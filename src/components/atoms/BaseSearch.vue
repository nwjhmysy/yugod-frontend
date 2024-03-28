<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { LOCALES } from '@/constants'
import { useLangStore } from '@/stores/lang'
import { ref, watch } from 'vue'
import searchIcon from '@/assets/images/search_icon.svg'
import { searchMd } from '@/hooks/useSearch'
import { useSearchMdStore } from '@/stores/searchMd'
interface Props {
  class?: string
  inputClass?: string
}
const { moveTo } = useLangStore()
const { lang } = storeToRefs(useLangStore())
const inputText = ref('')
const { changeMds } = useSearchMdStore()
const props = withDefaults(defineProps<Props>(), { class: '' })

watch(inputText, () => {
  const data = searchMd(lang.value, inputText.value.trim())
  changeMds(data)
})
</script>

<template>
  <div
    :class="[
      'w-full flex justify-end rounded-l-lg box-content border-search',
      props.class || 'max-w-[500px] bg-white'
    ]"
  >
    <div class="w-full p-2 box-content">
      <input
        type="text"
        v-model="inputText"
        :placeholder="
          lang === LOCALES.ZH ? '搜索学习笔记 #Enter' : '学習ノートを検索してください #Enter'
        "
        :class="['w-full h-7 border-none outline-none', props.inputClass]"
        @keydown="
          (e) => {
            if (e.code !== 'Enter') return
            moveTo('/search')
          }
        "
      />
    </div>
    <div
      class="min-w-[42px] bg-gray-200 py-2 cursor-pointer flex justify-center"
      @click="moveTo('/search')"
    >
      <img :src="searchIcon" alt="" class="w-8" />
    </div>
  </div>
</template>

<style scoped></style>
