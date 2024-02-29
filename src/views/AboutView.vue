<script setup lang="ts">
import { onMounted, ref } from 'vue'
import VditorPreview from 'vditor'
import BlankContent from '@/components/atoms/BlankContent.vue'
import { Configuration, MdApi } from '@/services';
const md = ref<string>('')
const mdElement = ref<HTMLDivElement>()
onMounted(async () => {
  const getMDApi = new MdApi(new Configuration(),'https://yugod.top/api')

  const { data } = await getMDApi.getMarkDownByKey()

  md.value = data
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
