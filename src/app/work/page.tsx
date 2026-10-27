import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects, workPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: workPage.intro,
};

export default function WorkPage() {
  return (
    <main className="px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {workPage.eyebrow} · {workPage.note}
          </p>
          <h1 className="mt-4 font-display text-[clamp(3rem,12vw,8rem)] uppercase leading-[0.88] tracking-tight text-accent">
            {workPage.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft md:text-xl">{workPage.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={0.04 * i}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-start gap-5 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md font-display text-2xl uppercase leading-tight tracking-tight md:text-3xl">
            Want something like this for your product?
          </p>
          <Link href="/contact" className="pill pill-dark">
            Let&apos;s Talk
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
