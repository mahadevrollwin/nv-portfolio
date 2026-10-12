import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: "2026-10-12",
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
