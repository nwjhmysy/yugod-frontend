import { onMounted, onBeforeUnmount, ref } from 'vue'

const useIsSP = (spWidth = 500) => {
  const isSP = ref(window.innerWidth <= spWidth)
  const handleResize = () => {
    isSP.value = window.innerWidth <= spWidth
  }
  onMounted(() => {
    // 添加窗口大小变化时的监听器
    window.addEventListener('resize', handleResize)
  })
  onBeforeUnmount(() => {
    // 在组件销毁前移除监听器
    window.removeEventListener('resize', handleResize)
  })
  return {
    isSP
  }
}

export default useIsSP
