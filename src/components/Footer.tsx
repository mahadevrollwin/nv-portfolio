import Link from "next/link";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg px-6 pb-10 pt-16 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s design what&apos;s next.
          </p>
          <p className="mt-4 max-w-md text-ink-soft">
            Available for select product builds, redesigns, and long-term partnerships.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-accent-deep"
          >
            Get in touch
          </Link>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Navigate</p>
          <ul className="mt-4 space-y-3 text-ink-soft">
            <li>
              <Link href="/work" className="hover:text-ink">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-ink">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Connect</p>
          <ul className="mt-4 space-y-3 text-ink-soft">
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {site.fullName} / {site.name}</p>
        <p>Built with Next.js · Designed for clarity and speed</p>
      </div>
    </footer>
  );
}
