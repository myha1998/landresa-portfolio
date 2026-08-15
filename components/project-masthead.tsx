import Link from "next/link";
import { ImageSlot } from "@/components/image-slot";
import type { Project } from "@/lib/projects";

export function ProjectMasthead({ project }: { project: Project }) {
  return (
    <header className="relative overflow-hidden border-b-8 border-foreground">
      <div className="texture-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 py-10 md:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/#work"
            className="group inline-flex cursor-pointer items-center gap-3 font-mono text-xs tracking-widest underline-offset-4 hover:underline"
          >
            <span aria-hidden="true" className="transition-transform duration-100 group-hover:-translate-x-1">
              ←
            </span>
            ALL WORK
          </Link>
          <span className="font-mono text-xs tracking-widest text-muted-foreground">
            {project.index} / 08
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display text-4xl font-black leading-[0.95] tracking-tighter text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
              {project.title}
            </h1>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4 lg:pb-2">
            <span className="font-mono text-xs tracking-widest">{project.category}</span>
            <span className="font-mono text-xs tracking-widest text-muted-foreground">
              {project.year}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-14 lg:px-12">
        <ImageSlot
          src={project.image || undefined}
          alt={project.alt}
          label={project.alt}
          ratio="aspect-[16/9]"
        />
      </div>
    </section>
  );
}