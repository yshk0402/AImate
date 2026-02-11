import type { HomeSection } from "@/types/site";

type AboutSectionProps = {
  sectionId: HomeSection;
  heading: string;
  body: string;
};

export function AboutSection({ sectionId, heading, body }: AboutSectionProps) {
  return (
    <section id={sectionId} className="fx-section" aria-labelledby="fx-about-title">
      <h2 id="fx-about-title">{heading}</h2>
      <p className="fx-lead">{body}</p>
    </section>
  );
}
