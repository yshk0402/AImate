import { SectionKicker, SectionTitle } from "@/components/atoms";

type SectionHeaderProps = {
  title: string;
  titleId: string;
  kicker?: string;
  level?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeader({
  title,
  titleId,
  kicker,
  level = "h2",
  className
}: SectionHeaderProps) {
  return (
    <header className={className ?? "fx-section-header"}>
      {kicker ? <SectionKicker text={kicker} /> : null}
      <SectionTitle as={level} id={titleId} className={level === "h1" ? "fx-hero-title" : "fx-section-title"}>
        {title}
      </SectionTitle>
    </header>
  );
}
