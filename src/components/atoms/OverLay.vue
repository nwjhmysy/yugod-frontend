<script setup lang="ts">
interface Psops {
  showOverlay?: boolean
  contentClass?: string
}
withDefaults(defineProps<Psops>(), { showOverlay: true })
</script>

<template>
  <div v-if="showOverlay" class="overlay min-h-full">
    <!-- overlay 内容 -->
    <div :class="contentClass">
      <slot></slot>
    </div>
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
  background: rgba(0, 0, 0, 0.2); /* 半透明黑色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
