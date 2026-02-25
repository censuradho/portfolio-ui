export interface ImageEntry {
  url: string;
  title?: string;
  description?: string;
}

export function mapImageEntry(entry: any): ImageEntry {
  // entry pode ser o asset do Contentful
  return {
    url: entry?.fields?.file?.url ? `https:${entry.fields.file.url}` : '',
    title: entry?.fields?.title || '',
    description: entry?.fields?.description || '',
  };
}
