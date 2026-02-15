import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { siteContent } from "@/components/site/content";
import { LandingPageTemplate } from "@/components/templates";
import { getLandingPageByCampaign } from "@/lib/content/repository";

export async function generateMetadata({
  params
}: {
  params: Promise<{ campaign: string }>;
}): Promise<Metadata> {
  const { campaign } = await params;
  const page = await getLandingPageByCampaign(campaign);

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
  params: Promise<{ campaign: string }>;
}) {
  const { campaign } = await params;
  const page = await getLandingPageByCampaign(campaign);

  if (!page) {
    notFound();
  }

  const { content } = await compileMDX({ source: page.body });

  return <LandingPageTemplate content={siteContent} page={page} body={content} />;
}
