<script setup lang="ts">
import { onMounted, ref } from 'vue'
import VditorPreview from 'vditor'
import BlankContent from '@/components/atoms/BlankContent.vue'
import { getMDApi } from '@/assets/ts/utils'
import { useLoadingStore } from '@/stores/loading'
import { mdBase64Decode } from '@/utils/decode'
import useIsSP from '@/hooks/useIsSP'
import { DownloadOutlined, AlignCenterOutlined } from '@ant-design/icons-vue'
import { useRoute } from 'vue-router'
import { formatMdPath } from '@/utils/format'
import BaseDialog from '@/components/BaseDialog.vue'
import type { AxiosError } from 'axios'
import type { CommonResponse } from '@/services'
import { basePath } from '@/assets/ts/utils'

// 获取路由参数
const { params } = useRoute()
const md = ref<string>('')
const mdElement = ref<HTMLDivElement>()
const { openLoading, closeLoading } = useLoadingStore()
const { isSP } = useIsSP(700)
const mdPath = ref(formatMdPath(params.mdPath))
const downloadCode = ref<number>()
const inputErr = ref('')
const isDialogOpen = ref(false)
const isButtonLoading = ref(false)
const errText = ref('')
const downloadElement = ref()

onMounted(async () => {
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
  }
})

// 下载
const mdDownload = async (mdPath: string, code: number) => {
  try {
    const api = getMDApi()
    isButtonLoading.value = true
    await api.downloadMDByCode(mdPath, code)
    initStatus()
    // 使用 a 标签下载，避开浏览器的安全策略
    downloadElement.value.click()
  } catch (err) {
    const data = (err as AxiosError).response?.data as CommonResponse
    inputErr.value = 'error'
    errText.value = data.message + '请联系站主解决，qq：634365439'
  } finally {
    isButtonLoading.value = false
  }
}

// 清空状态
const initStatus = () => {
  inputErr.value = ''
  errText.value = ''
  downloadCode.value = undefined
  isButtonLoading.value = false
  isDialogOpen.value = false
}
</script>
<template>
  <a
    :href="basePath + `/md/download?md_path=${mdPath}&download_code=${downloadCode}`"
    hidden
    download
    ref="downloadElement"
  ></a>
  <!-- 目录 -->
  <a-float-button
    v-if="isSP"
    shape="square"
    type="primary"
    :style="{ right: isSP ? '30px' : '60px', bottom: '240px' }"
    description="目录"
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
  <div ref="mdElement" class="vditor-reset"></div>
  <BlankContent class="w-full" v-if="!md" />
  <BaseDialog :open="isDialogOpen">
    <template #content>
      <div class="px-10 py-5">
        <a-input-number
          v-model:value="downloadCode"
          :controls="false"
          class="w-full"
          placeholder="download code"
          :status="inputErr"
        />
        <p class="py-2 text-sm text-[#c2c2c2]">{{ errText }}</p>
        <div class="w-full flex justify-between">
          <a-button danger class="mr-6" @click="initStatus">Cancel</a-button>
          <a-button
            type="primary"
            class="bg-[#0077fa]"
            :loading="isButtonLoading"
            @click="
              () => {
                if (!downloadCode || !mdPath) return
                mdDownload(mdPath, downloadCode)
              }
            "
          >
            <template #icon>
              <DownloadOutlined class="text-[20px]" />
            </template>
            Download
          </a-button>
        </div>
      </div>
    </template>
  </BaseDialog>
</template>

<style scoped></style>
