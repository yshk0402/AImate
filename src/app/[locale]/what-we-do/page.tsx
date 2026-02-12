import { notFound } from "next/navigation";

import { siteContentByLocale } from "@/components/site/content";
import { WhatWeDoTemplate } from "@/components/templates";
import { isLocale } from "@/lib/i18n/locales";

export default async function WhatWeDoPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = siteContentByLocale[locale];

  return <WhatWeDoTemplate locale={locale} content={content} />;
}
