import Link from "next/link";

type BrandWordmarkProps = {
  locale: "ja" | "en";
  company: string;
};

export function BrandWordmark({ locale, company }: BrandWordmarkProps) {
  return (
    <Link href={`/${locale}`} className="fx-brand-wordmark">
      {company}
    </Link>
  );
}
