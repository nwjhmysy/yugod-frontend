<script setup lang="ts">
import { getMD } from '@/service/index'
import { onMounted, ref } from 'vue'
import VditorPreview from 'vditor'
import BlankContent from '@/components/atoms/BlankContent.vue'
const md = ref('')
const mdElement = ref<HTMLDivElement>()
onMounted(async () => {
  md.value = await getMD()
  if (mdElement.value && md.value) {
    VditorPreview.preview(mdElement.value, md.value, { mode: 'dark' })
  }
})
</script>
<template>
  <div ref="mdElement" class="vditor-reset"></div>
  <BlankContent class="w-full" v-if="!md" />
</template>

<style scoped></style>
