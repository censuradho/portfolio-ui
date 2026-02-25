import { ContactSectionCMS } from "@/domain/cms/ContactSectionCMS";
import { ContactSection } from "@/domain/contentful/ContactSection";

export function contactSectionMapper(entry: ContactSection): ContactSectionCMS {
  return {
    email: entry?.fields?.email || '',
    availableMessage: entry?.fields?.availableMessage || '',
    linkedin: entry?.fields?.linkedin || '',
    github: entry?.fields?.github || '',
    telegram: entry?.fields?.telegram || '',
    title: entry?.fields?.title || '',
  }
}