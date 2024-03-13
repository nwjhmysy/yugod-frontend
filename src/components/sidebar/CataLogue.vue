<script setup lang="ts">
import { computed, reactive, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useLangStore } from '@/stores/lang'
import open_icon from '@/assets/images/open_icon.svg'
import { cata, title } from '@/model/catalogue'
import { useCatalogueStore } from '@/stores/catalogue'

interface Props {
  class?: string
}
interface Emits {
  (event: 'clickFile', mdPath: string): void
}

const props = withDefaults(defineProps<Props>(), { class: '' })
const { lang } = storeToRefs(useLangStore())
let data = reactive(cata[lang.value])
const { fileSelected } = storeToRefs(useCatalogueStore())
const { setFileSelected,clickUnit,isUnitOpen } = useCatalogueStore()
const emit = defineEmits<Emits>()
const dataTitle = computed(() => title[lang.value])

watchEffect(() => {
  data = cata[lang.value]
})

const fomtMdPath = (unitPath: string, filePath: string) => unitPath + '/' + filePath
</script>

<template>
  <div :class="['w-full bg-white space-y-2', props.class]">
    <div>{{ dataTitle }}</div>
    <ul class="w-full cursor-pointer space-y-1">
      <li v-for="unit in data" :key="unit.id">
        <p class="w-full p-3 pl-0 border flex items-center mb-2" @click="clickUnit(unit.id)">
          <img :src="open_icon" width="24px" :class="[isUnitOpen(unit.id) && 'rotate-90']" alt="" />
          {{ unit.name }}
        </p>
        <template v-for="file in unit.files" :key="file.id">
          <Transition name="bounce">
            <p
              v-if="isUnitOpen(unit.id)"
              @click="
                () => {
                  setFileSelected(unit.id, file.id)
                  emit('clickFile', fomtMdPath(unit.path, file.path))
                }
              "
              :class="[
                'w-full p-2 hover:text-[#ff6a25] rounded-[8px] pl-7',
                fileSelected.unitID === unit.id &&
                  fileSelected.fileID === file.id &&
                  'bg-[#ebebeb] text-[#ff6a25]'
              ]"
            >
              {{ file.name }}
            </p>
          </Transition>
        </template>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
/* .bounce-leave-active {
  animation: bounce-in 0.2s reverse;
} */
@keyframes bounce-in {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}
</style>
