<script lang="ts">
import audio_1 from '@/assets/audio/audio1.mp3'
import audio_2 from '@/assets/audio/audio2.mp3'
import { computed, onMounted, ref, watch } from 'vue'
import PlayIcon from '@/assets/images/audio/play.svg'
import PauseIcon from '@/assets/images/audio/pause.svg'
import AudioOpen from '@/assets/images/audio/audio_open.svg'
import AudioClose from '@/assets/images/audio/audio_close.svg'
import AudioNext from '@/assets/images/audio/audio_next.svg'
import MusicImg from '@/assets/images/audio/music_img.jpg'
import LeftIcon from '@/assets/images/audio/left.svg'

interface Music {
  name: string
  image: string
  source: string
}
const musics: Music[] = [
  {
    name: '市川淳 - Old Memory',
    image: MusicImg,
    source: audio_2
  },
  {
    name: '市川淳 - 遠い空へ (飞向遥远的天空)',
    image: MusicImg,
    source: audio_1
  }
]
</script>

<script setup lang="ts">
// 播放器
const audioPlay = ref<HTMLAudioElement>()
// 是否播放
const isPlay = ref(false)
// 是否静音
const isMtued = ref(false)
// 曲目
const musicIndex = ref(0)
// 音量 0.0-1.0
const volume = ref(0.6)
// 是否显示为图片
const isImgShow = ref(true)
// 是否关闭播放器
const isClose = ref(false)

const music = computed(() => {
  return musics[musicIndex.value]
})

// 静音
const onMtued = () => {
  if (audioPlay.value?.muted !== undefined) {
    isMtued.value = !isMtued.value
    audioPlay.value.muted = isMtued.value
  }
}
// 播放或暂停
const onPlay = () => {
  isPlay.value = !isPlay.value
}
// 调节音量
const onVolume = () => {
  if (audioPlay.value?.volume !== undefined) {
    audioPlay.value.volume = volume.value
  }
}
// 切换曲目
const onSwitchMusic = () => {
  let index = musicIndex.value
  index++
  if (index >= 2) {
    index = 0
  }
  musicIndex.value = index
  isPlay.value = true
}
onMounted(() => {
  onVolume()
})
watch(volume, () => {
  onVolume()
})
watch(isPlay, () => {
  if (isPlay.value) {
    audioPlay.value?.play()
  } else {
    audioPlay.value?.pause()
  }
})
watch(volume, () => {
  isMtued.value = !(volume.value > 0)
})
watch(isClose, () => {
  if (isClose) isImgShow.value = true
})
</script>

<template>
  <div
    v-if="isClose"
    class="z-[999] fixed bottom-6 left-0 cursor-pointer"
    @click="() => (isClose = false)"
  >
    <img :src="LeftIcon" width="50px" alt="" />
  </div>
  <div
    v-else
    class="w-[220px] z-[999] rounded-e-[45px] bg-red-200 flex justify-between items-center fixed bottom-0 left-0"
  >
    <div>
      <div class="flex justify-start space-x-2">
        <button class="p-1.5 rounded border-2 bg-white" @click="onMtued">
          <img :src="!isMtued ? AudioOpen : AudioClose" alt="" width="20px" />
        </button>
        <button class="p-1.5 rounded border-2 bg-white" @click="onPlay">
          <img :src="!isPlay ? PlayIcon : PauseIcon" alt="" width="20px" />
        </button>
        <button class="p-1.5 rounded border-2 bg-white" @click="onSwitchMusic">
          <img :src="AudioNext" alt="" width="20px" />
        </button>
      </div>
      <a-slider v-model:value="volume" :min="0" :max="1" :step="0.01" />
      <div class="ellipsis">{{ music.name }}</div>
    </div>
    <div
      :class="[
        'w-[90px] h-[90px] rounded-[45px] bg-white overflow-hidden cursor-pointer',
        isPlay && isImgShow && 'rotate-img'
      ]"
      @mouseenter="
        () => {
          if (!isImgShow) return
          isImgShow = false
        }
      "
      @mouseleave="
        () => {
          if (isImgShow) return
          isImgShow = true
        }
      "
      @click="() => (isClose = true)"
    >
      <img v-if="isImgShow" :src="music.image" alt="" />
      <img v-else :src="LeftIcon" class="rotate-180" alt="" />
    </div>
  </div>

  <audio ref="audioPlay" autoplay :src="music.source" @ended="onSwitchMusic" :hidden="true"></audio>
</template>

<style scoped>
.rotate-img {
  animation: rotate 3s infinite linear;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
