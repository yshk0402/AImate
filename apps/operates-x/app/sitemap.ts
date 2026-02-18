import type { MetadataRoute } from "next";

import { getPublishedArticles } from "./lib/content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${SITE_URL}/case`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${SITE_URL}/news`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4
    }
  ];

  const blogRoutes: MetadataRoute.Sitemap = getPublishedArticles("blog").map((article) => ({
    url: `${SITE_URL}/blog/${article.frontmatter.slug}`,
    lastModified: article.frontmatter.publishedAt ? new Date(article.frontmatter.publishedAt) : now,
    changeFrequency: "monthly",
    priority: 0.7
  }));

  const caseRoutes: MetadataRoute.Sitemap = getPublishedArticles("case").map((article) => ({
    url: `${SITE_URL}/case/${article.frontmatter.slug}`,
    lastModified: article.frontmatter.publishedAt ? new Date(article.frontmatter.publishedAt) : now,
    changeFrequency: "monthly",
    priority: 0.7
  }));

  const newsRoutes: MetadataRoute.Sitemap = getPublishedArticles("news").map((article) => ({
    url: `${SITE_URL}/news/${article.frontmatter.slug}`,
    lastModified: article.frontmatter.publishedAt ? new Date(article.frontmatter.publishedAt) : now,
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticRoutes, ...blogRoutes, ...caseRoutes, ...newsRoutes];
}
