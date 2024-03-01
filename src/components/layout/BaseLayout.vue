<script setup lang="ts">
import BannerPC from '@/components/banner/BannerPC.vue'
import useIsSP from '@/hooks/useIsSP'
import BannerSP from '@/components/banner/BannerSP.vue'

const { isSP } = useIsSP(700)
</script>

<template>
  <div
    class="w-full min-w-[300px] min-h-[100vh] bg-gray-bg flex flex-col justify-between items-center"
  >
    <div class="w-full flex flex-col justify-start items-center">
      <!-- banner -->
      <BannerSP v-if="isSP" />
      <BannerPC v-else />
      <!-- view -->
      <div
        :class="[
          ' box-border my-6 py-10 bg-white',
          isSP ? 'w-full max-w-[660px] px-8' : 'w-[660px] px-12'
        ]"
      >
        <router-view />
      </div>
    </div>
    <!-- footer -->
    <div class="w-full bg-black box-border px-14 py-4">
      <span class="text-white">foot</span>
    </div>
  </div>
</template>

<style scoped></style>
