import { cn } from "@/lib/utils";
import Image from "next/image";

interface StickyHeaderProps {
  visible?: boolean
  avatar: string
  name: string
  jobTitle: string
}

export function StickyHeader (props: StickyHeaderProps) {
  const { visible, avatar, name, jobTitle } = props;


  return (
    <div 
      className="fixed top-0 z-10 w-full container left-1/2 transform -translate-x-1/2 pointer-events-none" 
      aria-hidden={!visible}
    >
      <aside
        aria-label="Perfil fixo"
        className={cn(
          'flex items-center gap-6 bg-background/20 backdrop-blur-2xl border-outline border p-2 transition-transform duration-300 ease',
          {
            'translate-y-0 opacity-100': visible,
            '-translate-y-5 opacity-0 pointer-events-none': !visible,
          }
        )}
      >
        <Image 
          src={avatar}
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-md font-semibold">{name}</h1>
            <Image src="/verified.svg" alt="Verified Badge" width={16} height={16} />
          </div>
          <span className="text-xs text-card-foreground font-normal">{jobTitle}</span>
        </div>
      </aside>
    </div>
  )
}