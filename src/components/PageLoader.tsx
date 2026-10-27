"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setShow(false), 1100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f9e2e1]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.svg
            width="72"
            height="56"
            viewBox="0 0 72 56"
            fill="none"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            aria-hidden
          >
            <path
              d="M8 48C8 48 14 8 28 12C42 16 18 36 26 44C38 56 44 4 56 14C64 22 48 40 58 40C64 40 68 28 68 28"
              stroke="#ff5400"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
