import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "WELLTOPIA 共創力診断｜企業の共創力を7領域から可視化",
  description:
    "共創力、測ってる？ WELLTOPIAの共創力診断は、外部企業との連携力と従業員との共創力を7領域から可視化し、企業の強み・課題・次の一手を明らかにします。",
  openGraph: {
    title: "WELLTOPIA 共創力診断｜企業の共創力を7領域から可視化",
    description:
      "共創力、測ってる？ WELLTOPIAの共創力診断は、外部企業との連携力と従業員との共創力を7領域から可視化し、企業の強み・課題・次の一手を明らかにします。",
    siteName: "WELLTOPIA",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WELLTOPIA 共創力診断｜企業の共創力を7領域から可視化",
    description:
      "共創力、測ってる？ 外部企業との連携力と従業員との共創力を7領域から可視化します。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body>{children}</body>
    </html>
  );
}
