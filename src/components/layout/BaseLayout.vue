<script setup lang="ts">
import useIsSP from '@/hooks/useIsSP'
import TurnLangButton from '@/components/atoms/TurnLangButton.vue'
import { useLangStore } from '@/stores/lang'

const { moveTo } = useLangStore()
const { isSP } = useIsSP()
</script>

<template>
  <!-- nav -->
  <div class="w-full">
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
  <!-- view -->
  <div>
    <router-view />
  </div>
  <!-- footer -->
  <div>footer</div>
  <p>{{ isSP ? 'aaaaa' : 'dssadas' }}</p>
  <TurnLangButton />
</template>

<style scoped></style>
