import Link from "next/link";
import { facts } from "@/lib/projects";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t-8 border-foreground bg-background">
      <div className="texture-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="font-mono text-xs tracking-widest text-muted-foreground">
              06 — ABOUT / MANIFESTO
            </span>
            <h2 className="mt-6 font-display text-5xl font-bold tracking-tighter text-foreground md:text-6xl">
              About
            </h2>
            <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-foreground">
              <p>
                I am a dedicated architecture student at the{" "}
                <strong className="font-medium">University of the Immaculate Conception</strong>,
                with a versatile skill set spanning traditional drafting and digital design.
                I am proficient in AutoCAD, SketchUp, Enscape, Photoshop, and CorelDRAW,
                allowing me to create precise and compelling visual narratives. Beyond my
                academic work, I launched a family-run printing services business — a venture
                that cultivated my discipline, problem-solving abilities, and effective time
                management.
              </p>
              <p>
                I am eager to bring this blend of technical expertise and business-minded
                adaptability to a professional internship, where I can contribute to innovative
                projects and grow as a thoughtful, future architect.
              </p>
            </div>

            <blockquote className="mt-12 border-l-4 border-foreground pl-6">
              <p className="font-display text-2xl italic leading-snug tracking-tight text-foreground md:text-3xl">
                “To me, architecture is about enriching lives through the thoughtful synthesis
                of people and their environment. Drawing inspiration from masters like
                Heatherwick and Wright, I strive to design with empathy and ecological awareness.”
              </p>
            </blockquote>
          </div>

          <div className="md:col-span-5">
            <div className="border-2 border-foreground p-8">
              <h3 className="font-mono text-xs tracking-widest text-muted-foreground">
                PROFILE
              </h3>
              <dl className="mt-6 space-y-5">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono text-xs tracking-widest text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 font-display text-lg font-semibold tracking-tight">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                href="#contact"
                className="mt-8 inline-flex cursor-pointer border-2 border-foreground px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest transition-colors duration-100 hover:bg-foreground hover:text-background"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}