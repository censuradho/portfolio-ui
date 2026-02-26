import { createClient, type ContentfulClientApi } from 'contentful';

import { type CMSService } from '@/domain/cms/CMSService';
import { type HomePageCMS } from '@/domain/cms/HomePageCMS';

import { homePageMapper } from './mappers/homePage.mapper';
import { productEntriesMapper } from './mappers/productEntries.mapper';
import { ProductPageCMS } from '@/domain/cms/ProductPageCMS';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
});

export class ContentfulService implements CMSService {
  constructor(
    private readonly contentfulClient: ContentfulClientApi<undefined> = client
  ) {}

  async getHomePage(): Promise<HomePageCMS> {
    const response = await this.contentfulClient.getEntry('44xE0wVPVZdNBfqLc5nQoC');

    return homePageMapper(response as any); 
  }

  async getProjectsFeatured (): Promise<ProductPageCMS[]> {
    const response = await this.contentfulClient.getEntries({
      content_type: 'project',
      'fields.isFeatured': true,
    });

    return productEntriesMapper(response as any);
  }
}

export const contentfulService = new ContentfulService();