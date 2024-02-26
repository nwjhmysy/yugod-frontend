// api.js
import axios, { type AxiosRequestConfig } from 'axios'

const baseURL = 'http://localhost:4000' // 设置你的API基础URL

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000 // 设置请求超时时间
})

// 封装请求方法
const api = {
  async fetchData(endpoint: string, params = {}, config?: AxiosRequestConfig) {
    try {
      const response = await axiosInstance.get(endpoint, { params, ...config })
      return response.data
    } catch (error) {
      console.error('Error fetching data:', error)
      throw error // 抛出错误，以便在调用处处理错误
    }
  }
  // 可以封装其他请求方法，如post、put等
}

export default api
