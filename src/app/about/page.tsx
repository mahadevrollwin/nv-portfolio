import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { aboutStats, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mahadev is a product designer and full-stack engineer building digital platforms with clarity, motion, and production-grade craft.",
};

export default function AboutPage() {
  return (
    <main className="px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">About</p>
          <h1 className="font-display mt-4 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
            {site.fullName} — shaping digital products with intention.
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                I&apos;m a product-minded engineer and designer who builds end-to-end web experiences — from first narrative and interaction model to production systems that hold up under real use.
              </p>
              <p>
                My work spans brand sites, operator tools, and consumer platforms. Across every project, the goal is the same: reduce friction, raise clarity, and make the product feel inevitable.
              </p>
              <p>
                I care about motion that communicates hierarchy, typography that carries brand, and engineering that stays fast as the product grows.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-sm border border-line bg-bg-elevated/50 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">At a glance</p>
              <dl className="mt-6 space-y-5">
                {aboutStats.map((stat) => (
                  <div key={stat.label} className="flex items-baseline justify-between gap-4 border-b border-line pb-4 last:border-0">
                    <dt className="text-sm text-muted">{stat.label}</dt>
                    <dd className="font-display text-2xl font-semibold">{stat.value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex text-sm font-semibold uppercase tracking-wider text-ink hover:text-accent"
              >
                GitHub profile →
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">How I work</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Discover",
                copy: "Clarify the audience, constraints, and commercial goal before a single layout is locked.",
              },
              {
                title: "Design & build",
                copy: "Prototype in the medium that ships — composition, motion, and code evolving together.",
              },
              {
                title: "Launch & refine",
                copy: "Ship clean, measure what matters, and iterate with systems that stay maintainable.",
              },
            ].map((step) => (
              <div key={step.title} className="border-t border-line pt-6">
                <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-ink-soft">{step.copy}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-20 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-accent-deep"
          >
            Work with me
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
