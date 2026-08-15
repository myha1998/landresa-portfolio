import type { Project } from "@/lib/projects";

export function ProjectFactSheet({ project }: { project: Project }) {
  const rows: [string, string][] = [
    ["YEAR", project.year],
    ["COURSE", project.course],
    ["LOCATION", project.location],
    ["TOOLS", project.tools],
    ["ROLE", project.role],
  ];

  return (
    <section className="border-t border-border-light bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 lg:px-12">
        <dl className="grid grid-cols-1 gap-px border border-border-light sm:grid-cols-2 lg:grid-cols-5">
          {rows.map(([label, value]) => (
            <div key={label} className="flex flex-col gap-2 bg-white p-6">
              <dt className="font-mono text-xs tracking-widest text-muted-foreground">{label}</dt>
              <dd className="font-display text-base font-semibold tracking-tight">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}