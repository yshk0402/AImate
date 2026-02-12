import Link from "next/link";

import type { Locale } from "@/types/content";

type SiteFooterProps = {
  company: string;
  locale: Locale;
};

type FooterLink = {
  href: string;
  label: string;
};

type FooterGroup = {
  heading: FooterLink;
  children?: FooterLink[];
};

type FooterContent = {
  groups: FooterGroup[];
  secondary: FooterLink[];
};

function getFooterContent(locale: Locale): FooterContent {
  const aboutChildren =
    locale === "ja"
      ? [
          { href: `/${locale}/about#mvv`, label: "MVV" },
          { href: `/${locale}/about#team`, label: "Team" },
          { href: `/${locale}/about#history`, label: "沿革" },
          { href: `/${locale}/about#company-profile`, label: "会社概要" }
        ]
      : [
          { href: `/${locale}/about#mvv`, label: "MVV" },
          { href: `/${locale}/about#team`, label: "Team" },
          { href: `/${locale}/about#history`, label: "History" },
          { href: `/${locale}/about#company-profile`, label: "Company Profile" }
        ];

  const whatWeDoChildren =
    locale === "ja"
      ? [
          { href: `/${locale}/what-we-do#ai-dx`, label: "AI DX事業" },
          { href: `/${locale}/what-we-do#education`, label: "教育事業" }
        ]
      : [
          { href: `/${locale}/what-we-do#ai-dx`, label: "AI DX" },
          { href: `/${locale}/what-we-do#education`, label: "Education" }
        ];

  return {
    groups: [
      {
        heading: { href: `/${locale}/about`, label: "about" },
        children: aboutChildren
      },
      {
        heading: { href: `/${locale}/what-we-do`, label: "what we do" },
        children: whatWeDoChildren
      }
    ],
    secondary: [
      { href: `/${locale}/news`, label: "News" },
      { href: `/${locale}/contact`, label: "Contact" }
    ]
  };
}

export function SiteFooter({ company, locale }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const footerContent = getFooterContent(locale);

  return (
    <footer className="fx-site-footer">
      <div className="fx-shell">
        <div className="fx-footer-main">
          <p className="fx-footer-wordmark">{company}</p>
          <nav aria-label="Footer" className="fx-footer-nav">
            <ul className="fx-footer-groups">
              {footerContent.groups.map((group) => (
                <li key={`${group.heading.label}-${group.heading.href}`} className="fx-footer-group">
                  <Link href={group.heading.href} className="fx-footer-link">
                    {group.heading.label}
                  </Link>
                  {group.children?.length ? (
                    <ul className="fx-footer-sub-links">
                      {group.children.map((child) => (
                        <li key={`${child.label}-${child.href}`}>
                          <Link href={child.href} className="fx-footer-sub-link">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
              <li className="fx-footer-group fx-footer-group-secondary">
                <ul className="fx-footer-secondary-links">
                  {footerContent.secondary.map((link) => (
                    <li key={`${link.label}-${link.href}`}>
                      <Link href={link.href} className="fx-footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="fx-footer-meta">
          <p>
            © {year} {company}
          </p>
        </div>
      </div>
    </footer>
  );
}
