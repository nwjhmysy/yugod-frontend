import { Configuration, MdApi } from '@/services'

export const basePath = import.meta.env.VITE_API_BATH_PATH

export const getMDApi = () => {
  return new MdApi(new Configuration(), basePath)
}
