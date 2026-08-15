import type { Project } from "@/lib/projects";

export function ProjectStructure({ project }: { project: Project }) {
  if (!project.structure) return null;
  const { primary, secondary } = project.structure;
  return (
    <section className="border-t border-border-light bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 lg:px-12">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          06 — STRUCTURAL / TECHNICAL
        </span>
        <div className="mt-8 grid grid-cols-1 gap-px border border-border-light lg:grid-cols-2">
          <div className="bg-white p-8">
            <h3 className="font-display text-2xl font-bold tracking-tight">{primary.title}</h3>
            <ul className="mt-6 space-y-4">
              {primary.items.map((item) => (
                <li key={item} className="flex gap-4 font-body text-base leading-relaxed">
                  <span className="mt-2 h-2 w-2 shrink-0 border border-foreground" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8">
            <h3 className="font-display text-2xl font-bold tracking-tight">{secondary.title}</h3>
            <ul className="mt-6 space-y-4">
              {secondary.items.map((item) => (
                <li key={item} className="flex gap-4 font-body text-base leading-relaxed">
                  <span className="mt-2 h-2 w-2 shrink-0 border border-foreground" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {project.site && (
          <p className="mt-8 max-w-3xl font-mono text-xs leading-relaxed tracking-widest text-muted-foreground">
            SITE — {project.site}
          </p>
        )}
      </div>
    </section>
  );
}