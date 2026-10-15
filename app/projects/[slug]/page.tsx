import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject, getProjectNeighbors } from "@/lib/projects";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  ProjectMasthead,
  ProjectHero,
} from "@/components/project-masthead";
import { ProjectFactSheet } from "@/components/project-fact-sheet";
import {
  ProjectConcept,
  ProjectProgram,
  ProjectGallery,
} from "@/components/project-body";
import { ProjectStructure } from "@/components/project-structure";
import { ProjectPrevNext } from "@/components/project-prev-next";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ANDREA SAMSA`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getProjectNeighbors(slug);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <ProjectMasthead project={project} />
        <ProjectHero project={project} />
        <ProjectFactSheet project={project} />
        <ProjectConcept project={project} />
        <ProjectProgram project={project} />
        <ProjectGallery project={project} />
        <ProjectStructure project={project} />
        <ProjectPrevNext prev={prev} next={next} />
      </main>
      <SiteFooter />
    </div>
  );
}