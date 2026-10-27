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
    <main className="relative overflow-hidden px-4 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
      <div className="orange-stroke orange-stroke-right opacity-80" aria-hidden />
      <div className="relative mx-auto max-w-[1500px]">
        <Reveal>
          <div className="relative">
            <h1 className="font-display text-[clamp(3rem,12vw,8rem)] uppercase leading-[1] tracking-tight text-accent">
              <span className="block">{workPage.line1}</span>
              <span className="block">{workPage.line2}</span>
            </h1>
            <div className="mt-4 flex flex-wrap gap-2 md:absolute md:right-[8%] md:top-[18%] md:mt-0">
              {workPage.pills.map((pill, i) => (
                <span
                  key={pill}
                  className={`pill-tag ${i === 0 ? "float-a" : "float-b"}`}
                  style={{ ["--r" as string]: i === 0 ? "-7deg" : "8deg" }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-8 max-w-xl text-lg text-accent md:text-xl">{workPage.intro}</p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-start gap-5 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md font-display text-2xl uppercase leading-tight tracking-tight md:text-3xl">
            Want something like this for your brand?
          </p>
          <Link href="/contact" className="pill pill-dark gap-0 pr-1.5">
            <span className="px-1">Let&apos;s Talk</span>
            <span className="cta-arrow h-9 w-9">
              <svg width="14" height="14" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path
                  d="M1.46 8.54L8.54 1.46M3.06 1.29L8.54 1.46L8.71 6.95"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
