import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { BodyText, Surface, TextAnchor } from "@/components/atoms";
import { SectionHeader } from "@/components/molecules";
import { siteContentByLocale } from "@/components/site/content";
import { getServiceDetail } from "@/components/site/serviceDetails";
import { isLocale } from "@/lib/i18n/locales";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const detail = getServiceDetail(locale, slug);

  if (!detail) {
    return {};
  }

  return {
    title: detail.title,
    description: detail.description,
    openGraph: {
      title: detail.title,
      description: detail.description
    }
  };
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const detail = getServiceDetail(locale, slug);

  if (!detail) {
    notFound();
  }

  const service = siteContentByLocale[locale].whatWeDo.services.find((item) => item.slug === slug);
  const titleId = "service-detail-title";

  return (
    <Surface as="section" tone="light" labelledBy={titleId} className="fx-section-organism fx-service-detail">
      <div className="fx-shell fx-service-detail-shell">
        <TextAnchor href={`/${locale}/what-we-do`} className="fx-service-detail-back">
          ← {siteContentByLocale[locale].nav.whatWeDo}
        </TextAnchor>
        <SectionHeader title={detail.title} titleId={titleId} kicker={detail.kicker} level="h1" />
        <BodyText className="fx-service-detail-description">{detail.description}</BodyText>
        <div className="fx-service-detail-content">
          <div className="fx-service-detail-body">
            <BodyText className="fx-service-detail-lead">{detail.lead}</BodyText>
            <ul className="fx-service-detail-points">
              {detail.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <TextAnchor href={detail.ctaHref} className="fx-about-cta fx-service-detail-cta">
              {detail.ctaLabel}
            </TextAnchor>
          </div>
          {service?.image ? (
            <figure className="fx-service-detail-media">
              <Image src={service.image.src} alt={service.image.alt} width={560} height={336} />
            </figure>
          ) : null}
        </div>
      </div>
    </Surface>
  );
}
