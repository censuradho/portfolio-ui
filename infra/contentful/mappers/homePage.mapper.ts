import { HomePageCMS } from "@/domain/cms/HomePageCMS";
import { HomePage } from "@/domain/contentful/HomePage";
import { contactSectionMapper } from "./contactSection.mapper";
import { imageMapper } from "./image.mapper";

export function homePageMapper (entry: HomePage): HomePageCMS {
  return {
    about: entry?.fields?.about || '',
    headline: entry?.fields?.headline || '',
    headline2: entry?.fields?.headline2 || '',
    jobTitle: entry?.fields?.jobTitle || '',
    location: entry?.fields?.location || '',
    name: entry?.fields?.name || '',
    techStack: entry?.fields?.techStack || [],
    profilePicture: imageMapper(entry?.fields?.profilePicture),
    contactSection: contactSectionMapper(entry?.fields?.contactSection),
    carriers: (entry?.fields?.carriers || []).map(carrier => ({
      company: carrier?.fields?.company || '',
      description: carrier?.fields?.description || '',
      position: carrier?.fields?.position || '',
      period: carrier?.fields?.period || '',
      companyLogo: imageMapper(carrier?.fields?.companyLogo),
    })),
  }
}