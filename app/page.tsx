import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { SelectedWorks } from "@/components/selected-works";
import { ProjectIndex } from "@/components/project-index";
import { Skills } from "@/components/skills";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <SelectedWorks />
        <ProjectIndex />
        <Skills />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}