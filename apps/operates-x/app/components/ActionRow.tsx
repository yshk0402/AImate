import Link from "next/link";

type ActionItem = {
  href: string;
  label: string;
  ariaLabel?: string;
};

type ActionRowProps = {
  primary: ActionItem;
  secondary?: ActionItem;
  className?: string;
};

export function ActionRow({ primary, secondary, className }: ActionRowProps) {
  return (
    <div className={["fx-action-row", className].filter(Boolean).join(" ")}>
      <Link href={primary.href} aria-label={primary.ariaLabel} className="fx-btn fx-btn-primary">
        {primary.label}
      </Link>
      {secondary ? (
        <Link href={secondary.href} aria-label={secondary.ariaLabel} className="fx-btn fx-btn-secondary">
          {secondary.label}
        </Link>
      ) : null}
    </div>
  );
}
