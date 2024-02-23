<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import searchIcon from '@/assets/iamges/search_icon.svg'
import rainLgog from '@/assets/iamges/rain_logo.svg'
import { GithubOutlined } from '@ant-design/icons-vue'

</script>
<template>
  <div
    class="w-full h-20 bg-zinc-100 box-border px-12 shadow-down flex justify-between items-center"
  >
    <div class="flex justify-start items-center mr-3">
      <img :src="rainLgog" alt="" class="max-w-[60px] h-[60px] mr-2" />
      <span class="whitespace-nowrap text-lg font-bold">YuGod</span>
    </div>
    <div class="w-full max-w-[600px] flex bg-white justify-end rounded-l-lg box-content border-search">
      <div class="w-full p-2 box-content">
        <input type="text" class="w-full h-7 border-none outline-none" />
      </div>
      <div class="min-w-[42px] bg-gray-200 py-2 cursor-pointer flex justify-center">
        <img :src="searchIcon" alt="" class="w-8" />
      </div>
    </div>
    <div class="text-center ml-2">
      <div><GithubOutlined class="text-2xl"/></div>
      <strong>GitHub</strong>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.border-search:hover {
  border: 2px solid #4592c4;
}
</style>
