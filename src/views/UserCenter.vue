<script setup lang="ts">
import { useLangStore } from '@/stores/lang'
import { useLoginStore } from '@/stores/login'
import { storeToRefs } from 'pinia'

const { onLogout } = useLoginStore()
const { isLogin, user } = storeToRefs(useLoginStore())
const { moveTo } = useLangStore()
</script>

<template>
  <div v-if="isLogin" class="flex flex-col">
    <p class="text-purple-800">用户中心</p>
    <p><span>用户名：</span>{{ user?.name }}</p>
    <p><span>邮箱：</span>{{ user?.email }}</p>
    <p><span>年龄：</span>{{ user?.age }}</p>
    <a-button title="warn" danger @click="onLogout">退出登录</a-button>
  </div>
  <div v-else>
    <a-result title="You are not logged in.">
      <template #extra>
        <a-button type="primary" class="bg-btn-primary text-white" @click="moveTo('/sign_up')">
          登录
        </a-button>
      </template>
    </a-result>
  </div>
</template>

<style scoped></style>
