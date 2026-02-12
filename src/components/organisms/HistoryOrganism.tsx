import { Surface } from "@/components/atoms";
import { SectionHeader } from "@/components/molecules";

import type { HomeSection } from "@/types/site";

type HistoryOrganismProps = {
  sectionId: HomeSection;
  heading: string;
  items: {
    year: string;
    detail: string;
  }[];
  titleId?: string;
};

export function HistoryOrganism({
  sectionId,
  heading,
  items,
  titleId = "about-history-title"
}: HistoryOrganismProps) {
  return (
    <Surface as="section" id={sectionId} tone="light" labelledBy={titleId} className="fx-section-organism">
      <div className="fx-shell">
        <SectionHeader title={heading} titleId={titleId} />
        <ul className="fx-history-list" aria-label={heading}>
          {items.map((item) => (
            <li key={`${item.year}-${item.detail}`} className="fx-history-item">
              <p className="fx-history-year">{item.year}</p>
              <p className="fx-history-detail">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </Surface>
  );
}
