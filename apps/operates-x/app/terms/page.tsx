import type { Metadata } from "next";

import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "利用規約 | Operates X",
  description: "Operates Xの利用規約です。"
};

export default function TermsPage() {
  return (
    <main className="fx-site fx-listing-page">
      <div className="fx-shell">
        <section className="fx-listing-hero" aria-labelledby="terms-page-title">
          <SiteHeader currentPath="/terms" />
          <div className="fx-listing-title-block">
            <p className="fx-listing-eyebrow">terms</p>
            <h1 id="terms-page-title" className="fx-listing-title">
              利用規約
            </h1>
          </div>
        </section>
        <section className="fx-listing-section" aria-label="利用規約本文">
          <div className="fx-subpage-content fx-legal-content">
            <p>
              本利用規約（以下「本規約」）は、Operates X（以下「当サービス」）の利用条件を定めるものです。
            </p>
            <h2>1. 適用</h2>
            <p>本規約は、当サービスの利用に関する一切の関係に適用されます。</p>
            <h2>2. 禁止事項</h2>
            <p>
              法令または公序良俗に反する行為、当サービス運営を妨害する行為、第三者の権利を侵害する行為を禁止します。
            </p>
            <h2>3. 免責事項</h2>
            <p>
              当サービスは、提供情報の正確性・完全性の確保に努めますが、利用により生じた損害について責任を負わない場合があります。
            </p>
            <h2>4. 規約変更</h2>
            <p>当サービスは、必要に応じて本規約を変更できるものとします。</p>
          </div>
        </section>
      </div>
    </main>
  );
}
