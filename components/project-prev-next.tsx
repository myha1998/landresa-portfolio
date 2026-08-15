import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import type { Project } from "@/lib/projects";

export function ProjectPrevNext({
  prev,
  next,
}: {
  prev: Project | null;
  next: Project | null;
}) {
  return (
    <section className="border-t-8 border-foreground bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-px border border-border-light sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex cursor-pointer flex-col gap-3 bg-white p-8 transition-colors duration-100 hover:bg-foreground hover:text-background"
            >
              <span className="font-mono text-xs tracking-widest opacity-60">← PREVIOUS</span>
              <span className="font-display text-2xl font-bold tracking-tight">
                {prev.title}
              </span>
              <span className="font-mono text-xs tracking-widest opacity-60">
                {prev.index} · {prev.category}
              </span>
            </Link>
          ) : (
            <Link
              href="/#work"
              className="group flex cursor-pointer flex-col gap-3 bg-white p-8 transition-colors duration-100 hover:bg-foreground hover:text-background"
            >
              <span className="font-mono text-xs tracking-widest opacity-60">← BACK TO</span>
              <span className="font-display text-2xl font-bold tracking-tight">All Works</span>
            </Link>
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex cursor-pointer flex-col items-end gap-3 bg-white p-8 text-right transition-colors duration-100 hover:bg-foreground hover:text-background"
            >
              <span className="font-mono text-xs tracking-widest opacity-60">NEXT →</span>
              <span className="font-display text-2xl font-bold tracking-tight">
                {next.title}
              </span>
              <span className="font-mono text-xs tracking-widest opacity-60">
                {next.index} · {next.category}
              </span>
            </Link>
          ) : (
            <Link
              href="/#work"
              className="group flex cursor-pointer flex-col items-end gap-3 bg-white p-8 text-right transition-colors duration-100 hover:bg-foreground hover:text-background"
            >
              <span className="font-mono text-xs tracking-widest opacity-60">BACK TO</span>
              <span className="font-display text-2xl font-bold tracking-tight">All Works</span>
            </Link>
          )}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <span className="font-mono text-xs tracking-widest text-muted-foreground">
            INTERESTED IN THIS PROJECT?
          </span>
          <Link
            href="/#contact"
            className="group inline-flex cursor-pointer items-center gap-3 border-2 border-foreground bg-foreground px-8 py-4 font-mono text-xs font-medium uppercase tracking-widest text-background transition-colors duration-100 hover:bg-background hover:text-foreground"
          >
            Let&apos;s talk
            <ArrowRight className="transition-transform duration-100 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}