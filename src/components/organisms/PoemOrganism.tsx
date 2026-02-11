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
  return (
    <Surface as="section" id={sectionId} tone="light" labelledBy="home-poem-title" className="fx-poem-organism">
      <div className="fx-shell fx-poem-shell">
        <SectionHeader title={heading} titleId="home-poem-title" />
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
