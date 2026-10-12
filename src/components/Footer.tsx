import Link from "next/link";
import { site } from "@/lib/content";
import Ornament from "@/components/Ornament";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-bg-elevated/80 px-6 pb-10 pt-16 md:px-10">
      <div className="pointer-events-none absolute inset-0 cinema-glow opacity-40" />
      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Ornament label="Finale" className="mb-5 max-w-xs" />
          <p className="font-display text-4xl font-semibold tracking-tight text-gold-gradient md:text-5xl">
            Let&apos;s design what&apos;s next.
          </p>
          <p className="mt-4 max-w-md text-ink-soft">
            Available for select product builds, redesigns, and long-term partnerships.
          </p>
          <Link href="/contact" className="btn-cinematic mt-8">
            Get in touch
          </Link>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Navigate</p>
          <ul className="mt-4 space-y-3 text-ink-soft">
            <li>
              <Link href="/work" className="transition hover:text-accent">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Connect</p>
          <ul className="mt-4 space-y-3 text-ink-soft">
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-accent"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition hover:text-accent">
                {site.email}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-6xl flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {site.fullName} / {site.name}
        </p>
        <p>A cinematic portfolio experience · Built with Next.js</p>
      </div>
    </footer>
  );
}
