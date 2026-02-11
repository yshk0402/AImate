import { BodyText, MetaText, Surface, TextAnchor } from "@/components/atoms";
import { SectionHeader } from "@/components/molecules";
import type { SiteLocaleContent } from "@/components/site/content";
import type { LandingPage } from "@/types/content";

type LandingPageTemplateProps = {
  locale: "ja" | "en";
  content: SiteLocaleContent;
  page: LandingPage;
  body: React.ReactNode;
};

export function LandingPageTemplate({ locale, content, page, body }: LandingPageTemplateProps) {
  return (
    <article>
      <Surface as="section" tone="light" labelledBy="lp-title" className="fx-page-section fx-lp-hero">
        <div className="fx-shell fx-article-inner">
          <SectionHeader title={page.title} titleId="lp-title" kicker={content.lp.eyebrow} level="h1" />
          <BodyText>{page.description}</BodyText>
          {page.heroCta ? (
            <MetaText className="fx-lp-cta-text">
              {content.lp.ctaLabel}: <TextAnchor href={`/${locale}/#contact`}>{page.heroCta}</TextAnchor>
            </MetaText>
          ) : null}
        </div>
      </Surface>

      <Surface as="section" tone="light" className="fx-page-section fx-article-shell">
        <div className="fx-shell fx-article-inner">
          <div className="fx-mdx">{body}</div>
        </div>
      </Surface>
    </article>
  );
}
