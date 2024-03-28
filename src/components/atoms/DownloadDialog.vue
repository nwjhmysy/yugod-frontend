<script setup lang="ts">
import { ref } from 'vue'
import BaseDialog from '@/components/BaseDialog.vue'
import { getMDApi } from '@/assets/ts/utils'
import { basePath } from '@/assets/ts/utils'
import type { AxiosError } from 'axios'
import type { CommonResponse } from '@/services/model'
import { DownloadOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'

interface Emits {
  (event: 'close'): void
}
interface Props {
  isOpen: boolean
  mdPath: string
}

const props = withDefaults(defineProps<Props>(), { isOpen: false })
const emits = defineEmits<Emits>()
const downloadCode = ref<number>()
const inputErr = ref('')
const errText = ref('')
const isButtonLoading = ref(false)
const downloadElement = ref()

// 清空状态
const initStatus = () => {
  inputErr.value = ''
  errText.value = ''
  downloadCode.value = undefined
  isButtonLoading.value = false
  emits('close')
}

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
</script>

<template>
  <a
    :href="basePath + `/md/download?md_path=${mdPath}&download_code=${downloadCode}`"
    hidden
    download
    ref="downloadElement"
  ></a>
  <BaseDialog :open="props.isOpen">
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
                if (!downloadCode) {
                  message.warning('下载码为空！')
                  return
                }
                if (!props.mdPath) {
                  message.warning('未选择要下载的文件')
                  return
                }
                mdDownload(props.mdPath, downloadCode)
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
