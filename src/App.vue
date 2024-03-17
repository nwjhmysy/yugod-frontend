<script setup lang="ts">
import { storeToRefs } from 'pinia'
import BaseLoading from './components/atoms/BaseLoading.vue'
import { useLoadingStore } from '@/stores/loading'
import { defineAsyncComponent } from 'vue'
const AudioPlay = defineAsyncComponent(() => import('@/components/atoms/AudioPlay.vue'))
const { isLoading } = storeToRefs(useLoadingStore())
</script>

<template>
  <BaseLoading :is-loading="isLoading" />
  <AudioPlay />
  <router-view />
</template>

<style scoped></style>
