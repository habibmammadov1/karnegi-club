import type { MetadataRoute } from "next";
import { programs, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    ...programs.map((p) => ({ url: `${site.url}/telimler/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
