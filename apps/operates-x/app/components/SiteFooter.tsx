import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Operates X" },
  { href: "/#about-title", label: "概要" },
  { href: "/#service-core-title", label: "サービス" },
  { href: "/#section6", label: "導入の流れ" },
  { href: "/#section5", label: "導入事例" },
  { href: "/blog", label: "ブログ" },
  { href: "/contact", label: "お問い合わせ" }
] as const;

export function SiteFooter() {
  return (
    <footer className="fx-footer" aria-labelledby="footer-brand">
      <div className="fx-footer-inner">
        <h2 id="footer-brand" className="fx-footer-brand">
          Operates X
        </h2>
        <div className="fx-footer-logo-wrap">
          <Image src="/icon.png" alt="Operates Xロゴ" width={98} height={98} className="fx-footer-logo" />
        </div>
        <nav className="fx-footer-nav" aria-label="フッターナビゲーション">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="fx-footer-link">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="fx-footer-legal">
          <p className="fx-footer-copy">© 2026 Operates X</p>
          <div className="fx-footer-legal-links">
            <a href="#" className="fx-footer-link fx-footer-link-legal">
              プライバシーポリシー
            </a>
            <a href="#" className="fx-footer-link fx-footer-link-legal">
              利用規約
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
