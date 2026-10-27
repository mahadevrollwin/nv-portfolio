import Link from "next/link";
import { assets } from "@/lib/assets";
import { site } from "@/lib/content";

function spaced(label: string) {
  return label.split("").join(" ");
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-4 pb-10 pt-16 text-white md:px-8 md:pt-24">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assets.footerTexture}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1500px]">
        <h2 className="font-display text-[clamp(2.8rem,10vw,7.2rem)] uppercase leading-[0.86] tracking-tight text-[#f8eee8]">
          Okay, that&apos;s enough website
        </h2>
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-white/55">Want to start a project — or just say hello?</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block font-display text-[clamp(1.5rem,3vw,2.4rem)] uppercase tracking-tight text-accent"
            >
              {site.email}
            </a>
          </div>
          <Link href="/contact" className="pill pill-light w-fit gap-0 pr-1.5 text-ink">
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
        </div>

        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-8 text-xs uppercase tracking-wide text-white/65">
          <Link href="/work" className="hover:text-white">
            {spaced("Work")}
          </Link>
          <Link href="/about" className="hover:text-white">
            {spaced("About us")}
          </Link>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            {spaced("GitHub")}
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            {spaced("LinkedIn")}
          </a>
          <span className="text-white/40">{spaced("Handmade by humans. Well, digitally")}</span>
        </div>

        <p className="mt-8 text-xs text-white/35">
          © 2026 {site.fullName} / {site.name}
        </p>
      </div>
    </footer>
  );
}
