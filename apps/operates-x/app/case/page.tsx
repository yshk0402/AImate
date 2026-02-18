import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { caseArticles, formatDisplayDate } from "../lib/articles";

export const metadata: Metadata = {
  title: "導入事例 | Operates X",
  description: "Operates Xの導入事例をまとめたページです。"
};

export default function CasePage() {
  return (
    <main className="fx-site fx-listing-page">
      <div className="fx-shell">
        <section className="fx-listing-hero" aria-labelledby="case-page-title">
          <SiteHeader currentPath="/case" />
          <div className="fx-listing-title-block">
            <p className="fx-listing-eyebrow">case</p>
            <h1 id="case-page-title" className="fx-listing-title">
              導入事例
            </h1>
          </div>
        </section>
        <section className="fx-listing-section" aria-label="導入事例一覧">
          <div className="fx-listing-grid">
            {caseArticles.map((article) => (
              <article key={article.slug} className="fx-listing-card">
                <div className="fx-listing-card-image" aria-hidden="true" />
                <div className="fx-card-meta">
                  <h3>{article.title}</h3>
                  <time className="fx-listing-date" dateTime={article.publishedAt}>
                    {formatDisplayDate(article.publishedAt)}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
