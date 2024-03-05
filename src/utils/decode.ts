export const mdBase64Decode = (baseCode: string) => {
  // 解码base64字符串
  const decodedContent = atob(baseCode)

  // 将解码后的内容转换为二进制数据
  const binaryData = new Uint8Array(decodedContent.length)
  for (let i = 0; i < decodedContent.length; i++) {
    binaryData[i] = decodedContent.charCodeAt(i)
  }

  // 使用TextDecoder解码二进制数据
  const textDecoder = new TextDecoder('utf-8')
  return textDecoder.decode(binaryData)
}
