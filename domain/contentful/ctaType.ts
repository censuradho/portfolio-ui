import { ContentfulEntry } from "./ContentfulTypes"

export interface CTAFields {
  label: string
  path: string
}

export type CtaEntry = ContentfulEntry<CTAFields>