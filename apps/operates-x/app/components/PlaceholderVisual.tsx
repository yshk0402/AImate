import Image from "next/image";
import type { CSSProperties } from "react";

type PlaceholderVisualProps = {
  src: string;
  alt?: string;
  label?: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
};

export function PlaceholderVisual({
  src,
  alt = "",
  label,
  ratio = "16 / 10",
  className,
  priority = false
}: PlaceholderVisualProps) {
  return (
    <figure
      className={["fx-placeholder-visual", className].filter(Boolean).join(" ")}
      style={{ "--visual-ratio": ratio } as CSSProperties}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 960px) 100vw, 48vw"
        className="fx-placeholder-image"
      />
      {label ? <figcaption className="fx-placeholder-label">{label}</figcaption> : null}
    </figure>
  );
}
