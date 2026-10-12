"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const clapRaw = useTransform(
    scrollYProgress,
    [0, 0.12, 0.24, 0.36, 0.48, 0.6, 0.72, 0.84, 1],
    [-32, -4, -38, -3, -36, -6, -40, -5, -30],
  );
  const clapAngle = useSpring(clapRaw, {
    stiffness: 125,
    damping: 18,
    mass: 0.28,
  });

  const blinkRaw = useTransform(
    scrollYProgress,
    [0, 0.12, 0.135, 0.15, 0.165, 0.34, 0.355, 0.37, 0.385, 0.54, 0.555, 0.57, 0.585, 0.73, 0.745, 0.76, 0.775, 1],
    [0, 0, 1, 1, 0, 0, 1, 0.95, 0, 0, 1, 1, 0, 0, 1, 0.9, 0, 0],
  );
  const lidClose = useSpring(blinkRaw, {
    stiffness: 380,
    damping: 28,
    mass: 0.14,
  });

  const swayRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.55, -0.3]);
  const sway = useSpring(swayRaw, { stiffness: 40, damping: 20 });

  const stickAngle = reduceMotion ? -28 : clapAngle;
  const lid = reduceMotion ? 0 : lidClose;
  const faceSway = reduceMotion ? 0 : sway;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto h-[58vh] w-full max-w-2xl sm:h-[64vh] md:-mr-2 md:h-[76vh] md:max-w-none lg:translate-x-6 lg:scale-[1.08]"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute bottom-[10%] left-1/2 h-14 w-[72%] -translate-x-1/2 rounded-[100%] bg-black/40 blur-3xl" />

      <motion.div className="absolute inset-0" style={{ rotate: faceSway }}>
        {/*
          Photographic cutout → pure black via CSS.
          Keeps realistic edge detail from the reference while reading as an
          aggressive shadow silhouette.
        */}
        <Image
          src="/hero-cutout.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 95vw, 640px"
          className="object-contain object-center"
          style={{
            filter:
              "brightness(0) contrast(1.08) drop-shadow(0 28px 48px rgba(0,0,0,0.5)) drop-shadow(0 6px 14px rgba(0,0,0,0.35))",
          }}
        />

        {/* Real eyes revealed in the open-clapper gap */}
        <div
          className="absolute overflow-hidden"
          style={{
            left: "34%",
            top: "33.5%",
            width: "32%",
            height: "7%",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: "scale(3.125) translateY(22%)",
              transformOrigin: "50% 36%",
            }}
          >
            <Image
              src="/hero-cutout.png"
              alt=""
              fill
              sizes="220px"
              className="object-contain object-center"
            />
          </div>
          <motion.div
            className="absolute inset-x-0 top-0 h-full origin-top bg-black"
            style={{ scaleY: lid }}
          />
        </div>

        {/* Animated stick */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="26.8,40.6 73.2,36.4 74.6,41.3 28.2,46.1" fill="#000" />
          <g transform="translate(28.6 40.6)">
            <motion.g style={{ rotate: stickAngle, transformOrigin: "0px 0px" }}>
              <rect x="0" y="-1.05" width="44" height="4.35" fill="#000" />
              <path
                d="M1 -0.8 L6.1 -0.8 L7.95 2.95 L2.85 2.95 Z
                   M9.1 -0.8 L14.2 -0.8 L16.05 2.95 L10.95 2.95 Z
                   M17.2 -0.8 L22.3 -0.8 L24.15 2.95 L19.05 2.95 Z
                   M25.3 -0.8 L30.4 -0.8 L32.25 2.95 L27.15 2.95 Z
                   M33.4 -0.8 L38.5 -0.8 L40.35 2.95 L35.25 2.95 Z"
                fill="#efece4"
              />
              <path
                d="M5.1 -0.8 L10.2 -0.8 L12.05 2.95 L6.95 2.95 Z
                   M13.2 -0.8 L18.3 -0.8 L20.15 2.95 L15.05 2.95 Z
                   M21.3 -0.8 L26.4 -0.8 L28.25 2.95 L23.15 2.95 Z
                   M29.4 -0.8 L34.5 -0.8 L36.35 2.95 L31.25 2.95 Z"
                fill="#000"
              />
            </motion.g>
          </g>
        </svg>
      </motion.div>

      <span className="sr-only">
        Aggressive realistic shadow of a man holding an open movie clapperboard
      </span>
    </div>
  );
}
