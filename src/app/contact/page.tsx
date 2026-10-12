import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation about your next product, platform, or brand experience.",
};

export default function ContactPage() {
  return (
    <main className="px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Contact</p>
          <h1 className="font-display mt-4 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
            Let&apos;s design what&apos;s next.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Tell me about the product you want to build, redesign, or accelerate. I typically respond within one business day.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block text-2xl font-medium tracking-tight text-ink hover:text-accent"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Location</p>
                <p className="mt-2 text-2xl font-medium tracking-tight">{site.location}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Social</p>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-2xl font-medium tracking-tight hover:text-accent"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              action={`mailto:${site.email}`}
              method="GET"
              className="rounded-sm border border-line bg-bg-elevated/40 p-6 md:p-8"
            >
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Name</span>
                <input
                  name="subject"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none transition placeholder:text-muted/70 focus:border-ink"
                />
              </label>
              <label className="mt-6 block">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Email</span>
                <input
                  type="email"
                  name="cc"
                  required
                  placeholder="you@company.com"
                  className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none transition placeholder:text-muted/70 focus:border-ink"
                />
              </label>
              <label className="mt-6 block">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Project</span>
                <textarea
                  name="body"
                  required
                  rows={5}
                  placeholder="What are you building?"
                  className="mt-2 w-full resize-y border-b border-line bg-transparent py-3 outline-none transition placeholder:text-muted/70 focus:border-ink"
                />
              </label>
              <button
                type="submit"
                className="mt-8 inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-accent-deep"
              >
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
