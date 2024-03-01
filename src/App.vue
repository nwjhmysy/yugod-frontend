<script setup lang="ts">
import { storeToRefs } from 'pinia'
import BaseLoading from './components/atoms/BaseLoading.vue'
import { useLoadingStore } from '@/stores/loading'

const { isLoading } = storeToRefs(useLoadingStore())
</script>

<template>
  <BaseLoading :is-loading="isLoading" />
  <router-view />
</template>

<style scoped></style>
