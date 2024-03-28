import type { File } from '@/hooks/useSearch'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchMdStore = defineStore('searchMd', () => {
  const searchedMds = ref<File[]>()

  const changeMds = (mds: File[]) => {
    searchedMds.value = [...mds]
  }
  return {
    searchedMds,
    changeMds
  }
})
