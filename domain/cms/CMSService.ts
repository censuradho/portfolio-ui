import { HomePageCMS } from "./HomePageCMS";

export interface CMSService {
  getHomePage(): Promise<HomePageCMS>;
}

