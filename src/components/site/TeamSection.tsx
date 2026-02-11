import type { HomeSection } from "@/types/site";

type TeamSectionProps = {
  sectionId: HomeSection;
  heading: string;
  body: string;
  points: string[];
};

export function TeamSection({ sectionId, heading, body, points }: TeamSectionProps) {
  return (
    <section id={sectionId} className="fx-section" aria-labelledby="fx-team-title">
      <h2 id="fx-team-title">{heading}</h2>
      <p className="fx-lead">{body}</p>
      <ul className="fx-team-points" aria-label={heading}>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
