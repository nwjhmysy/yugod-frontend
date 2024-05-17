<script setup lang="ts">
import { getUserApi } from '@/assets/ts/utils'
import type { GetUserInfoData } from '@/services'
import { useLoginStore } from '@/stores/login'
import { ref } from 'vue'

const userInfo = ref<GetUserInfoData>()
const { onClearToken } = useLoginStore()
const getUserInfo = async () => {
  try {
    const userApi = getUserApi()
    const {
      data: { data }
    } = await userApi.getUserInfo()
    userInfo.value = data
  } catch (error) {
    onClearToken()
  }
}
</script>

<template>
  <div>
    <button @click="getUserInfo">点击获取user info</button>
    <h2>{{ userInfo?.user_name }}</h2>
    <h2>{{ userInfo?.name }}</h2>
  </div>
</template>

<style scoped></style>
