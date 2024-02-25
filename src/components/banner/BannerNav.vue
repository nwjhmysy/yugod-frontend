<script setup lang="ts">
import { ref, type DefineProps } from 'vue'

interface Props {
  isOpen: boolean
}
const props = withDefaults(defineProps<Props>(), { isOpen: false })
</script>

<template>
  <Transition name="slide-fade">
    <div v-if="props.isOpen" class="w-full bg-gray-4 box-border py-4 px-6 z-[99] fixed top-16">
      <div>123</div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
