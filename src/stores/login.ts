import { getUserApi, loginApi } from '@/assets/ts/utils'
import type { CreateUserParam, GetUserInfoData, LoginParam } from '@/services'
import { clearTokenStorage, setTokenStorage } from '@/utils/storage'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useLoginStore = defineStore('login', () => {
  const isLogin = ref(false)
  const loginErr = ref(false)
  const signErr = ref(false)
  const token = ref<string>()
  const user = ref<GetUserInfoData>()
  // Token 清空
  const onClearToken = () => {
    isLogin.value = false
    token.value = ''
    user.value = undefined
    clearTokenStorage()
  }
  // 登陆
  const onLogin = async (param: LoginParam) => {
    const logApi = loginApi()
    try {
      const { data:logData } = await logApi.loginByUserName(param)
      const userApi = getUserApi(logData.message)
      token.value = logData.message
      isLogin.value = true
      loginErr.value = false
      setTokenStorage(logData.message)
      const {
        data: { data:userData }
      } = await userApi.getUserInfo()
      user.value = userData
    } catch (error) {
      loginErr.value = true
    }
  }
  // 退出登陆
  const onLogout = () => {
    clearTokenStorage()
    onClearToken()
  }
  // 注册新用户
  const onSignUp = async (param: CreateUserParam) => {
    try {
      const api = getUserApi()
      api.createUser(param)
      signErr.value = false
    } catch (error) {
      signErr.value = true
    }
  }
  // 获取用户信息
  onMounted(async () => {
    try {
      const api = getUserApi()
      const {
        data: { data }
      } = await api.getUserInfo()
      user.value = data
      isLogin.value = true
    } catch (error) {
      onClearToken()
    }
  })

  return {
    onLogin,
    onClearToken,
    onLogout,
    onSignUp,
    isLogin,
    loginErr,
    token,
    signErr,
    user,
  }
})
