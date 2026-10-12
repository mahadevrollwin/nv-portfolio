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

  // Stick starts open; scroll drives repeated close ↔ open cycles
  const clapRaw = useTransform(
    scrollYProgress,
    [0, 0.12, 0.24, 0.36, 0.48, 0.6, 0.72, 0.84, 1],
    [-42, -8, -50, -6, -48, -10, -52, -8, -40],
  );
  const clapAngle = useSpring(clapRaw, {
    stiffness: 115,
    damping: 17,
    mass: 0.32,
  });

  // Eyelids: 0.12 open → 1 closed, blink pulses along scroll
  const blinkRaw = useTransform(
    scrollYProgress,
    [0, 0.13, 0.145, 0.16, 0.175, 0.35, 0.365, 0.38, 0.395, 0.55, 0.565, 0.58, 0.595, 0.74, 0.755, 0.77, 0.785, 1],
    [0.12, 0.12, 1, 1, 0.12, 0.12, 1, 0.95, 0.12, 0.12, 1, 1, 0.12, 0.12, 1, 0.9, 0.12, 0.12],
  );
  const eyeScale = useSpring(blinkRaw, {
    stiffness: 340,
    damping: 24,
    mass: 0.16,
  });

  const swayRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1.4, -0.7]);
  const sway = useSpring(swayRaw, { stiffness: 45, damping: 18 });

  const stickAngle = reduceMotion ? -36 : clapAngle;
  const lidScale = reduceMotion ? 0.12 : eyeScale;
  const faceSway = reduceMotion ? 0 : sway;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto h-[58vh] w-full max-w-2xl sm:h-[64vh] md:-mr-4 md:h-[76vh] md:max-w-none lg:translate-x-6 lg:scale-[1.12]"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute left-[45%] top-[40%] h-[75%] w-[90%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(18,17,15,0.2)_0%,rgba(255,77,13,0.07)_45%,transparent_72%)] blur-3xl" />

      <motion.svg
        viewBox="0 0 680 700"
        className="absolute inset-0 h-full w-full drop-shadow-[0_44px_80px_rgba(18,17,15,0.4)]"
        style={{ rotate: faceSway }}
        role="img"
      >
        <title>
          Large face silhouette holding an open movie clapperboard with eyes visible in the gap
        </title>

        <defs>
          <radialGradient id="faceBloom" cx="52%" cy="38%" r="50%">
            <stop offset="0%" stopColor="#ff4d0d" stopOpacity="0.16" />
            <stop offset="60%" stopColor="#12110f" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="340" cy="290" rx="240" ry="270" fill="url(#faceBloom)" />

        {/* Large dramatic head — face only */}
        <path
          fill="#0d0c0a"
          d="
            M155 250
            C148 140 210 45 340 36
            C475 27 548 130 542 250
            C545 320 530 385 500 440
            C470 490 415 525 340 528
            C265 525 210 490 180 440
            C150 385 158 320 155 250 Z
          "
        />

        {/* Hair / crown mass */}
        <path
          fill="#0d0c0a"
          d="
            M168 175
            C185 70 255 22 340 18
            C435 14 510 70 528 170
            C480 100 400 78 340 82
            C270 86 210 120 168 175 Z
          "
        />

        {/*
          Eye band sits in the open-clapper gap.
          Board hinge line ≈ y 318; open stick swings above; eyes at y 292.
        */}
        <g>
          <ellipse cx="270" cy="292" rx="42" ry="26" fill="#efece4" />
          <ellipse cx="410" cy="292" rx="42" ry="26" fill="#efece4" />

          <ellipse cx="274" cy="294" rx="15" ry="18" fill="#0d0c0a" />
          <ellipse cx="406" cy="294" rx="15" ry="18" fill="#0d0c0a" />
          <circle cx="280" cy="286" r="4.5" fill="#efece4" opacity="0.6" />
          <circle cx="412" cy="286" r="4.5" fill="#efece4" opacity="0.6" />

          {/* Blink lids — expand downward over eyes */}
          <motion.ellipse
            cx="270"
            cy="278"
            rx="46"
            ry="28"
            fill="#0d0c0a"
            style={{ scaleY: lidScale, transformOrigin: "270px 268px" }}
          />
          <motion.ellipse
            cx="410"
            cy="278"
            rx="46"
            ry="28"
            fill="#0d0c0a"
            style={{ scaleY: lidScale, transformOrigin: "410px 268px" }}
          />
        </g>

        {/* Brow ridges */}
        <path
          d="M225 268 C255 250 295 250 318 268"
          fill="none"
          stroke="#0d0c0a"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M362 268 C392 250 432 250 462 268"
          fill="none"
          stroke="#0d0c0a"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Hands holding board at face level */}
        <path
          fill="#0d0c0a"
          d="
            M78 360
            C48 385 42 445 62 495
            C78 525 120 532 148 508
            C170 488 178 445 168 410
            C156 368 118 345 78 360 Z
          "
        />
        <path
          fill="#0d0c0a"
          d="
            M602 355
            C632 380 638 440 618 490
            C602 520 560 527 532 503
            C510 483 502 440 512 405
            C524 363 562 340 602 355 Z
          "
        />

        {/* Clapperboard covering lower face; gap reveals eyes */}
        <g transform="translate(110 318)">
          <rect x="0" y="40" width="460" height="250" rx="12" fill="#10100e" />
          <rect x="16" y="56" width="428" height="218" rx="8" fill="#1a1814" />

          <line x1="48" y1="100" x2="400" y2="100" stroke="#efece4" strokeWidth="5" opacity="0.28" />
          <line x1="48" y1="145" x2="360" y2="145" stroke="#efece4" strokeWidth="4" opacity="0.16" />
          <line x1="48" y1="190" x2="380" y2="190" stroke="#efece4" strokeWidth="4" opacity="0.16" />
          <line x1="48" y1="235" x2="300" y2="235" stroke="#efece4" strokeWidth="4" opacity="0.12" />

          <rect x="0" y="40" width="22" height="250" rx="5" fill="#ff4d0d" opacity="0.95" />

          {/* Hinged stick — opens upward into the eye gap */}
          <g transform="translate(26 40)">
            <motion.g style={{ rotate: stickAngle }}>
              <g transform="translate(-26 -40)">
                <rect x="0" y="0" width="460" height="44" rx="8" fill="#0d0c0a" />
                <path
                  d="M18 3 L68 3 L92 41 L42 41 Z
                     M106 3 L156 3 L180 41 L130 41 Z
                     M194 3 L244 3 L268 41 L218 41 Z
                     M282 3 L332 3 L356 41 L306 41 Z
                     M370 3 L420 3 L442 41 L392 41 Z"
                  fill="#efece4"
                  opacity="0.95"
                />
                <path
                  d="M62 3 L112 3 L136 41 L86 41 Z
                     M150 3 L200 3 L224 41 L174 41 Z
                     M238 3 L288 3 L312 41 L262 41 Z
                     M326 3 L376 3 L400 41 L350 41 Z"
                  fill="#0d0c0a"
                />
              </g>
            </motion.g>
            <circle cx="0" cy="0" r="11" fill="#2a2620" />
            <circle cx="0" cy="0" r="4.5" fill="#efece4" opacity="0.55" />
          </g>
        </g>

        {/* Fingers over board edges */}
        <ellipse cx="145" cy="500" rx="32" ry="22" fill="#0d0c0a" />
        <ellipse cx="535" cy="495" rx="30" ry="20" fill="#0d0c0a" />
        <path
          d="M120 470 C108 490 106 515 122 528 C142 508 155 488 160 470 Z"
          fill="#0d0c0a"
        />
        <path
          d="M560 465 C574 485 578 510 560 522 C542 502 528 482 524 465 Z"
          fill="#0d0c0a"
        />
      </motion.svg>
    </div>
  );
}
