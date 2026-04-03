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

export const revalidate = 60 

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
          {project.cta && (
            <div className="col-span-12">
              <a 
                href={project.cta.path}
                target="_blank"
                className="font-medium transition-colors hover:underline flex items-center gap-2"
              >
                {project.cta.label}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              </a>
            </div>
          )}
        </div>
        <dl className="flex gap-4 md:gap-30 mt-[48px] flex-wrap">
          <div className="flex flex-col gap-2">
            <dt className="text-sm text-accent-foreground">Localidade</dt>
            <dd className="text-lg font-medium">{project.location}</dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="text-sm text-accent-foreground">Indústria</dt>
            <dd className="text-lg font-medium">{project.industry}</dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="text-sm text-accent-foreground">Duração</dt>
            <dd className="text-lg font-medium">{project.duration}</dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="text-sm text-accent-foreground">Data</dt>
            <dd className="text-lg font-medium">{project.date}</dd>
          </div>
        </dl>
        <div className="w-full h-[500px] md:h-[600px] lg:h-[800px] relative mt-16">
          <Image 
            src={project.previewImage.url}
            className="rounded-2xl"
            alt=""
            fill
            preload
            style={{ objectFit: 'cover' }}
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