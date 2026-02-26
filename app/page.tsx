import { contentfulService } from "@/infra/contentful/ContentfulService";
import { ExperienceEntry } from "./components/ExperienceEntry";
import { Icon } from "@/components/Icon";
import { TechStackCarrousel } from "./components/TechStackCarrousel";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "./components/Header";
import { BallFollower } from "@/components/BallFollower";
import { FeaturedProject } from "./components/FeaturedProject";
import { LinKButton } from "@/components/LinkButton";
import { paths } from "@/constants/paths";
import { Metadata } from "next";

export async function generateMetadata (): Promise<Metadata> {
  const data = await contentfulService.getHomePage();

  return {
    title: data.seo.title,
    description: data.seo.description,
  }
}

export default async function Home() {
  const data = await contentfulService.getHomePage();
  const featuredProjects = await contentfulService.getProjectsFeatured();

  const renderCarriers = data.carriers.map((carrier,index) => (
    <li key={index}>
      <ExperienceEntry data={carrier} />
    </li>
  ))

  const renderFeaturedProjects = featuredProjects.map((project, index) => (
    <FeaturedProject 
      key={index}
      data={project}
    />
  ))
  return (
    <main className="">
      <div className="container py-[1.875rem] px-4 border-dashed border-outline border-b border-r border-l">
        <Header 
          avatar={data.profilePicture.url}
          name={data.name}
          jobTitle={data.jobTitle}
          location={data.location}
        />
        <section className="flex flex-col gap-8 py-[32px]">
          <h2 className="text-xs uppercase font-medium text-accent-foreground">About</h2>
          <p className="text-3xl">
            <span>{data.headline}</span>
            <br />
            <span className="text-card-foreground leading-[42px]">{data.headline2}</span>
          </p>
          <p className="paragraph">{data.about}</p>
        </section>
      </div>
      <section className="container py-[1.875rem] px-4 border-dashed border-outline border-b border-r border-l flex flex-col gap-8">
        <h2 className="text-xs uppercase font-medium text-accent-foreground">Experience</h2>
        <ul className="flex flex-col gap-6">
          {renderCarriers}
        </ul>
        <div className="justify-end flex">
          <a
            href="/curriculo%20-%20Gustavo%20Leite%20Oliveira.pdf"
            download
            className="btn--primary"
          >
            <Icon name="Download" />
            <span>
              CV
            </span>
          </a>
        </div>
      </section>
      <section className="container py-[1.875rem] px-4 border-dashed border-outline border-b border-r border-l flex flex-col gap-8">
        <h2 className="text-xs uppercase font-medium text-accent-foreground">Tech Stack</h2>
        <TechStackCarrousel data={data.techStack} />
      </section>
      <section className="container py-[1.875rem] px-4 border-dashed border-outline border-b border-r border-l flex flex-col gap-8">
        <h2 className="text-xs uppercase font-medium text-accent-foreground">Featured Projects</h2>
        <div className="flex flex-col gap-6">
          {renderFeaturedProjects}
        </div>
        {/* <LinKButton href={paths.projects}>See all projects</LinKButton> */}
      </section>
      <ContactSection data={data.contactSection} />
      <BallFollower />
    </main>
  );
}
