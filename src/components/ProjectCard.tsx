"use client";

import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, type MouseEvent } from "react";

export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  hover: string;
  href: string;
};

type Props = {
  project: Project;
  index?: number;
};

const MotionLink = motion.create(Link);

export default function ProjectCard({ project, index = 0 }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  function onMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 14);
    rotateX.set((0.5 - py) * 14);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay: 0.05 * index, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <MotionLink
        ref={ref}
        href={project.href}
        className="group block"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ transform }}
      >
        <div className="project-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt="" className="img-base" loading="lazy" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.hover} alt="" className="img-hover" loading="lazy" />
        </div>
        <div className="mt-4 flex flex-col gap-1 px-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
          <h3 className="font-display text-2xl uppercase leading-[1.05] tracking-tight md:text-3xl">
            {project.title}
          </h3>
          <p className="text-sm text-muted">{project.category}</p>
        </div>
      </MotionLink>
    </motion.div>
  );
}
