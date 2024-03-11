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
import DownloadDialog from '@/components/atoms/DownloadDialog.vue'

// 获取路由参数
const { params } = useRoute()
const md = ref<string>('')
const mdElement = ref<HTMLDivElement>()
const { openLoading, closeLoading } = useLoadingStore()
const { isSP } = useIsSP(700)
const mdPath = ref(formatMdPath(params.mdPath))
const isDialogOpen = ref(false)

onMounted(async () => {
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
  }
})
</script>
<template>
  <template v-if="mdPath">
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
    <DownloadDialog
      :is-open="isDialogOpen"
      :md-path="mdPath"
      @close="() => (isDialogOpen = false)"
    />
  </template>

  <template v-else>
    <div>学习笔记首页</div>
  </template>
</template>

<style scoped></style>
