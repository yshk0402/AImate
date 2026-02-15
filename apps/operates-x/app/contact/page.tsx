export const metadata = {
  title: "お問い合わせ | Operate X"
};

export default function ContactPage() {
  return (
    <main className="fx-operates-page">
      <div className="fx-operates-shell">
        <section className="fx-ox-section">
          <h1 className="fx-ox-title">お問い合わせ</h1>
          <p className="fx-ox-text">Operate Xのご相談は、以下のメールアドレスまでご連絡ください。</p>
          <div className="fx-ox-cta-row">
            <a href="mailto:hello@example.com" className="fx-about-cta fx-ox-cta-primary">
              hello@example.com
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
