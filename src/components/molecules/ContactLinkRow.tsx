import { TextAnchor } from "@/components/atoms";

type ContactLinkRowProps = {
  label: string;
  href: string;
  text: string;
};

export function ContactLinkRow({ label, href, text }: ContactLinkRowProps) {
  return (
    <p className="fx-contact-row">
      <span>{label}: </span>
      <TextAnchor href={href}>{text}</TextAnchor>
    </p>
  );
}
