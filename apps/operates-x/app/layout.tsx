import type { Metadata } from "next";
import localFont from "next/font/local";

import { SiteFooter } from "./components/SiteFooter";
import "./globals.css";

const fontBody = localFont({
  src: "./fonts/TakaoPGothic.ttf",
  display: "swap",
  variable: "--font-body"
});

const fontHeading = localFont({
  src: "./fonts/TakaoPGothic.ttf",
  display: "swap",
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: "Operates X | AI業務改善パートナー",
  description: "月額でAI人材にタスクを依頼し放題。業務の再設計と実装まで。",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${fontBody.variable} ${fontHeading.variable}`}>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
