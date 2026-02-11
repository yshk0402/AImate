import { BodyText, Surface } from "@/components/atoms";
import { NewsCard, SectionHeader } from "@/components/molecules";

import type { BlogPost } from "@/types/content";
import type { HomeSection } from "@/types/site";

type NewsOrganismProps = {
  sectionId: HomeSection;
  heading: string;
  emptyLabel: string;
  locale: "ja" | "en";
  posts: BlogPost[];
};

export function NewsOrganism({
  sectionId,
  heading,
  emptyLabel,
  locale,
  posts
}: NewsOrganismProps) {
  return (
    <Surface as="section" id={sectionId} tone="light" labelledBy="home-news-title" className="fx-section-organism">
      <div className="fx-shell">
        <SectionHeader title={heading} titleId="home-news-title" />

        {posts.length === 0 ? (
          <BodyText>{emptyLabel}</BodyText>
        ) : (
          <ul className="fx-news-grid fx-news-grid--latest" aria-label={heading}>
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
