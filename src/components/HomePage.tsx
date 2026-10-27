"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  aboutBlurb,
  heroTags,
  projects,
  site,
  testimonials,
} from "@/lib/content";
import { assets } from "@/lib/assets";
import Faq from "@/components/Faq";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import ServicesThing from "@/components/ServicesThing";

function Smile() {
  return (
    <span className="smile-mark" aria-hidden>
      <svg viewBox="0 0 75 36" fill="none">
        <path
          d="M0 21.6C0 21.6 6.6 2.9 15.5 4.4C25.8 6.3 5.7 21.3 12.5 29.2C22.9 41.1 29.4-7.9 42.5 1.1C53.3 8.6 27.2 26.8 37.7 34.7C50.8 44.7 58.1-7.9 67.3 5.6C72.5 13.2 58 30.4 67.3 30.4C70.8 30.4 75 19.8 75 19.8"
          stroke="#ff5400"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const t = testimonials[activeTestimonial];
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <main>
      {/* Hero — matches two26: headline + floating tags + illustrated video */}
      <section className="relative overflow-hidden pb-0 pt-24 md:pt-28">
        <div className="orange-stroke orange-stroke-left" aria-hidden />
        <div className="orange-stroke orange-stroke-right" aria-hidden />

        <div className="relative z-10 mx-auto max-w-[1500px] px-4 md:px-8">
          <div className="relative min-h-[42vh] md:min-h-[48vh]">
            <motion.h1
              className="display-xl relative z-10 max-w-[18ch] text-[clamp(3.2rem,13vw,9.2rem)] text-accent"
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {site.tagline}
            </motion.h1>

            {heroTags.map((tag, i) => (
              <motion.span
                key={tag.label}
                className={`pill-tag absolute z-20 hidden sm:inline-flex ${i % 2 ? "float-b" : "float-a"}`}
                style={
                  {
                    left: tag.x,
                    top: tag.y,
                    ["--r" as string]: `${tag.rotate}deg`,
                    transform: `rotate(${tag.rotate}deg)`,
                  } as CSSProperties
                }
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
              >
                {tag.label}
              </motion.span>
            ))}

            <motion.div
              className="mt-5 flex flex-wrap gap-2 sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {heroTags.map((tag) => (
                <span key={tag.label} className="pill-tag">
                  {tag.label}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="hero-video-wrap relative z-10 mt-4 md:mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={assets.heroPoster}
            className="w-full"
          >
            <source src={assets.heroVideoWebm} type="video/webm" />
            <source src={assets.heroVideoMp4} type="video/mp4" />
          </video>
        </motion.div>
      </section>

      {/* About blurb + media strip */}
      <section className="overflow-hidden border-y border-line px-4 py-16 md:px-8 md:py-24">
        <Reveal className="mx-auto max-w-[1500px]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            {aboutBlurb.eyebrow}
          </p>
          <p className="mt-6 max-w-4xl text-[clamp(1.35rem,3vw,2.2rem)] leading-[1.22] text-ink">
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

        <div className="mt-14 overflow-hidden">
          <div className="marquee-track gap-4 px-2">
            {[...aboutBlurb.media, ...aboutBlurb.media].map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className="relative h-44 w-36 shrink-0 overflow-hidden rounded-2xl md:h-56 md:w-44"
              >
                {item.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                    src={item.src}
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.src} alt="" className="h-full w-full object-cover" loading="lazy" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected works */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <h2 className="font-display text-[clamp(2.6rem,8vw,6.2rem)] uppercase leading-[0.88] tracking-tight">
              Selected Works
              <Smile />
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          <Reveal className="mt-14 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg font-display text-[clamp(1.6rem,3vw,2.6rem)] uppercase leading-[0.95] tracking-tight">
              We could keep going, but there&apos;s a whole page for that.
            </p>
            <Link href="/work" className="pill pill-dark gap-0 pr-1.5">
              <span className="px-1">See all projects</span>
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
      </section>

      <ServicesThing />

      {/* Testimonials */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,7vw,5.6rem)] uppercase leading-[0.88] tracking-tight">
              Apparently, they like us
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
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
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="max-w-2xl"
              >
                <div className="mb-6 flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.photo}
                    alt=""
                    className="h-14 w-14 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-medium text-ink">{t.author}</p>
                    <p className="text-sm text-muted">{t.role}</p>
                  </div>
                </div>
                <p className="text-[clamp(1.2rem,2.5vw,1.8rem)] leading-snug text-ink">
                  “{t.quote}”
                </p>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,7vw,5.6rem)] uppercase leading-[0.88] tracking-tight">
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
