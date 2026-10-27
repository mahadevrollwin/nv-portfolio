import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { aboutPage, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: aboutPage.intro,
};

export default function AboutPage() {
  return (
    <main className="px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Independent · Founded on craft
          </p>
          <h1 className="mt-4 font-display text-[clamp(3rem,12vw,8rem)] uppercase leading-[0.88] tracking-tight text-accent">
            {aboutPage.hero}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft md:text-xl">{aboutPage.intro}</p>
        </Reveal>

        <Reveal className="mt-20 md:mt-28" delay={0.05}>
          <h2 className="max-w-4xl font-display text-[clamp(2rem,5vw,3.8rem)] uppercase leading-[0.95] tracking-tight">
            {aboutPage.storyTitle}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-10">
            {aboutPage.story.map((para) => (
              <p key={para.slice(0, 24)} className="text-base leading-relaxed text-ink-soft md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </Reveal>

        <section className="mt-20 border-t border-line pt-16 md:mt-28 md:pt-20">
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] uppercase leading-[0.9] tracking-tight">
              Behind the work
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {aboutPage.rules.map((rule, i) => (
              <Reveal key={rule.n} delay={0.05 * i} className="rounded-[1.5rem] bg-bg-elevated p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  The office rules {rule.n}
                </p>
                <h3 className="mt-4 font-display text-[clamp(1.5rem,3vw,2.2rem)] uppercase leading-[0.95] tracking-tight">
                  {rule.title}
                </h3>
                <p className="mt-4 text-ink-soft">{rule.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-20 md:mt-28">
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] uppercase leading-[0.9] tracking-tight">
              We&apos;ve got range
            </h2>
          </Reveal>
          <Reveal className="mt-8" delay={0.06}>
            <div className="flex flex-wrap gap-2">
              {aboutPage.range.map((item) => (
                <span key={item} className="pill pill-light">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal className="mt-20 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-28">
          <Link href="/contact" className="pill pill-dark w-fit">
            Let&apos;s Talk
          </Link>
          <a href={`mailto:${site.email}`} className="text-sm text-muted hover:text-accent">
            {site.email}
          </a>
        </Reveal>
      </div>
    </main>
  );
}
