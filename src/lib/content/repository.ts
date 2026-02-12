import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

import { LOCALES } from "@/lib/i18n/locales";
import { siteContentByLocale } from "@/components/site/content";
import type {
  BlogFrontmatter,
  BlogPost,
  LandingPage,
  LandingPageFrontmatter,
  Locale
} from "@/types/content";

const CONTENT_ROOT = path.join(process.cwd(), "content");
const isoDateSchema = z
  .string()
  .refine((value) => !Number.isNaN(Date.parse(value)), "publishedAt must be a valid ISO date string");

const blogSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1),
  locale: z.enum(["ja", "en"]),
  status: z.enum(["draft", "published"]),
  publishedAt: isoDateSchema.optional(),
  tags: z.array(z.string()).optional(),
  ogImage: z.string().optional()
});

const lpSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  campaign: z.string().min(1),
  locale: z.enum(["ja", "en"]),
  status: z.enum(["draft", "published"]),
  publishedAt: isoDateSchema.optional(),
  heroCta: z.string().optional(),
  ogImage: z.string().optional()
});

function sortByPublishedDate<T extends { publishedAt?: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const aDate = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const bDate = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return bDate - aDate;
  });
}

async function readMdxFiles(dirPath: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
      .map((entry) => entry.name);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

function ensureLocaleMatches(filePath: string, expected: Locale, actual: Locale): void {
  if (expected !== actual) {
    throw new Error(
      `[content] Locale mismatch in ${filePath}. Directory locale is "${expected}" but frontmatter locale is "${actual}".`
    );
  }
}

function ensureSlugMatches(filePath: string, expected: string, actual: string, label: string): void {
  if (expected !== actual) {
    throw new Error(
      `[content] ${label} mismatch in ${filePath}. Expected "${expected}" based on filename.`
    );
  }
}

async function loadBlogByLocale(locale: Locale): Promise<BlogPost[]> {
  const dirPath = path.join(CONTENT_ROOT, "blog", locale);
  const fileNames = await readMdxFiles(dirPath);

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(dirPath, fileName);
      const raw = await fs.readFile(filePath, "utf-8");
      const parsed = matter(raw);
      const frontmatter = blogSchema.parse(parsed.data) as BlogFrontmatter;

      ensureLocaleMatches(filePath, locale, frontmatter.locale);
      ensureSlugMatches(filePath, fileName.replace(/\.mdx$/, ""), frontmatter.slug, "slug");

      return {
        ...frontmatter,
        body: parsed.content,
        filePath
      };
    })
  );

  return posts;
}

async function loadLandingPagesByLocale(locale: Locale): Promise<LandingPage[]> {
  const dirPath = path.join(CONTENT_ROOT, "lp", locale);
  const fileNames = await readMdxFiles(dirPath);

  const pages = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(dirPath, fileName);
      const raw = await fs.readFile(filePath, "utf-8");
      const parsed = matter(raw);
      const frontmatter = lpSchema.parse(parsed.data) as LandingPageFrontmatter;

      ensureLocaleMatches(filePath, locale, frontmatter.locale);
      ensureSlugMatches(
        filePath,
        fileName.replace(/\.mdx$/, ""),
        frontmatter.campaign,
        "campaign"
      );

      return {
        ...frontmatter,
        body: parsed.content,
        filePath
      };
    })
  );

  return pages;
}

export async function getBlogPosts(locale: Locale, includeDraft = false): Promise<BlogPost[]> {
  const allPosts = await loadBlogByLocale(locale);
  const filtered = includeDraft ? allPosts : allPosts.filter((post) => post.status === "published");
  return sortByPublishedDate(filtered);
}

export async function getBlogPostBySlug(locale: Locale, slug: string): Promise<BlogPost | null> {
  const allPosts = await loadBlogByLocale(locale);
  const post = allPosts.find((entry) => entry.slug === slug);

  if (!post || post.status !== "published") {
    return null;
  }

  return post;
}

export async function getLandingPages(locale: Locale, includeDraft = false): Promise<LandingPage[]> {
  const allPages = await loadLandingPagesByLocale(locale);
  const filtered = includeDraft ? allPages : allPages.filter((page) => page.status === "published");
  return sortByPublishedDate(filtered);
}

export async function getLandingPageByCampaign(
  locale: Locale,
  campaign: string
): Promise<LandingPage | null> {
  const allPages = await loadLandingPagesByLocale(locale);
  const page = allPages.find((entry) => entry.campaign === campaign);

  if (!page || page.status !== "published") {
    return null;
  }

  return page;
}

export async function getAllPublishedRoutes(): Promise<string[]> {
  const routes: string[] = [];

  for (const locale of LOCALES) {
    routes.push(`/${locale}`);
    routes.push(`/${locale}/about`);
    routes.push(`/${locale}/blog`);
    routes.push(`/${locale}/contact`);
    routes.push(`/${locale}/what-we-do`);
    routes.push(`/${locale}/news`);
    routes.push(
      ...siteContentByLocale[locale].whatWeDo.services
        .map((service) => service.slug)
        .filter((slug): slug is string => Boolean(slug))
        .map((slug) => `/${locale}/what-we-do/${slug}`)
    );

    const [posts, pages] = await Promise.all([getBlogPosts(locale), getLandingPages(locale)]);
    routes.push(...posts.map((post) => `/${locale}/blog/${post.slug}`));
    routes.push(...pages.map((page) => `/${locale}/lp/${page.campaign}`));
  }

  return routes;
}
