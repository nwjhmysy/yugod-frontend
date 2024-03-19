import { Configuration, InfoApi, MdApi } from '@/services'

export const basePath = import.meta.env.VITE_API_BATH_PATH

export const getMDApi = () => {
  return new MdApi(new Configuration(), basePath)
}
export const getInfoApi = () => {
  return new InfoApi(new Configuration(), basePath)
}
