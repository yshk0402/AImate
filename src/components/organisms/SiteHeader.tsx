import { BrandWordmark } from "@/components/atoms";
import { GlobalNavList } from "@/components/molecules";
import { MobileHeaderMenu } from "./MobileHeaderMenu";

type SiteHeaderProps = {
  company: string;
  nav: {
    about: string;
    whatWeDo: string;
    news: string;
    contact: string;
  };
  aboutSectionNav: {
    mvv: string;
    team: string;
    history: string;
    companyProfile: string;
  };
  whatWeDoSectionNav?: {
    aiDx: string;
    education: string;
  };
};

export function SiteHeader({ company, nav, aboutSectionNav, whatWeDoSectionNav }: SiteHeaderProps) {
  return (
    <header className="fx-site-header">
      <div className="fx-shell">
        <div className="fx-site-header-inner">
          <BrandWordmark company={company} />
          <div className="fx-site-header-desktop">
            <nav aria-label="Global" className="fx-site-nav">
              <GlobalNavList nav={nav} aboutSectionNav={aboutSectionNav} whatWeDoSectionNav={whatWeDoSectionNav} />
            </nav>
          </div>
          <MobileHeaderMenu nav={nav} />
        </div>
      </div>
    </header>
  );
}
