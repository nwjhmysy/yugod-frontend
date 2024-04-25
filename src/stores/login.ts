import { getUserApi } from '@/assets/ts/utils'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoginStore = defineStore('login', () => {
  const isLogin = ref(false)
  const token = ref<string>()

  // 登陆
  const onLogin = async () => {
    const userApi = getUserApi()
  }
})
