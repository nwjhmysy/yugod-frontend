<script setup lang="ts">
import { useLangStore } from '@/stores/lang'
import { useLoginStore } from '@/stores/login'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae']
const color = ref(colorList[Math.floor(Math.random() * 5)] || '#f56a00')
const { user, isLogin } = storeToRefs(useLoginStore())
const { moveTo } = useLangStore()
</script>

<template>
  <div
    :class="[
      'w-[150px] h-[40px] flex justify-start items-center space-x-3 rounded-[20px] cursor-pointer',
      isLogin ? 'bg-white' : 'bg-zinc-400'
    ]"
    @click="moveTo(isLogin ? '/user' : '/sign_up')"
  >
    <template v-if="isLogin">
      <a-avatar size="large" :style="{ backgroundColor: color, verticalAlign: 'middle' }">
        {{ user?.name[0] }}
      </a-avatar>
      <span>{{ user?.name }}</span>
    </template>
    <template v-else>
      <a-avatar size="large">
        <template #icon><UserOutlined /></template>
      </a-avatar>
      <span class="text-white ellipsis-span">未登录</span>
    </template>
  </div>
</template>

<style scoped>
/* 省略号 */
.ellipsis-span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80px; /* 可以根据需要调整宽度 */
}
</style>
