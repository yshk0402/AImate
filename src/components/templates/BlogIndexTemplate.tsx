import { BodyText, Surface } from "@/components/atoms";
import { NewsCard, SectionHeader } from "@/components/molecules";
import type { SiteLocaleContent } from "@/components/site/content";
import type { BlogPost } from "@/types/content";

type BlogIndexTemplateProps = {
  locale: "ja" | "en";
  content: SiteLocaleContent;
  posts: BlogPost[];
};

export function BlogIndexTemplate({ locale, content, posts }: BlogIndexTemplateProps) {
  return (
    <Surface as="section" tone="light" labelledBy="blog-index-title" className="fx-page-section">
      <div className="fx-shell">
        <SectionHeader title={content.blog.heading} titleId="blog-index-title" kicker="Insights" />
        <BodyText>{content.blog.description}</BodyText>

        {posts.length === 0 ? (
          <BodyText>{content.blog.empty}</BodyText>
        ) : (
          <ul className="fx-news-grid" aria-label={content.blog.listAriaLabel}>
            {posts.map((post) => (
              <li key={post.slug}>
                <NewsCard locale={locale} post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Surface>
  );
}
