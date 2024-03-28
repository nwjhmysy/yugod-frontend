<script setup lang="ts">
import useIsSP from '@/hooks/useIsSP'
import { useCatalogueStore } from '@/stores/catalogue'
import { useLangStore } from '@/stores/lang'
import { useSearchMdStore } from '@/stores/searchMd'
import { storeToRefs } from 'pinia'
import BaseSearch from '@/components/atoms/BaseSearch.vue'

const { searchedMds } = storeToRefs(useSearchMdStore())
const { isSP } = useIsSP(700)
const { moveTo } = useLangStore()
const { setFileSelected, clickUnit, setMdPathStore } = useCatalogueStore()
</script>

<template>
  <div
    :class="[
      'box-border my-6 py-10 bg-white',
      isSP ? 'w-full max-w-[660px] px-8' : 'w-[660px] px-12'
    ]"
  >
    <BaseSearch v-if="isSP" class="bg-gray-100 mb-6" input-class="bg-gray-100" />
    <template v-if="searchedMds && searchedMds.length > 0">
      <a-list item-layout="horizontal" :data-source="searchedMds">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta :description="item.descript">
              <template #title>
                <a
                  @click="
                    () => {
                      clickUnit(item.unitId)
                      setFileSelected(item.unitId, item.id)
                      setMdPathStore(item.path)
                      moveTo('/study')
                    }
                  "
                  >{{ item.name }}</a
                >
              </template>
              <template #avatar>
                <a-avatar :src="item.img" />
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </template>
    <a-empty v-else />
  </div>
</template>

<style scoped></style>
