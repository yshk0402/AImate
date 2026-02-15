import type { Metadata } from "next";
import Image from "next/image";

const problemCards = [
  {
    title: "毎月レポートに追われる",
    description: "情報を集めるだけで時間が消え、分析や改善に手が回らない。"
  },
  {
    title: "手作業の整形が多すぎる",
    description: "CSV整形、転記、要約が属人化し、品質もスピードも安定しない。"
  },
  {
    title: "AI活用が実運用に乗らない",
    description: "勉強会で終わってしまい、現場フローに組み込めていない。"
  }
] as const;

const supportCards = [
  {
    title: "広報・採用",
    points: ["採用記事生成フロー構築", "社内報テンプレ化", "プロンプト資産化"],
    image: "/images/operates-x/support-pr.svg"
  },
  {
    title: "マーケティング",
    points: ["月次レポート半自動化", "GAデータ整形自動化", "提案資料ドラフト生成"],
    image: "/images/operates-x/support-marketing.svg"
  },
  {
    title: "営業",
    points: ["提案書骨子の自動生成", "メール文面最適化", "業界別トーク生成"],
    image: "/images/operates-x/support-sales.svg"
  }
] as const;

const faqs = [
  {
    question: "どのくらいの期間で効果が出ますか？",
    answer: "最短2週間で初期改善を実装し、1か月目から工数削減を可視化します。"
  },
  {
    question: "開発が必要な施策も対応できますか？",
    answer: "小規模な実装や自動化スクリプトまで月額内で対応します。"
  },
  {
    question: "まずは相談だけでも可能ですか？",
    answer: "可能です。無料ヒアリングで現状の課題整理からご一緒します。"
  }
] as const;

export const metadata: Metadata = {
  title: "Operates X | AI業務改善パートナー",
  description: "月額でAI人材にタスクを依頼し放題。業務の再設計と実装まで。"
};

export default function OperatesXPage() {
  return (
    <main className="fx-operates-page">
      <div className="fx-operates-shell">
        <section className="fx-ox-section fx-ox-hero" aria-label="Operates X Hero">
          <div className="fx-ox-hero-grid">
            <div>
              <p className="fx-ox-hero-headline">月額でAI人材にタスクを依頼し放題。</p>
              <p className="fx-ox-hero-subhead">AIツールの導入ではなく、業務の再設計と実装まで。</p>
              <p className="fx-ox-hero-subhead">小さな無駄を削り、利益を積み上げるAIパートナーが伴走します。</p>
              <div className="fx-ox-cta-row">
                <a href="/contact" className="fx-about-cta fx-ox-cta-primary">
                  無料相談する
                </a>
                <a href="/contact" className="fx-about-cta fx-ox-cta-secondary">
                  資料ダウンロード
                </a>
              </div>
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
        </section>

        <section className="fx-ox-section fx-ox-band" aria-labelledby="ox-problem-title">
          <h2 id="ox-problem-title" className="fx-ox-title">
            その業務、本当に人がやる必要ありますか？
          </h2>
          <div className="fx-ox-problem-grid">
            {problemCards.map((card) => (
              <article key={card.title} className="fx-ox-problem-card">
                <h3 className="fx-ox-card-title">{card.title}</h3>
                <p className="fx-ox-card-body">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fx-ox-section" aria-labelledby="ox-support-title">
          <h2 id="ox-support-title" className="fx-ox-title">
            支援例
          </h2>
          <p className="fx-ox-text">派手なDXではなく、毎月確実に効く改善を積み重ねます。</p>
          <div className="fx-ox-support-grid">
            {supportCards.map((card) => (
              <article key={card.title} className="fx-ox-support-card">
                <figure className="fx-ox-support-media">
                  <Image src={card.image} alt="" width={440} height={260} aria-hidden="true" />
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

        <section className="fx-ox-section fx-ox-band" aria-labelledby="ox-faq-title">
          <h2 id="ox-faq-title" className="fx-ox-title">
            よくある質問
          </h2>
          <div className="fx-ox-faq-list">
            {faqs.map((item) => (
              <details key={item.question} className="fx-ox-faq-item">
                <summary className="fx-ox-faq-summary">
                  <span className="fx-ox-faq-question">{item.question}</span>
                </summary>
                <p className="fx-ox-faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="fx-ox-section fx-ox-final-cta" aria-labelledby="ox-final-title">
          <h2 id="ox-final-title" className="fx-ox-title">
            まずは、あなたの会社の“無駄”を一緒に見つけませんか？
          </h2>
          <div className="fx-ox-cta-row">
            <a href="/contact" className="fx-about-cta fx-ox-cta-primary">
              無料相談する
            </a>
            <a href="/contact" className="fx-about-cta fx-ox-cta-secondary">
              資料ダウンロード
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
