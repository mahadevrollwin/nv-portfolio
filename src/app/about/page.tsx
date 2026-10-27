import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { aboutBlurb, aboutPage, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: aboutPage.intro,
};

export default function AboutPage() {
  return (
    <main className="px-4 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Independent · Founded on craft
          </p>
          <h1 className="mt-4 font-display text-[clamp(3rem,12vw,8rem)] uppercase leading-[1] tracking-tight text-accent">
            {aboutPage.hero}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft md:text-xl">{aboutPage.intro}</p>
        </Reveal>

        <Reveal className="mt-16 border-t border-line pt-14 md:mt-24">
          <h2 className="max-w-3xl font-display text-[clamp(2rem,5vw,3.8rem)] uppercase leading-[1.05] tracking-tight">
            {aboutPage.storyTitle}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {aboutPage.story.map((para) => (
              <p key={para.slice(0, 24)} className="text-lg leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-2">
          {aboutPage.rules.map((rule, i) => (
            <Reveal key={rule.n} delay={0.05 * i}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                The office rules {rule.n}
              </p>
              <h3 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.4rem)] uppercase leading-[1.05] tracking-tight text-accent">
                {rule.title}
              </h3>
              <p className="mt-4 max-w-md text-ink-soft">{rule.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border-t border-line pt-14 md:mt-28">
          <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] uppercase leading-[1.05] tracking-tight">
            We&apos;ve got range
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {aboutPage.range.map((item) => (
              <span key={item} className="pill pill-light">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {aboutBlurb.pills.map((pill) => (
              <span key={pill} className="pill-tag">
                {pill}
              </span>
            ))}
          </div>
          <Link href="/contact" className="pill pill-dark mt-12 w-fit gap-0 pr-1.5">
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
          <a
            href={`mailto:${site.email}`}
            className="mt-6 block text-sm text-muted hover:text-accent"
          >
            {site.email}
          </a>
        </Reveal>
      </div>
    </main>
  );
}
