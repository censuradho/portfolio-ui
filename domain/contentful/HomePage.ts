import { ContactSection } from "./ContactSection";
import { ContentfulEntry } from "./ContentfulTypes";
import { ImageEntry } from "./ImageType";

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
}


export type HomePage = ContentfulEntry<HomePageFields>;
