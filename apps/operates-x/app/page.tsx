import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { HeroHeadline } from "./components/HeroHeadline";
import { FloatingContactBanner } from "./components/FloatingContactBanner";
import { SiteHeader } from "./components/SiteHeader";
import { CalConsultEmbed, TallyRequestEmbed } from "./components/ContactEmbeds";
import { formatDisplayDate, homeCaseHighlights, homeNewsItems } from "./lib/articles";

const workflowSteps = [
  {
    title: "無料診断",
    description: "貴社の組織課題・業務状況を整理し、AI化余地と年間インパクトを概算します。",
    icon: "/images/operates-x/steps/step1.svg"
  },
  {
    title: "ヒアリング",
    description: "ヒアリングにより、現在のビジネスプロセスを棚卸しし、業務を可視化します。",
    icon: "/images/operates-x/steps/step2.svg"
  },
  {
    title: "設計提案",
    description: "どこをAI化・自動化するかを定義し、実装ロードマップを提示します。",
    icon: "/images/operates-x/steps/step3.svg"
  },
  {
    title: "実装",
    description: "状況に合わせ技術スタックで実装します。また単に実装だけではなく現場導入のためのレクチャーやマニュアル整備まで実施いたします。",
    icon: "/images/operates-x/steps/step4.svg"
  },
  {
    title: "改善",
    description: "実業務で回しながら改善し、再現性のある仕組みに定着させます。",
    icon: "/images/operates-x/steps/step5.svg"
  }
] as const;

export const metadata: Metadata = {
  title: "Operates X | AI業務改善パートナー",
  description: "月額でAI人材にタスクを依頼し放題。業務の再設計と実装まで。"
};

export default function OperatesXPage() {
  return (
    <main className="fx-site fx-site-home">
      <div className="fx-shell">
        <section className="fx-hero fx-hero-home" aria-labelledby="hero-title">
          <div className="fx-hero-home-inner">
            <SiteHeader currentPath="/" />
            <div className="fx-hero-copy">
              <HeroHeadline />
              <p className="fx-hero-subcopy">
                AIツールの導入ではなく、
                <br />
                業務の再設計と実装まで。
                <br />
                小さな無駄を削り、
                <br />
                AI人材が貴社の事業推進に伴走します。
              </p>
            </div>
          </div>
        </section>

        <section className="fx-section fx-about-view" aria-labelledby="about-title">
          <div className="fx-about-inner">
            <p className="fx-about-eyebrow">about</p>
            <h2 id="about-title" className="fx-about-title">
              <span className="fx-about-title-line">雇用でも常駐SESでもない、</span>
              <span className="fx-about-title-line">AI時代のパートナー</span>
            </h2>
            <p className="fx-about-copy">
              これからの競争は、
              <br />
              「人をどれだけ抱えるか」ではなく、
              <br />
              「どれだけ仕組み化できるか」です。
              <br />
              採用難の時代に、
              <br />
              人を増やし続ける戦略は持続しません。
              <br />
              私たちは、
              <br />
              人の代替ではなく、
              <br />
              人の生産性を指数関数的に引き上げる設計を行います。
              <br />
              固定費を増やさず、
              <br />
              外注コストを積み上げず、
              <br />
              内部にAI基盤を構築する。
              <br />
              単なる受託ではない。
              <br />
              単なるアドバイザリーでもない。
              <br />
              企業の中に、
              <br />
              “AIで動く第二のエンジン”をつくる。
              <br />
              それが私たちの役割です。
            </p>
          </div>
        </section>

        <section className="fx-service-core" aria-labelledby="service-core-title">
          <div className="fx-service-core-panel">
            <p className="fx-service-core-eyebrow">service core</p>
            <h2 id="service-core-title" className="fx-service-core-title">
              <span className="fx-service-core-title-line">人間中心の業務プロセスを</span>
              <span className="fx-service-core-title-line">AI前提の「仕組み」に変えるプロセス</span>
            </h2>
            <div className="fx-service-core-visual">
              <Image
                src="/images/operates-x/group-185.png"
                alt="人間中心の業務プロセスをAI前提の仕組みに変える流れ"
                width={1528}
                height={784}
                className="fx-service-core-image"
              />
            </div>
          </div>
        </section>

        <section className="fx-section fx-number-impact" aria-labelledby="number-impact-title">
          <div className="fx-number-impact-inner">
            <p className="fx-number-impact-eyebrow">Number</p>
            <h2 id="number-impact-title" className="fx-number-impact-title">
              数字で見る、導入前後の効果
            </h2>
            <div className="fx-number-impact-overlay">
              <Image
                src="/images/operates-x/group-186.png"
                alt="導入前後の効果を示す比較図"
                width={1920}
                height={1080}
                className="fx-number-impact-image"
                priority={false}
              />
            </div>
          </div>
        </section>

        <section className="fx-inline-cta" aria-label="お問い合わせ導線">
          <a href="/contact" className="fx-inline-cta-box">
            無料で相談する
          </a>
        </section>

        <section id="section5" className="fx-case-section" aria-labelledby="case-section-title">
          <div className="fx-case-section-inner">
            <p className="fx-case-section-eyebrow">case</p>
            <h2 id="case-section-title" className="fx-case-section-title">
              導入事例
            </h2>
            <div className="fx-case-section-grid">
              {homeCaseHighlights.map((item) => (
                <article key={item.slug} className="fx-case-card">
                  <div className="fx-case-card-image" aria-hidden="true" />
                  <div className="fx-card-meta">
                    <h3>{item.title}</h3>
                    <p>{formatDisplayDate(item.publishedAt)}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="fx-case-section-action">
              <Link href="/case" className="fx-case-section-link">
                もっと見る
              </Link>
            </div>
          </div>
        </section>

        <section id="section6" className="fx-step-section" aria-labelledby="step-section-title">
          <div className="fx-step-section-inner">
            <p className="fx-step-section-eyebrow">Step</p>
            <h2 id="step-section-title" className="fx-step-section-title">
              実際の流れ
            </h2>
            <ol className="fx-step-flow-list" aria-label="導入までの流れ">
              {workflowSteps.map((step, index) => (
                <li key={step.title} className="fx-step-flow-item">
                  <div className="fx-step-flow-icon-wrap" aria-hidden="true">
                    <Image src={step.icon} alt="" width={84} height={84} className="fx-step-flow-icon" unoptimized />
                    {index < workflowSteps.length - 1 ? <span className="fx-step-flow-arrow" aria-hidden="true" /> : null}
                  </div>
                  <h3 className="fx-step-flow-heading">
                    <span className="fx-step-flow-number">{index + 1}</span>
                    <span>{step.title}</span>
                  </h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
            <a href="/contact" className="fx-step-flow-cta">
              無料で相談する
            </a>
          </div>
        </section>

        <section id="section7" className="fx-news-section" aria-labelledby="news-section-title">
          <div className="fx-news-section-inner">
            <p className="fx-news-section-eyebrow">News</p>
            <h2 id="news-section-title" className="fx-news-section-title">
              最新情報
            </h2>
            <ul className="fx-news-list">
              {homeNewsItems.map((item) => (
                <li key={`${item.category}-${item.slug}`}>
                  <article className="fx-news-item">
                    <div className="fx-news-thumb" aria-hidden="true" />
                    <div className="fx-news-body">
                      <p className="fx-news-tag">{item.category}</p>
                      <h3>{item.title}</h3>
                      <p className="fx-news-date">{formatDisplayDate(item.publishedAt)}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="section8" className="fx-contact-switch-section" aria-labelledby="contact-switch-title">
          <div className="fx-contact-switch-inner">
            <p className="fx-contact-switch-lead">AIや業務効率化に関することなら何でも構いません</p>
            <h2 id="contact-switch-title" className="fx-contact-switch-title">
              まずは一度ご相談しませんか？
            </h2>
            <div className="fx-contact-switch-control">
              <input
                type="radio"
                name="contact-switch"
                id="contact-switch-document"
                className="fx-contact-switch-input"
                defaultChecked
              />
              <input type="radio" name="contact-switch" id="contact-switch-consult" className="fx-contact-switch-input" />
              <div className="fx-contact-switch-tabs">
                <label htmlFor="contact-switch-document" className="fx-contact-switch-tab">
                  資料請求
                </label>
                <label htmlFor="contact-switch-consult" className="fx-contact-switch-tab">
                  無料で相談する
                </label>
              </div>
              <div className="fx-contact-switch-panels">
                <section className="fx-contact-switch-panel fx-contact-panel-document" aria-label="資料請求フォーム">
                  <TallyRequestEmbed />
                </section>
                <section className="fx-contact-switch-panel fx-contact-panel-consult" aria-label="無料相談フォーム">
                  <CalConsultEmbed />
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FloatingContactBanner />
    </main>
  );
}
