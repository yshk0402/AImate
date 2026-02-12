import { notFound } from "next/navigation";

import { siteContentByLocale } from "@/components/site/content";
import { ContactTemplate } from "@/components/templates";
import { isLocale } from "@/lib/i18n/locales";

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = siteContentByLocale[locale];

  return <ContactTemplate content={content} />;
}
