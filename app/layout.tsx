import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WELLTOPIA 共創力診断 | 自社の共創力を可視化する",
  description:
    "自社の共創力を可視化し、次の成長につなげる。企業の共創マネジメント力を科学的に診断し、未来の共創パートナーへの道を開きます。",
  openGraph: {
    title: "WELLTOPIA 共創力診断",
    description: "自社の共創力を可視化し、次の成長につなげる。",
    siteName: "WELLTOPIA",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
