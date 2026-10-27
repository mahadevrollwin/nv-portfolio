import type { Metadata } from "next";
import { site } from "@/lib/content";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Let's Talk",
  description: `Start a project with ${site.name} — or just say hello at ${site.email}.`,
};

export default function ContactPage() {
  return (
    <main className="px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Inquiries & commissions
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.8rem,10vw,7rem)] uppercase leading-[0.88] tracking-tight">
            Want to{" "}
            <span className="text-accent">start a new project?</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Or just say hello. Tell me what you&apos;re building and we&apos;ll figure out if it&apos;s a fit.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="space-y-8 rounded-[1.75rem] bg-black p-7 text-white md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 inline-block font-display text-2xl uppercase tracking-tight text-accent md:text-3xl"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">Based in</p>
                <p className="mt-2 text-lg">{site.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">Elsewhere</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill bg-white/10 text-white hover:bg-white/15"
                  >
                    GitHub
                  </a>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill bg-white/10 text-white hover:bg-white/15"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="space-y-6 rounded-[1.75rem] bg-bg-elevated p-7 md:p-10" action={`mailto:${site.email}`} method="get">
              <div>
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none transition placeholder:text-muted/70 focus:border-ink"
                  placeholder="What should I call you?"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none transition placeholder:text-muted/70 focus:border-ink"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Project
                </label>
                <textarea
                  id="message"
                  name="body"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y border-b border-line bg-transparent py-3 outline-none transition placeholder:text-muted/70 focus:border-ink"
                  placeholder="What are we making?"
                />
              </div>
              <button type="submit" className="pill pill-dark">
                Send it over
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
