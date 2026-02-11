import type { HomeSection } from "@/types/site";

type HeroSectionProps = {
  sectionId: HomeSection;
  title: string;
  body: string;
  scrollLabel: string;
};

export function HeroSection({ sectionId, title, body, scrollLabel }: HeroSectionProps) {
  return (
    <section id={sectionId} className="fx-hero" aria-labelledby="fx-hero-title">
      <div className="fx-hero-grid">
        <div className="fx-hero-copy">
          <h1 id="fx-hero-title">{title}</h1>
          <p>{body}</p>
          <a className="fx-scroll-link" href="#about">
            {scrollLabel}
          </a>
        </div>
        <div className="fx-hero-visual" aria-hidden="true">
          <div className="fx-shape fx-shape-a" />
          <div className="fx-shape fx-shape-b" />
          <div className="fx-shape fx-shape-c" />
        </div>
      </div>
    </section>
  );
}
