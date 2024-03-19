<script setup lang="ts">
import BannerPC from '@/components/banner/BannerPC.vue'
import useIsSP from '@/hooks/useIsSP'
import BannerSP from '@/components/banner/BannerSP.vue'
import { useLangStore } from '@/stores/lang'
import { storeToRefs } from 'pinia'
import { LOCALES } from '@/constants'
import { SwapOutlined } from '@ant-design/icons-vue'
import Footer from '@/components/footer/Footer.vue'
import clickVolume from '../atoms/clickVolume.vue'

const { isSP } = useIsSP(700)
const { lang } = storeToRefs(useLangStore())
const { setLangZh, setLangJa } = useLangStore()
</script>

<template>
  <div
    class="w-full min-w-[300px] min-h-[100vh] bg-gray-bg flex flex-col justify-between items-center"
  >
    <a-float-button-group :style="{ right: isSP ? '30px' : '60px' }">
      <a-float-button
        shape="square"
        type="primary"
        description="中日"
        :style="{ right: isSP ? '30px' : '60px' }"
        @click="
          () => {
            if (lang === LOCALES.JA) {
              setLangZh()
              return
            }
            if (lang === LOCALES.ZH) {
              setLangJa()
              return
            }
          }
        "
      >
        <template #icon>
          <SwapOutlined />
        </template>
      </a-float-button>
      <a-back-top
        :visibility-height="0"
        type="primary"
        :style="{ right: isSP ? '30px' : '60px' }"
      />
    </a-float-button-group>
    <div class="w-full flex flex-col justify-start items-center">
      <!-- banner -->
      <BannerSP v-if="isSP" />
      <BannerPC v-else />
      <clickVolume />
      <!-- view -->
      <div class="w-full flex justify-center">
        <router-view />
      </div>
    </div>
    <!-- footer -->
    <Footer />
  </div>
</template>

<style scoped></style>
