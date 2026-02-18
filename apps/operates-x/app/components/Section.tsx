import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export function Section({ id, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={["fx-section", className].filter(Boolean).join(" ")}>
      {title ? <h2 className="fx-section-title">{title}</h2> : null}
      {description ? <p className="fx-section-description">{description}</p> : null}
      {children}
    </section>
  );
}
