import Link from "next/link";
import { featuredProjects } from "@/lib/projects";
import { ImageSlot } from "@/components/image-slot";
import { ArrowRight } from "@/components/icons";

export function SelectedWorks() {
  return (
    <section id="work" className="relative border-t-8 border-foreground bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
        <div className="flex items-end justify-between border-b-2 border-foreground pb-6">
          <h2 className="font-display text-5xl font-bold tracking-tighter text-foreground md:text-6xl">
            Selected Works
          </h2>
          <span className="hidden font-mono text-xs tracking-widest text-muted-foreground md:block">
            01 — 04
          </span>
        </div>

        <div className="mt-2 divide-y-2 divide-foreground">
          {featuredProjects.map((project, i) => {
            const reverse = i % 2 === 1;
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group grid cursor-pointer grid-cols-1 gap-8 px-0 py-12 transition-colors duration-100 hover:bg-foreground hover:text-background md:grid-cols-12 md:items-center"
              >
                <div
                  className={
                    reverse
                      ? "order-2 md:order-1 md:col-span-7"
                      : "order-2 md:order-2 md:col-span-7"
                  }
                >
                  <ImageSlot
                    src={project.image || undefined}
                    alt={project.alt}
                    label={project.alt}
                    ratio="aspect-[16/10]"
                  />
                </div>

                <div
                  className={
                    reverse
                      ? "order-1 md:order-2 md:col-span-5 md:pr-8"
                      : "order-1 md:order-1 md:col-span-5 md:pl-8 md:text-right"
                  }
                >
                  <div
                    className={`flex flex-col gap-5 ${
                      reverse ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <span className="font-mono text-sm tracking-widest text-inherit">
                      {project.index}
                    </span>
                    <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-inherit md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs tracking-widest text-inherit opacity-60">
                      {project.category} · {project.year}
                    </p>
                    <p className="max-w-md font-body text-base leading-relaxed text-inherit opacity-80">
                      {project.description}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest">
                      View Project
                      <ArrowRight className="transition-transform duration-100 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}