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
          className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-3 rounded-full px-4 py-2.5 transition-all duration-300 md:px-6 ${
            scrolled || open
              ? "bg-[rgba(34,30,24,0.82)] text-white shadow-lg shadow-black/10 backdrop-blur-xl"
              : "bg-[rgba(34,30,24,0.72)] text-white backdrop-blur-xl"
          }`}
          aria-label="Primary"
        >
          <div className="hidden flex-1 items-center gap-6 md:flex">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] tracking-wide text-white/85 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="font-display absolute left-1/2 -translate-x-1/2 text-[22px] font-bold tracking-tight md:static md:translate-x-0"
          >
            {site.name}
          </Link>

          <div className="hidden flex-1 items-center justify-end gap-6 md:flex">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] tracking-wide text-white/85 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-px w-4 bg-white" />
                <span className="block h-px w-4 bg-white" />
                <span className="block h-px w-4 bg-white" />
              </span>
            </button>
          </div>

          <button
            type="button"
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/20 md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-4 bg-white" />
              <span className="block h-px w-4 bg-white" />
              <span className="block h-px w-4 bg-white" />
            </span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-[rgba(18,17,15,0.96)] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <Link href="/" className="font-display text-2xl font-bold" onClick={() => setOpen(false)}>
                {site.name}
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/25 px-4 py-2 text-sm"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>
            <div className="flex h-[calc(100%-88px)] flex-col justify-center gap-6 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-5xl font-semibold tracking-tight sm:text-6xl"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="mt-8 inline-flex w-fit items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white"
              >
                Book a call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
