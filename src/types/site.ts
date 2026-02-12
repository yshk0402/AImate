export type HomeSection = "hero" | "poem" | "about" | "what-we-do" | "team" | "news" | "contact";

export type ServiceCard = {
  category?: string;
  name: string;
  description: string;
  slug?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export type SectionTone = "light" | "dark";

export type TemplateVariant = "home" | "blog-index" | "blog-post" | "lp";

export type CardDensity = "compact" | "comfortable";
