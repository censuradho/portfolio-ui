import { ProductPageCMS } from "@/domain/cms/ProductPageCMS";
import { ProductPageEntries } from "@/domain/contentful/ProjectPage";
import { imageMapper } from "./image.mapper";

export function productEntriesMapper (entries: ProductPageEntries): ProductPageCMS[] {
  return entries.items.map(entry => ({
    date: entry.fields.date,
    slug: entry.fields.slug,
    description: entry.fields.description,
    duration: entry.fields.duration,
    industry: entry.fields.industry,
    isFeatured: entry.fields.isFeatured || false,
    location: entry.fields.location,
    previewDescription: entry.fields.previewDescription,
    title: entry.fields.title,
    previewImage: imageMapper(entry.fields.previewImage),
    image: imageMapper(entry.fields.image),
    featureImage: imageMapper(entry.fields.featureImage),
  }))
}