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
        aboutSectionNav={{
          mvv: content.mvv.heading,
          team: content.team.heading,
          history: content.history.heading,
          companyProfile: content.companyProfile.heading
        }}
        whatWeDoSectionNav={{
          aiDx: locale === "ja" ? "AI DX事業" : "AI DX",
          education: locale === "ja" ? "教育事業" : "Education"
        }}
      />
      <main className="fx-main-area">{children}</main>
      <SiteFooter company={content.company} locale={locale} />
    </>
  );
}
