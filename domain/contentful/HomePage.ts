import { ContactSection } from "./ContactSection";
import { ContentfulEntry } from "./ContentfulTypes";
import { ImageEntry } from "./ImageType";
import { SeoContentful } from "./SeoContentful";

export interface HomePageFields {
  about: string
  headline: string
  headline2: string
  jobTitle: string
  location: string
  name: string
  techStack: string[]
  profilePicture: ImageEntry
  contactSection: ContactSection
  seo: SeoContentful
  carriers:Array<
    ContentfulEntry<{
      company: string
      position: string
      period: string
      description: string
      companyLogo: ImageEntry
    }>
  >
}


export type HomePage = ContentfulEntry<HomePageFields>;
