import { ContentfulEntries, ContentfulEntry } from "./ContentfulTypes"
import { ImageEntry } from "./ImageType"

export interface ProjectPageFields {
  date: string
  description: string
  duration: string
  industry: string
  isFeatured: boolean
  location: string
  slug: string
  previewDescription: string
  title: string
  previewImage: ImageEntry
  image: ImageEntry
  featureImage: ImageEntry
}

export type ProductPage = ContentfulEntry<ProjectPageFields>

export type ProductPageEntries = ContentfulEntries<ProjectPageFields>