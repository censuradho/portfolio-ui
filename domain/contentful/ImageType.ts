import { ContentfulEntry } from "./ContentfulTypes"

export interface ImageFields {
  description?: string
  title?: string
  contentType?: string
  file: {
    description?: string
    url?: string
    fileName: string
    details: {
      height: number
      width: number
      size: number
    }
  }
}

export type ImageEntry = ContentfulEntry<ImageFields>