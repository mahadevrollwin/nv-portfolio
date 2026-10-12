"use client";

import { useEffect, useRef, type RefObject } from "react";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type HeroVisualProps = {
  scrollTargetRef?: RefObject<HTMLElement | null>;
};

const SITE_BG = "#efece4";

export default function HeroVisual({ scrollTargetRef: _scrollTargetRef }: HeroVisualProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // 1367 spring: stiffness≈115.2, damping=24, mass=1; desktop expands 0.55→1 after 0.8s
  const scaleProgress = useSpring(1, {
    stiffness: 115,
    damping: 24,
    mass: 1,
  });
  const frameScale = useTransform(scaleProgress, (v) => 0.55 + 0.45 * v);

  useEffect(() => {
    if (reduceMotion) {
      scaleProgress.jump(1);
      return;
    }

    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!desktop) {
      scaleProgress.jump(1);
      return;
    }

    scaleProgress.jump(0);
    const id = window.setTimeout(() => scaleProgress.set(1), 800);
    return () => window.clearTimeout(id);
  }, [reduceMotion, scaleProgress]);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto aspect-[1024/752] h-auto w-full max-w-3xl overflow-visible md:max-w-none"
      style={{ backgroundColor: SITE_BG }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 origin-center overflow-hidden will-change-transform"
        style={{
          scale: reduceMotion ? 1 : frameScale,
          backgroundColor: SITE_BG,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-sunglasses.png"
          alt=""
          width={1024}
          height={752}
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-contain object-center"
          style={{ backgroundColor: SITE_BG }}
          draggable={false}
        />
      </motion.div>

      <span className="sr-only">
        Silhouette of a person wearing reflective sunglasses
      </span>
    </div>
  );
}
