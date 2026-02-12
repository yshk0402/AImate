import { NavItemLink } from "@/components/atoms";

type GlobalNavListProps = {
  locale: "ja" | "en";
  nav: {
    about: string;
    whatWeDo: string;
    news: string;
    contact: string;
  };
  className?: string;
  onNavigate?: () => void;
};

export function GlobalNavList({ locale, nav, className, onNavigate }: GlobalNavListProps) {
  return (
    <ul className={className ?? "fx-global-nav-list"}>
      <li>
        <NavItemLink href={`/${locale}/about`} label={nav.about} onClick={onNavigate} />
      </li>
      <li>
        <NavItemLink href={`/${locale}/what-we-do`} label={nav.whatWeDo} onClick={onNavigate} />
      </li>
      <li>
        <NavItemLink href={`/${locale}/news`} label={nav.news} onClick={onNavigate} />
      </li>
      <li className="fx-global-nav-item-contact">
        <NavItemLink
          href={`/${locale}/contact`}
          label={nav.contact}
          className="fx-nav-item-link-contact"
          onClick={onNavigate}
        />
      </li>
    </ul>
  );
}
