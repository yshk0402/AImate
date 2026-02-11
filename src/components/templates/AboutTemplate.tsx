import { AboutOrganism, TeamOrganism } from "@/components/organisms";
import type { SiteLocaleContent } from "@/components/site/content";

type AboutTemplateProps = {
  content: SiteLocaleContent;
};

export function AboutTemplate({ content }: AboutTemplateProps) {
  return (
    <>
      <AboutOrganism
        sectionId="about"
        heading={content.about.heading}
        body={content.about.body}
        titleId="about-page-who-we-are-title"
        headingLevel="h1"
      />
      <TeamOrganism
        sectionId="team"
        heading={content.team.heading}
        body={content.team.body}
        points={content.team.points}
        titleId="about-page-team-title"
      />
    </>
  );
}
