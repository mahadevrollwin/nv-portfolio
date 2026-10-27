"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-6 text-left md:py-7"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-[clamp(1.35rem,3.2vw,2rem)] uppercase leading-[1.05] tracking-tight">
                {item.q}
              </span>
              <span
                className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/20 text-lg transition ${
                  isOpen ? "bg-accent text-white border-accent" : "bg-bg-elevated"
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-7 text-base leading-relaxed text-ink-soft md:text-lg">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
