import type { Locale } from "@/types/content";
import type { ServiceCard } from "@/types/site";

export type SiteLocaleContent = {
  company: string;
  nav: {
    about: string;
    whatWeDo: string;
    news: string;
    contact: string;
  };
  hero: {
    title: string;
    body: string;
  };
  poem: {
    heading: string;
    body: string;
    aboutCtaLabel: string;
  };
  about: {
    heading: string;
    body: string;
  };
  whatWeDo: {
    heading: string;
    services: ServiceCard[];
  };
  team: {
    heading: string;
    body: string;
    points: string[];
  };
  news: {
    heading: string;
    empty: string;
    publishedLabel: string;
  };
  contact: {
    heading: string;
    body: string;
    mailLabel: string;
    recruitLabel: string;
    recruitHref: string;
  };
  blog: {
    heading: string;
    description: string;
    empty: string;
    listAriaLabel: string;
    publishedLabel: string;
  };
  lp: {
    eyebrow: string;
    ctaLabel: string;
  };
};

export const siteContentByLocale: Record<Locale, SiteLocaleContent> = {
  ja: {
    company: "Field X",
    nav: {
      about: "About",
      whatWeDo: "What We Do",
      news: "News",
      contact: "Contact"
    },
    hero: {
      title: "さぁ次の時代のXを解こう。",
      body: ""
    },
    poem: {
      heading: "Who We Are",
      body: `AIが進化し、個人でも起業できる時代。
それでも、私たちはチームである意味を追求する。

熱を持った人が集まり、
現場の課題を解き、
新しい事業を生み出し、
次の世代の可能性を広げていく。

Xとは、まだ名前のついていない挑戦や未解決の社会課題。
Field Xは、AIと人の力で社会を前進させるスタートアップです。`,
      aboutCtaLabel: "About→"
    },
    about: {
      heading: "Who We Are",
      body: "Field Xは高専出身の二人によって立ち上げられたスタートアップです。合理化が進むこの時代に、様々な分野で事業創造を続け、集団で有り続けることの価値を証明します。"
    },
    whatWeDo: {
      heading: "What We Do",
      services: [
        {
          category: "AI DX 事業",
          name: "Operates X",
          description: "業務フローを再設計し、AIを実装して現場に定着させる。"
        },
        {
          category: "AI DX 事業",
          name: "Launch X",
          description: "企画から公開までを最短で。あなたのアイデア実装をAIでエンパワーメントします。"
        },
        {
          category: "教育 事業",
          name: "高専ジョブ",
          description: "高専生のための、高専生によるキャリアサービス"
        }
      ]
    },
    team: {
      heading: "Team",
      body: "異なる専門性を持つ少数精鋭で、最後まで実装する。",
      points: ["オーナーシップを持って作る", "戦略から実装まで一気通貫で届ける", "現場に近い場所で意思決定する"]
    },
    news: {
      heading: "Latest News",
      empty: "公開中のニュースはまだありません。",
      publishedLabel: "Published"
    },
    contact: {
      heading: "Contact",
      body: "ご相談・協業・採用に関するお問い合わせはこちら。",
      mailLabel: "メール",
      recruitLabel: "採用情報",
      recruitHref: "/ja/blog"
    },
    blog: {
      heading: "Blog",
      description: "公開中の記事のみ表示しています。",
      empty: "公開中の記事はありません。",
      listAriaLabel: "ブログ記事一覧",
      publishedLabel: "Published"
    },
    lp: {
      eyebrow: "Landing Page",
      ctaLabel: "CTA"
    }
  },
  en: {
    company: "Field X",
    nav: {
      about: "About",
      whatWeDo: "What We Do",
      news: "News",
      contact: "Contact"
    },
    hero: {
      title: "At the center of capitalism, we keep the festival eve alive.",
      body: "In an age of relentless optimization, we keep creating businesses across domains and prove the value of building as a collective."
    },
    poem: {
      heading: "Who We Are",
      body: "A placeholder poem goes here for now.",
      aboutCtaLabel: "About→"
    },
    about: {
      heading: "Who We Are",
      body: "Field X is a startup founded by two KOSEN alumni. In an age of relentless optimization, we continue creating businesses across domains and prove the value of building as a collective."
    },
    whatWeDo: {
      heading: "What We Do",
      services: [
        {
          category: "AI DX 事業",
          name: "Operates X",
          description: "Redesign workflows, implement AI, and anchor it in daily operations."
        },
        {
          category: "AI DX 事業",
          name: "Launch X",
          description: "From concept to launch at speed. We empower your ideas through AI-driven implementation."
        },
        {
          category: "教育 事業",
          name: "Kosen Job",
          description: "A career service by KOSEN students, for KOSEN students."
        }
      ]
    },
    team: {
      heading: "Team",
      body: "A small team with cross-functional expertise, committed to implementation end-to-end.",
      points: [
        "Build with ownership",
        "Ship from strategy to implementation",
        "Stay close to field operations"
      ]
    },
    news: {
      heading: "Latest News",
      empty: "No published news yet.",
      publishedLabel: "Published"
    },
    contact: {
      heading: "Contact",
      body: "For projects, collaborations, or hiring inquiries, reach out here.",
      mailLabel: "Email",
      recruitLabel: "Recruit",
      recruitHref: "/en/blog"
    },
    blog: {
      heading: "Blog",
      description: "Only content marked as published is listed here.",
      empty: "No published posts yet.",
      listAriaLabel: "Blog posts list",
      publishedLabel: "Published"
    },
    lp: {
      eyebrow: "Landing Page",
      ctaLabel: "CTA"
    }
  }
};
