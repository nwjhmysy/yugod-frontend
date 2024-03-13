<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import VditorPreview from 'vditor'
import BlankContent from '@/components/atoms/BlankContent.vue'
import { getMDApi } from '@/assets/ts/utils'
import { useLoadingStore } from '@/stores/loading'
import { mdBase64Decode } from '@/utils/decode'
import useIsSP from '@/hooks/useIsSP'
import { DownloadOutlined, AlignCenterOutlined } from '@ant-design/icons-vue'
import DownloadDialog from '@/components/atoms/DownloadDialog.vue'
import AuthorInfo from '@/components/sidebar/AuthorInfo.vue'
import CataLogue from '@/components/sidebar/CataLogue.vue'
import { SmileOutlined } from '@ant-design/icons-vue'
import { cata } from '@/model/catalogue'
import { storeToRefs } from 'pinia'
import { useLangStore } from '@/stores/lang'
import { useCatalogueStore } from '@/stores/catalogue'

// 获取路由参数
const md = ref<string>('')
const mdElement = ref<HTMLDivElement>()
const { openLoading, closeLoading } = useLoadingStore()
const { isSP } = useIsSP(700)
const mdPath = ref('')
const isDialogOpen = ref(false)
const isSidebar = ref(false)
const { lang } = storeToRefs(useLangStore())
const CATA = computed(() => cata[lang.value])
const { setFileSelected, clickUnit } = useCatalogueStore()

const openSidebar = () => (isSidebar.value = true)
const closeSidebar = () => (isSidebar.value = false)

watch(isSP, closeSidebar)

const getMdPage = async () => {
  if (!mdPath.value) return
  try {
    const api = getMDApi()
    openLoading()

    // 获取加密后的 markdown 文本
    const {
      data: { data }
    } = await api.getMarkDownByPath(mdPath.value)

    // 解码
    const result = mdBase64Decode(data)
    md.value = result
    if (mdElement.value && md.value) {
      await VditorPreview.preview(mdElement.value, md.value, { mode: 'dark' })
    }
  } finally {
    closeLoading()
    isSidebar.value = false
  }
}
watch(mdPath, getMdPage)
</script>
<template>
  <!-- 目录 -->
  <a-float-button
    v-if="isSP"
    shape="square"
    type="primary"
    :style="{ right: isSP ? '30px' : '60px', bottom: '240px' }"
    description="目录"
    @click="openSidebar"
  >
    <template #icon>
      <AlignCenterOutlined />
    </template>
  </a-float-button>
  <!-- 下载 -->
  <a-float-button
    type="primary"
    :style="{ right: isSP ? '30px' : '60px', bottom: '160px' }"
    @click="
      () => {
        isDialogOpen = true
      }
    "
  >
    <template #icon>
      <DownloadOutlined class="mb-1" />
    </template>
  </a-float-button>
  <!-- 内容 -->
  <div class="w-full p-6 flex justify-center items-start space-x-10">
    <div
      v-if="mdPath"
      ref="mdElement"
      :class="[
        'vditor-reset box-border py-10 bg-white',
        isSP ? 'w-full max-w-[660px] px-8' : 'w-[660px] px-12'
      ]"
    >
      <BlankContent class="w-full" v-if="!md" />
    </div>
    <div v-else class="box-border py-10 bg-white w-[660px] px-12">
      <div v-for="unit in CATA" :key="unit.id" class="w-full flex flex-col mt-4">
        <div class="flex justify-start items-end">
          <div class="px-3 bg-black rounded rounded-b-[0]">
            <smile-outlined class="text-white mb-1" />
          </div>
          <p class="text-[18px] px-4 border-b border-black">{{ unit.name }}</p>
        </div>
        <div class="box-border p-4 space-y-2">
          <div
            v-for="file in unit.files"
            :key="file.id"
            @click="
              () => {
                mdPath = unit.path + '/' + file.path
                setFileSelected(unit.id, file.id)
                clickUnit(unit.id)
              }
            "
            class="hover:bg-[#ffd48f] border border-[#ffad36] p-2 rounded-lg"
          >
            {{ file.name }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="!isSP" class="w-[260px] flex flex-col justify-center items-start space-y-4">
      <AuthorInfo class="shadow-md p-4" />
      <CataLogue
        class="shadow-md p-4 max-h-[420px] overflow-y-auto"
        @click-file="
          (path) => {
            mdPath = path
          }
        "
      />
    </div>
    <a-drawer
      v-else
      title="Author information & catalogue"
      placement="left"
      width="280"
      :closable="false"
      :open="isSidebar"
      :style="{ position: 'absolute' }"
      @close="closeSidebar"
    >
      <AuthorInfo class="mb-4" />
      <CataLogue
        @click-file="
          (path) => {
            mdPath = path
          }
        "
      />
    </a-drawer>
  </div>
  <DownloadDialog :is-open="isDialogOpen" :md-path="mdPath" @close="() => (isDialogOpen = false)" />
</template>

<style scoped></style>
