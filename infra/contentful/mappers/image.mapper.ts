import { ImageCMS } from "@/domain/cms/CMSTypes";
import { ImageEntry } from "@/domain/contentful/ImageType";

export function imageMapper(entry: ImageEntry): ImageCMS {
  const url = entry.fields.file.url

  return {
    contentType: entry.fields.contentType || '',
    filename: entry.fields.file.fileName || '',
    url: url ? `https:${url}` : '',
    details: {
      image: {
        height: entry.fields.file.details.height || 0,
        width: entry.fields.file.details.width || 0,
      },
      size: entry.fields.file.details.size || 0,
    }
  }
}