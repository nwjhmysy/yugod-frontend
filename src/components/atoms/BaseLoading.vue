<script setup lang="ts">
interface Psops {
  isLoading?: boolean
}
const props = withDefaults(defineProps<Psops>(), { isLoading: false })
</script>

<template>
  <div class="overlay" v-if="props.isLoading">
    <a-spin tip="Loading..." />
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: #fff; /* 半透明黑色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
