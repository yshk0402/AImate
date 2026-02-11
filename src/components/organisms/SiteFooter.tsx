type SiteFooterProps = {
  company: string;
};

export function SiteFooter({ company }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="fx-site-footer">
      <div className="fx-shell">
        <p className="fx-footer-wordmark">{company}</p>
        <div className="fx-footer-meta">
          <p>© {year} {company}</p>
        </div>
      </div>
    </footer>
  );
}
