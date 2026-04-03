import { ContentfulEntries, ContentfulEntry } from "./ContentfulTypes"
import { ImageEntry } from "./ImageType"
import { SeoContentful } from "./SeoContentful"
import { CtaEntry } from "./ctaType"

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
  content: string
  featureImage: ImageEntry
  seo: SeoContentful
  cta?: CtaEntry
}

export type ProductPage = ContentfulEntry<ProjectPageFields>

export type ProductPageEntries = ContentfulEntries<ProjectPageFields>