"use client";

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
    [0, 0.18, 0.38, 0.52, 0.72, 1],
    [0, -22, -58, -6, -44, -20],
  );
  const clapAngle = useSpring(clapRaw, {
    stiffness: 110,
    damping: 18,
    mass: 0.35,
  });

  const swayRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2.8, -1.2]);
  const sway = useSpring(swayRaw, { stiffness: 50, damping: 18 });

  const stickAngle = reduceMotion ? -28 : clapAngle;
  const bodySway = reduceMotion ? 0 : sway;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto h-[52vh] w-full max-w-xl md:h-[62vh]"
      aria-hidden="true"
    >
      {/* Dramatic poster lighting */}
      <div className="spotlight-pulse pointer-events-none absolute left-1/2 top-[18%] h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,184,74,0.28)_0%,rgba(196,35,58,0.18)_40%,transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute left-[20%] top-[55%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(168,40,90,0.35)_0%,transparent_70%)] blur-3xl" />

      {/* Poster ornamental frame */}
      <div className="pointer-events-none absolute inset-[4%] border border-accent/25" />
      <div className="pointer-events-none absolute inset-[7%] border border-crimson/20" />
      <svg
        className="pointer-events-none absolute left-3 top-3 h-8 w-8 text-accent/70 md:left-4 md:top-4"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path d="M2 14 V2 H14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 2 L10 10" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      </svg>
      <svg
        className="pointer-events-none absolute right-3 top-3 h-8 w-8 text-accent/70 md:right-4 md:top-4"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path d="M30 14 V2 H18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 2 L22 10" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-3 left-3 h-8 w-8 text-accent/70 md:bottom-4 md:left-4"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path d="M2 18 V30 H14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 30 L10 22" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-3 right-3 h-8 w-8 text-accent/70 md:bottom-4 md:right-4"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path d="M30 18 V30 H18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 30 L22 22" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      </svg>

      <motion.svg
        viewBox="0 0 520 640"
        className="absolute inset-0 h-full w-full drop-shadow-[0_28px_50px_rgba(0,0,0,0.55)]"
        style={{ rotate: bodySway }}
        role="img"
      >
        <title>Silhouette of a man holding an open movie clapperboard</title>

        <defs>
          <linearGradient id="silGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a0a12" />
            <stop offset="55%" stopColor="#0d060a" />
            <stop offset="100%" stopColor="#2a121c" />
          </linearGradient>
          <radialGradient id="rimLight" cx="30%" cy="20%" r="70%">
            <stop offset="0%" stopColor="#e8b84a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#e8b84a" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="250" cy="598" rx="92" ry="14" fill="#000" opacity="0.35" />

        {/* Rim light wash */}
        <ellipse cx="240" cy="220" rx="120" ry="160" fill="url(#rimLight)" />

        <path
          fill="url(#silGold)"
          d="
            M236 72
            C218 74 206 92 208 112
            C210 132 218 148 228 160
            C232 168 236 176 238 184
            L252 184
            C254 172 260 162 268 152
            C282 134 292 112 286 90
            C280 68 258 62 236 72 Z

            M214 186
            C200 190 188 204 184 222
            C168 228 148 240 138 262
            C126 288 122 318 128 342
            C132 356 148 364 162 358
            C174 352 184 338 192 324
            C198 312 204 298 210 286
            L214 286
            C210 310 206 338 208 366
            C210 402 214 438 218 474
            C220 502 218 534 216 562
            C214 574 222 582 236 580
            L248 580
            C250 548 248 514 246 484
            C244 452 246 420 250 392
            L262 392
            C266 424 270 456 274 488
            C276 520 280 552 286 580
            C290 586 300 586 308 580
            L318 578
            C316 542 312 504 308 470
            C304 430 302 392 304 358
            C306 330 312 304 320 286
            L326 292
            C336 310 350 332 368 342
            C384 352 404 346 408 328
            C414 300 406 268 388 246
            C372 228 350 218 332 214
            C328 196 318 184 302 178
            C286 172 250 174 214 186 Z
          "
        />

        <ellipse cx="168" cy="348" rx="20" ry="14" fill="#0a0508" />
        <ellipse cx="352" cy="336" rx="18" ry="13" fill="#0a0508" />

        <g transform="translate(168 288)">
          <rect x="0" y="32" width="176" height="108" rx="5" fill="#12080f" />
          <rect x="8" y="40" width="160" height="92" rx="3" fill="#1c1018" />

          <line x1="22" y1="58" x2="154" y2="58" stroke="#e8b84a" strokeWidth="2.4" opacity="0.45" />
          <line x1="22" y1="76" x2="138" y2="76" stroke="#f7ecd7" strokeWidth="2" opacity="0.18" />
          <line x1="22" y1="94" x2="148" y2="94" stroke="#f7ecd7" strokeWidth="2" opacity="0.18" />
          <line x1="22" y1="112" x2="112" y2="112" stroke="#f7ecd7" strokeWidth="2" opacity="0.14" />

          <rect x="0" y="32" width="10" height="108" rx="2" fill="#c4233a" opacity="0.95" />

          <g transform="translate(14 32)">
            <motion.g style={{ rotate: stickAngle }}>
              <g transform="translate(-14 -32)">
                <rect x="0" y="0" width="176" height="34" rx="4" fill="#0a0508" />
                <path
                  d="M8 2 L32 2 L48 32 L24 32 Z
                     M50 2 L74 2 L90 32 L66 32 Z
                     M92 2 L116 2 L132 32 L108 32 Z
                     M134 2 L158 2 L172 32 L150 32 Z"
                  fill="#f7ecd7"
                  opacity="0.92"
                />
                <path
                  d="M30 2 L54 2 L70 32 L46 32 Z
                     M72 2 L96 2 L112 32 L88 32 Z
                     M114 2 L138 2 L154 32 L130 32 Z"
                  fill="#0a0508"
                />
              </g>
            </motion.g>
            <circle cx="0" cy="0" r="6.5" fill="#3a2418" />
            <circle cx="0" cy="0" r="2.5" fill="#e8b84a" opacity="0.75" />
          </g>
        </g>

        <path
          d="M156 338 C150 346 148 356 154 360 C162 352 168 344 170 336 Z"
          fill="#0a0508"
        />
        <path
          d="M348 328 C356 334 360 344 354 350 C346 342 340 334 338 326 Z"
          fill="#0a0508"
        />
      </motion.svg>
    </div>
  );
}
