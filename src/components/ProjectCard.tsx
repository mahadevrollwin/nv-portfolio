import Link from "next/link";
import type { projects } from "@/lib/content";

type Project = (typeof projects)[number];

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Link
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-[1.5rem] bg-bg-elevated transition duration-500 hover:-translate-y-1"
    >
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{ background: project.accent }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(253,248,245,0.35),transparent_45%)]" />
        <p className="absolute left-5 top-5 font-display text-5xl uppercase text-white/25 md:text-6xl">
          {String(index + 1).padStart(2, "0")}
        </p>
        <p className="absolute bottom-5 left-5 right-5 font-display text-[clamp(2rem,4vw,3.4rem)] uppercase leading-[0.9] tracking-tight text-white">
          {project.title}
        </p>
      </div>
      <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-6">
        <div>
          <p className="font-medium">{project.title}</p>
          <p className="text-sm text-muted">{project.category}</p>
        </div>
        <span className="text-sm text-muted transition group-hover:text-accent">{project.year}</span>
      </div>
    </Link>
  );
}
