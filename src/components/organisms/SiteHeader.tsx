import { BrandWordmark } from "@/components/atoms";
import { GlobalNavList } from "@/components/molecules";
import { MobileHeaderMenu } from "./MobileHeaderMenu";

type SiteHeaderProps = {
  locale: "ja" | "en";
  company: string;
  nav: {
    about: string;
    whatWeDo: string;
    news: string;
    contact: string;
  };
};

export function SiteHeader({ locale, company, nav }: SiteHeaderProps) {
  return (
    <header className="fx-site-header">
      <div className="fx-shell">
        <div className="fx-site-header-inner">
          <BrandWordmark locale={locale} company={company} />
          <div className="fx-site-header-desktop">
            <nav aria-label="Global" className="fx-site-nav">
              <GlobalNavList locale={locale} nav={nav} />
            </nav>
          </div>
          <MobileHeaderMenu locale={locale} nav={nav} />
        </div>
      </div>
    </header>
  );
}
