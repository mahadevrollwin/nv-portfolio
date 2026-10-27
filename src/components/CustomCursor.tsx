"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 280, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 280, damping: 28, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden md:block"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M4 20c4 4 16 4 20-4"
          stroke="#ff5400"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
