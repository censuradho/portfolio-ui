import { SeoCMS } from "@/domain/cms/SeoCMS";
import { SeoContentful } from "@/domain/contentful/SeoContentful";

export function seoContentfulMapper(entry: SeoContentful): SeoCMS {
  return {
    title: entry?.fields?.title || '',
    description: entry?.fields?.description || '',
  }
}