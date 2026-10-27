"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { Lottie } from "lottie-react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { services } from "@/lib/content";

const PATH_D =
  "M1601 15C1241.24 56.6913 1025.14 308.977 1139.71 377.393C1191.45 408.29 1240.74 339.444 1181.39 282.059C1075.45 179.627 937.582 215.243 741.458 298.287C701.638 315.147 622.383 350.59 552.298 410.201C487.298 465.486 487.725 549.018 534.765 563.77C581.804 578.523 632.714 579.634 681.058 587.392C729.731 595.202 767.011 617.17 797.836 657.756C833.766 705.065 838.864 772.034 862.127 825.767C890.491 891.283 966.341 911.2 1033.5 915.638C1130.56 922.052 1195.74 891.215 1286.16 899.069C1347.7 904.414 1457.75 932.208 1466.92 1059.42C1477.81 1210.68 1340.4 1252.99 1221.76 1286.05C1118.2 1314.91 997.775 1397.54 862.127 1334.5C757.468 1285.86 666.411 1293.34 650.401 1384.21C634.391 1475.07 710.968 1532.13 837.283 1542.81C963.598 1553.5 1146.44 1534.93 1181.39 1676C1226.53 1858.21 954.075 1839.5 797.836 1839.5C661.891 1839.5 422.283 1807.72 385.5 1700C340.427 1568 635.939 1584.37 465.5 1917C414.516 2016.5 310 2165.31 15 2165.31";

const MOBILE_PATH_D =
  "M542.705 10C465.727 48.981 92.8237 79.5116 92.8237 185.592C92.8237 291.673 352.712 336 346.322 440.868C339.933 545.736 104.278 543.251 92.8237 652.131C79.6013 777.82 353.287 765.564 346.322 898.5C339.358 1031.44 63.9084 911.5 68 1046C72.0916 1180.5 335.245 1170.41 328.309 1279.59C320.5 1402.5 -37.4522 1513.46 -135.704 1545.09";

function LottieIcon({ src, active }: { src: string; active: boolean }) {
  return (
    <motion.div
      className="relative flex-shrink-0 overflow-hidden"
      initial={false}
      animate={
        active
          ? { width: "7.25em", scale: 1, opacity: 1 }
          : { width: 0, scale: 0, opacity: 0 }
      }
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "center center" }}
    >
      <Lottie
        src={src}
        autoplay
        loop
        className="aspect-[777/665] w-[7.25em]"
        style={{ width: "7.25em", height: "auto" }}
      />
    </motion.div>
  );
}

function ServiceRow({ service }: { service: (typeof services)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.45, once: false });

  return (
    <div ref={ref} className="relative flex h-[5.2em] w-full items-center justify-center">
      <div
        className="relative inline-flex items-center justify-center gap-[0.5em] text-[0.85em]"
        style={{ position: "relative", ...service.offset }}
      >
        <span className="font-display text-[5em] uppercase leading-[0.8] text-accent">
          {service.words[0]}
        </span>
        <LottieIcon src={service.lottie} active={inView} />
        {service.words[1] ? (
          <span className="font-display text-[5em] uppercase leading-[0.8] text-accent">
            {service.words[1]}
          </span>
        ) : null}

        <motion.div
          className="absolute bottom-[-2em] right-[-4em] z-10 max-w-[18em] rounded-full border border-accent bg-[#fdf8f5] px-[1.25em] py-[0.75em] max-md:bottom-[-2.5em] max-md:right-1/2 max-md:translate-x-1/2 max-md:max-w-[16em]"
          initial={false}
          animate={
            inView
              ? { scale: 1, opacity: 1, rotate: -5 }
              : { scale: 0, opacity: 0, rotate: -5 }
          }
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
          style={{ transformOrigin: "center center" }}
        >
          <p className="text-[0.875em] font-medium leading-[1.2] text-accent">{service.copy}</p>
        </motion.div>
      </div>
    </div>
  );
}

function ServicesPath({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {
  const pathRef = useRef<SVGPathElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.35"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 26 });
  const [len, setLen] = useState(4200);
  const dashOffset = useTransform(progress, (v) => len * (1 - Math.min(1, Math.max(0, v))));

  useEffect(() => {
    if (pathRef.current) setLen(pathRef.current.getTotalLength());
  }, []);

  return (
    <>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1616 2187"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible md:block"
        aria-hidden
      >
        <path
          d={PATH_D}
          stroke="#FF5400"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.22}
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          ref={pathRef}
          d={PATH_D}
          stroke="#FF5400"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
          style={{ strokeDasharray: len, strokeDashoffset: dashOffset }}
        />
      </svg>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 407 1556"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 block h-full w-full overflow-visible md:hidden"
        aria-hidden
      >
        <path
          d={MOBILE_PATH_D}
          stroke="#FF5400"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.22}
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          d={MOBILE_PATH_D}
          stroke="#FF5400"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: progress }}
        />
      </svg>
    </>
  );
}

export default function ServicesThing() {
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <section className="flex w-full flex-col items-center overflow-x-clip border-y border-line">
      <div className="flex w-full flex-col items-center gap-14 px-4 pb-16 pt-24 md:gap-24 md:px-8 md:pb-24 md:pt-40">
        <header className="flex w-full max-w-[1500px] flex-col items-start gap-3 md:items-center md:text-center">
          <p className="text-base font-medium uppercase text-ink md:text-lg">Our Services</p>
          <h2 className="max-w-[5em] font-display text-[clamp(3rem,10vw,6.25rem)] uppercase leading-[0.85] tracking-tight text-ink">
            This is our thing
          </h2>
        </header>

        <div
          ref={bodyRef}
          className="relative mx-auto w-full max-w-[1440px]"
          style={{ fontSize: "clamp(9px, 1.12vw, 16px)" }}
        >
          <ServicesPath containerRef={bodyRef} />

          <div
            className="relative z-[2] flex w-full flex-col"
            style={{ gap: "clamp(4.5rem, 8.5vw, 7.9rem)" }}
          >
            {services.map((service) => (
              <ServiceRow key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
