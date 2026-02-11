import { notFound } from "next/navigation";

import { siteContentByLocale } from "@/components/site/content";
import { AboutTemplate } from "@/components/templates";
import { isLocale } from "@/lib/i18n/locales";

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = siteContentByLocale[locale];

  return <AboutTemplate content={content} />;
}
