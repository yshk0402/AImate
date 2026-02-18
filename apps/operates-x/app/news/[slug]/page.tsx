import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleTemplate } from "../../components/ArticleTemplate";
import { getArticleBySlug, getArticleSlugs } from "../../lib/content";

type NewsArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getArticleSlugs("news").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug("news", slug);

  if (!article) {
    return {
      title: "記事が見つかりません | Operates X"
    };
  }

  return {
    title: `${article.frontmatter.title} | Operates X`,
    description: article.frontmatter.description,
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      images: article.frontmatter.ogImage ? [{ url: article.frontmatter.ogImage }] : undefined,
      type: "article"
    }
  };
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug("news", slug);

  if (!article) {
    notFound();
  }

  return <ArticleTemplate article={article} category="news" />;
}
