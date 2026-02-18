import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleTemplate } from "../../components/ArticleTemplate";
import { getArticleBySlug, getArticleSlugs } from "../../lib/content";

type CaseArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getArticleSlugs("case").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug("case", slug);

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

export default async function CaseArticlePage({ params }: CaseArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug("case", slug);

  if (!article) {
    notFound();
  }

  return <ArticleTemplate article={article} category="case" />;
}
