<script setup lang="ts">
import BannerNav from '@/components/banner/BannerNav.vue'
import { ref } from 'vue'

const isNavOpen = ref(false)
</script>

<template>
  <div
    class="w-full h-16 bg-zinc-100 box-border px-6 shadow-down flex justify-between items-center z-[100]"
  >
    <div
      class="cursor-pointer"
      @click="
        () => {
          isNavOpen = !isNavOpen
        }
      "
    >
      菜单
    </div>
    <div><span class="whitespace-nowrap text-lg font-bold">YuGod</span></div>
    <div>搜索</div>
  </div>
  <BannerNav :is-open="isNavOpen" />
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
