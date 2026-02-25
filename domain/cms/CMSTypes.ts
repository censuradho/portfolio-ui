export interface ImageCMS {
  url: string
  filename: string
  contentType: string
  details: {
    size: number
    image: {
      width: number
      height: number
    }
  }
}