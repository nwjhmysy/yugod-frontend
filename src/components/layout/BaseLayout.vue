<script setup lang="ts">
import TurnLangButton from '../atoms/TurnLangButton.vue'
import { useLangStore } from '@/stores/lang'

const { moveTo } = useLangStore()
</script>

<template>
  <!-- nav -->
  <div>
    <nav>
      <button
        class="p-2 bg-cyan-700"
        @click="
          () => {
            moveTo('/')
          }
        "
      >
        home
      </button>
      <button
        class="p-2 bg-fuchsia-600"
        @click="
          () => {
            moveTo('/about')
          }
        "
      >
        about
      </button>
    </nav>
  </div>
  <!-- body -->
  <div>
    <router-view />
  </div>
  <!-- footer -->
  <div></div>
  <TurnLangButton />
</template>

<style scoped></style>
