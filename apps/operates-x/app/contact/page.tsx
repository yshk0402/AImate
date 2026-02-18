import type { Metadata } from "next";

import { ActionRow } from "../components/ActionRow";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "お問い合わせ | Operates X",
  description: "Operates Xへのお問い合わせページです。"
};

export default function ContactPage() {
  return (
    <main className="fx-site">
      <div className="fx-shell">
        <SiteHeader currentPath="/contact" />
        <section className="fx-hero fx-contact-hero" aria-labelledby="contact-page-title">
          <div>
            <h1 id="contact-page-title" className="fx-hero-title fx-subpage-title">
              お問い合わせ
            </h1>
            <p className="fx-hero-description">Operate Xのご相談は、以下のメールアドレスまでご連絡ください。</p>
            <a href="mailto:hello@example.com" className="fx-email-link">
              hello@example.com
            </a>
            <ActionRow primary={{ href: "/", label: "トップへ戻る" }} className="fx-contact-actions" />
          </div>
        </section>
      </div>
    </main>
  );
}
