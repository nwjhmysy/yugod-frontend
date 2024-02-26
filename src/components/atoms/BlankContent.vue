<script lang="ts" setup>
import BlankIcon from '@/assets/images/blank_content.svg'
</script>

<template>
  <div class="flex flex-col my-12 items-center">
    <img :src="BlankIcon" alt="" class="w-20" />
    <div class="text-grey mt-1.5">
      <slot><span>暂无数据</span></slot>
    </div>
  </div>
</template>
