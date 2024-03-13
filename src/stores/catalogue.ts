import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCatalogueStore = defineStore('catalogue', () => {
  const fileSelected = reactive({
    unitID: '',
    fileID: ''
  })
  const unitOpen = reactive<string[]>([])

  // 设置被选中的目录
  const setFileSelected = (  unitID: string,fileID: string) => {
    fileSelected.unitID = unitID
    fileSelected.fileID = fileID
  }
  // 展开/关闭 菜单
  const clickUnit = (unitID: string) => {
    const index = unitOpen.findIndex((item) => item === unitID)
    if (index < 0) {
      // 关闭状态
      unitOpen.push(unitID)
      return
    }
    // 开启状态
    unitOpen.splice(index, 1)
  }

  // 判断菜单是否关闭
  const isUnitOpen = (unitID: string) => {
    return unitOpen.findIndex((item) => item === unitID) >= 0
  }

  return {
    fileSelected,
    setFileSelected,
    clickUnit,
    isUnitOpen
  }
})