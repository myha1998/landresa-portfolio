import { ArrowDown } from "@/components/icons";
import { ImageSlot } from "@/components/image-slot";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="texture-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col px-6 pb-24 pt-16 md:px-8 md:pb-32 lg:px-12">
        <div className="flex items-center gap-3">
          <span
            className="inline-block h-4 w-4 border-2 border-foreground"
            aria-hidden="true"
          />
          <span className="h-px flex-1 bg-foreground" aria-hidden="true" />
          <span className="font-mono text-xs tracking-widest text-foreground">
            AR · UNIVERSITY OF THE IMMACULATE CONCEPTION · EST. 2026
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h1 className="font-display text-[20vw] font-black leading-[0.9] tracking-tighter text-foreground sm:text-9xl lg:text-10xl">
              CAMSA
            </h1>
            <p className="mt-5 max-w-xl font-body text-xl italic leading-relaxed text-foreground md:text-2xl">
              Architectural Design · Davao, Philippines
            </p>
          </div>

          <div className="lg:col-span-5">
            <ImageSlot
              src="/img/webp/civil-center-cultural-facility/aerial.webp"
              alt="Civil Center with Cultural Facility — aerial perspective render"
              label="AERIAL PERSPECTIVE — CIVIL CENTER"
              ratio="aspect-[4/3]"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-mono text-xs tracking-widest text-muted-foreground">
            ARCHITECTURAL DESIGN · RENDERING · CONCEPT BOARDS
          </p>
          <a
            href="#work"
            className="group inline-flex cursor-pointer items-center gap-3 border-2 border-foreground bg-foreground px-8 py-4 font-mono text-xs font-medium uppercase tracking-widest text-background transition-colors duration-100 hover:bg-background hover:text-foreground"
          >
            Selected Works
            <ArrowDown className="transition-transform duration-100 group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}