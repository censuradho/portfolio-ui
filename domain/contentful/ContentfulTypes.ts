export interface ContentfulEntry<T> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
  }
  fields: T;
}



export interface ContentfulEntries<T> {
  limit: number;
  skip: number;
  total: number;
  items: ContentfulEntry<T>[];
}