export interface Catalogue {
  name: string
  id: string
  path: string
  files: {
    name: string
    id: string
    path: string
    descript: string
    img: string
  }[]
}
