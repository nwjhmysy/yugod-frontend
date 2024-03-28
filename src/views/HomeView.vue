<script setup lang="ts">
import { LOCALES } from '@/constants'
import { computed, onMounted } from 'vue'
import HOME_VALUE from '@/model/home'
import { storeToRefs } from 'pinia'
import { useLangStore } from '@/stores/lang'
import goIcon from '@/assets/images/go_icon.png'
import vueIcon from '@/assets/images/vue_icon.svg'
import dockerIcon from '@/assets/images/docker_icon.png'
import useIsSP from '@/hooks/useIsSP'
import { setInfo } from '@/hooks/useInfo'
import { SmileOutlined } from '@ant-design/icons-vue'

const { lang } = storeToRefs(useLangStore())
const { moveTo } = useLangStore()
const icons = [vueIcon, goIcon, dockerIcon]
const { isSP } = useIsSP(700)

const data = computed(() => {
  const key = lang?.value || LOCALES.ZH
  return HOME_VALUE[key]
})

onMounted(() => {
  setInfo('Web')
})
</script>

<template>
  <div
    :class="[
      'box-border my-6 py-10 bg-white',
      isSP ? 'w-full max-w-[660px] px-8' : 'w-[660px] px-12'
    ]"
  >
    <!-- TODO -->
    <div class="flex justify-start items-end">
      <div class="px-3 bg-black rounded rounded-b-[0]">
        <smile-outlined class="text-white mb-1" />
      </div>
      <p class="text-[18px] px-4 border-b border-black">Navigation</p>
    </div>
    <div class="w-full flex flex-wrap justify-center items-center">
      <a-card
        hoverable
        :style="{ width: isSP ? '180px' : '140px' }"
        class="m-4"
        @click="moveTo('/study')"
      >
        <template #cover>
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        </template>
        <a-card-meta title="学习笔记">
          <template #description>笔记资料</template>
        </a-card-meta>
      </a-card>
      <a-card
        hoverable
        :style="{ width: isSP ? '180px' : '140px' }"
        class="m-4"
        @click="moveTo('/share')"
      >
        <template #cover>
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        </template>
        <a-card-meta title="分享园地">
          <template #description>www.yugod.top</template>
        </a-card-meta>
      </a-card>
      <a-card hoverable :style="{ width: isSP ? '180px' : '140px' }" class="m-4">
        <template #cover>
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        </template>
        <a-card-meta title="敬请期待">
          <template #description>www.yugod.top</template>
        </a-card-meta>
      </a-card>
    </div>
    <div class="flex justify-start items-end mb-4">
      <div class="px-3 bg-black rounded rounded-b-[0]">
        <smile-outlined class="text-white mb-1" />
      </div>
      <p class="text-[18px] px-4 border-b border-black">Project introduction</p>
    </div>
    <a-card :title="data.contentTitle" class="border-2">
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
