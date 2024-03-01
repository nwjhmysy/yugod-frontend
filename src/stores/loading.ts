import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false)

  const openLoading = () => {
    isLoading.value = true
  }
  const closeLoading = () => {
    isLoading.value = false
  }

  return {
    isLoading,
    openLoading,
    closeLoading
  }
})
