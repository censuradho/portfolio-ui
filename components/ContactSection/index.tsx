import { ContactSectionCMS } from "@/domain/cms/ContactSectionCMS"

import styles from './styles.module.css'
import { cn } from "@/lib/utils";
import { Icon } from "../Icon";

interface ContactSectionProps {
  data: ContactSectionCMS
}

export function ContactSection (props: ContactSectionProps) {
  const { data } = props;

  return (
    <section className="container py-[1.875rem] px-4 border-dashed border-outline border-b border-r border-l flex flex-col gap-8">
      <strong className="text-2xl leading-[42px] font-medium">{data.title}</strong>
      <a 
        href={`mailto:${data.email}`} 
        className="text-card-foreground hover:underline text-sm"
      >{data.email}</a>
      <p className="flex gap-2 items-center">
        <span 
          className={cn(
            styles.available_indicator,
            'size-2.5 bg-available rounded-full'
          )}
        />
        <span>{data.availableMessage}</span>
      </p>
      <aside>
        <ul className="flex items-center gap-4 text-accent-foreground">
          <li>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              <Icon name="Linkedin" />
            </a>
          </li>
          <li>
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              <Icon name="Github" />
            </a>
          </li>
          <li>
            <a href={data.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              <Icon name="Telegram" />
            </a>
          </li>
        </ul>
      </aside>
    </section>
  )
}