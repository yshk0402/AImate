type MetaTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function MetaText({ children, className }: MetaTextProps) {
  return <p className={className ?? "fx-meta-text"}>{children}</p>;
}
