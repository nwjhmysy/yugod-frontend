import { Configuration, MdApi } from '@/services'

const basePath = import.meta.env.VITE_API_BATH_PATH

export const getMDApi = () => {
  return new MdApi(new Configuration(), basePath)
}
