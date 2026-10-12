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

export default function HeroVisual({ scrollTargetRef }: HeroVisualProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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

  const applyTime = useCallback((t: number) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const next = Math.min(Math.max(t, 0), video.duration - 0.001);
    if (video.seeking) {
      pendingTime.current = next;
      return;
    }
    video.currentTime = next;
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onSeeked = () => {
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
          setVideoReady(true);
        })
        .catch(() => {
          video.currentTime = 0;
          setVideoReady(true);
        });
    };

    video.addEventListener("seeked", onSeeked);
    if (video.readyState >= 1) arm();
    else video.addEventListener("loadedmetadata", arm, { once: true });

    return () => {
      video.removeEventListener("seeked", onSeeked);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reduceMotion || !videoReady) return;
    const video = videoRef.current;
    if (!video?.duration) return;
    applyTime(progress * video.duration);
  });

  return (
    <div
      ref={rootRef}
      className="relative mx-auto aspect-[16/10] h-auto w-full max-w-2xl overflow-visible sm:aspect-[16/11] md:max-w-none lg:aspect-auto lg:h-[min(72vh,640px)]"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 origin-center overflow-hidden will-change-transform"
        style={{ scale: reduceMotion ? 1 : frameScale }}
      >
        <video
          ref={videoRef}
          src="/hero-sunglasses.mp4"
          poster="/hero-sunglasses-poster.png"
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-[85%_40%]"
        />
      </motion.div>

      <span className="sr-only">
        Silhouette of a person wearing reflective sunglasses, animated on scroll
      </span>
    </div>
  );
}
