<script setup lang="ts">
import BannerNav from '@/components/banner/BannerNav.vue'
import { useLangStore } from '@/stores/lang'
import { computed, ref } from 'vue'
import { UnorderedListOutlined } from '@ant-design/icons-vue'
import { storeToRefs } from 'pinia'
import { LOCALES } from '@/constants'
import NAVS from '@/model/nav'

const { moveTo } = useLangStore()
const isNavOpen = ref(false)
const { lang } = storeToRefs(useLangStore())

const data = computed(() => {
  const key = lang?.value || LOCALES.ZH
  return NAVS[key]
})
</script>

<template>
  <div
    class="w-full h-16 bg-zinc-100 box-border px-6 shadow-down flex justify-between items-center z-[100]"
  >
    <UnorderedListOutlined
      class="cursor-pointer text-[24px]"
      @click="
        () => {
          isNavOpen = !isNavOpen
        }
      "
    />
    <div><span class="whitespace-nowrap text-lg font-bold">YuGod</span></div>
    <div>搜索</div>
  </div>
  <BannerNav
    :navs="data"
    :is-open="isNavOpen"
    @move-to="
      (path) => {
        moveTo(path)
        isNavOpen = false
      }
    "
  />
  <div
    v-if="isNavOpen"
    @click="
      () => {
        isNavOpen = !isNavOpen
      }
    "
    class="overlay-nav"
  ></div>
</template>

<style scoped>
.overlay-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 98;
  background: rgba(0, 0, 0, 0.2); /* 半透明黑色背景 */
}
</style>
