import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { siteContentByLocale } from "@/components/site/content";
import { BlogPostTemplate } from "@/components/templates";
import { getBlogPostBySlug } from "@/lib/content/repository";
import { isLocale } from "@/lib/i18n/locales";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const post = await getBlogPostBySlug(locale, slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.ogImage ? [post.ogImage] : undefined
    }
  };
}

export default async function BlogDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const post = await getBlogPostBySlug(locale, slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({ source: post.body });
  const localeContent = siteContentByLocale[locale];

  return <BlogPostTemplate content={localeContent} post={post} body={content} />;
}
