import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { BodyText, Surface, TextAnchor } from "@/components/atoms";
import { SectionHeader } from "@/components/molecules";
import { ServiceCaseCarousel } from "@/components/organisms";
import { siteContent } from "@/components/site/content";
import { getServiceDetail } from "@/components/site/serviceDetails";
import type { ServiceDetail } from "@/components/site/serviceDetails";
import { OperatesXLanding } from "@/components/site/operatesX/OperatesXLanding";

type OperatesXDetail = ServiceDetail & {
  hero: NonNullable<ServiceDetail["hero"]>;
  problemSection: NonNullable<ServiceDetail["problemSection"]>;
  positioningSection: NonNullable<ServiceDetail["positioningSection"]>;
  monthlyPartnerSection: NonNullable<ServiceDetail["monthlyPartnerSection"]>;
  useCasesSection: NonNullable<ServiceDetail["useCasesSection"]>;
  comparisonSection: NonNullable<ServiceDetail["comparisonSection"]>;
  flowSection: NonNullable<ServiceDetail["flowSection"]>;
  pricingSection: NonNullable<ServiceDetail["pricingSection"]>;
  closingSection: NonNullable<ServiceDetail["closingSection"]>;
  ctaSection: NonNullable<ServiceDetail["ctaSection"]>;
};

function isOperatesXDetail(slug: string, detail: ServiceDetail): detail is OperatesXDetail {
  return Boolean(
    slug === "operates-x" &&
      detail.hero &&
      detail.problemSection &&
      detail.positioningSection &&
      detail.monthlyPartnerSection &&
      detail.useCasesSection &&
      detail.comparisonSection &&
      detail.flowSection &&
      detail.pricingSection &&
      detail.closingSection &&
      detail.ctaSection
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail(slug);

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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getServiceDetail(slug);

  if (!detail) {
    notFound();
  }

  const service = siteContent.whatWeDo.services.find((item) => item.slug === slug);
  const titleId = "service-detail-title";
  const operatesXDetail = isOperatesXDetail(slug, detail) ? detail : null;

  return (
    <Surface
      as="section"
      tone="light"
      labelledBy={titleId}
      className={[
        "fx-section-organism",
        "fx-service-detail",
        operatesXDetail ? "fx-service-detail-lp" : null,
        operatesXDetail ? "fx-service-detail-lp-ja" : null
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="fx-shell fx-service-detail-shell">
        <TextAnchor href="/what-we-do" className="fx-service-detail-back">
          ← {siteContent.nav.whatWeDo}
        </TextAnchor>
        <SectionHeader title={detail.title} titleId={titleId} kicker={detail.kicker} level="h1" />
        <BodyText className="fx-service-detail-description">{detail.description}</BodyText>
        {operatesXDetail ? (
          operatesXDetail.operatesXLanding ? (
            <OperatesXLanding
              detail={
                operatesXDetail as OperatesXDetail & {
                  operatesXLanding: NonNullable<ServiceDetail["operatesXLanding"]>;
                }
              }
            />
          ) : (
            <>
            <section className="fx-service-section fx-service-hero" aria-label="Operates X Hero">
              <p className="fx-service-hero-headline">{operatesXDetail.hero.headline}</p>
              {operatesXDetail.hero.subheadLines.map((line) => (
                <p key={line} className="fx-service-hero-subhead">
                  {line}
                </p>
              ))}
              <div className="fx-service-hero-cta-row">
                <TextAnchor
                  href={operatesXDetail.hero.primaryCtaHref ?? operatesXDetail.ctaSection.primary.href}
                  className="fx-about-cta fx-service-detail-cta"
                >
                  {operatesXDetail.hero.primaryCtaLabel ?? operatesXDetail.ctaSection.primary.label}
                </TextAnchor>
                {operatesXDetail.ctaSection.secondary.href === "#" ? (
                  <span
                    className="fx-about-cta fx-service-detail-cta fx-service-detail-cta-secondary is-disabled"
                    role="link"
                    aria-disabled="true"
                  >
                    {operatesXDetail.ctaSection.secondary.label}
                  </span>
                ) : (
                  <TextAnchor
                    href={operatesXDetail.ctaSection.secondary.href}
                    className="fx-about-cta fx-service-detail-cta fx-service-detail-cta-secondary"
                  >
                    {operatesXDetail.ctaSection.secondary.label}
                  </TextAnchor>
                )}
              </div>
              {operatesXDetail.hero.supportingNote ? (
                <p className="fx-service-hero-note">{operatesXDetail.hero.supportingNote}</p>
              ) : null}
              {service?.image ? (
                <figure className="fx-service-detail-media fx-service-hero-media">
                  <Image src={service.image.src} alt={service.image.alt} width={960} height={576} />
                </figure>
              ) : null}
            </section>

            <section className="fx-service-section fx-service-section-alt" aria-labelledby="service-problem-title">
              <h2 id="service-problem-title" className="fx-service-section-title">
                {operatesXDetail.problemSection.title}
              </h2>
              {operatesXDetail.problemSection.summary ? (
                <p className="fx-service-section-summary">{operatesXDetail.problemSection.summary}</p>
              ) : null}
              <ul className="fx-service-list">
                {operatesXDetail.problemSection.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {operatesXDetail.problemSection.closingLines.map((line) => (
                <p key={line} className="fx-service-section-text">
                  {line}
                </p>
              ))}
            </section>

            <section className="fx-service-section" aria-labelledby="service-positioning-title">
              <h2 id="service-positioning-title" className="fx-service-section-title">
                {operatesXDetail.positioningSection.title}
              </h2>
              {operatesXDetail.positioningSection.summary ? (
                <p className="fx-service-section-summary">{operatesXDetail.positioningSection.summary}</p>
              ) : null}
              {operatesXDetail.positioningSection.paragraphs.map((paragraph) => (
                <p key={paragraph} className="fx-service-section-text fx-service-section-text-strong">
                  {paragraph}
                </p>
              ))}
            </section>

            <section className="fx-service-section fx-service-section-alt" aria-labelledby="service-monthly-title">
              <h2 id="service-monthly-title" className="fx-service-section-title">
                {operatesXDetail.monthlyPartnerSection.title}
              </h2>
              {operatesXDetail.monthlyPartnerSection.summary ? (
                <p className="fx-service-section-summary">{operatesXDetail.monthlyPartnerSection.summary}</p>
              ) : null}
              <ul className="fx-service-list">
                {operatesXDetail.monthlyPartnerSection.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {operatesXDetail.monthlyPartnerSection.closingLines.map((line) => (
                <p key={line} className="fx-service-section-text">
                  {line}
                </p>
              ))}
            </section>

            <section className="fx-service-section" aria-labelledby="service-usecases-title">
              <h2 id="service-usecases-title" className="fx-service-section-title">
                {operatesXDetail.useCasesSection.title}
              </h2>
              {operatesXDetail.useCasesSection.summary ? (
                <p className="fx-service-section-summary">{operatesXDetail.useCasesSection.summary}</p>
              ) : null}
              <ServiceCaseCarousel cards={operatesXDetail.caseCards ?? []} />
              {operatesXDetail.useCasesSection.closingLines.map((line) => (
                <p key={line} className="fx-service-section-text">
                  {line}
                </p>
              ))}
            </section>

            <section className="fx-service-section fx-service-section-alt" aria-labelledby="service-comparison-title">
              <h2 id="service-comparison-title" className="fx-service-section-title">
                {operatesXDetail.comparisonSection.title}
              </h2>
              {operatesXDetail.comparisonSection.summary ? (
                <p className="fx-service-section-summary">{operatesXDetail.comparisonSection.summary}</p>
              ) : null}
              <div className="fx-service-compare-grid">
                <article className="fx-service-compare-card">
                  <h3 className="fx-service-subtitle">{operatesXDetail.comparisonSection.leftTitle}</h3>
                  <ul className="fx-service-list">
                    {operatesXDetail.comparisonSection.leftItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
                <article className="fx-service-compare-card fx-service-compare-card-featured">
                  <h3 className="fx-service-subtitle">{operatesXDetail.comparisonSection.rightTitle}</h3>
                  <ul className="fx-service-list">
                    {operatesXDetail.comparisonSection.rightItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </section>

            <section className="fx-service-section" aria-labelledby="service-flow-title">
              <h2 id="service-flow-title" className="fx-service-section-title">
                {operatesXDetail.flowSection.title}
              </h2>
              {operatesXDetail.flowSection.summary ? (
                <p className="fx-service-section-summary">{operatesXDetail.flowSection.summary}</p>
              ) : null}
              <ol className="fx-service-flow-list">
                {operatesXDetail.flowSection.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              {operatesXDetail.flowSection.closingLines.map((line) => (
                <p key={line} className="fx-service-section-text">
                  {line}
                </p>
              ))}
            </section>

            <section className="fx-service-section fx-service-section-alt" aria-labelledby="service-pricing-title">
              <h2 id="service-pricing-title" className="fx-service-section-title">
                {operatesXDetail.pricingSection.title}
              </h2>
              {operatesXDetail.pricingSection.summary ? (
                <p className="fx-service-section-summary">{operatesXDetail.pricingSection.summary}</p>
              ) : null}
              <ul className="fx-service-pricing">
                {operatesXDetail.pricingSection.plans.map((plan) => (
                  <li key={plan}>{plan}</li>
                ))}
              </ul>
              {operatesXDetail.pricingSection.note ? (
                <p className="fx-service-note">{operatesXDetail.pricingSection.note}</p>
              ) : null}
            </section>

            <section className="fx-service-section" aria-labelledby="service-closing-title">
              <h2 id="service-closing-title" className="fx-service-section-title">
                AIは流行りです。
              </h2>
              {operatesXDetail.closingSection.paragraphs.map((paragraph) => (
                <p key={paragraph} className="fx-service-section-text">
                  {paragraph}
                </p>
              ))}
            </section>

            <section className="fx-service-section fx-service-cta-section" aria-labelledby="service-cta-title">
              <h2 id="service-cta-title" className="fx-service-section-title">
                {operatesXDetail.ctaSection.title}
              </h2>
              <div className="fx-service-cta-row">
                <TextAnchor href={operatesXDetail.ctaSection.primary.href} className="fx-about-cta fx-service-detail-cta">
                  {operatesXDetail.ctaSection.primary.label}
                </TextAnchor>
                {operatesXDetail.ctaSection.secondary.href === "#" ? (
                  <span
                    className="fx-about-cta fx-service-detail-cta fx-service-detail-cta-secondary is-disabled"
                    role="link"
                    aria-disabled="true"
                  >
                    {operatesXDetail.ctaSection.secondary.label}
                  </span>
                ) : (
                  <TextAnchor
                    href={operatesXDetail.ctaSection.secondary.href}
                    className="fx-about-cta fx-service-detail-cta fx-service-detail-cta-secondary"
                  >
                    {operatesXDetail.ctaSection.secondary.label}
                  </TextAnchor>
                )}
              </div>
              {operatesXDetail.ctaSection.secondary.href === "#" ? (
                <p className="fx-service-cta-note" aria-live="polite">
                  資料ダウンロードは現在準備中です。
                </p>
              ) : null}
            </section>

            <aside className="fx-service-sticky-cta" aria-label="Primary action">
              <div className="fx-service-sticky-cta-inner">
                <p className="fx-service-sticky-cta-copy">まずは無料で、現場業務の無駄を可視化しましょう。</p>
                <TextAnchor href={operatesXDetail.ctaSection.primary.href} className="fx-about-cta fx-service-sticky-cta-link">
                  {operatesXDetail.ctaSection.primary.label}
                </TextAnchor>
              </div>
            </aside>
            </>
          )
        ) : (
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
        )}
      </div>
    </Surface>
  );
}
