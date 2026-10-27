"use client";

import { FormEvent, useState } from "react";
import { assets } from "@/lib/assets";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const project = String(data.get("project") || "");
    const body = encodeURIComponent(
      `Hi,\n\nName: ${name}\nEmail: ${email}\n\nProject:\n${project}\n`,
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Project inquiry")}&body=${body}`;
    setSent(true);
  }

  return (
    <main className="px-4 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Inquiries & commissions
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.8rem,9vw,6.5rem)] uppercase leading-[0.88] tracking-tight text-accent">
            Want to start a new project?
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink-soft">
            Or just say hello. Tell us what you&apos;re building and we&apos;ll figure out if it&apos;s a fit.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assets.contactMark}
            alt=""
            className="mt-10 w-40 opacity-90 md:w-52"
            loading="lazy"
          />

          <div className="mt-12 space-y-5 text-sm">
            <div>
              <p className="uppercase tracking-[0.18em] text-muted">Email</p>
              <a href={`mailto:${site.email}`} className="mt-1 block text-lg text-accent">
                {site.email}
              </a>
            </div>
            <div>
              <p className="uppercase tracking-[0.18em] text-muted">Based in</p>
              <p className="mt-1 text-lg">{site.location}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pill pill-light"
              >
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="pill pill-light"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="rounded-[1.75rem] bg-black p-6 text-white md:p-10"
          >
            <label className="block text-sm text-white/60">
              Name
              <input
                name="name"
                required
                placeholder="What should we call you?"
                className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-lg text-white outline-none placeholder:text-white/30 focus:border-accent"
              />
            </label>
            <label className="mt-8 block text-sm text-white/60">
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-lg text-white outline-none placeholder:text-white/30 focus:border-accent"
              />
            </label>
            <label className="mt-8 block text-sm text-white/60">
              Project
              <textarea
                name="project"
                required
                rows={5}
                placeholder="What are we making?"
                className="mt-2 w-full resize-none border-b border-white/20 bg-transparent py-3 text-lg text-white outline-none placeholder:text-white/30 focus:border-accent"
              />
            </label>
            <button type="submit" className="pill pill-light mt-10 gap-0 pr-1.5 text-ink">
              <span className="px-1">{sent ? "Opening mail…" : "Send it over"}</span>
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
            </button>
          </form>
        </Reveal>
      </div>
    </main>
  );
}
