import { BodyText, Surface } from "@/components/atoms";
import { ScrollHint, SectionHeader } from "@/components/molecules";
import { HeroFieldXBackground } from "./HeroRadialBurstBackground";

import type { HomeSection } from "@/types/site";

type HeroOrganismProps = {
  sectionId: HomeSection;
  title: string;
  body: string;
};

export function HeroOrganism({ sectionId, title, body }: HeroOrganismProps) {
  return (
    <Surface as="section" id={sectionId} tone="light" labelledBy="home-hero-title" className="fx-hero-organism">
      <HeroFieldXBackground />
      <div className="fx-shell fx-hero-grid fx-hero-grid--single">
        <div className="fx-hero-copy">
          <SectionHeader title={title} titleId="home-hero-title" level="h1" />
          {body ? <BodyText className="fx-hero-body">{body}</BodyText> : null}
          <ScrollHint />
        </div>
      </div>
    </Surface>
  );
}
