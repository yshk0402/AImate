import Link from "next/link";

type NavItemLinkProps = {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

export function NavItemLink({ href, label, className, onClick }: NavItemLinkProps) {
  return (
    <Link href={href} className={className ? `fx-nav-item-link ${className}` : "fx-nav-item-link"} onClick={onClick}>
      {label}
    </Link>
  );
}
