import { ImageCMS } from "./CMSTypes"
import { SeoCMS } from "./SeoCMS"

export interface ProductPageCMS {
    date: string
    description: string
    duration: string
    industry: string
    isFeatured: boolean
    location: string
    previewDescription: string
    title: string
    slug: string
    previewImage: ImageCMS
    content: string
    image: ImageCMS
    featureImage: ImageCMS
    seo: SeoCMS
}