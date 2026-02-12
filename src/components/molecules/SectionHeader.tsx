import { SectionKicker, SectionTitle } from "@/components/atoms";

type SectionHeaderProps = {
  title: string;
  titleId: string;
  kicker?: string;
  level?: "h1" | "h2" | "h3";
  className?: string;
  anchorHref?: string;
  anchorLabel?: string;
};

export function SectionHeader({
  title,
  titleId,
  kicker,
  level = "h2",
  className,
  anchorHref,
  anchorLabel
}: SectionHeaderProps) {
  return (
    <header className={className ?? "fx-section-header"}>
      {kicker ? <SectionKicker text={kicker} /> : null}
      <div className="fx-section-title-row">
        <SectionTitle as={level} id={titleId} className={level === "h1" ? "fx-hero-title" : "fx-section-title"}>
          {title}
        </SectionTitle>
        {anchorHref ? (
          <a className="fx-section-anchor" href={anchorHref} aria-label={anchorLabel ?? `${title} anchor link`}>
            #
          </a>
        ) : null}
      </div>
    </header>
  );
}
