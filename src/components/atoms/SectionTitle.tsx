import type { JSX } from "react";

type SectionTitleProps = {
  as?: "h1" | "h2" | "h3";
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ as = "h2", id, children, className }: SectionTitleProps) {
  const Tag = as as keyof JSX.IntrinsicElements;
  return <Tag id={id} className={className ?? "fx-section-title"}>{children}</Tag>;
}
