"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  aboutBlurb,
  heroTags,
  projects,
  services,
  site,
  testimonials,
} from "@/lib/content";
import Faq from "@/components/Faq";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const t = testimonials[activeTestimonial];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
        <div className="orange-rings" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          <div className="relative z-10">
            <motion.h1
              className="display-xl text-[clamp(3.4rem,14vw,9.5rem)] text-accent"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              {site.tagline}
            </motion.h1>

            <motion.div
              className="mt-6 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {heroTags.map((tag, i) => (
                <span
                  key={tag}
                  className={`pill bg-black px-4 py-2 text-xs font-medium text-white ${
                    i === 0 ? "tag-float" : i === 1 ? "tag-float-alt" : ""
                  }`}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative z-10 mx-auto w-full max-w-md lg:max-w-none"
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-sunglasses.png"
              alt=""
              width={1024}
              height={752}
              className="h-auto w-full object-contain"
              decoding="async"
              fetchPriority="high"
              draggable={false}
            />
          </motion.div>
        </div>
      </section>

      {/* About blurb */}
      <section className="border-y border-line px-5 py-16 md:px-8 md:py-24">
        <Reveal className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {aboutBlurb.eyebrow}
          </p>
          <p className="mt-6 max-w-4xl text-[clamp(1.35rem,3vw,2.15rem)] leading-[1.25] text-ink">
            {aboutBlurb.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {aboutBlurb.pills.map((pill) => (
              <span key={pill} className="pill pill-light text-sm">
                {pill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Selected works */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-[clamp(2.6rem,8vw,6rem)] uppercase leading-[0.9] tracking-tight">
              Selected Works
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {projects.slice(0, 4).map((project, i) => (
              <Reveal key={project.slug} delay={0.05 * i}>
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md font-display text-2xl uppercase leading-tight tracking-tight md:text-3xl">
              We could keep going, but there&apos;s a whole page for that.
            </p>
            <Link href="/work" className="pill pill-dark">
              See all projects
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="capabilities" className="border-y border-line bg-bg-elevated px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              The plot thickens · Very convenient
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.6rem,8vw,6rem)] uppercase leading-[0.9] tracking-tight">
              This is our thing
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={0.04 * i}>
                <h3 className="font-display whitespace-pre-line text-[clamp(1.8rem,3.5vw,2.6rem)] uppercase leading-[0.95] tracking-tight text-accent">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-sm text-ink-soft">{service.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,7vw,5.5rem)] uppercase leading-[0.9] tracking-tight">
              Apparently, they like us
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="flex flex-wrap gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.author}
                  type="button"
                  onClick={() => setActiveTestimonial(i)}
                  className={`pill text-left text-sm ${
                    i === activeTestimonial ? "pill-dark" : "pill-light"
                  }`}
                >
                  {item.highlight}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={t.author}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="max-w-2xl"
              >
                <p className="text-[clamp(1.25rem,2.6vw,1.85rem)] leading-snug text-ink">
                  “{t.quote}”
                </p>
                <footer className="mt-6 text-sm text-muted">
                  <span className="font-medium text-ink">{t.author}</span> — {t.role}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,7vw,5.5rem)] uppercase leading-[0.9] tracking-tight">
              Things you might ask
            </h2>
          </Reveal>
          <Reveal className="mt-10" delay={0.08}>
            <Faq />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
