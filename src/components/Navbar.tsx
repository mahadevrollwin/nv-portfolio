"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/content";

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
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
        <nav
          className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-3"
          aria-label="Primary"
        >
          <div className="flex items-center gap-2">
            {primary.map((link) => (
              <Link key={link.href} href={link.href} className="pill pill-light hidden sm:inline-flex">
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
            className="font-display text-[clamp(1.6rem,3vw,2.2rem)] uppercase tracking-tight text-accent"
          >
            {site.name}
          </Link>

          <Link href={talk.href} className="pill pill-dark">
            {talk.label}
          </Link>
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
