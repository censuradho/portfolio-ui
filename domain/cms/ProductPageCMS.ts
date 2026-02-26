import { ImageCMS } from "./CMSTypes"

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
    image: ImageCMS
    featureImage: ImageCMS
}