"use client";

import { useMemo, useState } from "react";

import type { ServiceCaseCard } from "@/components/site/serviceDetails";

type ServiceCaseCarouselProps = {
  cards: ServiceCaseCard[];
};

const FALLBACK_CARDS: ServiceCaseCard[] = [
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
];

const labels = {
  previous: "前の支援例へ",
  next: "次の支援例へ",
  page: "支援例ページ",
  tags: "タグ",
  fallbackTag: "支援例",
  comingSoon: "公開準備中",
  slides: "支援例スライド",
  goTo: "支援例ページへ"
};

export function ServiceCaseCarousel({ cards }: ServiceCaseCarouselProps) {
  const sourceCards = useMemo(() => (cards.length > 0 ? cards : FALLBACK_CARDS), [cards]);
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
          aria-label={labels.previous}
          disabled={pages.length <= 1}
        >
          ←
        </button>
        <div className="fx-service-case-track" aria-label={`${labels.page} ${pageIndex + 1}`}>
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
                <div className="fx-service-case-tags" aria-label={labels.tags}>
                  {(card.tags && card.tags.length > 0 ? card.tags.slice(0, 2) : [labels.fallbackTag]).map((tag) => (
                    <span key={tag} className="fx-service-case-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="fx-service-case-title">{card.title}</h3>
                {card.status === "coming_soon" || !card.href ? (
                  <p className="fx-service-case-status" role="link" aria-disabled="true">
                    {labels.comingSoon}
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
        <button type="button" className="fx-service-case-nav" onClick={next} aria-label={labels.next} disabled={pages.length <= 1}>
          →
        </button>
      </div>
      <div className="fx-service-case-dots" role="tablist" aria-label={labels.slides}>
        {pages.map((_, dotIndex) => (
          <button
            key={`case-dot-${dotIndex}`}
            type="button"
            className={dotIndex === pageIndex ? "fx-service-case-dot is-active" : "fx-service-case-dot"}
            onClick={() => setPageIndex(dotIndex)}
            aria-label={`${labels.goTo} ${dotIndex + 1}`}
            aria-selected={dotIndex === pageIndex}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
}
