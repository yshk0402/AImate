import type { Metadata } from "next";

import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Operates X",
  description: "Operates Xのプライバシーポリシーです。"
};

export default function PrivacyPage() {
  return (
    <main className="fx-site fx-listing-page">
      <div className="fx-shell">
        <section className="fx-listing-hero" aria-labelledby="privacy-page-title">
          <SiteHeader currentPath="/privacy" />
          <div className="fx-listing-title-block">
            <p className="fx-listing-eyebrow">privacy policy</p>
            <h1 id="privacy-page-title" className="fx-listing-title">
              プライバシーポリシー
            </h1>
          </div>
        </section>
        <section className="fx-listing-section" aria-label="プライバシーポリシー本文">
          <div className="fx-subpage-content fx-legal-content">
            <p>
              Operates X（以下「当サービス」）は、個人情報の保護に関する法令を遵守し、取得した情報を適切に取り扱います。
            </p>
            <h2>1. 取得する情報</h2>
            <p>
              お問い合わせ時に入力された氏名、メールアドレス、会社名、その他ご相談内容に含まれる情報を取得する場合があります。
            </p>
            <h2>2. 利用目的</h2>
            <p>
              取得した情報は、お問い合わせ対応、サービス提供、品質改善、重要なお知らせのために利用します。
            </p>
            <h2>3. 第三者提供</h2>
            <p>法令に基づく場合を除き、本人の同意なく第三者に個人情報を提供しません。</p>
            <h2>4. お問い合わせ窓口</h2>
            <p>本ポリシーに関するお問い合わせは、お問い合わせページよりご連絡ください。</p>
          </div>
        </section>
      </div>
    </main>
  );
}
