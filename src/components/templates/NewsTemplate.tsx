import { NewsOrganism } from "@/components/organisms";
import type { SiteLocaleContent } from "@/components/site/content";
import type { BlogPost } from "@/types/content";

type NewsTemplateProps = {
  content: SiteLocaleContent;
  posts: BlogPost[];
};

export function NewsTemplate({ content, posts }: NewsTemplateProps) {
  return (
    <NewsOrganism
      sectionId="news"
      heading={content.nav.news}
      emptyLabel={content.news.empty}
      posts={posts}
      titleId="news-page-title"
      headingLevel="h1"
    />
  );
}
