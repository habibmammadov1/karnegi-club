import type { MetadataRoute } from "next";
import { programs, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    ...["telimler", "korporativ", "fikirler", "tedbirler", "qalereya", "videobloq", "haqqimizda", "elaqe"].map((path) => ({
      url: `${site.url}/${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...programs.map((p) => ({ url: `${site.url}/telimler/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
