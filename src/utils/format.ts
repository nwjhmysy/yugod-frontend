export const formatMdPath = (path: string | string[]) => {
  let realPath = ''
  if (Array.isArray(path)) {
    realPath = path[0]
  } else {
    realPath = path
  }

  return realPath.replace('-', '/')
}
