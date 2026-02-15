import Image from "next/image";

import { TextAnchor } from "@/components/atoms";
import type { ServiceDetail } from "@/components/site/serviceDetails";

import { OperatesXFaq } from "./OperatesXFaq";

type OperatesXLandingDetail = ServiceDetail & {
  hero: NonNullable<ServiceDetail["hero"]>;
  problemSection: NonNullable<ServiceDetail["problemSection"]>;
  ctaSection: NonNullable<ServiceDetail["ctaSection"]>;
  operatesXLanding: NonNullable<ServiceDetail["operatesXLanding"]>;
};

type OperatesXLandingProps = {
  detail: OperatesXLandingDetail;
};

export function OperatesXLanding({ detail }: OperatesXLandingProps) {
  const secondaryDisabled = detail.ctaSection.secondary.href === "#";

  return (
    <>
      <section className="fx-ox-section fx-ox-hero" aria-label="Operates X Hero">
        <div className="fx-ox-hero-grid">
          <div className="fx-ox-hero-copy">
            <p className="fx-ox-hero-headline">{detail.hero.headline}</p>
            {detail.hero.subheadLines.map((line) => (
              <p key={line} className="fx-ox-hero-subhead">
                {line}
              </p>
            ))}
            <div className="fx-ox-cta-row">
              <TextAnchor href={detail.hero.primaryCtaHref ?? detail.ctaSection.primary.href} className="fx-about-cta fx-ox-cta-primary">
                {detail.hero.primaryCtaLabel ?? detail.ctaSection.primary.label}
              </TextAnchor>
              {secondaryDisabled ? (
                <span className="fx-about-cta fx-ox-cta-secondary is-disabled" role="link" aria-disabled="true">
                  {detail.ctaSection.secondary.label}
                </span>
              ) : (
                <TextAnchor href={detail.ctaSection.secondary.href} className="fx-about-cta fx-ox-cta-secondary">
                  {detail.ctaSection.secondary.label}
                </TextAnchor>
              )}
            </div>
            {detail.hero.supportingNote ? <p className="fx-ox-hero-note">{detail.hero.supportingNote}</p> : null}
          </div>
          <figure className="fx-ox-hero-media">
            <Image
              src="/images/operates-x/hero-workflow.svg"
              alt="業務フローの再設計と実装を表すイラスト"
              width={640}
              height={460}
              priority
            />
          </figure>
        </div>
        <div className="fx-ox-hero-cards" aria-label="Operates Xの支援内容">
          {detail.operatesXLanding.heroCards.map((card) => (
            <article key={card.title} className="fx-ox-mini-card">
              <h2 className="fx-ox-mini-title">{card.title}</h2>
              <p className="fx-ox-mini-body">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fx-ox-section fx-ox-band" aria-labelledby="ox-problem-title">
        <h2 id="ox-problem-title" className="fx-ox-title">
          {detail.problemSection.title}
        </h2>
        <div className="fx-ox-problem-grid">
          {detail.operatesXLanding.problemCards.map((card) => (
            <article key={card.title} className="fx-ox-problem-card">
              <h3 className="fx-ox-card-title">{card.title}</h3>
              <p className="fx-ox-card-body">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      {detail.operatesXLanding.impactSections.map((section, index) => (
        <section
          key={section.id}
          className={index % 2 === 0 ? "fx-ox-section" : "fx-ox-section fx-ox-band"}
          aria-labelledby={`ox-impact-${section.id}`}
        >
          <div className="fx-ox-impact-grid">
            <div>
              <h2 id={`ox-impact-${section.id}`} className="fx-ox-title">
                {section.title}
              </h2>
              <p className="fx-ox-text">{section.description}</p>
              <ul className="fx-ox-list">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <figure className="fx-ox-illustration">
              <Image src={section.image.src} alt={section.image.alt} width={520} height={320} />
            </figure>
          </div>
          <div className="fx-ox-metric-grid">
            {section.metrics.map((metric) => (
              <article key={metric.label} className="fx-ox-metric-card">
                <p className="fx-ox-metric-label">{metric.label}</p>
                <p className="fx-ox-metric-value">{metric.value}</p>
                <p className="fx-ox-metric-note">{metric.note}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="fx-ox-section fx-ox-cta-banner" aria-labelledby="ox-banner-title">
        <div>
          <h2 id="ox-banner-title" className="fx-ox-title">
            {detail.operatesXLanding.ctaBanner.title}
          </h2>
          <p className="fx-ox-text">{detail.operatesXLanding.ctaBanner.description}</p>
        </div>
        <TextAnchor href={detail.operatesXLanding.ctaBanner.primaryHref} className="fx-about-cta fx-ox-cta-primary">
          {detail.operatesXLanding.ctaBanner.primaryLabel}
        </TextAnchor>
      </section>

      <section className="fx-ox-section fx-ox-band" aria-labelledby="ox-support-title">
        <h2 id="ox-support-title" className="fx-ox-title">
          {detail.operatesXLanding.supportAreas.title}
        </h2>
        <p className="fx-ox-text">{detail.operatesXLanding.supportAreas.description}</p>
        <div className="fx-ox-support-grid">
          {detail.operatesXLanding.supportAreas.cards.map((card) => (
            <article key={card.title} className="fx-ox-support-card">
              <figure className="fx-ox-support-media">
                <Image src={card.image.src} alt={card.image.alt} width={440} height={260} />
              </figure>
              <div className="fx-ox-support-body">
                <h3 className="fx-ox-card-title">{card.title}</h3>
                <ul className="fx-ox-list">
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="fx-ox-section" aria-labelledby="ox-platform-title">
        <div className="fx-ox-platform-grid">
          <figure className="fx-ox-platform-media">
            <Image
              src={detail.operatesXLanding.platformHighlights.image.src}
              alt={detail.operatesXLanding.platformHighlights.image.alt}
              width={620}
              height={390}
            />
          </figure>
          <div>
            <h2 id="ox-platform-title" className="fx-ox-title">
              {detail.operatesXLanding.platformHighlights.title}
            </h2>
            <p className="fx-ox-text">{detail.operatesXLanding.platformHighlights.description}</p>
            <ul className="fx-ox-list">
              {detail.operatesXLanding.platformHighlights.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="fx-ox-section fx-ox-band" aria-labelledby="ox-trust-title">
        <h2 id="ox-trust-title" className="fx-ox-title">
          {detail.operatesXLanding.trustMetrics.title}
        </h2>
        <p className="fx-ox-text">{detail.operatesXLanding.trustMetrics.description}</p>
        <div className="fx-ox-trust-grid">
          {detail.operatesXLanding.trustMetrics.stats.map((stat) => (
            <article key={stat.label} className="fx-ox-trust-card">
              <p className="fx-ox-metric-label">{stat.label}</p>
              <p className="fx-ox-metric-value">{stat.value}</p>
              {stat.note ? <p className="fx-ox-metric-note">{stat.note}</p> : null}
            </article>
          ))}
        </div>
        <ul className="fx-ox-logo-list" aria-label="導入業種ロゴ">
          {detail.operatesXLanding.trustMetrics.logos.map((logo) => (
            <li key={logo} className="fx-ox-logo-item" aria-label={logo}>
              {logo}
            </li>
          ))}
        </ul>
        <p className="fx-ox-caption">{detail.operatesXLanding.trustMetrics.logoNote}</p>
      </section>

      <section className="fx-ox-section" aria-labelledby="ox-case-title">
        <h2 id="ox-case-title" className="fx-ox-title">
          {detail.operatesXLanding.caseStudies.title}
        </h2>
        <p className="fx-ox-text">{detail.operatesXLanding.caseStudies.description}</p>
        <div className="fx-ox-case-grid">
          {detail.operatesXLanding.caseStudies.cards.map((card) => (
            <article key={card.title} className="fx-ox-case-card">
              <div className="fx-ox-case-media">
                {card.imageSrc ? (
                  <Image src={card.imageSrc} alt="" width={440} height={248} aria-hidden="true" />
                ) : (
                  <span className="fx-ox-case-fallback" aria-hidden="true">
                    case
                  </span>
                )}
              </div>
              <div className="fx-ox-case-body">
                <div className="fx-ox-case-tags" aria-label="タグ">
                  {(card.tags ?? []).map((tag) => (
                    <span key={tag} className="fx-ox-case-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="fx-ox-card-title">{card.title}</h3>
                {card.status === "coming_soon" ? <p className="fx-ox-case-status">公開準備中</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="fx-ox-section fx-ox-band" aria-labelledby="ox-faq-title">
        <h2 id="ox-faq-title" className="fx-ox-title">
          よくある質問
        </h2>
        <OperatesXFaq items={detail.operatesXLanding.faqs} />
      </section>

      <section className="fx-ox-section" aria-labelledby="ox-final-title">
        <h2 id="ox-final-title" className="fx-ox-title">
          {detail.operatesXLanding.finalMessage.title}
        </h2>
        {detail.operatesXLanding.finalMessage.paragraphs.map((paragraph) => (
          <p key={paragraph} className="fx-ox-text">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="fx-ox-section fx-ox-final-cta" aria-labelledby="ox-final-cta-title">
        <h2 id="ox-final-cta-title" className="fx-ox-title">
          {detail.ctaSection.title}
        </h2>
        <div className="fx-ox-cta-row">
          <TextAnchor href={detail.ctaSection.primary.href} className="fx-about-cta fx-ox-cta-primary">
            {detail.ctaSection.primary.label}
          </TextAnchor>
          {secondaryDisabled ? (
            <span className="fx-about-cta fx-ox-cta-secondary is-disabled" role="link" aria-disabled="true">
              {detail.ctaSection.secondary.label}
            </span>
          ) : (
            <TextAnchor href={detail.ctaSection.secondary.href} className="fx-about-cta fx-ox-cta-secondary">
              {detail.ctaSection.secondary.label}
            </TextAnchor>
          )}
        </div>
        {secondaryDisabled ? <p className="fx-ox-caption">資料ダウンロードは現在準備中です。</p> : null}
      </section>

      <aside className="fx-ox-sticky" aria-label="Primary action">
        <div className="fx-ox-sticky-inner">
          <p className="fx-ox-sticky-copy">まずは無料で、現場業務の無駄を可視化しましょう。</p>
          <TextAnchor href={detail.ctaSection.primary.href} className="fx-about-cta fx-ox-cta-primary fx-ox-sticky-link">
            {detail.ctaSection.primary.label}
          </TextAnchor>
        </div>
      </aside>
    </>
  );
}
