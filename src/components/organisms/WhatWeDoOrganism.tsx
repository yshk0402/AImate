import { Surface } from "@/components/atoms";
import { SectionHeader } from "@/components/molecules";

import type { HomeSection, ServiceCard as ServiceCardType } from "@/types/site";

type WhatWeDoOrganismProps = {
  sectionId: HomeSection;
  heading: string;
  services: ServiceCardType[];
};

export function WhatWeDoOrganism({ sectionId, heading, services }: WhatWeDoOrganismProps) {
  const groupedServices = services.reduce<Array<{ category: string; items: ServiceCardType[] }>>(
    (acc, service) => {
      const category = service.category ?? "Services";
      const found = acc.find((group) => group.category === category);

      if (found) {
        found.items.push(service);
        return acc;
      }

      acc.push({ category, items: [service] });
      return acc;
    },
    []
  );

  return (
    <Surface
      as="section"
      id={sectionId}
      tone="light"
      labelledBy="home-services-title"
      className="fx-section-organism fx-services-organism"
    >
      <div className="fx-shell">
        <SectionHeader title={heading} titleId="home-services-title" kicker="Buisiness" />
        <div className="fx-whatwedo-stack" aria-label={heading} role="list">
          {groupedServices.map((group) => (
            <article key={group.category} className="fx-whatwedo-group" role="listitem">
              <h3 className="fx-whatwedo-category">{group.category}</h3>
              <ul className="fx-whatwedo-list" aria-label={group.category}>
                {group.items.map((service) => (
                  <li key={service.name}>
                    <article className="fx-whatwedo-item">
                      <div>
                        <h4 className="fx-whatwedo-item-title">{service.name}</h4>
                        <p className="fx-whatwedo-item-body">{service.description}</p>
                      </div>
                      <span className="fx-whatwedo-arrow" aria-hidden="true">
                        →
                      </span>
                    </article>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Surface>
  );
}
