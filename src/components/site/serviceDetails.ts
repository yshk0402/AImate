
type ServiceHero = {
  headline: string;
  subheadLines: string[];
  supportingNote?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
};

type ServiceProblemSection = {
  title: string;
  summary?: string;
  items: string[];
  closingLines: string[];
};

type ServicePositioningSection = {
  title: string;
  summary?: string;
  paragraphs: string[];
};

type ServiceMonthlyPartnerSection = {
  title: string;
  summary?: string;
  items: string[];
  closingLines: string[];
};

type ServiceUseCasesSection = {
  title: string;
  summary?: string;
  groups: {
    label: string;
    items: string[];
  }[];
  closingLines: string[];
};

type ServiceComparisonSection = {
  title: string;
  summary?: string;
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
};

type ServiceFlowSection = {
  title: string;
  summary?: string;
  steps: string[];
  closingLines: string[];
};

type ServicePricingSection = {
  title: string;
  summary?: string;
  plans: string[];
  note?: string;
};

type ServiceClosingSection = {
  paragraphs: string[];
};

type ServiceCtaSection = {
  title: string;
  primary: {
    label: string;
    href: string;
  };
  secondary: {
    label: string;
    href: string;
  };
};

export type ServiceCaseCard = {
  title: string;
  tags?: string[];
  imageSrc?: string;
  href?: string;
  status?: "coming_soon" | "live";
};

export type OperatesXLanding = {
  heroCards: {
    title: string;
    description: string;
  }[];
  problemCards: {
    title: string;
    description: string;
  }[];
  impactSections: {
    id: string;
    title: string;
    description: string;
    points: string[];
    image: {
      src: string;
      alt: string;
    };
    metrics: {
      label: string;
      value: string;
      note: string;
    }[];
  }[];
  ctaBanner: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
  };
  supportAreas: {
    title: string;
    description: string;
    cards: {
      title: string;
      points: string[];
      image: {
        src: string;
        alt: string;
      };
    }[];
  };
  platformHighlights: {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
    points: string[];
  };
  trustMetrics: {
    title: string;
    description: string;
    stats: {
      label: string;
      value: string;
      note?: string;
    }[];
    logos: string[];
    logoNote: string;
  };
  caseStudies: {
    title: string;
    description: string;
    cards: ServiceCaseCard[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  finalMessage: {
    title: string;
    paragraphs: string[];
  };
};

export type ServiceDetail = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  lead: string;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
  hero?: ServiceHero;
  problemSection?: ServiceProblemSection;
  positioningSection?: ServicePositioningSection;
  monthlyPartnerSection?: ServiceMonthlyPartnerSection;
  useCasesSection?: ServiceUseCasesSection;
  comparisonSection?: ServiceComparisonSection;
  flowSection?: ServiceFlowSection;
  pricingSection?: ServicePricingSection;
  closingSection?: ServiceClosingSection;
  ctaSection?: ServiceCtaSection;
  caseCards?: ServiceCaseCard[];
  operatesXLanding?: OperatesXLanding;
};

const serviceDetails: Record<string, ServiceDetail> = {
    "operates-x": {
      slug: "operates-x",
      title: "Operates X",
      kicker: "AI DX",
      description: "業務フローを再設計し、AIを実装して現場に定着させる。",
      lead:
        "Operates Xは、現場の業務理解から運用定着までを伴走するAI DX支援サービスです。単発のPoCで終わらせず、組織の中で継続的に使われるオペレーションを設計します。",
      points: [
        "業務ヒアリングと課題整理を通じた、導入優先度の可視化",
        "既存ツールを活かしたAIワークフローの設計・実装",
        "運用ルール整備とチーム定着までを含む継続支援"
      ],
      ctaLabel: "Operates Xについて相談する",
      ctaHref: "/contact",
      hero: {
        headline: "月額でAI人材にタスクを依頼し放題。",
        subheadLines: [
          "AIツールの導入ではなく、業務の再設計と実装まで。",
          "小さな無駄を削り、利益を積み上げるAIパートナーが御社のチャットサービスに常駐。"
        ],
        supportingNote: "最短で現場に効く改善を、月額で継続実装します。",
        primaryCtaLabel: "無料相談する",
        primaryCtaHref: "/contact"
      },
      problemSection: {
        title: "その業務、本当に人がやる必要ありますか？",
        summary: "止まっている業務改善を、実装まで一気通貫で進めます。",
        items: [
          "毎月ゼロから作るレポート",
          "手作業のデータ整形",
          "属人化した文章作成",
          "AIを触って終わる勉強会"
        ],
        closingLines: ["無駄だと分かっているのに、変えられない。", "多くの企業が、ここで止まっています。"]
      },
      positioningSection: {
        title: "Operate Xは「AI導入支援」ではありません。",
        summary: "提案資料で終わらせず、運用される形まで作ります。",
        paragraphs: [
          "私たちは、業務フローに入り込み、AIを実装するパートナーです。",
          "提案で終わらない。実装までやる。"
        ]
      },
      monthlyPartnerSection: {
        title: "月額AIパートナーという新しい形",
        summary: "単発支援ではなく、改善のサイクルを持続させる運用モデルです。",
        items: ["業務相談し放題", "改善提案し放題", "小規模開発込み", "社内フロー設計込み"],
        closingLines: ["単発コンサルではなく、", "継続的に改善を回す体制を作ります。"]
      },
      useCasesSection: {
        title: "支援例",
        summary: "実案件イメージを、サムネイル付きカードで確認できます。",
        groups: [
          {
            label: "広報・採用",
            items: ["採用記事生成フロー構築", "社内報テンプレ化", "プロンプト資産化"]
          },
          {
            label: "Webマーケ会社",
            items: ["月次レポート半自動化", "GAデータ整形自動化", "提案資料ドラフト生成"]
          },
          {
            label: "営業組織",
            items: ["提案書の骨子自動生成", "コールドメール最適化", "業界別トークスクリプト生成"]
          }
        ],
        closingLines: ["派手なDXではなく、", "毎月確実に効く改善を積み重ねます。"]
      },
      caseCards: [
        {
          title: "採用記事制作フローを再設計して、月次運用を半自動化",
          tags: ["広報・採用", "運用改善"],
          status: "coming_soon"
        },
        {
          title: "GAデータ整形とレポート作成を統合し、報告工数を圧縮",
          tags: ["Webマーケ", "レポート自動化"],
          status: "coming_soon"
        },
        {
          title: "提案書ドラフト生成を標準化して、営業初動の速度を改善",
          tags: ["営業組織", "提案支援"],
          status: "coming_soon"
        }
      ],
      comparisonSection: {
        title: "他社との違い",
        summary: "同じAI支援でも、成果が出るまでのコミットが違います。",
        leftTitle: "よくあるAIコンサル",
        leftItems: ["提案だけ", "単発契約", "ツール導入で終了"],
        rightTitle: "Operate X",
        rightItems: ["実装まで", "月額伴走", "業務そのものを再設計"]
      },
      flowSection: {
        title: "導入の流れ",
        summary: "最初は小さく始め、継続的に改善を積み上げます。",
        steps: ["無料ヒアリング", "業務構造の可視化", "改善ポイント抽出", "AI設計・実装", "継続改善"],
        closingLines: ["最初の一歩は小さく。", "でも改善は止めない。"]
      },
      pricingSection: {
        title: "料金イメージ",
        summary: "業務規模に応じて、無理のない範囲から始められます。",
        plans: ["ライトプラン: 月額10万円〜", "スタンダード: 月額20万円〜"],
        note: "※業務量に応じて個別設計"
      },
      closingSection: {
        paragraphs: [
          "AIは流行りです。でも、無駄な業務が多すぎるのは事実です。",
          "私たちはそこを削ります。",
          "挑戦を止める「作業時間」を減らし、挑戦を続けるための余白を作る。",
          "それがOperate Xの役割です。"
        ]
      },
      ctaSection: {
        title: "まずは、あなたの会社の“無駄”を一緒に見つけませんか？",
        primary: {
          label: "無料相談する",
          href: "/contact"
        },
        secondary: {
          label: "資料ダウンロード",
          href: "#"
        }
      },
      operatesXLanding: {
        heroCards: [
          {
            title: "業務棚卸し",
            description: "現場の業務を分解し、どこをAI化すべきかを優先度付きで可視化します。"
          },
          {
            title: "実装と運用",
            description: "提案だけで終わらず、チャット運用・定着支援まで一気通貫で伴走します。"
          },
          {
            title: "継続改善",
            description: "月次で課題を見直し、改善サイクルを止めない体制を作ります。"
          }
        ],
        problemCards: [
          {
            title: "毎月ゼロから作る定例資料",
            description: "レポート作成を属人的な作業のまま続け、意思決定の速度が落ちている。"
          },
          {
            title: "手作業のデータ整形が常態化",
            description: "データ抽出・加工に時間を使い、改善施策の検証に手が回らない。"
          },
          {
            title: "AI導入が単発で終わる",
            description: "学習会やPoCは実施したが、日常業務の運用フローに載っていない。"
          }
        ],
        impactSections: [
          {
            id: "growth",
            title: "ビジネス成長の最大化による売上拡大",
            description: "現場の作業時間を削減し、提案・商談・改善に使える時間を増やします。",
            points: [
              "顧客提案までのリードタイム短縮",
              "レポート提出の遅延リスクを低減",
              "担当者ごとの品質差を平準化"
            ],
            image: {
              src: "/images/operates-x/impact-growth.svg",
              alt: "成長施策の進捗を可視化するイメージ"
            },
            metrics: [
              {
                label: "提案準備時間",
                value: "約 3.3 時間 / 件",
                note: "※サンプル値（実数値ではありません）"
              },
              {
                label: "初回提案までの速度",
                value: "約 1.75 倍",
                note: "※サンプル値（実数値ではありません）"
              }
            ]
          },
          {
            id: "productivity",
            title: "生産性向上による工数削減",
            description: "ルーチン作業を自動化し、再現性のある業務運用へ置き換えます。",
            points: [
              "月次ルーティン作業の自動化",
              "情報収集と要約の半自動化",
              "手戻りの発生しやすい業務を標準化"
            ],
            image: {
              src: "/images/operates-x/impact-productivity.svg",
              alt: "AIで業務工数を削減するイメージ"
            },
            metrics: [
              {
                label: "月次報告工数",
                value: "約 3.5h → 1.0h",
                note: "※サンプル値（実数値ではありません）"
              },
              {
                label: "手作業タスク",
                value: "43% → 15%",
                note: "※サンプル値（実数値ではありません）"
              }
            ]
          }
        ],
        ctaBanner: {
          title: "「うちで何から始めるべき？」に最短で答えます。",
          description: "無料相談で現場業務のボトルネックを可視化し、最初の改善テーマを設計します。",
          primaryLabel: "無料相談する",
          primaryHref: "/contact"
        },
        supportAreas: {
          title: "さまざまな業務領域を改善します",
          description: "部署横断で使える運用設計を、現場に合わせて実装します。",
          cards: [
            {
              title: "広報・採用",
              points: ["採用記事生成フロー構築", "社内報テンプレート化", "プロンプト資産の共通化"],
              image: {
                src: "/images/operates-x/support-pr.svg",
                alt: "広報チーム向けのAI支援イメージ"
              }
            },
            {
              title: "営業組織",
              points: ["提案書ドラフト生成", "業界別トーク作成", "問い合わせ返信の下書き最適化"],
              image: {
                src: "/images/operates-x/support-sales.svg",
                alt: "営業組織向けのAI支援イメージ"
              }
            },
            {
              title: "Webマーケ",
              points: ["GAデータ整形自動化", "月次レポート半自動化", "施策レビューの要約フロー構築"],
              image: {
                src: "/images/operates-x/support-marketing.svg",
                alt: "マーケティング業務向けのAI支援イメージ"
              }
            }
          ]
        },
        platformHighlights: {
          title: "ビジネスデータベース運用を支える実装基盤",
          description: "業務で使うデータとAIフローをつなぎ、日次運用に定着する仕組みを構築します。",
          image: {
            src: "/images/operates-x/platform-dashboard.svg",
            alt: "運用ダッシュボードのイメージ"
          },
          points: [
            "業務に合わせたワークフロー設計",
            "現場で使えるUI/運用ルール整備",
            "改善サイクルを回す定例設計"
          ]
        },
        trustMetrics: {
          title: "法人向け伴走型サービスとして運用を支援",
          description: "Field Xは、実装までやり切る伴走支援で業務改善を前進させます。",
          stats: [
            { label: "支援プロジェクト", value: "12件+", note: "※2026年2月時点 / サンプル含む" },
            { label: "平均継続期間", value: "6.2ヶ月", note: "※サンプル値（実数値ではありません）" },
            { label: "初期改善提案", value: "最短14日", note: "※サンプル値（実数値ではありません）" }
          ],
          logos: ["SaaS", "IT Services", "B2B Marketing", "Recruiting", "Manufacturing", "Logistics"],
          logoNote: "※ロゴ表記はサンプルです。正式公開時に実績ロゴへ差し替えます。"
        },
        caseStudies: {
          title: "最新の導入事例",
          description: "成果イメージを持てるよう、代表的な改善テーマを公開準備中です。",
          cards: [
            {
              title: "採用記事制作フローを再設計して、月次運用を半自動化",
              tags: ["広報・採用", "運用改善"],
              imageSrc: "/images/operates-x/case-recruiting.svg",
              status: "coming_soon"
            },
            {
              title: "GAデータ整形とレポート作成を統合し、報告工数を圧縮",
              tags: ["Webマーケ", "レポート自動化"],
              imageSrc: "/images/operates-x/case-marketing.svg",
              status: "coming_soon"
            },
            {
              title: "提案書ドラフト生成を標準化して、営業初動の速度を改善",
              tags: ["営業組織", "提案支援"],
              imageSrc: "/images/operates-x/case-sales.svg",
              status: "coming_soon"
            }
          ]
        },
        faqs: [
          {
            question: "どのくらいの期間で最初の改善が始まりますか？",
            answer: "初回ヒアリング後、最短2週間で優先度の高い改善テーマから着手します。"
          },
          {
            question: "社内にエンジニアがいなくても導入できますか？",
            answer: "はい。現場ヒアリングから運用設計まで伴走するため、専任開発体制がなくても進められます。"
          },
          {
            question: "既存のツールやSaaSをそのまま使えますか？",
            answer: "既存環境を前提に設計します。新規ツール導入は必要性が高い場合のみ提案します。"
          },
          {
            question: "セキュリティや情報管理はどう対応しますか？",
            answer: "取り扱うデータ範囲を事前に整理し、運用ルールとアクセス権限を明確化した上で実装します。"
          },
          {
            question: "月額プランの途中変更は可能ですか？",
            answer: "業務量や優先度に応じて、月次の定例でスコープ調整が可能です。"
          },
          {
            question: "まずは相談だけでも可能ですか？",
            answer: "可能です。無料相談で現状課題と改善余地を整理し、実施可否をご判断いただけます。"
          }
        ],
        finalMessage: {
          title: "AIは流行りです。だからこそ、運用に落とし込むことが重要です。",
          paragraphs: [
            "私たちは、現場の無駄を削り、成果につながる仕組みへ変えていきます。",
            "挑戦を止める作業時間を減らし、挑戦を続ける余白を作る。",
            "それがOperate Xの役割です。"
          ]
        }
      }
    }
};

export function getServiceDetail(slug: string): ServiceDetail | null {
  return serviceDetails[slug] ?? null;
}
