import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { isLocale, localeLabel } from "@/lib/i18n/locales";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return {
    title: locale === "ja" ? "コーポレートサイト" : "Corporate Site",
    description:
      locale === "ja"
        ? "AI駆動で継続拡張できるコーポレートサイト基盤"
        : "Corporate website foundation designed for AI-driven iterative development"
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

  const alternateLocale = locale === "ja" ? "en" : "ja";

  return (
    <>
      <header>
        <Link href={`/${locale}`}>Corp Site</Link>
        <nav aria-label="Global">
          <ul>
            <li>
              <Link href={`/${locale}`}>{locale === "ja" ? "ホーム" : "Home"}</Link>
            </li>
            <li>
              <Link href={`/${locale}/blog`}>Blog</Link>
            </li>
            <li>
              <Link href={`/${locale}/lp/launch-2026`}>LP</Link>
            </li>
            <li>
              <Link href={`/${alternateLocale}`}>{localeLabel(alternateLocale)}</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
