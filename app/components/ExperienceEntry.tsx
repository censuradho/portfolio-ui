import { CarrierEntryCMS } from "@/domain/cms/HomePageCMS";
import Image from "next/image";

interface ExperienceEntryProps {
  data: CarrierEntryCMS
} 

export function ExperienceEntry(props: ExperienceEntryProps) {
  const { data } = props;

  return  (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Image 
          alt={`${data.company} logo`} 
          src={data.companyLogo.url}
          width={32}
          height={32}
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">{data.position}</h3>
          <p className="text-xs uppercase text-muted-foreground">
            <span>{data.company}</span>
            <span> · </span>
            <span>{data.period}</span>
          </p>
        </div>
      </div>
      <p className="paragraph pl-[46px]">{data.description}</p>
    </div>
  )

}