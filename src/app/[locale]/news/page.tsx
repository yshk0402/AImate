import { notFound } from "next/navigation";

import { siteContentByLocale } from "@/components/site/content";
import { NewsTemplate } from "@/components/templates";
import { getBlogPosts } from "@/lib/content/repository";
import { isLocale } from "@/lib/i18n/locales";

export default async function NewsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const posts = await getBlogPosts(locale);
  const content = siteContentByLocale[locale];

  return <NewsTemplate locale={locale} content={content} posts={posts} />;
}
