import { BodyText, Surface } from "@/components/atoms";
import { SectionHeader } from "@/components/molecules";

import type { HomeSection } from "@/types/site";

type MvvItem = {
  label: string;
  body?: string;
  points?: string[];
};

type MvvOrganismProps = {
  sectionId: HomeSection;
  heading: string;
  items: MvvItem[];
  titleId?: string;
};

export function MvvOrganism({ sectionId, heading, items, titleId = "home-mvv-title" }: MvvOrganismProps) {
  return (
    <Surface as="section" id={sectionId} tone="light" labelledBy={titleId} className="fx-section-organism">
      <div className="fx-shell">
        <SectionHeader title={heading} titleId={titleId} />
        <ul className="fx-mvv-grid" aria-label={heading}>
          {items.map((item) => (
            <li key={item.label} className="fx-mvv-row">
              <h3 className="fx-mvv-label">{item.label}</h3>
              <div className="fx-mvv-card">
                {item.body ? <BodyText className="fx-mvv-body">{item.body}</BodyText> : null}
                {item.points?.length ? (
                  <ul className="fx-mvv-points" aria-label={`${item.label} values`}>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Surface>
  );
}
