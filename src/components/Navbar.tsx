"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/content";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path
        d="M1.46 8.54L8.54 1.46M3.06 1.29L8.54 1.46L8.71 6.95"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const primary = navLinks.slice(0, 2);
  const talk = navLinks[2];

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
        <nav
          className="pointer-events-auto mx-auto grid max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center gap-2"
          aria-label="Primary"
        >
          <div className="flex items-center gap-2 justify-self-start">
            {primary.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="pill pill-light hidden sm:inline-flex"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="pill pill-light sm:hidden"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              Menu
            </button>
          </div>

          <Link
            href="/"
            className="justify-self-center font-display text-[clamp(1.5rem,3.2vw,2.35rem)] uppercase leading-none tracking-tight text-accent"
            aria-label={site.name}
          >
            {site.name}
          </Link>

          <div className="flex items-center justify-self-end gap-2 md:gap-3">
            <span className="hidden text-xs text-ink lg:inline xl:text-sm">
              {site.hours}
            </span>
            <Link href={talk.href} className="pill pill-dark gap-0 pr-1.5">
              <span className="px-1">{talk.label}</span>
              <span className="cta-arrow h-9 w-9">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-5 pt-5">
              <Link
                href="/"
                className="font-display text-2xl uppercase text-accent"
                onClick={() => setOpen(false)}
              >
                {site.name}
              </Link>
              <button type="button" className="pill pill-light" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
            <div className="flex h-[calc(100%-88px)] flex-col justify-center gap-5 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.06 * i }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-5xl uppercase tracking-tight text-white sm:text-6xl"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
