import type { MetadataRoute } from "next";

import { getAllPublishedRoutes } from "@/lib/content/repository";
import { isPrelaunchOperatesX } from "@/lib/releasePhase";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = isPrelaunchOperatesX() ? ["/", "/contact"] : await getAllPublishedRoutes();
  const updatedAt = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: updatedAt,
    changeFrequency: "weekly",
    priority: route.includes("/lp/") ? 0.9 : 0.7
  }));
}
