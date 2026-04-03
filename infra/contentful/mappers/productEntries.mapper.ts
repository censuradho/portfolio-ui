import { ProductPageCMS } from "@/domain/cms/ProductPageCMS";
import { ProductPageEntries } from "@/domain/contentful/ProjectPage";
import { ctaMapper } from "./cta.mapper";
import { imageMapper } from "./image.mapper";
import { seoContentfulMapper } from "./seoContentful.mapper";

export function productEntriesMapper (entries: ProductPageEntries): ProductPageCMS[] {
  console.log(entries.items[0].fields.cta)
  return entries.items.map(entry => ({
    date: entry.fields.date,
    slug: entry.fields.slug,
    description: entry.fields.description,
    duration: entry.fields.duration,
    industry: entry.fields.industry,
    isFeatured: entry.fields.isFeatured || false,
    location: entry.fields.location,
    content: entry.fields.content,
    previewDescription: entry.fields.previewDescription,
    title: entry.fields.title,
    previewImage: imageMapper(entry.fields.previewImage),
    image: imageMapper(entry.fields.image),
    featureImage: imageMapper(entry.fields.featureImage),
    seo: seoContentfulMapper(entry.fields.seo),
    cta: entry.fields.cta ? ctaMapper(entry.fields.cta) : undefined,
  }))
}