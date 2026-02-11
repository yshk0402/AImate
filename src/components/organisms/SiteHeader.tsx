import { BrandWordmark } from "@/components/atoms";
import { GlobalNavList, LocaleSwitcher } from "@/components/molecules";

type SiteHeaderProps = {
  locale: "ja" | "en";
  company: string;
  nav: {
    about: string;
    whatWeDo: string;
    news: string;
    contact: string;
  };
  alternateHref: string;
  alternateLabel: string;
};

export function SiteHeader({
  locale,
  company,
  nav,
  alternateHref,
  alternateLabel
}: SiteHeaderProps) {
  return (
    <header className="fx-site-header">
      <div className="fx-shell">
        <div className="fx-site-header-inner">
          <BrandWordmark locale={locale} company={company} />
          <nav aria-label="Global" className="fx-site-nav">
            <GlobalNavList locale={locale} nav={nav} />
          </nav>
          <div className="fx-site-header-action">
            <LocaleSwitcher localeHref={alternateHref} label={alternateLabel} />
          </div>
        </div>
      </div>
    </header>
  );
}
