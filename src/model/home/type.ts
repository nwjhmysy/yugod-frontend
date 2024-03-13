export interface HomeContent {
  header: string
  main: {
    title: string
    list: string[]
  }
  contentTitle: string
  content: {
    id: number
    descript: string
    link: string
  }[]
}
