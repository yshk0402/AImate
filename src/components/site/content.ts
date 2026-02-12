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
  mvv: {
    heading: string;
    items: {
      label: string;
      body?: string;
      points?: string[];
    }[];
  };
  whatWeDo: {
    heading: string;
    intro?: string;
    services: ServiceCard[];
  };
  team: {
    heading: string;
    body: string;
    members: {
      name: string;
      role: string;
      bio: string;
      imageSrc: string;
      imageAlt: string;
    }[];
  };
  history: {
    heading: string;
    items: {
      year: string;
      detail: string;
    }[];
  };
  companyProfile: {
    heading: string;
    items: {
      label: string;
      value: string;
    }[];
  };
  news: {
    heading: string;
    empty: string;
    publishedLabel: string;
  };
  contact: {
    heading: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
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
      heading: "",
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
      heading: "",
      body: "Field Xは高専出身の二人によって立ち上げられたスタートアップです。合理化が進むこの時代に、様々な分野で事業創造を続け、集団で有り続けることの価値を証明します。"
    },
    mvv: {
      heading: "MVV",
      items: [
        {
          label: "Mission",
          body: "挑戦を、連続させる。"
        },
        {
          label: "Vision",
          body: "経済圏を創り、主導する。"
        },
        {
          label: "Value",
          points: [
            "市場から逃げない",
            "試す前に諦めない",
            "速く作り、速く修正する",
            "熱量を伝播させる",
            "勝てない挑戦は続けない"
          ]
        }
      ]
    },
    whatWeDo: {
      heading: "What We Do",
      intro:
        "Xとは、まだ名前のついていない挑戦や未解決の社会課題。様々な領域のXを解く、創造的な事業開発を実行します。",
      services: [
        {
          category: "AI DX 事業",
          name: "Operates X",
          description: "業務フローを再設計し、AIを実装して現場に定着させる。",
          slug: "operates-x",
          image: {
            src: "/images/services/operates-x.svg",
            alt: "Operates X service visual"
          }
        },
        {
          category: "AI DX 事業",
          name: "Launch X",
          description: "企画から公開までを最短で。あなたのアイデア実装をAIでエンパワーメントします。",
          slug: "launch-x",
          image: {
            src: "/images/services/launch-x.svg",
            alt: "Launch X service visual"
          }
        },
        {
          category: "教育 事業",
          name: "高専ジョブ",
          description: "高専生のための、高専生によるキャリアサービス",
          slug: "kosen-job",
          image: {
            src: "/images/services/kosen-job.svg",
            alt: "高専ジョブ service visual"
          }
        }
      ]
    },
    team: {
      heading: "Team",
      body: "異なる専門性を持つ少数精鋭で、最後まで実装する。",
      members: [
        {
          name: "Yusuke",
          role: "Co-Founder / Product",
          bio: "事業設計とプロダクト開発を横断し、顧客価値の立ち上げをリードします。",
          imageSrc: "/images/team/member-placeholder.svg",
          imageAlt: "Yusuke profile placeholder"
        },
        {
          name: "Shun",
          role: "Co-Founder / Engineering",
          bio: "技術戦略から実装までを担い、現場運用に乗る品質でのリリースを推進します。",
          imageSrc: "/images/team/member-placeholder.svg",
          imageAlt: "Shun profile placeholder"
        },
        {
          name: "Kaede",
          role: "Operations",
          bio: "プロジェクト進行と顧客コミュニケーションを支え、成果が届く運用基盤を整えます。",
          imageSrc: "/images/team/member-placeholder.svg",
          imageAlt: "Kaede profile placeholder"
        }
      ]
    },
    history: {
      heading: "沿革",
      items: [
        { year: "2025.04", detail: "Field Xを創業" },
        { year: "2025.08", detail: "AI DX支援サービス「Operates X」を提供開始" },
        { year: "2026.01", detail: "教育事業「高専ジョブ」をリリース" }
      ]
    },
    companyProfile: {
      heading: "会社概要",
      items: [
        { label: "会社名", value: "株式会社Field X" },
        { label: "設立", value: "2025年4月" },
        { label: "所在地", value: "東京都（リモート中心）" },
        { label: "事業内容", value: "AI DX事業 / 教育事業" },
        { label: "代表", value: "共同代表" }
      ]
    },
    news: {
      heading: "Latest News",
      empty: "公開中のニュースはまだありません。",
      publishedLabel: "Published"
    },
    contact: {
      heading: "Contact",
      body: "ご相談・協業に関するお問い合わせはこちら。",
      ctaLabel: "お問い合わせはこちら",
      ctaHref: "/ja/contact"
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
      heading: "",
      body: "A placeholder poem goes here for now.",
      aboutCtaLabel: "About→"
    },
    about: {
      heading: "",
      body: "Field X is a startup founded by two KOSEN alumni. In an age of relentless optimization, we continue creating businesses across domains and prove the value of building as a collective."
    },
    mvv: {
      heading: "MVV",
      items: [
        {
          label: "Mission",
          body: "Advance real-world problem solving and new value creation through collaboration between AI and people."
        },
        {
          label: "Vision",
          body: "Build an environment where challengers can continuously tackle unresolved social issues."
        },
        {
          label: "Value",
          body: "Operate with Ownership, Speed, and Field Focus, delivering from strategy through implementation."
        }
      ]
    },
    whatWeDo: {
      heading: "What We Do",
      intro:
        "X stands for unnamed challenges and unresolved social issues. We execute creative business development to solve X across diverse domains.",
      services: [
        {
          category: "AI DX 事業",
          name: "Operates X",
          description: "Redesign workflows, implement AI, and anchor it in daily operations.",
          slug: "operates-x",
          image: {
            src: "/images/services/operates-x.svg",
            alt: "Operates X service visual"
          }
        },
        {
          category: "AI DX 事業",
          name: "Launch X",
          description: "From concept to launch at speed. We empower your ideas through AI-driven implementation.",
          slug: "launch-x",
          image: {
            src: "/images/services/launch-x.svg",
            alt: "Launch X service visual"
          }
        },
        {
          category: "教育 事業",
          name: "Kosen Job",
          description: "A career service by KOSEN students, for KOSEN students.",
          slug: "kosen-job",
          image: {
            src: "/images/services/kosen-job.svg",
            alt: "Kosen Job service visual"
          }
        }
      ]
    },
    team: {
      heading: "Team",
      body: "A small team with cross-functional expertise, committed to implementation end-to-end.",
      members: [
        {
          name: "Yusuke",
          role: "Co-Founder / Product",
          bio: "Leads business design and product execution, focusing on early customer value creation.",
          imageSrc: "/images/team/member-placeholder.svg",
          imageAlt: "Yusuke profile placeholder"
        },
        {
          name: "Shun",
          role: "Co-Founder / Engineering",
          bio: "Owns technical strategy and implementation, shipping production-ready systems for operations.",
          imageSrc: "/images/team/member-placeholder.svg",
          imageAlt: "Shun profile placeholder"
        },
        {
          name: "Kaede",
          role: "Operations",
          bio: "Supports project operations and client communication to sustain reliable delivery.",
          imageSrc: "/images/team/member-placeholder.svg",
          imageAlt: "Kaede profile placeholder"
        }
      ]
    },
    history: {
      heading: "History",
      items: [
        { year: "2025.04", detail: "Field X was founded." },
        { year: "2025.08", detail: "Launched the AI DX service Operates X." },
        { year: "2026.01", detail: "Released Kosen Job as an education business." }
      ]
    },
    companyProfile: {
      heading: "Company Profile",
      items: [
        { label: "Company", value: "Field X Inc." },
        { label: "Founded", value: "April 2025" },
        { label: "Location", value: "Tokyo, Japan (remote-first)" },
        { label: "Business", value: "AI DX / Education" },
        { label: "Management", value: "Co-CEOs" }
      ]
    },
    news: {
      heading: "Latest News",
      empty: "No published news yet.",
      publishedLabel: "Published"
    },
    contact: {
      heading: "Contact",
      body: "For project and collaboration inquiries, reach out here.",
      ctaLabel: "Contact Us",
      ctaHref: "/en/contact"
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
