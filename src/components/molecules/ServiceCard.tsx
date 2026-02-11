import { BodyText, SectionTitle } from "@/components/atoms";
import type { CardDensity, SectionTone } from "@/types/site";

type ServiceCardProps = {
  name: string;
  description: string;
  tone?: SectionTone;
  density?: CardDensity;
};

export function ServiceCard({
  name,
  description,
  tone = "light",
  density = "comfortable"
}: ServiceCardProps) {
  const classes = [
    "fx-service-card",
    tone === "dark" ? "fx-service-card-dark" : "fx-service-card-light",
    density === "compact" ? "fx-density-compact" : "fx-density-comfortable"
  ].join(" ");

  return (
    <article className={classes}>
      <SectionTitle as="h3" className="fx-card-title">
        {name}
      </SectionTitle>
      <BodyText className="fx-card-body">{description}</BodyText>
    </article>
  );
}
