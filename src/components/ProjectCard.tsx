import Link from "next/link";
import type { projects } from "@/lib/content";

type Project = (typeof projects)[number];

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative overflow-hidden border-t border-line py-10 md:py-14">
      <div className="grid items-end gap-8 md:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {String(index + 1).padStart(2, "0")} / {project.year}
          </p>
          <h3 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-2 text-lg text-ink-soft">{project.subtitle}</p>
          <p className="mt-5 max-w-md text-ink-soft">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-wider text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={`/work#${project.slug}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink transition group-hover:text-accent"
          >
            View project
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div
          className="relative aspect-[16/11] overflow-hidden rounded-sm"
          style={{ background: project.accent }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
          <div className="absolute inset-x-8 bottom-8 top-8 rounded-sm border border-white/15 bg-white/5 backdrop-blur-[2px] transition duration-500 group-hover:scale-[1.02]" />
          <p className="font-display absolute bottom-10 left-10 text-4xl font-semibold text-white/90 md:text-5xl">
            {project.title}
          </p>
        </div>
      </div>
    </article>
  );
}
