import { ContentfulEntry } from "./ContentfulTypes";

export interface ContactSectionFields {
  availableMessage: string;
  email: string;
  github: string;
  linkedin: string;
  telegram: string;
  title: string;
}

export type ContactSection = ContentfulEntry<ContactSectionFields>;