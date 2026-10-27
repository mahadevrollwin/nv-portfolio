import Link from "next/link";
import { site } from "@/lib/content";

function spaced(label: string) {
  return label.split("").join(" ");
}

export default function Footer() {
  return (
    <footer className="bg-black px-5 pb-10 pt-16 text-white md:px-8 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-display text-[clamp(2.8rem,10vw,7rem)] uppercase leading-[0.88] tracking-tight text-bg">
          Okay, that&apos;s enough website
        </p>
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-white/60">Want to start a project — or just say hello?</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block font-display text-2xl uppercase tracking-tight text-accent sm:text-3xl"
            >
              {site.email}
            </a>
          </div>
          <Link href="/contact" className="pill pill-light w-fit text-ink">
            Let&apos;s Talk
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-8 text-xs uppercase text-white/70">
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
        </div>

        <p className="mt-8 text-xs text-white/40">
          © 2026 {site.fullName} / {site.name} · Handmade by humans. Well, digitally.
        </p>
      </div>
    </footer>
  );
}
