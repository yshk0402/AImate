import { BodyText, Surface } from "@/components/atoms";
import { SectionHeader } from "@/components/molecules";

import type { HomeSection } from "@/types/site";

type AboutOrganismProps = {
  sectionId: HomeSection;
  heading: string;
  body: string;
  titleId?: string;
  headingLevel?: "h1" | "h2" | "h3";
};

export function AboutOrganism({
  sectionId,
  heading,
  body,
  titleId = "home-about-title",
  headingLevel = "h2"
}: AboutOrganismProps) {
  const hasHeading = heading.trim().length > 0;

  return (
    <Surface
      as="section"
      id={sectionId}
      tone="light"
      labelledBy={hasHeading ? titleId : undefined}
      className="fx-section-organism fx-about-organism"
    >
      <div className="fx-shell">
        {hasHeading ? <SectionHeader title={heading} titleId={titleId} level={headingLevel} /> : null}
        <BodyText className="fx-about-body-emphasis">{body}</BodyText>
      </div>
    </Surface>
  );
}
