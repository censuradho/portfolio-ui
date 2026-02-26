import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

export function MainHeader () {
  return (
    <header
      className={cn(
        'sticky top-0 flex items-center gap-6 bg-background/70 backdrop-blur-2xl z-10',
        ' transition-transform duration-300 ease container-md border-dashed border-l border-r border-outline'
      )}
    >
      <div className="w-full border-b border-outline px-2 py-4">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Icon name="keyboardLeft" />
          <span>Voltar</span>
        </Link>
      </div>
    </header>
  )
}