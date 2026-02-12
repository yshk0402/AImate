import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter, SiteHeader } from "@/components/organisms";
import { siteContentByLocale } from "@/components/site/content";
import { isLocale } from "@/lib/i18n/locales";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = siteContentByLocale[locale];

  return {
    title: `${content.company} | Corporate Site`,
    description: content.hero.body
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = siteContentByLocale[locale];

  return (
    <>
      <SiteHeader
        locale={locale}
        company={content.company}
        nav={content.nav}
      />
      <main className="fx-main-area">{children}</main>
      <SiteFooter company={content.company} />
    </>
  );
}
