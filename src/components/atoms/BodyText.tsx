type BodyTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function BodyText({ children, className }: BodyTextProps) {
  return <p className={className ?? "fx-body-text"}>{children}</p>;
}
