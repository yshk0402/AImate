import { NavItemLink } from "@/components/atoms";

type GlobalNavListProps = {
  locale: "ja" | "en";
  nav: {
    about: string;
    whatWeDo: string;
    news: string;
    contact: string;
  };
};

export function GlobalNavList({ locale, nav }: GlobalNavListProps) {
  return (
    <ul className="fx-global-nav-list">
      <li>
        <NavItemLink href={`/${locale}/about`} label={nav.about} />
      </li>
      <li>
        <NavItemLink href={`/${locale}/#what-we-do`} label={nav.whatWeDo} />
      </li>
      <li>
        <NavItemLink href={`/${locale}/#news`} label={nav.news} />
      </li>
      <li>
        <NavItemLink href={`/${locale}/#contact`} label={nav.contact} />
      </li>
    </ul>
  );
}
