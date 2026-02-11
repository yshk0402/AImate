import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Field X",
  description: "Field X corporate site"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
