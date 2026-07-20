import type { Project } from "@/lib/content";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0 fill-current">
      <path d="M16.365 1.43c0 1.14-.42 2.2-1.25 3.02-.99.99-2.1 1.56-3.3 1.47-.03-1.2.44-2.34 1.2-3.13.86-.9 2.3-1.55 3.35-1.6.02.08.02.16 0 .24zM20.7 17.02c-.5 1.16-.74 1.67-1.39 2.7-.9 1.43-2.17 3.2-3.74 3.22-1.4.01-1.76-.91-3.66-.9-1.9.01-2.29.92-3.69.9-1.57-.02-2.77-1.63-3.67-3.05C1.94 16.9 1.68 12.2 3.2 9.72c1.08-1.77 2.79-2.8 4.4-2.8 1.63 0 2.66.9 4.01.9 1.31 0 2.11-.9 4-.9 1.42 0 2.93.78 4 2.12-3.52 1.93-2.95 6.96.09 8.98z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0 fill-current">
      <path d="M3.6 1.85a1 1 0 0 0-.35.76v18.78a1 1 0 0 0 .35.76l.1.06 10.5-10.4v-.24L3.7 1.79l-.1.06zM17.7 15.3l-3.35-3.32v-.24l3.36-3.33.08.05 3.98 2.24c1.13.64 1.13 1.68 0 2.32l-3.98 2.24-.08.04zM14.44 12.1 3.85 22.6c.37.4.99.44 1.68.06l12.4-6.99-3.5-3.56zM14.44 11.87l3.5-3.55L5.55 1.33c-.7-.39-1.31-.34-1.68.06l10.57 10.48z" />
    </svg>
  );
}

const base =
  "inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors";

export function StoreBadges({ project }: { project: Project }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {project.ios.status === "live" && (
        <a
          href={project.ios.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} border-border bg-surface text-foreground hover:border-accent hover:text-accent`}
        >
          <AppleIcon />
          App Store
        </a>
      )}

      {project.android.status === "live" && (
        <a
          href={project.android.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} border-border bg-surface text-foreground hover:border-accent hover:text-accent`}
        >
          <PlayIcon />
          Google Play
        </a>
      )}

      {/* Reserves the slot so cards stay aligned; deliberately not a link. */}
      {project.android.status === "placeholder" && (
        <span
          aria-hidden="true"
          className={`${base} border-border/60 border-dashed text-muted/45 select-none`}
        >
          <PlayIcon />
          Google Play
        </span>
      )}
    </div>
  );
}
