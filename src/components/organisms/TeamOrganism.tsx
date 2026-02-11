import { BodyText, Surface } from "@/components/atoms";
import { SectionHeader } from "@/components/molecules";

import type { HomeSection } from "@/types/site";

type TeamOrganismProps = {
  sectionId: HomeSection;
  heading: string;
  body: string;
  points: string[];
  titleId?: string;
};

export function TeamOrganism({
  sectionId,
  heading,
  body,
  points,
  titleId = "home-team-title"
}: TeamOrganismProps) {
  return (
    <Surface as="section" id={sectionId} tone="light" labelledBy={titleId} className="fx-section-organism">
      <div className="fx-shell">
        <SectionHeader title={heading} titleId={titleId} />
        <BodyText>{body}</BodyText>
        <ul className="fx-team-points" aria-label={heading}>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </Surface>
  );
}
