"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const ICON_OPACITY = 0.38;

type IconProps = { className?: string };

function Asterisk({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <path
        d="M40 8v64M12.5 24.5l55 31M12.5 55.5l55-31"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Aperture({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 88 88" fill="none" aria-hidden>
      <circle cx="44" cy="44" r="34" stroke="currentColor" strokeWidth="6.5" />
      <circle cx="44" cy="44" r="14" stroke="currentColor" strokeWidth="5.5" />
      <path
        d="M44 10v18M44 60v18M10 44h18M60 44h18M20.5 20.5l12.5 12.5M55 55l12.5 12.5M67.5 20.5L55 33M33 55L20.5 67.5"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CursorMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 72" fill="none" aria-hidden>
      <path
        d="M12 6l40 28.5-18.5 4.5L42 66 30 40.5 12 52V6z"
        fill="currentColor"
      />
    </svg>
  );
}

function Spark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 72 72" fill="none" aria-hidden>
      <path
        d="M36 4c2.2 16.5 15.3 29.6 31.8 31.8C51.3 38.2 38.2 51.3 36 68 33.8 51.3 20.7 38.2 4.2 35.8 20.7 33.6 33.8 20.5 36 4z"
        fill="currentColor"
      />
    </svg>
  );
}

function TypeMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 70 70" fill="none" aria-hidden>
      <rect
        x="8"
        y="8"
        width="54"
        height="54"
        rx="6"
        stroke="currentColor"
        strokeWidth="6"
      />
      <path
        d="M22 48V26h26M28 48h14"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Orbit({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 90 90" fill="none" aria-hidden>
      <circle cx="45" cy="45" r="28" stroke="currentColor" strokeWidth="6.5" />
      <circle cx="45" cy="17" r="7" fill="currentColor" />
      <circle cx="68" cy="58" r="5" fill="currentColor" />
    </svg>
  );
}

function SmileArc({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 90 48" fill="none" aria-hidden>
      <path
        d="M8 12c8 22 28 32 37 32S74 34 82 12"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Diamond({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 72 72" fill="none" aria-hidden>
      <path
        d="M36 6l30 30-30 30L6 36 36 6z"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinejoin="round"
      />
      <path d="M36 18v36M18 36h36" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function Bolt({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 56 80" fill="none" aria-hidden>
      <path
        d="M34 4L10 42h20L22 76l34-46H34L46 4H34z"
        fill="currentColor"
      />
    </svg>
  );
}

function Layers({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 84 72" fill="none" aria-hidden>
      <path
        d="M42 8l34 18-34 18L8 26 42 8z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M8 36l34 18 34-18M8 48l34 18 34-18"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Crosshair({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="22" stroke="currentColor" strokeWidth="6" />
      <path
        d="M40 8v14M40 58v14M8 40h14M58 40h14"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="40" cy="40" r="5" fill="currentColor" />
    </svg>
  );
}

function Hex({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 88" fill="none" aria-hidden>
      <path
        d="M40 6l30 17v34L40 74 10 57V23L40 6z"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Zigzag({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 90 56" fill="none" aria-hidden>
      <path
        d="M6 42L26 14l20 28 20-28 18 28"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PenNib({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 80" fill="none" aria-hidden>
      <path
        d="M32 74V46M12 28c0-14 8-22 20-22s20 8 20 22c0 10-8 18-20 28-12-10-20-18-20-28z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="28" r="5" fill="currentColor" />
    </svg>
  );
}

const icons = [
  {
    id: "spark",
    node: <Spark className="h-full w-full" />,
    color: "text-accent",
    size: "w-[clamp(2rem,3.8vw,3.2rem)]",
    style: { top: "4%", right: "20%" },
    rotate: -12,
    delay: 0.04,
  },
  {
    id: "aperture",
    node: <Aperture className="h-full w-full" />,
    color: "text-ink",
    size: "w-[clamp(2.8rem,5.2vw,4.4rem)]",
    style: { top: "12%", right: "2%" },
    rotate: 8,
    delay: 0.08,
  },
  {
    id: "smile",
    node: <SmileArc className="h-full w-full" />,
    color: "text-accent",
    size: "w-[clamp(2.6rem,4.8vw,4rem)]",
    style: { top: "8%", right: "38%" },
    rotate: -6,
    delay: 0.1,
  },
  {
    id: "asterisk",
    node: <Asterisk className="h-full w-full" />,
    color: "text-accent",
    size: "w-[clamp(2.4rem,4.4vw,3.8rem)]",
    style: { top: "34%", right: "10%" },
    rotate: 18,
    delay: 0.14,
  },
  {
    id: "diamond",
    node: <Diamond className="h-full w-full" />,
    color: "text-ink",
    size: "w-[clamp(2.2rem,4vw,3.4rem)]",
    style: { top: "28%", right: "30%" },
    rotate: 10,
    delay: 0.16,
  },
  {
    id: "cursor",
    node: <CursorMark className="h-full w-full" />,
    color: "text-ink",
    size: "w-[clamp(1.7rem,3vw,2.5rem)]",
    style: { top: "48%", right: "1%" },
    rotate: -6,
    delay: 0.2,
  },
  {
    id: "bolt",
    node: <Bolt className="h-full w-full" />,
    color: "text-accent",
    size: "w-[clamp(1.6rem,2.8vw,2.4rem)]",
    style: { top: "52%", right: "22%" },
    rotate: 12,
    delay: 0.22,
  },
  {
    id: "type",
    node: <TypeMark className="h-full w-full" />,
    color: "text-accent",
    size: "w-[clamp(2.2rem,4vw,3.4rem)]",
    style: { top: "62%", right: "28%" },
    rotate: -14,
    delay: 0.26,
  },
  {
    id: "layers",
    node: <Layers className="h-full w-full" />,
    color: "text-ink",
    size: "w-[clamp(2.4rem,4.4vw,3.6rem)]",
    style: { top: "66%", right: "6%" },
    rotate: -8,
    delay: 0.28,
  },
  {
    id: "orbit",
    node: <Orbit className="h-full w-full" />,
    color: "text-ink",
    size: "w-[clamp(2.4rem,4.6vw,3.6rem)]",
    style: { top: "22%", right: "16%" },
    rotate: 4,
    delay: 0.12,
  },
  {
    id: "crosshair",
    node: <Crosshair className="h-full w-full" />,
    color: "text-accent",
    size: "w-[clamp(2.2rem,4vw,3.2rem)]",
    style: { top: "78%", right: "18%" },
    rotate: 0,
    delay: 0.32,
  },
  {
    id: "hex",
    node: <Hex className="h-full w-full" />,
    color: "text-ink",
    size: "w-[clamp(2rem,3.6vw,3rem)]",
    style: { top: "40%", right: "38%" },
    rotate: -16,
    delay: 0.18,
  },
  {
    id: "zigzag",
    node: <Zigzag className="h-full w-full" />,
    color: "text-accent",
    size: "w-[clamp(2.4rem,4.2vw,3.5rem)]",
    style: { top: "86%", right: "34%" },
    rotate: 4,
    delay: 0.34,
  },
  {
    id: "pen",
    node: <PenNib className="h-full w-full" />,
    color: "text-ink",
    size: "w-[clamp(1.8rem,3.2vw,2.6rem)]",
    style: { top: "74%", right: "40%" },
    rotate: 20,
    delay: 0.3,
  },
] as const;

export default function HeroIcons() {
  const reduce = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-[46%] md:block lg:w-[42%]"
      aria-hidden
      style={{ opacity: ICON_OPACITY }}
    >
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className={`absolute ${icon.size} ${icon.color}`}
          style={icon.style}
          initial={
            reduce
              ? false
              : { opacity: 0, scale: 0.55, y: 28, rotate: icon.rotate - 18 }
          }
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: icon.rotate,
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.85,
            delay: icon.delay,
            ease,
          }}
        >
          <motion.div
            animate={
              reduce
                ? undefined
                : {
                    y: [0, -7, 0],
                    rotate: [icon.rotate, icon.rotate + 3, icon.rotate],
                  }
            }
            transition={{
              duration: 4.2 + icon.delay * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: icon.delay,
            }}
          >
            {icon.node}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
