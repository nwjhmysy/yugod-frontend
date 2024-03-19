<script setup lang="ts">
import { getInfo } from '@/hooks/useInfo'
import { computed, onMounted, ref } from 'vue'

const webClick = ref(0)
const noteClick = ref(0)
onMounted(async () => {
  await getInfo().then((res) => {
    webClick.value = res.web
    noteClick.value = res.note
  })
})
const web = computed(() => (webClick.value <= 0 ? '-加载中-' : webClick.value))
const note = computed(() => (noteClick.value <= 0 ? '-加载中-' : noteClick.value))
</script>

<template>
  <div :class="['w-full flex justify-start']">
    <p class="text-sm text-slate-500">
      网站访问量：<strong>{{ web }}</strong> | 笔记访问量：<strong>{{ note }}</strong>
    </p>
  </div>
</template>

<style scoped>
.text-move {
  animation: text-move 8s infinite linear;
}
@keyframes text-move {
  from {
    transform: translateX(-70%);
  }
  to {
    transform: translateX(70%);
  }
}
</style>
