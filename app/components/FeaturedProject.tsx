import { Icon } from "@/components/Icon"
import { paths } from "@/constants/paths"
import { ProductPageCMS } from "@/domain/cms/ProductPageCMS"
import { cn } from "@/lib/utils"
import { resolvePath } from "@/utils/resolvePath"
import Image from "next/image"
import Link from "next/link"

interface FeaturedProjectProps {
  data: ProductPageCMS
}

export function FeaturedProject ({ data }: FeaturedProjectProps) {

  const projectHref = resolvePath(paths.project, { slug: data.slug });

  return (
    <Link 
      href={projectHref} 
      className="block group">
      <article>

        <div className="w-full h-100 relative transition-all duration-300 ease-in-out rounded-2xl overflow-hidden flex justify-center items-center">
          <div className={cn(
            'absolute z-2 rounded-full bg-background/20 backdrop-blur-3xl',
            'border-outline p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease',
            'translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease'
          )}>
            <Icon name="ArrowTopRight" />
          </div>
          <Image 
            src={data.previewImage.url}
            alt=""
            fill
            objectFit="cover"
            className="w-full h-full top-0 left-0 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="mt-4">
          <span className="text-xs text-muted-foreground uppercase">{data.date}</span>
          <h3 className="text-lg font-semibold ">{data.title}</h3>
          <p className="text-sm text-card-foreground mt-2">{data.previewDescription}</p>
        </div>
      </article>
    </Link>

  )
}