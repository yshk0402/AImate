import type { Locale } from "@/types/content";

export type ServiceDetail = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  lead: string;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
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
      ctaHref: "/ja/contact"
    },
    "launch-x": {
      slug: "launch-x",
      title: "Launch X",
      kicker: "AI DX",
      description: "企画から公開までを最短で。あなたのアイデア実装をAIでエンパワーメントします。",
      lead:
        "Launch Xは、新規サービスの立ち上げを高速化する開発支援です。構想整理からMVP実装、公開後の改善までを短いサイクルで進めます。",
      points: [
        "企画段階の要件整理と優先順位設計",
        "短期間でのMVP構築と検証サイクル設計",
        "公開後の改善ロードマップ策定"
      ],
      ctaLabel: "Launch Xについて相談する",
      ctaHref: "/ja/contact"
    },
    "kosen-job": {
      slug: "kosen-job",
      title: "高専ジョブ",
      kicker: "Education",
      description: "高専生のための、高専生によるキャリアサービス",
      lead:
        "高専ジョブは、高専生のキャリア選択を広げるための教育事業です。学生・企業の双方にとって解像度の高いマッチング体験を目指します。",
      points: [
        "高専生に最適化したキャリア情報の提供",
        "企業と学生の相互理解を深める導線設計",
        "現場ニーズに基づく継続的なサービス改善"
      ],
      ctaLabel: "高専ジョブについて相談する",
      ctaHref: "/ja/contact"
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
    },
    "launch-x": {
      slug: "launch-x",
      title: "Launch X",
      kicker: "AI DX",
      description: "From concept to launch fast. AI-powered product execution.",
      lead:
        "Launch X accelerates new service development from concept shaping to MVP release and iterative improvement.",
      points: [
        "Early-stage requirement definition and priority planning",
        "Fast MVP build with short validation cycles",
        "Post-launch optimization roadmap design"
      ],
      ctaLabel: "Talk to us about Launch X",
      ctaHref: "/en/contact"
    },
    "kosen-job": {
      slug: "kosen-job",
      title: "Kosen Job",
      kicker: "Education",
      description: "Career service by and for Kosen students.",
      lead:
        "Kosen Job is an education initiative that expands career options for Kosen students with better student-company matching.",
      points: [
        "Career information tailored to Kosen students",
        "Matching journeys built for mutual student-company understanding",
        "Continuous improvement based on field feedback"
      ],
      ctaLabel: "Talk to us about Kosen Job",
      ctaHref: "/en/contact"
    }
  }
};

export function getServiceDetail(locale: Locale, slug: string): ServiceDetail | null {
  return serviceDetailsByLocale[locale][slug] ?? null;
}
