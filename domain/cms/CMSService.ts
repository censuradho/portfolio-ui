import { HomePageCMS } from "./HomePageCMS";
import { ProductPageCMS } from "./ProductPageCMS";

export interface CMSService {
  getHomePage(): Promise<HomePageCMS>;
  getProjectsFeatured (): Promise<ProductPageCMS[]>
}

