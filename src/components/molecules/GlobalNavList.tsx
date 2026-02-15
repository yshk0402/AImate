import { NavItemLink, TextAnchor } from "@/components/atoms";

type GlobalNavListProps = {
  nav: {
    about: string;
    whatWeDo: string;
    news: string;
    contact: string;
  };
  aboutSectionNav?: {
    mvv: string;
    team: string;
    history: string;
    companyProfile: string;
  };
  whatWeDoSectionNav?: {
    aiDx: string;
    education: string;
  };
  enableAboutDropdown?: boolean;
  className?: string;
  onNavigate?: () => void;
};

export function GlobalNavList({
  nav,
  aboutSectionNav,
  whatWeDoSectionNav,
  enableAboutDropdown = true,
  className,
  onNavigate
}: GlobalNavListProps) {
  return (
    <ul className={className ?? "fx-global-nav-list"}>
      <li className={enableAboutDropdown && aboutSectionNav ? "fx-global-nav-item-dropdown" : undefined}>
        <NavItemLink href="/about" label={nav.about} onClick={onNavigate} />
        {enableAboutDropdown && aboutSectionNav ? (
          <div className="fx-about-subnav" role="menu" aria-label={`${nav.about} sections`}>
            <ul className="fx-about-subnav-list">
              <li>
                <TextAnchor href="/about#mvv" className="fx-about-subnav-link">
                  {aboutSectionNav.mvv}
                </TextAnchor>
              </li>
              <li>
                <TextAnchor href="/about#team" className="fx-about-subnav-link">
                  {aboutSectionNav.team}
                </TextAnchor>
              </li>
              <li>
                <TextAnchor href="/about#history" className="fx-about-subnav-link">
                  {aboutSectionNav.history}
                </TextAnchor>
              </li>
              <li>
                <TextAnchor href="/about#company-profile" className="fx-about-subnav-link">
                  {aboutSectionNav.companyProfile}
                </TextAnchor>
              </li>
            </ul>
          </div>
        ) : null}
      </li>
      <li className={whatWeDoSectionNav ? "fx-global-nav-item-dropdown" : undefined}>
        <NavItemLink href="/what-we-do" label={nav.whatWeDo} onClick={onNavigate} />
        {whatWeDoSectionNav ? (
          <div className="fx-about-subnav" role="menu" aria-label={`${nav.whatWeDo} sections`}>
            <ul className="fx-about-subnav-list">
              <li>
                <TextAnchor href="/what-we-do#ai-dx" className="fx-about-subnav-link">
                  {whatWeDoSectionNav.aiDx}
                </TextAnchor>
              </li>
              <li>
                <TextAnchor href="/what-we-do#education" className="fx-about-subnav-link">
                  {whatWeDoSectionNav.education}
                </TextAnchor>
              </li>
            </ul>
          </div>
        ) : null}
      </li>
      <li>
        <NavItemLink href="/news" label={nav.news} onClick={onNavigate} />
      </li>
      <li className="fx-global-nav-item-contact">
        <NavItemLink href="/contact" label={nav.contact} className="fx-nav-item-link-contact" onClick={onNavigate} />
      </li>
    </ul>
  );
}
