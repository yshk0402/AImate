import { type ArticleEntry, formatDisplayDate, getPublishedArticles } from "./content";

export type ListingArticle = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  thumbnail?: string;
};

function toListingArticle(article: ArticleEntry): ListingArticle {
  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    slug: article.frontmatter.slug,
    publishedAt: article.frontmatter.publishedAt ?? "",
    thumbnail: article.frontmatter.thumbnail
  };
}

export const caseArticles: ListingArticle[] = getPublishedArticles("case").map(toListingArticle);

export const blogArticles: ListingArticle[] = getPublishedArticles("blog").map(toListingArticle);

export { formatDisplayDate };

export const homeCaseHighlights = caseArticles.slice(0, 3);

export const homeNewsItems = [
  ...caseArticles.map((article) => ({ ...article, category: "導入事例" })),
  ...blogArticles.map((article) => ({ ...article, category: "ブログ" }))
]
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  .slice(0, 6);
