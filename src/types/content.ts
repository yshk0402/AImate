export type Locale = "ja" | "en";
export type PublishStatus = "draft" | "published";

export type BlogFrontmatter = {
  title: string;
  description: string;
  slug: string;
  locale: Locale;
  status: PublishStatus;
  publishedAt?: string;
  tags?: string[];
  ogImage?: string;
};

export type LandingPageFrontmatter = {
  title: string;
  description: string;
  campaign: string;
  locale: Locale;
  status: PublishStatus;
  publishedAt?: string;
  heroCta?: string;
  ogImage?: string;
};

export type BlogPost = BlogFrontmatter & {
  body: string;
  filePath: string;
};

export type LandingPage = LandingPageFrontmatter & {
  body: string;
  filePath: string;
};
