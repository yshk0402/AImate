import { notFound } from "next/navigation";

import { siteContentByLocale } from "@/components/site/content";
import { HomeTemplate } from "@/components/templates";
import { getBlogPosts } from "@/lib/content/repository";
import { isLocale } from "@/lib/i18n/locales";

export default async function LocaleHomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const posts = (await getBlogPosts(locale)).slice(0, 3);
  const content = siteContentByLocale[locale];

  return <HomeTemplate locale={locale} content={content} posts={posts} />;
}
