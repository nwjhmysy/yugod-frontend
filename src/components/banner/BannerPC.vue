<script setup lang="ts">
import searchIcon from '@/assets/iamges/search_icon.svg'
import rainLgog from '@/assets/iamges/rain_logo.svg'
import { GithubOutlined } from '@ant-design/icons-vue'
</script>
<template>
  <div
    class="w-full h-20 bg-zinc-100 box-border px-8 shadow-down flex justify-between items-center"
  >
    <div class="w-full flex justify-start items-center">
      <div class="flex justify-start items-center mr-3">
        <img :src="rainLgog" alt="" class="max-w-[60px] h-[60px] mr-2" />
        <span class="whitespace-nowrap text-lg font-bold">YuGod</span>
      </div>
      <div class="w-full m-6 flex justify-start items-center cursor-pointer">
        <div class="h-20 box-border px-4 hover:shadow-picker-panel bg-slate-200 flex items-center">
          nav1
        </div>
        <div class="h-20 box-border px-4 hover:shadow-picker-panel bg-slate-200 flex items-center">
          nav2
        </div>
        <div class="h-20 box-border px-4 hover:shadow-picker-panel bg-slate-200 flex items-center">
          nav3
        </div>
      </div>
    </div>
    <div class="w-full flex justify-end items-center">
      <div
        class="w-full max-w-[500px] flex bg-white justify-end rounded-l-lg box-content border-search"
      >
        <div class="w-full p-2 box-content">
          <input type="text" class="w-full h-7 border-none outline-none" />
        </div>
        <div class="min-w-[42px] bg-gray-200 py-2 cursor-pointer flex justify-center">
          <img :src="searchIcon" alt="" class="w-8" />
        </div>
      </div>
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
