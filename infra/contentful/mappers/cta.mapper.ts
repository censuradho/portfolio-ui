import { CtaCMS } from "@/domain/cms/CtaCMS";
import { CtaEntry } from "@/domain/contentful/ctaType";

export function ctaMapper(entry: CtaEntry): CtaCMS {
  return {
    label: entry?.fields?.label || '',
    path: entry?.fields?.path || '',
  }
}