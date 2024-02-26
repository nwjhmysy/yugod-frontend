import api from "./api";

export const getMD = () => {
  return api.fetchData('/md', {
    responseType: 'text', // 显式设置响应的数据类型为文本
    headers: {
      'Content-Type': 'text/markdown' // 设置请求头中的Content-Type为text/markdown
    }
  })
}