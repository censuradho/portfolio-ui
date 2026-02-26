import { ContentfulEntry } from "./ContentfulTypes"

export interface SeoContentfulFields {
  title: string
  description: string
}

export type SeoContentful = ContentfulEntry<SeoContentfulFields>