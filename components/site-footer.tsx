const links = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border-light bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-lg font-semibold tracking-tight text-foreground">
            ANDREA SAMSAR
          </p>
          <nav aria-label="Footer" className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs tracking-widest text-foreground underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-border-light pt-6 font-mono text-xs tracking-widest text-muted-foreground md:flex-row md:justify-between">
          <span>© 2026 ANDREA SAMSAR · ARCHITECTURE PORTFOLIO</span>
          <span>UNIVERSITY OF THE IMMACULATE CONCEPTION</span>
        </div>
      </div>
    </footer>
  );
}