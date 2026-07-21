import { profile } from "@/lib/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="border-border/70 bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted hover:text-foreground rounded-md px-2.5 py-1.5 text-sm transition-colors sm:px-3"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="border-border hover:border-accent hover:text-accent ml-1 hidden rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors sm:inline-block"
          >
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}
