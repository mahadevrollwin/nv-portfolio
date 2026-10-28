"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

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

const icons = [
  {
    id: "spark",
    node: <Spark className="h-full w-full" />,
    color: "text-accent",
    size: "w-[clamp(2.4rem,4.5vw,3.8rem)]",
    style: { top: "6%", right: "18%" },
    rotate: -12,
    delay: 0.05,
  },
  {
    id: "aperture",
    node: <Aperture className="h-full w-full" />,
    color: "text-ink",
    size: "w-[clamp(3.2rem,6vw,5.2rem)]",
    style: { top: "18%", right: "4%" },
    rotate: 8,
    delay: 0.12,
  },
  {
    id: "asterisk",
    node: <Asterisk className="h-full w-full" />,
    color: "text-accent",
    size: "w-[clamp(2.8rem,5vw,4.4rem)]",
    style: { top: "42%", right: "14%" },
    rotate: 18,
    delay: 0.18,
  },
  {
    id: "cursor",
    node: <CursorMark className="h-full w-full" />,
    color: "text-ink",
    size: "w-[clamp(2rem,3.6vw,3rem)]",
    style: { top: "58%", right: "3%" },
    rotate: -6,
    delay: 0.24,
  },
  {
    id: "type",
    node: <TypeMark className="h-full w-full" />,
    color: "text-accent",
    size: "w-[clamp(2.6rem,4.6vw,4rem)]",
    style: { top: "68%", right: "22%" },
    rotate: -14,
    delay: 0.3,
  },
  {
    id: "orbit",
    node: <Orbit className="h-full w-full" />,
    color: "text-ink",
    size: "w-[clamp(2.8rem,5.2vw,4.2rem)]",
    style: { top: "28%", right: "26%" },
    rotate: 4,
    delay: 0.36,
  },
] as const;

export default function HeroIcons() {
  const reduce = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-[42%] md:block lg:w-[38%]"
      aria-hidden
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
          viewport={{ once: true, amount: 0.2 }}
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
                    y: [0, -8, 0],
                    rotate: [icon.rotate, icon.rotate + 4, icon.rotate],
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
