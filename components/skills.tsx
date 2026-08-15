import { skills } from "@/lib/projects";

export function Skills() {
  return (
    <section id="skills" className="border-y-8 border-foreground">
      <div className="relative bg-foreground text-background">
        <div className="texture-lines-vertical pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
          <span className="font-mono text-xs tracking-widest text-background/60">
            CAPABILITIES
          </span>
          <h2 className="mt-6 font-display text-5xl font-bold tracking-tighter md:text-7xl">
            Skills
          </h2>

          <ul className="mt-12 space-y-3 font-mono text-sm tracking-widest text-background">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-4">
                <span className="h-2 w-2 border border-background" aria-hidden="true" />
                {skill}
              </li>
            ))}
          </ul>

          <div className="mt-16 grid grid-cols-1 gap-px border-y border-background/40 sm:grid-cols-3">
            {[
              ["06", "DESIGN COURSES"],
              ["08", "PROJECTS"],
              ["01", "PRINTING BUSINESS"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="flex flex-col gap-2 py-8 text-background"
              >
                <span className="font-display text-6xl font-bold tracking-tighter">
                  {value}
                </span>
                <span className="font-mono text-xs tracking-widest text-background/60">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}