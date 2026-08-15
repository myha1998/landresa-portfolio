import type { Project } from "@/lib/projects";
import { ImageSlot } from "@/components/image-slot";

export function ProjectConcept({ project }: { project: Project }) {
  return (
    <section className="border-t border-border-light bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs tracking-widest text-muted-foreground">
              03 — CONCEPT
            </span>
          </div>
          <div className="lg:col-span-8">
            <p className="max-w-3xl font-display text-2xl italic leading-snug tracking-tight text-foreground md:text-3xl">
              {project.concept}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectProgram({ project }: { project: Project }) {
  if (project.program.length === 0) return null;
  return (
    <section className="border-t border-border-light bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 lg:px-12">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          04 — PROGRAM
        </span>
        <ul className="mt-8 grid grid-cols-1 gap-px border border-border-light sm:grid-cols-2 lg:grid-cols-3">
          {project.program.map((item) => (
            <li
              key={item}
              className="group flex cursor-default items-center justify-between gap-4 bg-white p-6 font-display text-lg font-semibold tracking-tight transition-colors duration-100 hover:bg-foreground hover:text-background"
            >
              {item}
              <span className="h-2 w-2 shrink-0 border border-current opacity-50" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProjectGallery({ project }: { project: Project }) {
  return (
    <section className="border-t border-border-light bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 lg:px-12">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          05 — GALLERY
        </span>
        <div className="mt-8 grid grid-cols-1 gap-10">
          {project.gallery.map((item, i) => (
            <figure
              key={i}
              className={`flex flex-col gap-3 ${
                item.wide ? "md:col-span-2" : ""
              }`}
            >
              <ImageSlot
                src={item.src || undefined}
                label={item.cap}
                ratio={item.wide ? "aspect-[16/9]" : "aspect-[4/3]"}
              />
              <figcaption className="font-mono text-xs tracking-widest text-muted-foreground">
                {item.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}