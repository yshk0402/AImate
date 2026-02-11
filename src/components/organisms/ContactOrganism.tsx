import { BodyText, Surface } from "@/components/atoms";
import { ContactLinkRow, SectionHeader } from "@/components/molecules";

import type { HomeSection } from "@/types/site";

type ContactOrganismProps = {
  sectionId: HomeSection;
  heading: string;
  body: string;
  mailLabel: string;
  recruitLabel: string;
  recruitHref: string;
};

export function ContactOrganism({
  sectionId,
  heading,
  body,
  mailLabel,
  recruitLabel,
  recruitHref
}: ContactOrganismProps) {
  return (
    <Surface
      as="section"
      id={sectionId}
      tone="light"
      labelledBy="home-contact-title"
      className="fx-section-organism fx-contact-organism"
    >
      <div className="fx-shell">
        <SectionHeader title={heading} titleId="home-contact-title" />
        <BodyText>{body}</BodyText>
        <div className="fx-contact-links" aria-label={heading}>
          <ContactLinkRow label={mailLabel} href="mailto:contact@fieldx.jp" text="contact@fieldx.jp" />
          <ContactLinkRow label={recruitLabel} href={recruitHref} text={recruitLabel} />
        </div>
      </div>
    </Surface>
  );
}
