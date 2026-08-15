import Link from "next/link";
import { projects } from "@/lib/projects";

export function ProjectIndex() {
  return (
    <section id="index" className="relative border-t border-border-light bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
        <div className="flex items-end justify-between border-b-2 border-foreground pb-6">
          <h2 className="font-display text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
            Index
          </h2>
          <span className="hidden font-mono text-xs tracking-widest text-muted-foreground md:block">
            ALL PLATES · AR7 — AR8
          </span>
        </div>

        <div className="mt-8">
          <div className="mb-4 hidden grid-cols-12 gap-4 px-0 pb-2 font-mono text-xs tracking-widest text-muted-foreground md:grid">
            <span className="col-span-1">#</span>
            <span className="col-span-6">TITLE</span>
            <span className="col-span-3">CATEGORY</span>
            <span className="col-span-2 text-right">STATUS</span>
          </div>

          <ol className="divide-y divide-border-light">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group grid cursor-pointer grid-cols-12 items-center gap-4 py-5 transition-colors duration-100 hover:bg-foreground hover:text-background"
                >
                  <span className="col-span-3 font-mono text-sm tracking-widest md:col-span-1">
                    {p.index}
                  </span>
                  <span className="col-span-9 font-display text-lg font-semibold tracking-tight md:col-span-6">
                    {p.title}
                  </span>
                  <span className="col-span-7 col-start-4 font-mono text-xs tracking-widest text-muted-foreground group-hover:text-background/60 md:col-span-3 md:col-start-8">
                    {p.category}
                  </span>
                  <span className="col-span-3 font-mono text-xs tracking-widest md:col-span-2 md:text-right">
                    {p.status}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}