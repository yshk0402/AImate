export const metadata = {
  title: "お問い合わせ | Operate X"
};

export default function ContactPage() {
  return (
    <main className="ox-page">
      <section className="ox-section">
        <h1>お問い合わせ</h1>
        <p>
          Operate Xのご相談は、以下のメールアドレスまでご連絡ください。
        </p>
        <p>
          <a href="mailto:hello@example.com" className="ox-cta-primary">
            hello@example.com
          </a>
        </p>
      </section>
    </main>
  );
}
