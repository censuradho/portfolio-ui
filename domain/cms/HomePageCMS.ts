import { ImageCMS } from "./CMSTypes"
import { ContactSectionCMS } from "./ContactSectionCMS"
import { SeoCMS } from "./SeoCMS"

export interface HomePageCMS {
  about: string
  headline: string
  headline2: string
  jobTitle: string
  location: string
  name: string
  techStack: string[]
  seo: SeoCMS
  profilePicture: ImageCMS
  contactSection: ContactSectionCMS
  carriers: Array<{
    company: string
    position: string
    period: string
    description: string
    companyLogo: ImageCMS
  }>
}

export type CarrierEntryCMS = HomePageCMS['carriers'][number]