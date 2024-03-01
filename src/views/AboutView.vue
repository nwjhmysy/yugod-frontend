<script setup lang="ts">
import { onMounted, ref } from 'vue'
import VditorPreview from 'vditor'
import BlankContent from '@/components/atoms/BlankContent.vue'
import { getMDApi } from '@/assets/ts/utils'
import { useLoadingStore } from '@/stores/loading'

const md = ref<string>('')
const mdElement = ref<HTMLDivElement>()
const { openLoading, closeLoading } = useLoadingStore()

onMounted(async () => {
  try {
    const api = getMDApi()
    openLoading()
    const { data } = await api.getMarkDownByKey()
    md.value = data
    if (mdElement.value && md.value) {
      await VditorPreview.preview(mdElement.value, md.value, { mode: 'dark' })
    }
  } finally {
    closeLoading()
  }
})
</script>
<template>
  <div ref="mdElement" class="vditor-reset"></div>
  <BlankContent class="w-full" v-if="!md" />
</template>

<style scoped></style>
