import Link from "next/link";

import type { HomeSection } from "@/types/site";

type ContactSectionProps = {
  sectionId: HomeSection;
  heading: string;
  body: string;
  mailLabel: string;
  recruitLabel: string;
  recruitHref: string;
};

export function ContactSection({
  sectionId,
  heading,
  body,
  mailLabel,
  recruitLabel,
  recruitHref
}: ContactSectionProps) {
  return (
    <section id={sectionId} className="fx-section fx-contact" aria-labelledby="fx-contact-title">
      <h2 id="fx-contact-title">{heading}</h2>
      <p className="fx-lead">{body}</p>
      <p>
        {mailLabel}: <a href="mailto:contact@fieldx.jp">contact@fieldx.jp</a>
      </p>
      <p>
        <Link href={recruitHref}>{recruitLabel}</Link>
      </p>
    </section>
  );
}
