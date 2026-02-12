import { Surface } from "@/components/atoms";
import { SectionHeader } from "@/components/molecules";

import type { HomeSection } from "@/types/site";

type PoemOrganismProps = {
  sectionId: HomeSection;
  heading: string;
  body: string;
  aboutCtaLabel: string;
  aboutHref: string;
};

export function PoemOrganism({ sectionId, heading, body, aboutCtaLabel, aboutHref }: PoemOrganismProps) {
  const hasHeading = heading.trim().length > 0;

  return (
    <Surface
      as="section"
      id={sectionId}
      tone="light"
      labelledBy={hasHeading ? "home-poem-title" : undefined}
      className="fx-poem-organism"
    >
      <div className="fx-shell fx-poem-shell">
        {hasHeading ? <SectionHeader title={heading} titleId="home-poem-title" /> : null}
        <p id="home-poem-text" className="fx-body-text fx-poem-body">
          {body}
        </p>
        <a className="fx-about-cta" href={aboutHref}>
          {aboutCtaLabel}
        </a>
      </div>
    </Surface>
  );
}
