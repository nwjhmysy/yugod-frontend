<script setup lang="ts">
import OverLay from '@/components/atoms/OverLay.vue'

interface Props {
  open: boolean
}
interface Emits {
  (event: 'close'): void
}
defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <OverLay :show-overlay="open">
    <Transition
      class="transition"
      enter-active-class="duration-500 ease-out"
      enter-from-class="transform opacity-0 translate-y-10"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="duration-500 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 translate-y-10"
    >
      <div v-if="open" class="bg-white shadow-picker-panel rounded-md overflow-hidden">
        <slot name="content"></slot>
      </div>
    </Transition>
  </OverLay>
</template>
