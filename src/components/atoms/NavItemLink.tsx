import Link from "next/link";

type NavItemLinkProps = {
  href: string;
  label: string;
};

export function NavItemLink({ href, label }: NavItemLinkProps) {
  return (
    <Link href={href} className="fx-nav-item-link">
      {label}
    </Link>
  );
}
