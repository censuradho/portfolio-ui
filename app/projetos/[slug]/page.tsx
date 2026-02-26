import ReactMarkdown from 'react-markdown';

import { contentfulService } from "@/infra/contentful/ContentfulService"
import Image from "next/image";
import { notFound } from "next/navigation";
import { MainHeader } from '@/components/MainHeader';

interface ProjectPageProps {
  slug: string
}

interface ProjectPageMetadataParams {
  params: Promise<ProjectPageProps>
}

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata (props: ProjectPageMetadataParams) {
  const { params } = props;

  const { slug } = await params

  const project = await contentfulService.getProjectBySlug(slug);

  if (!project) notFound()
  
  return {
    title: project.seo.title,
    description: project.seo.description,
  }
}

export default async function ProjectPage ({ params }: ProjectPageMetadataParams) {
  const { slug } = await params

  const project = (await contentfulService.getProjectBySlug(slug))!

  return (
    <>
      <MainHeader />
      <main className="container-md pt-20 px-4 border-dashed border-l border-r border-outline min-h-dvh pb-10">
        <div className="grid grid-cols-12 gap-6">
          <h1 className="text-4xl md:text-5xl leading-tight col-span-12 md:col-span-8 font-semibold">{project.title}</h1>
          <p className="col-span-12 md:col-span-8 text-card-foreground typography">{project.description}</p>
        </div>
        <dl className="flex gap-4 md:gap-30 mt-[48px] flex-wrap">
          <div className="flex flex-col gap-2">
            <dt className="text-sm text-accent-foreground">Locale</dt>
            <dd className="text-lg font-medium">{project.location}</dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="text-sm text-accent-foreground">Industry</dt>
            <dd className="text-lg font-medium">{project.industry}</dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="text-sm text-accent-foreground">Duration</dt>
            <dd className="text-lg font-medium">{project.duration}</dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="text-sm text-accent-foreground">Date</dt>
            <dd className="text-lg font-medium">{project.date}</dd>
          </div>
        </dl>
        <div className="w-full h-[500px] md:h-[800px] relative mt-16">
          <Image 
            src={project.previewImage.url}
            className="rounded-2xl"
            alt=""
            objectFit="cover"
            fill
          />
        </div>
        <div className="markdown">
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>
        <div className="w-full relative mt-20">
          <Image 
            src={project.image.url}
            className="w-full h-auto rounded-2xl"
            alt=""
            width={project.image.details.image.width || 1200}
            height={project.image.details.image.height || 800}
            style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </main>
    </>
  )
}