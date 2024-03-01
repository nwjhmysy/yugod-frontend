<script setup lang="ts">
interface Props {
  isOpen: boolean
}
interface Emit {
  (event: 'move-to', path: string): void
}
const props = withDefaults(defineProps<Props>(), { isOpen: false })
const emit = defineEmits<Emit>()
</script>

<template>
  <Transition name="slide-fade">
    <div v-if="props.isOpen" class="w-full bg-gray-4 box-border z-[99] fixed top-16 cursor-pointer">
      <div class="box-border px-4 p-3 nav" @click="() => emit('move-to', '')">home</div>
      <div class="box-border px-4 p-3 nav" @click="() => emit('move-to', '/about')">markdown</div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
.nav:active {
  background-color: #8bcc7b;
}
</style>
