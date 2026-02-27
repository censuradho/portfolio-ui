import { createClient, type ContentfulClientApi } from 'contentful';

import { type CMSService } from '@/domain/cms/CMSService';
import { type HomePageCMS } from '@/domain/cms/HomePageCMS';

import { homePageMapper } from './mappers/homePage.mapper';
import { productEntriesMapper } from './mappers/productEntries.mapper';
import { ProductPageCMS } from '@/domain/cms/ProductPageCMS';
import { cache } from 'react';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
});

const getProjectsFeaturedCached = cache(async (contentfulClient: ContentfulClientApi<undefined>) => {
  const response = await contentfulClient.getEntries({
    content_type: 'project',
    'fields.isFeatured': true,
    locale: 'pt-BR'
  });

  return productEntriesMapper(response as any)
})

const getProjectBySlugCached = cache(async (contentfulClient: ContentfulClientApi<undefined>, slug: string) => {
  const response = await contentfulClient.getEntries({
    content_type: 'project',
    'fields.slug': slug,
    locale: 'pt-BR'
  });

  const projects = productEntriesMapper(response as any);

  return projects.length > 0 ? projects[0] : null;
})

const getHomePageCached = cache(async (contentfulClient: ContentfulClientApi<undefined>) => {
  const response = await contentfulClient.getEntry('44xE0wVPVZdNBfqLc5nQoC', {
    locale: 'pt-BR'
  });

  return homePageMapper(response as any);
})

export class ContentfulService implements CMSService {
  constructor(
    private readonly contentfulClient: ContentfulClientApi<undefined> = client
  ) {}

  async getHomePage(): Promise<HomePageCMS> {
    return getHomePageCached(this.contentfulClient);
  }

  async getProjectsFeatured (): Promise<ProductPageCMS[]> {
    return getProjectsFeaturedCached(this.contentfulClient);
  }
  async getProjectBySlug (slug: string): Promise<ProductPageCMS | null> {
    return getProjectBySlugCached(this.contentfulClient, slug);
  }
}

export const contentfulService = new ContentfulService();