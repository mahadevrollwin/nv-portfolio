"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type HeroVisualProps = {
  scrollTargetRef?: RefObject<HTMLElement | null>;
};

const SITE_BG = "#efece4";

export default function HeroVisual({ scrollTargetRef }: HeroVisualProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);
  const pendingTime = useRef<number | null>(null);

  // 1367 spring: stiffness≈115.2, damping=24, mass=1; desktop expands 0.55→1 after 0.8s
  const scaleProgress = useSpring(1, {
    stiffness: 115,
    damping: 24,
    mass: 1,
  });
  const frameScale = useTransform(scaleProgress, (v) => 0.55 + 0.45 * v);

  const paint = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || !video.videoWidth) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const cssW = Math.max(1, Math.round(rect.width));
    const cssH = Math.max(1, Math.round(rect.height));
    const w = Math.round(cssW * dpr);
    const h = Math.round(cssH * dpr);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = SITE_BG;
    ctx.fillRect(0, 0, w, h);

    // object-contain, centered — full subject always visible
    const vw = video.videoWidth;
    const vh = video.videoHeight;
    const scale = Math.min(w / vw, h / vh);
    const dw = vw * scale;
    const dh = vh * scale;
    const ox = (w - dw) / 2;
    const oy = (h - dh) / 2;
    ctx.drawImage(video, ox, oy, dw, dh);
  }, []);

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

  const { scrollYProgress } = useScroll({
    target: scrollTargetRef ?? rootRef,
    offset: ["start start", "end start"],
  });

  const applyTime = useCallback(
    (t: number) => {
      const video = videoRef.current;
      if (!video || !video.duration) return;
      const next = Math.min(Math.max(t, 0), video.duration - 0.001);
      if (video.seeking) {
        pendingTime.current = next;
        return;
      }
      video.currentTime = next;
    },
    [],
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onSeeked = () => {
      paint();
      if (pendingTime.current === null) return;
      const t = pendingTime.current;
      pendingTime.current = null;
      video.currentTime = t;
    };

    const arm = () => {
      video
        .play()
        .then(() => {
          video.pause();
          video.currentTime = 0;
          paint();
          setVideoReady(true);
        })
        .catch(() => {
          video.currentTime = 0;
          paint();
          setVideoReady(true);
        });
    };

    video.addEventListener("seeked", onSeeked);
    video.addEventListener("loadeddata", paint);
    if (video.readyState >= 1) arm();
    else video.addEventListener("loadedmetadata", arm, { once: true });

    const onResize = () => paint();
    window.addEventListener("resize", onResize);

    return () => {
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("loadeddata", paint);
      window.removeEventListener("resize", onResize);
    };
  }, [paint]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reduceMotion || !videoReady) return;
    const video = videoRef.current;
    if (!video?.duration) return;
    applyTime(progress * video.duration);
  });

  useMotionValueEvent(frameScale, "change", () => {
    // Re-paint after spring layout settles
    requestAnimationFrame(paint);
  });

  return (
    <div
      ref={rootRef}
      className="relative mx-auto aspect-video h-auto w-full max-w-2xl overflow-visible md:max-w-none"
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
        {/* Hidden decoder — canvas paints frames (avoids transform/video paint bugs) */}
        <video
          ref={videoRef}
          src="/hero-sunglasses.mp4?v=5"
          poster="/hero-sunglasses-poster.png?v=5"
          muted
          playsInline
          preload="auto"
          className="pointer-events-none absolute h-px w-px opacity-0"
          tabIndex={-1}
        />
        <canvas
          ref={canvasRef}
          className="h-full w-full"
          style={{ backgroundColor: SITE_BG }}
        />
      </motion.div>

      <span className="sr-only">
        Silhouette of a person wearing reflective sunglasses, animated on scroll
      </span>
    </div>
  );
}
