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
  return (
    <Surface
      as="section"
      id={sectionId}
      tone="light"
      labelledBy={titleId}
      className="fx-section-organism fx-about-organism"
    >
      <div className="fx-shell">
        <SectionHeader title={heading} titleId={titleId} level={headingLevel} />
        <BodyText>{body}</BodyText>
      </div>
    </Surface>
  );
}
