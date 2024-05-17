<script setup lang="ts">
import type { LoginParam } from '@/services'
import { useLangStore } from '@/stores/lang'
import { useLoginStore } from '@/stores/login'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const loginParam = ref<LoginParam>({
  user_name: '',
  password: ''
})
const { onLogin } = useLoginStore()
const { isLogin, loginErr } = storeToRefs(useLoginStore())
const { moveTo } = useLangStore()
</script>

<template>
  <div v-if="!isLogin" class="flex flex-col">
    <div class="mb-2">登录 page</div>
    <a-input
      v-model:value="loginParam.user_name"
      :controls="false"
      class="w-full"
      placeholder="账号"
    />
    <br />
    <a-input-password
      v-model:value="loginParam.password"
      :controls="false"
      class="w-full"
      placeholder="密码"
    />
    <p v-if="loginErr" class="text-red-500 text-xs">incorrect Username or Password</p>
    <br />
    <div class="flex justify-between">
      <a-button
        key="home"
        @click="onLogin(loginParam)"
        :disabled="!loginParam.user_name || !loginParam.password"
        type="primary"
        class="bg-btn-primary text-white"
        >登录</a-button
      >
      <a-button key="note" @click="moveTo('/sign_in')">注册新用户</a-button>
    </div>
  </div>
  <div v-else>
    <a-result
      status="success"
      title="Login successful!"
      sub-title="welcome to www.yugod.com,Start learning."
    >
      <template #extra>
        <a-button key="home" @click="moveTo">首页</a-button>
        <a-button key="note" @click="moveTo('/study')">笔记</a-button>
        <a-button key="note" @click="moveTo('/user')">个人中心👤</a-button>
      </template>
    </a-result>
  </div>
</template>

<style scoped></style>
