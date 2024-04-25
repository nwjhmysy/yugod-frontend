import { Configuration, InfoApi, MdApi, UserApi } from '@/services'
import { getTokenStorage } from '@/utils/storage'

export const basePath = import.meta.env.VITE_API_BATH_PATH

const getConfiguration = (token?: string) => {
  const conf = new Configuration()
  conf.accessToken = getTokenStorage() || token

  return conf
}

export const getMDApi = (token?: string) => {
  return new MdApi(getConfiguration(token), basePath)
}
export const getInfoApi = (token?: string) => {
  return new InfoApi(getConfiguration(token), basePath)
}
export const getUserApi = (token?: string) => {
  return new UserApi(getConfiguration(token), basePath)
}
