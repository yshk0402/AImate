import Link from "next/link";

type LocaleSwitcherProps = {
  localeHref: string;
  label: string;
};

export function LocaleSwitcher({ localeHref, label }: LocaleSwitcherProps) {
  return (
    <Link href={localeHref} className="fx-locale-switcher">
      {label}
    </Link>
  );
}
