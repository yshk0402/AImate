import Link from "next/link";

type LocaleSwitcherProps = {
  localeHref: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

export function LocaleSwitcher({ localeHref, label, className, onClick }: LocaleSwitcherProps) {
  return (
    <Link href={localeHref} className={className ?? "fx-locale-switcher"} onClick={onClick}>
      {label}
    </Link>
  );
}
