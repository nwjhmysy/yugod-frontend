<script setup lang="ts">
import { useLangStore } from '@/stores/lang'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { info } from '@/model/author-info'
interface Props {
  class?: string
}
const props = withDefaults(defineProps<Props>(), { class: '' })
const { lang } = storeToRefs(useLangStore())

const INFO = computed(() => info[lang.value])
</script>

<template>
  <div :class="['w-full bg-white', props.class]">
    <div class="w-full flex items-center space-x-4 mb-2">
      <a-avatar
        size="large"
        :style="{ backgroundColor: '#f56a00', verticalAlign: 'middle' }"
        :gap="10"
        >Yin</a-avatar
      >
      <span>{{ INFO.name }}</span>
    </div>
    <ul class="ml-[56px] break-all break-words space-y-2 text-[#b7b7b7]">
      <li class="text-sm border-b">{{ INFO.qq }}</li>
      <li class="text-sm border-b">{{ INFO.wx }}</li>
      <li class="text-sm border-b">{{ INFO.notice }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
