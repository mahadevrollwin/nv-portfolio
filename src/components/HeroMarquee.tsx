"use client";

import { useEffect, useRef } from "react";

const CURVE =
  "M-43.0867 292.81C179.631 174.299 464.078 116.458 712.699 90.6403C934.59 67.5984 1166.5 74.6231 1436.89 105.117";
const CURVE_EXTENDED = `${CURVE} L 5000 507`;
const PHRASE = "LET'S MAKE IT MAKE SENSE  •  GOOD LOOKS INCLUDED  •  ";

export default function HeroMarquee() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<SVGPathElement>(null);
  const maskRef = useRef<SVGPathElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);
  const unitRef = useRef<SVGTSpanElement>(null);
  const textGroupRef = useRef<SVGGElement>(null);

  // Infinite marquee along the curve
  useEffect(() => {
    const textPath = textPathRef.current;
    const unit = unitRef.current;
    if (!textPath || !unit) return;

    let raf = 0;
    let offset = 0;
    let last = performance.now();
    let unitLen = 1600;

    const measure = () => {
      unitLen = unit.getComputedTextLength() || 1600;
    };
    measure();

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      // ~75px/sec reading pace (matches reference)
      offset = (offset + 75 * dt) % unitLen;
      textPath.setAttribute("startOffset", String(-offset));
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // One-shot scroll reveal: orange ribbon (+ text mask) draws right → left
  useEffect(() => {
    const wrap = wrapRef.current;
    const bg = bgRef.current;
    const mask = maskRef.current;
    const group = textGroupRef.current;
    if (!wrap || !bg || !mask) return;

    const len = bg.getTotalLength();
    // Match GSAP drawSVG: "100% 100%" → "0% 100%" (reveal from path end toward start).
    const setDraw = (startPct: number, endPct: number) => {
      const start = (startPct / 100) * len;
      const end = (endPct / 100) * len;
      const visible = Math.max(0, end - start);
      const dash = `${visible} ${len}`;
      const offset = String(-start);
      bg.style.strokeDasharray = dash;
      bg.style.strokeDashoffset = offset;
      mask.style.strokeDasharray = dash;
      mask.style.strokeDashoffset = offset;
    };

    setDraw(100, 100);

    let animStart: number | null = null;
    let playing = false;
    const duration = 1300;
    const delay = window.innerWidth < 991 ? 300 : 0;

    const animate = (ts: number) => {
      if (animStart === null) animStart = ts;
      const t = Math.min(1, (ts - animStart) / duration);
      const eased = 1 - Math.pow(1 - t, 2);
      const startPct = 100 - 100 * eased;
      setDraw(startPct, 100);
      if (t < 1) {
        requestAnimationFrame(animate);
      } else if (group) {
        group.removeAttribute("mask");
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || playing) return;
        playing = true;
        io.disconnect();
        window.setTimeout(() => {
          animStart = null;
          requestAnimationFrame(animate);
        }, delay);
      },
      { threshold: 0.15, rootMargin: "0px 0px -15% 0px" },
    );

    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  const copies = Array.from({ length: 8 }, (_, i) => i);

  return (
    <section
      ref={wrapRef}
      className="hero-marquee w-full overflow-x-clip"
      aria-label="Marquee"
    >
      <svg
        viewBox="0 0 1440 370"
        preserveAspectRatio="xMidYMid meet"
        className="block w-full overflow-visible"
        style={{ height: "auto" }}
        aria-hidden
      >
        <defs>
          <path id="hero-marquee-curve" d={CURVE_EXTENDED} fill="none" />
          <mask id="hero-marquee-text-mask" maskUnits="userSpaceOnUse">
            <path
              ref={maskRef}
              className="hero-marquee-mask-path"
              d={CURVE}
              stroke="#FFFFFF"
              strokeWidth="220"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </mask>
        </defs>

        <path
          ref={bgRef}
          className="hero-marquee-bg"
          d={CURVE}
          stroke="#FF5400"
          strokeWidth="154"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        <g ref={textGroupRef} className="hero-marquee-text-group" mask="url(#hero-marquee-text-mask)">
          <text
            className="hero-marquee-text font-display"
            fill="#FFFFFF"
            dominantBaseline="central"
            fontSize="80"
            fontWeight="800"
            letterSpacing="0.04em"
            style={{ userSelect: "none" }}
          >
            <textPath
              ref={textPathRef}
              href="#hero-marquee-curve"
              className="hero-marquee-tp"
              startOffset="0"
              dominantBaseline="central"
            >
              {copies.map((i) => (
                <tspan
                  key={i}
                  ref={i === 0 ? unitRef : undefined}
                  className={i === 0 ? "marquee-unit" : undefined}
                  dominantBaseline="central"
                >
                  {PHRASE}
                </tspan>
              ))}
            </textPath>
          </text>
        </g>
      </svg>
    </section>
  );
}
