import { contentfulService } from "@/infra/contentful/ContentfulService";
import Image from "next/image";

export default async function Home() {
  const data = await contentfulService.getHomePage();
  
  console.log(data)
  return (
    <main className="">
      <div className="container py-[1.875rem] px-4 border-dashed border-outline border-b border-r border-l">
        <div className="flex items-center gap-4 mb-6">
          <Image 
            src={data.profilePicture.url}
            alt="Profile Picture"
            width={80}
            height={80}
            priority
            className="rounded-full"
          />
          <div>
            <h1 className="text-md font-semibold">{data.name}</h1>
            <strong className="text-xs text-card-foreground font-normal">{data.jobTitle}</strong>
          </div>
        </div>
        <section className="flex flex-col gap-8 py-[32px]">
          <h2 className="text-xs uppercase font-normal text-accent-foreground">About</h2>
          <p className="text-3xl">
            <span>{data.headline}</span>
            <br />
            <span className="text-card-foreground leading-[42px]">{data.headline2}</span>
          </p>
          <p className="paragraph">{data.about}</p>
        </section>
      </div>

    </main>
  );
}
