import type { JSX } from "react";

import type { SectionTone } from "@/types/site";

type SurfaceProps = {
  as?: "section" | "article" | "div";
  tone?: SectionTone;
  id?: string;
  labelledBy?: string;
  className?: string;
  children: React.ReactNode;
};

export function Surface({
  as = "section",
  tone = "light",
  id,
  labelledBy,
  className,
  children
}: SurfaceProps) {
  const Tag = as as keyof JSX.IntrinsicElements;
  const classes = ["fx-surface", tone === "dark" ? "fx-surface-dark" : "fx-surface-light", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag id={id} aria-labelledby={labelledBy} className={classes}>
      {children}
    </Tag>
  );
}
