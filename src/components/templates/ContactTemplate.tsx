import { ContactOrganism } from "@/components/organisms";
import type { SiteLocaleContent } from "@/components/site/content";

type ContactTemplateProps = {
  content: SiteLocaleContent;
};

export function ContactTemplate({ content }: ContactTemplateProps) {
  return (
    <ContactOrganism
      sectionId="contact"
      heading={content.contact.heading}
      body={content.contact.body}
      ctaLabel={content.contact.ctaLabel}
      ctaHref={content.contact.ctaHref}
      titleId="contact-page-title"
      titleLevel="h1"
    />
  );
}
