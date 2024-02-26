<script setup lang="ts">
import { getMD } from '@/service/index'
import { onMounted, ref } from 'vue';
import VditorPreview from 'vditor'

const md = ref('')
const mdElement = ref<HTMLDivElement>()
onMounted(async() => {
  md.value = await getMD()
  if (mdElement.value && md.value) {

    console.log(mdElement.value)
    VditorPreview.preview(mdElement.value, md.value, {mode:'dark',})
  }
})
</script>
<template>
  <div ref="mdElement" class="vditor-reset"></div>
</template>

<style scoped>

</style>
