import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { getLandingPageByCampaign } from "@/lib/content/repository";
import { isLocale } from "@/lib/i18n/locales";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; campaign: string }>;
}): Promise<Metadata> {
  const { locale, campaign } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const page = await getLandingPageByCampaign(locale, campaign);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      images: page.ogImage ? [page.ogImage] : undefined
    }
  };
}

export default async function LandingPage({
  params
}: {
  params: Promise<{ locale: string; campaign: string }>;
}) {
  const { locale, campaign } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const page = await getLandingPageByCampaign(locale, campaign);

  if (!page) {
    notFound();
  }

  const { content } = await compileMDX({ source: page.body });

  return (
    <article aria-labelledby="lp-title">
      <p>{locale === "ja" ? "ランディングページ" : "Landing Page"}</p>
      <h1 id="lp-title">{page.title}</h1>
      <p>{page.description}</p>
      {page.heroCta ? <p>{locale === "ja" ? `CTA: ${page.heroCta}` : `CTA: ${page.heroCta}`}</p> : null}
      {content}
    </article>
  );
}
