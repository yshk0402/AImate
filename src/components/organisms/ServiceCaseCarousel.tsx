"use client";

import { useMemo, useState } from "react";

import type { ServiceCaseCard } from "@/components/site/serviceDetails";

type ServiceCaseCarouselProps = {
  cards: ServiceCaseCard[];
  locale: "ja" | "en";
};

const FALLBACK_CARDS: Record<"ja" | "en", ServiceCaseCard[]> = {
  ja: [
    {
      title: "採用記事制作フローを再設計して、月次運用を半自動化",
      tags: ["広報・採用", "運用改善"],
      status: "coming_soon"
    },
    {
      title: "GAデータ整形とレポート作成を統合し、報告工数を圧縮",
      tags: ["Webマーケ", "レポート自動化"],
      status: "coming_soon"
    },
    {
      title: "提案書ドラフト生成を標準化して、営業初動の速度を改善",
      tags: ["営業組織", "提案支援"],
      status: "coming_soon"
    }
  ],
  en: [
    {
      title: "Redesigned hiring-content workflows and reduced monthly manual work",
      tags: ["Recruiting", "Operations"],
      status: "coming_soon"
    },
    {
      title: "Unified GA data shaping and reporting to cut routine reporting effort",
      tags: ["Web Marketing", "Automation"],
      status: "coming_soon"
    },
    {
      title: "Standardized proposal drafting to speed up early sales execution",
      tags: ["Sales", "Enablement"],
      status: "coming_soon"
    }
  ]
};

export function ServiceCaseCarousel({ cards, locale }: ServiceCaseCarouselProps) {
  const sourceCards = useMemo(() => (cards.length > 0 ? cards : FALLBACK_CARDS[locale]), [cards, locale]);
  const pages = useMemo(() => {
    const chunks: ServiceCaseCard[][] = [];

    for (let i = 0; i < sourceCards.length; i += 3) {
      chunks.push(sourceCards.slice(i, i + 3));
    }

    return chunks;
  }, [sourceCards]);
  const [pageIndex, setPageIndex] = useState(0);
  const currentPage = pages[pageIndex] ?? [];

  const prev = () => {
    setPageIndex((value) => (value === 0 ? pages.length - 1 : value - 1));
  };

  const next = () => {
    setPageIndex((value) => (value === pages.length - 1 ? 0 : value + 1));
  };

  return (
    <div className="fx-service-case-carousel" aria-live="polite">
      <div className="fx-service-case-slider">
        <button
          type="button"
          className="fx-service-case-nav"
          onClick={prev}
          aria-label="Previous cases"
          disabled={pages.length <= 1}
        >
          ←
        </button>
        <div className="fx-service-case-track" aria-label={`Case page ${pageIndex + 1}`}>
          {currentPage.map((card, cardIndex) => (
            <article className="fx-service-case-card" key={`case-${pageIndex}-${card.title}-${cardIndex}`}>
              <div className="fx-service-case-thumbnail" aria-hidden="true">
                {card.imageSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={card.imageSrc} alt="" />
                ) : (
                  <span className="fx-service-case-thumbnail-label">thumbnail</span>
                )}
              </div>
              <div className="fx-service-case-body">
                <div className="fx-service-case-tags" aria-label="tags">
                  {(card.tags && card.tags.length > 0 ? card.tags.slice(0, 2) : ["Case"]).map((tag) => (
                    <span key={tag} className="fx-service-case-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="fx-service-case-title">{card.title}</h3>
                {card.status === "coming_soon" || !card.href ? (
                  <p className="fx-service-case-status" role="link" aria-disabled="true">
                    Coming Soon
                  </p>
                ) : null}
              </div>
            </article>
          ))}
          {currentPage.length < 3
            ? Array.from({ length: 3 - currentPage.length }).map((_, emptyIndex) => (
                <div
                  key={`case-empty-${emptyIndex}`}
                  className="fx-service-case-card fx-service-case-card-empty"
                  aria-hidden="true"
                />
              ))
            : null}
        </div>
        <button type="button" className="fx-service-case-nav" onClick={next} aria-label="Next cases" disabled={pages.length <= 1}>
          →
        </button>
      </div>
      <div className="fx-service-case-dots" role="tablist" aria-label="Case slides">
        {pages.map((_, dotIndex) => (
          <button
            key={`case-dot-${dotIndex}`}
            type="button"
            className={dotIndex === pageIndex ? "fx-service-case-dot is-active" : "fx-service-case-dot"}
            onClick={() => setPageIndex(dotIndex)}
            aria-label={`Go to cases ${dotIndex + 1}`}
            aria-selected={dotIndex === pageIndex}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
}
