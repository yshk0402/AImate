import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Operate X | AI業務改善パートナー",
  description: "月額でAI人材にタスクを依頼し放題。業務の再設計と実装まで。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
