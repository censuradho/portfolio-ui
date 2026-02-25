export interface ContentfulEntry<T> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
  }
  fields: T;
}