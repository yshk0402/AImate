export type ListingArticle = {
  title: string;
  slug: string;
  publishedAt: string;
};

export const caseArticles: ListingArticle[] = [
  {
    title: "採用広報の制作工数を月40%削減した運用設計",
    slug: "case-recruiting-ops",
    publishedAt: "2026-02-14"
  },
  {
    title: "月次レポート作成を半自動化して提出速度を改善",
    slug: "case-monthly-report",
    publishedAt: "2026-02-11"
  },
  {
    title: "営業提案の初稿作成を標準化して再現性を向上",
    slug: "case-sales-proposal",
    publishedAt: "2026-02-07"
  },
  {
    title: "商談後フォローの自動化で失注率を改善した事例",
    slug: "case-followup-automation",
    publishedAt: "2026-02-03"
  },
  {
    title: "問い合わせ一次対応をAI化し応答時間を短縮",
    slug: "case-support-first-response",
    publishedAt: "2026-01-30"
  },
  {
    title: "社内ナレッジ検索を統合し調査時間を半減",
    slug: "case-knowledge-search",
    publishedAt: "2026-01-24"
  }
];

export const blogArticles: ListingArticle[] = [
  {
    title: "はじめての業務改善ロードマップ設計",
    slug: "blog-roadmap-design",
    publishedAt: "2026-02-16"
  },
  {
    title: "AI導入前に整理すべき業務フローの基本",
    slug: "blog-workflow-basics",
    publishedAt: "2026-02-13"
  },
  {
    title: "生成AI運用で失敗しないルール設計の考え方",
    slug: "blog-ai-governance",
    publishedAt: "2026-02-10"
  },
  {
    title: "営業チーム向けプロンプト設計の実践ポイント",
    slug: "blog-sales-prompt-design",
    publishedAt: "2026-02-05"
  },
  {
    title: "中小企業でも始められる自動化の優先順位付け",
    slug: "blog-automation-priority",
    publishedAt: "2026-01-31"
  },
  {
    title: "定着するAI活用のための社内展開ステップ",
    slug: "blog-ai-adoption-step",
    publishedAt: "2026-01-27"
  }
];

export function formatDisplayDate(date: string) {
  return date.replaceAll("-", ".");
}

export const homeCaseHighlights = caseArticles.slice(0, 3);

export const homeNewsItems = [
  ...caseArticles.map((article) => ({ ...article, category: "導入事例" })),
  ...blogArticles.map((article) => ({ ...article, category: "ブログ" }))
]
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  .slice(0, 6);
