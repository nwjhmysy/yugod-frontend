<script setup lang="ts">
interface Props {
  class?:string
}
const props = withDefaults(defineProps<Props>(), {class:''})
</script>

<template>
  <div :class="['w-full bg-white',props.class]">
    <div class="w-full flex items-center space-x-4 mb-2">
      <a-avatar
        size="large"
        :style="{ backgroundColor: '#f56a00', verticalAlign: 'middle' }"
        :gap="10"
        >Yin</a-avatar
      >
      <span>123</span>
    </div>
    <ul class="ml-[56px] break-all break-words space-y-2 text-[#b7b7b7]">
      <li class="text-sm border-b"><strong>qq: </strong>634365439</li>
      <li class="text-sm border-b"><strong>qq: </strong>634365439</li>
      <li class="text-sm border-b"><strong>注意:</strong>如果需要下载码可以联系站主</li>
    </ul>
  </div>
</template>

<style scoped></style>
