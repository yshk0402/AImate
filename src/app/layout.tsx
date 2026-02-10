import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Site",
  description: "AI-driven, Git-managed corporate website foundation"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
