<script setup lang="ts">
import { LOCALES } from '@/constants'
import { computed } from 'vue'
import HOME_VALUE from '@/model/home'
import { storeToRefs } from 'pinia'
import { useLangStore } from '@/stores/lang'
import goIcon from '@/assets/images/go_icon.png'
import vueIcon from '@/assets/images/vue_icon.svg'
import dockerIcon from '@/assets/images/docker_icon.png'
import useIsSP from '@/hooks/useIsSP'

const { lang } = storeToRefs(useLangStore())
const icons = [vueIcon, goIcon, dockerIcon]
const { isSP } = useIsSP(700)

const data = computed(() => {
  const key = lang?.value || LOCALES.ZH
  return HOME_VALUE[key]
})

</script>

<template>
  <div
    :class="[
      'box-border my-6 py-10 bg-white',
      isSP ? 'w-full max-w-[660px] px-8' : 'w-[660px] px-12'
    ]"
  >
    <h1>{{ data.header }}</h1>
    <a-card :title="data.main.title" class="border-2">
      <a-card
        v-for="(item, index) in data.content"
        :title="item.descript"
        :key="item.id"
        class="mb-3 break-all break-words"
      >
        <template #extra>
          <a-avatar shape="square" :size="30" :src="icons[index]" />
        </template>
        <a :href="item.link" target="_blank">{{ item.link }}</a>
      </a-card>
    </a-card>
  </div>
</template>
