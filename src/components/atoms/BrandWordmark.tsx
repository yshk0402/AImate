import Link from "next/link";

type BrandWordmarkProps = {
  company: string;
};

export function BrandWordmark({ company }: BrandWordmarkProps) {
  return (
    <Link href="/" className="fx-brand-wordmark">
      {company}
    </Link>
  );
}
