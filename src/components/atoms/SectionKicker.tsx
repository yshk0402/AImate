type SectionKickerProps = {
  text: string;
};

export function SectionKicker({ text }: SectionKickerProps) {
  return <p className="fx-section-kicker">{text}</p>;
}
