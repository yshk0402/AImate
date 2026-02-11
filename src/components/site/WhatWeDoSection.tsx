import type { ServiceCard, HomeSection } from "@/types/site";

type WhatWeDoSectionProps = {
  sectionId: HomeSection;
  heading: string;
  services: ServiceCard[];
};

export function WhatWeDoSection({ sectionId, heading, services }: WhatWeDoSectionProps) {
  return (
    <section id={sectionId} className="fx-section" aria-labelledby="fx-services-title">
      <h2 id="fx-services-title">{heading}</h2>
      <ul className="fx-service-grid" aria-label={heading}>
        {services.map((service) => (
          <li key={service.name}>
            <article className="fx-service-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
