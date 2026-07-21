import Image from "next/image";
import { Nav } from "@/components/Nav";
import { StoreBadges } from "@/components/StoreBadges";
import { education, profile, projects, skillGroups } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top" className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="py-20 sm:py-28">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">
            {profile.role}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            {profile.name}
          </h1>
          <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed text-pretty">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={profile.resume}
              download
              className="bg-accent rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="border-border hover:border-accent hover:text-accent rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* <p className="text-muted mt-8 text-sm">
            {profile.location} · 4 apps shipped to the App Store
          </p> */}
        </section>

        {/* Work */}
        <section id="work" className="border-border border-t py-16 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h2>
          {/* <p className="text-muted mt-2">
            Production apps I designed, built, and shipped end-to-end.
          </p> */}

          <div className="mt-10 space-y-5">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="border-border bg-surface/50 hover:border-accent/40 rounded-2xl border p-6 transition-colors sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <Image
                    src={project.icon}
                    alt=""
                    width={56}
                    height={56}
                    className="border-border size-14 shrink-0 rounded-[13px] border"
                  />
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
                    <p className="text-muted mt-0.5 text-sm">
                      {project.tagline} · {project.category}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {project.highlights.map((point) => (
                    <li key={point} className="text-muted flex gap-3 text-[15px] leading-relaxed">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: project.accent }}
                      />
                      <span className="text-pretty">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border-border text-muted rounded-md border px-2 py-0.5 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <StoreBadges project={project} />
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-border border-t py-16 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Skills</h2>
          <dl className="mt-8 grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <dt className="text-sm font-semibold tracking-wide uppercase">{group.label}</dt>
                <dd className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border-border bg-surface rounded-md border px-2.5 py-1 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>

          <div className="border-border mt-12 border-t pt-8">
            <h3 className="text-sm font-semibold tracking-wide uppercase">Education</h3>
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <p className="font-medium">{education.degree}</p>
              <p className="text-muted text-sm">
                {education.start} – {education.end}
              </p>
            </div>
            <p className="text-muted text-sm">{education.school}</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-border border-t py-16 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Get in touch</h2>
          <p className="text-muted mt-2 max-w-xl text-pretty">
            I&rsquo;m open to mobile development roles. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="bg-accent rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {profile.email}
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border hover:border-accent hover:text-accent rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors"
              >
                LinkedIn
              </a>
            )}
          </div>
        </section>
      </main>

      <footer className="border-border text-muted border-t py-8 text-center text-sm">
        <div className="mx-auto max-w-4xl px-6">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </footer>
    </>
  );
}
