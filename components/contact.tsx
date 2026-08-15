import { contact } from "@/lib/projects";
import { ArrowRight } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="border-t-8 border-foreground bg-foreground text-background">
      <div className="relative overflow-hidden">
        <div className="texture-lines-vertical pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
          <span className="font-mono text-xs tracking-widest text-background/60">
            07 — CONTACT
          </span>
          <h2 className="mt-6 font-display text-[18vw] font-black leading-none tracking-tighter sm:text-8xl md:text-9xl">
            LET&apos;S TALK
          </h2>
          <p className="mt-6 max-w-xl font-body text-xl italic leading-relaxed text-background/80">
            Have a project in mind, an internship opening, or just want to talk architecture?
          </p>

          <dl className="mt-12 space-y-3 font-mono text-sm tracking-widest text-background">
            <div className="flex flex-col gap-1 sm:flex-row">
              <dt className="w-28 text-background/60">EMAIL</dt>
              <dd>
                <a
                  href={`mailto:${contact.email}`}
                  className="underline-offset-4 hover:underline"
                >
                  {contact.email}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row">
              <dt className="w-28 text-background/60">PHONE</dt>
              <dd>{contact.phone}</dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row">
              <dt className="w-28 text-background/60">LOCATION</dt>
              <dd>{contact.location}</dd>
            </div>
          </dl>

          <a
            href={`mailto:${contact.email}`}
            className="group mt-12 inline-flex cursor-pointer items-center gap-3 border-2 border-background px-8 py-4 font-mono text-xs font-medium uppercase tracking-widest transition-colors duration-100 hover:bg-background hover:text-foreground"
          >
            Send a message
            <ArrowRight className="transition-transform duration-100 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}