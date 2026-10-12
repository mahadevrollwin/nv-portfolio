"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 md:px-6 md:pt-5">
        <nav
          className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border px-4 py-2.5 transition-all duration-300 md:px-6 ${
            scrolled || open
              ? "border-accent/30 bg-[rgba(20,8,16,0.88)] text-ink shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              : "border-accent/20 bg-[rgba(20,8,16,0.72)] text-ink backdrop-blur-xl"
          }`}
          aria-label="Primary"
        >
          <div className="hidden flex-1 items-center gap-6 md:flex">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] uppercase tracking-[0.18em] text-ink-soft transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="font-display absolute left-1/2 -translate-x-1/2 text-[22px] font-semibold tracking-[0.12em] text-gold-gradient md:static md:translate-x-0"
          >
            {site.name}
          </Link>

          <div className="hidden flex-1 items-center justify-end gap-6 md:flex">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] uppercase tracking-[0.18em] text-ink-soft transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-px w-4 bg-accent" />
                <span className="block h-px w-4 bg-accent" />
                <span className="block h-px w-4 bg-accent" />
              </span>
            </button>
          </div>

          <button
            type="button"
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-4 bg-accent" />
              <span className="block h-px w-4 bg-accent" />
              <span className="block h-px w-4 bg-accent" />
            </span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-[rgba(12,4,10,0.97)] text-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="pointer-events-none absolute inset-0 cinema-glow opacity-70" />
            <div className="relative flex items-center justify-between px-6 pt-6">
              <Link
                href="/"
                className="font-display text-2xl font-semibold tracking-[0.12em] text-gold-gradient"
                onClick={() => setOpen(false)}
              >
                {site.name}
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-accent/35 px-4 py-2 text-sm uppercase tracking-wider text-ink-soft"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>
            <div className="relative flex h-[calc(100%-88px)] flex-col justify-center gap-6 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-5xl font-semibold tracking-tight text-ink transition hover:text-accent sm:text-6xl"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a href={`mailto:${site.email}`} className="btn-cinematic mt-8 w-fit">
                Book a call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
