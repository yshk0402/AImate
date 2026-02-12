import type { Locale } from "@/types/content";

type ServiceHero = {
  headline: string;
  subheadLines: string[];
  supportingNote?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
};

type ServiceProblemSection = {
  title: string;
  summary?: string;
  items: string[];
  closingLines: string[];
};

type ServicePositioningSection = {
  title: string;
  summary?: string;
  paragraphs: string[];
};

type ServiceMonthlyPartnerSection = {
  title: string;
  summary?: string;
  items: string[];
  closingLines: string[];
};

type ServiceUseCasesSection = {
  title: string;
  summary?: string;
  groups: {
    label: string;
    items: string[];
  }[];
  closingLines: string[];
};

type ServiceComparisonSection = {
  title: string;
  summary?: string;
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
};

type ServiceFlowSection = {
  title: string;
  summary?: string;
  steps: string[];
  closingLines: string[];
};

type ServicePricingSection = {
  title: string;
  summary?: string;
  plans: string[];
  note?: string;
};

type ServiceClosingSection = {
  paragraphs: string[];
};

type ServiceCtaSection = {
  title: string;
  primary: {
    label: string;
    href: string;
  };
  secondary: {
    label: string;
    href: string;
  };
};

export type ServiceCaseCard = {
  title: string;
  tags?: string[];
  imageSrc?: string;
  href?: string;
  status?: "coming_soon" | "live";
};

export type ServiceDetail = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  lead: string;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
  hero?: ServiceHero;
  problemSection?: ServiceProblemSection;
  positioningSection?: ServicePositioningSection;
  monthlyPartnerSection?: ServiceMonthlyPartnerSection;
  useCasesSection?: ServiceUseCasesSection;
  comparisonSection?: ServiceComparisonSection;
  flowSection?: ServiceFlowSection;
  pricingSection?: ServicePricingSection;
  closingSection?: ServiceClosingSection;
  ctaSection?: ServiceCtaSection;
  caseCards?: ServiceCaseCard[];
};

const serviceDetailsByLocale: Record<Locale, Record<string, ServiceDetail>> = {
  ja: {
    "operates-x": {
      slug: "operates-x",
      title: "Operates X",
      kicker: "AI DX",
      description: "業務フローを再設計し、AIを実装して現場に定着させる。",
      lead:
        "Operates Xは、現場の業務理解から運用定着までを伴走するAI DX支援サービスです。単発のPoCで終わらせず、組織の中で継続的に使われるオペレーションを設計します。",
      points: [
        "業務ヒアリングと課題整理を通じた、導入優先度の可視化",
        "既存ツールを活かしたAIワークフローの設計・実装",
        "運用ルール整備とチーム定着までを含む継続支援"
      ],
      ctaLabel: "Operates Xについて相談する",
      ctaHref: "/ja/contact",
      hero: {
        headline: "月額でAI人材にタスクを依頼し放題。",
        subheadLines: [
          "AIツールの導入ではなく、業務の再設計と実装まで。",
          "小さな無駄を削り、利益を積み上げるAIパートナーが御社のチャットサービスに常駐。"
        ],
        supportingNote: "最短で現場に効く改善を、月額で継続実装します。",
        primaryCtaLabel: "無料相談する",
        primaryCtaHref: "/ja/contact"
      },
      problemSection: {
        title: "その業務、本当に人がやる必要ありますか？",
        summary: "止まっている業務改善を、実装まで一気通貫で進めます。",
        items: [
          "毎月ゼロから作るレポート",
          "手作業のデータ整形",
          "属人化した文章作成",
          "AIを触って終わる勉強会"
        ],
        closingLines: ["無駄だと分かっているのに、変えられない。", "多くの企業が、ここで止まっています。"]
      },
      positioningSection: {
        title: "Operate Xは「AI導入支援」ではありません。",
        summary: "提案資料で終わらせず、運用される形まで作ります。",
        paragraphs: [
          "私たちは、業務フローに入り込み、AIを実装するパートナーです。",
          "提案で終わらない。実装までやる。"
        ]
      },
      monthlyPartnerSection: {
        title: "月額AIパートナーという新しい形",
        summary: "単発支援ではなく、改善のサイクルを持続させる運用モデルです。",
        items: ["業務相談し放題", "改善提案し放題", "小規模開発込み", "社内フロー設計込み"],
        closingLines: ["単発コンサルではなく、", "継続的に改善を回す体制を作ります。"]
      },
      useCasesSection: {
        title: "支援例",
        summary: "実案件イメージを、サムネイル付きカードで確認できます。",
        groups: [
          {
            label: "広報・採用",
            items: ["採用記事生成フロー構築", "社内報テンプレ化", "プロンプト資産化"]
          },
          {
            label: "Webマーケ会社",
            items: ["月次レポート半自動化", "GAデータ整形自動化", "提案資料ドラフト生成"]
          },
          {
            label: "営業組織",
            items: ["提案書の骨子自動生成", "コールドメール最適化", "業界別トークスクリプト生成"]
          }
        ],
        closingLines: ["派手なDXではなく、", "毎月確実に効く改善を積み重ねます。"]
      },
      caseCards: [
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
      comparisonSection: {
        title: "他社との違い",
        summary: "同じAI支援でも、成果が出るまでのコミットが違います。",
        leftTitle: "よくあるAIコンサル",
        leftItems: ["提案だけ", "単発契約", "ツール導入で終了"],
        rightTitle: "Operate X",
        rightItems: ["実装まで", "月額伴走", "業務そのものを再設計"]
      },
      flowSection: {
        title: "導入の流れ",
        summary: "最初は小さく始め、継続的に改善を積み上げます。",
        steps: ["無料ヒアリング", "業務構造の可視化", "改善ポイント抽出", "AI設計・実装", "継続改善"],
        closingLines: ["最初の一歩は小さく。", "でも改善は止めない。"]
      },
      pricingSection: {
        title: "料金イメージ",
        summary: "業務規模に応じて、無理のない範囲から始められます。",
        plans: ["ライトプラン: 月額10万円〜", "スタンダード: 月額20万円〜"],
        note: "※業務量に応じて個別設計"
      },
      closingSection: {
        paragraphs: [
          "AIは流行りです。でも、無駄な業務が多すぎるのは事実です。",
          "私たちはそこを削ります。",
          "挑戦を止める「作業時間」を減らし、挑戦を続けるための余白を作る。",
          "それがOperate Xの役割です。"
        ]
      },
      ctaSection: {
        title: "まずは、あなたの会社の“無駄”を一緒に見つけませんか？",
        primary: {
          label: "無料相談する",
          href: "/ja/contact"
        },
        secondary: {
          label: "資料ダウンロード",
          href: "#"
        }
      }
    }
  },
  en: {
    "operates-x": {
      slug: "operates-x",
      title: "Operates X",
      kicker: "AI DX",
      description: "Redesign workflows, implement AI, and make it stick in operations.",
      lead:
        "Operates X is our AI DX enablement service from workflow discovery to operational adoption. We design practical operations that teams can keep using, not one-off PoCs.",
      points: [
        "Operational discovery and issue mapping with clear implementation priorities",
        "AI workflow design and implementation with existing tools",
        "Ongoing support for team adoption and operational standards"
      ],
      ctaLabel: "Talk to us about Operates X",
      ctaHref: "/en/contact"
    }
  }
};

export function getServiceDetail(locale: Locale, slug: string): ServiceDetail | null {
  return serviceDetailsByLocale[locale][slug] ?? null;
}
