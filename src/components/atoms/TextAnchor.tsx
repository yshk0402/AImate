import Link from "next/link";

type TextAnchorProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function TextAnchor({ href, children, className }: TextAnchorProps) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  const classes = className ?? "fx-text-anchor";

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
