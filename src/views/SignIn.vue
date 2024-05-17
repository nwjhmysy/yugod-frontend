<script setup lang="ts">
import { REG_EMAIL, REG_NAME_PASSWORD } from '@/constants'
import { useLangStore } from '@/stores/lang'
import { useLoginStore } from '@/stores/login'
import { storeToRefs } from 'pinia'
import { reactive, watch } from 'vue'

enum AUTH {
  TOURIST = 1,
  NORMAL = 2
}
interface SignInForm {
  name?: string
  userName?: string
  email?: string
  age?: number
  password?: string
  ageinPassword?: string
  auth?: AUTH
}

const { isLogin } = storeToRefs(useLoginStore())
const { moveTo } = useLangStore()
const signInForm = reactive<SignInForm>({})
const signInErr = reactive({
  userName: false,
  name: false,
  email: false,
  age: false,
  password: false
})
const cleckForm = () => {
  // 检验名字
  if (!signInForm.name || !new RegExp(REG_NAME_PASSWORD).test(signInForm.name)) {
    signInErr.name = true
  }
  // 检验用户名
  if (
    !signInForm.userName ||
    !new RegExp(REG_NAME_PASSWORD).test(signInForm.userName)
  ) {
    signInErr.password = true
  }
  // 检验密码
  if (
    !signInForm.password ||
    !new RegExp(REG_NAME_PASSWORD).test(signInForm.password)
  ) {
    signInErr.password = true
  }
  // 检验邮箱
  if (!signInForm.email || !new RegExp(REG_EMAIL).test(signInForm.email)) {
    signInErr.password = true
  }
}
watch(signInForm, () => {
  console.log(signInForm);
  cleckForm()
})
watch(signInErr, () => {
  console.log(signInErr);
})
</script>

<template>
  <div v-if="isLogin" class="flex flex-col">
    <a-result
      title="The login status is displayed."
      sub-title="Please log out before registering a new user."
    >
      <template #extra>
        <a-button key="home" @click="moveTo">首页</a-button>
        <a-button key="note" @click="moveTo('/study')">笔记</a-button>
        <a-button key="note" @click="moveTo('/user')">个人中心👤</a-button>
      </template>
    </a-result>
  </div>
  <div v-else class="space-y-4">
    <div class="mb-2">注册新用户 page</div>
    <div class="flex flex-col items-start">
      <p class="mb-1">账号:</p>
      <a-input v-model:value="signInForm.userName" class="w-full" placeholder="账号" />
    </div>
    <div class="flex flex-col items-start">
      <p class="mb-1">密码:</p>
      <a-input-password v-model:value="signInForm.password" class="w-full" placeholder="密码" />
    </div>
    <div class="flex flex-col items-start">
      <p class="mb-1">再次确认:</p>
      <a-input-password
        v-model:value="signInForm.ageinPassword"
        class="w-full"
        placeholder="再次确认"
      />
    </div>
    <div class="flex flex-col items-start">
      <p class="mb-1">昵称:</p>
      <a-input v-model:value="signInForm.name" class="w-full" placeholder="账号" />
    </div>
    <div class="flex flex-col items-start">
      <p class="mb-1">邮箱:</p>
      <a-input v-model:value="signInForm.email" class="w-full" placeholder="邮箱" />
    </div>
    <div class="flex flex-col items-start">
      <p class="mb-1">年龄:</p>
      <a-input-number v-model:value="signInForm.age" placeholder="年龄" :min="10" :max="60" />
    </div>
    <div class="flex justify-between">
      <a-button
        key="home"
        @click="() => {}"
        :disabled="true"
        type="primary"
        class="bg-btn-primary text-white"
        >登录</a-button
      >
      <a-button key="note" @click="() => {}">创建游客用户</a-button>
    </div>
  </div>
</template>

<style scoped></style>
