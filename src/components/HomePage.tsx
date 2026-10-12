"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  capabilities,
  projects,
  site,
  testimonials,
} from "@/lib/content";
import HeroVisual from "@/components/HeroVisual";
import Ornament from "@/components/Ornament";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonial = testimonials[activeTestimonial];

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pt-32">
        <div className="cinema-glow absolute inset-0" />

        <div className="relative mx-auto grid min-h-[calc(100svh-9rem)] max-w-6xl items-end gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="order-2 z-10 max-w-xl lg:order-1 lg:pb-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Ornament label="Now Showing" className="mb-6 max-w-sm justify-start" />
            </motion.div>
            <motion.h1
              className="font-display text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Digital products for{" "}
              <span className="text-gold-gradient gold-shimmer">ambitious builders.</span>
            </motion.h1>
            <motion.p
              className="mt-5 max-w-md text-sm uppercase tracking-[0.16em] text-ink-soft"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              I collaborate with founders and teams to shape interfaces, platforms, and brand experiences that move forward.
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.7 }}
            >
              <Link href="/contact" className="btn-cinematic">
                Book a call
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative border-y border-line px-6 py-24 md:px-10 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,35,58,0.08),transparent_60%)]" />
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <Ornament label="Prologue" className="mb-8" />
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3.4rem)] font-semibold leading-tight tracking-tight">
            I design for the future — where strategy, experience, and technology shape what&apos;s next.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-ink-soft">
            I don&apos;t just ship pages. I engineer digital experiences and product systems that solve real problems and scale with the business behind them.
          </p>
        </Reveal>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="overflow-hidden py-16 md:py-20">
        <Reveal className="mb-10 px-6 md:px-10">
          <Ornament label="Capabilities" className="max-w-md justify-start" />
        </Reveal>
        <div className="marquee gap-5 pr-5">
          {[...capabilities, ...capabilities].map((cap, i) => (
            <div
              key={`${cap.title}-${i}`}
              className="poster-frame w-[280px] shrink-0 bg-bg-poster/80 p-7 md:w-[320px]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-crimson">
                Scene {String((i % capabilities.length) + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-gold-gradient">
                {cap.title}
              </h3>
              <ul className="mt-5 space-y-2 text-sm uppercase tracking-wider text-muted">
                {cap.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative px-6 py-24 md:px-10 md:py-28">
        <div className="pointer-events-none absolute inset-0 cinema-glow opacity-50" />
        <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.4fr] md:items-end">
          <Reveal>
            <Ornament label="Reviews" className="mb-5 max-w-xs justify-start" />
            <h2 className="font-display mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
              Trusted by product teams
            </h2>
            <div className="mt-8 flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === activeTestimonial ? "bg-accent shadow-[0_0_12px_rgba(232,184,74,0.6)]" : "bg-ink/20"
                  }`}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeTestimonial}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="border-l-2 border-accent pl-6 md:pl-8"
              >
                <p className="font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-6 text-sm text-muted">
                  {testimonial.author} — {testimonial.role}
                  <span className="ml-4 text-accent">
                    {String(activeTestimonial + 1).padStart(2, "0")} /{" "}
                    {String(testimonials.length).padStart(2, "0")}
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </Reveal>
        </div>
      </section>

      {/* Selected work */}
      <section className="px-6 pb-8 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-4 flex items-end justify-between gap-6">
            <div>
              <Ornament label="Featured Reels" className="mb-4 max-w-sm justify-start" />
              <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Projects that make an impact
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden text-sm font-semibold uppercase tracking-wider text-accent transition hover:text-ink sm:inline-flex"
            >
              All work →
            </Link>
          </Reveal>

          {projects.slice(0, 2).map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mid CTA */}
      <section className="relative px-6 py-24 md:px-10 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,184,74,0.1),transparent_55%)]" />
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <Ornament label="Interval" className="mb-8" />
          <h2 className="font-display text-[clamp(2rem,5vw,3.8rem)] font-semibold tracking-tight">
            Let&apos;s build your next experience
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
            From concept to launch, I bring strategy, design, and engineering together into cohesive, future-ready products.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-cinematic">
              Start a project
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-cinema"
            >
              View GitHub
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
