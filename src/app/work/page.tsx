import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product platforms, brand experiences, and digital systems designed and engineered by Mahadev.",
};

export default function WorkPage() {
  return (
    <main className="px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Work</p>
          <h1 className="font-display mt-4 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
            Projects that make an impact
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            From concept to launch — products, platforms, and experiences built to help teams move forward with clarity.
          </p>
        </Reveal>

        <div className="mt-16 space-y-6">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <article
                id={project.slug}
                className="scroll-mt-32 overflow-hidden border border-line bg-bg-elevated/40"
              >
                <div
                  className="relative aspect-[21/9] min-h-[180px]"
                  style={{ background: project.accent }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.16),transparent_50%)]" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                    <h2 className="font-display text-3xl font-semibold text-white md:text-5xl">
                      {project.title}
                    </h2>
                    <span className="text-sm text-white/70">{project.year}</span>
                  </div>
                </div>
                <div className="grid gap-8 p-6 md:grid-cols-[1fr_1.2fr] md:p-10">
                  <div>
                    <p className="text-lg text-ink-soft">{project.subtitle}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-wider text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-ink-soft">{project.description}</p>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink transition hover:text-accent"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border-t border-line pt-12 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Have a project in mind?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-accent-deep"
          >
            Let&apos;s talk
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
