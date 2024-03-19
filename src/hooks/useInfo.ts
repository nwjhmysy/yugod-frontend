import { getInfoApi } from '@/assets/ts/utils'

export const getInfo = async () => {
  const api = getInfoApi()
  const {
    data: { data }
  } = await api.getClickVolume()

  return data
}
export const setInfo = async (tag: string) => {
  const api = getInfoApi()
  await api.setClickVolumeByTag({
    tag
  })
}
