import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-noto-serif-jp",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "WELLTOPIA｜THE FUTURE OF WELL-BEING",
  description:
    "ウェルビーイングの未来を描き、社会に新しい価値を生み出す。WELLTOPIAは、顧客体験・従業員体験・共創を軸に、企業と社会の新しい価値を実装するCo-Creation Management Firmです。",
  openGraph: {
    title: "WELLTOPIA｜THE FUTURE OF WELL-BEING",
    description: "ウェルビーイングの未来を描き、社会に新しい価値を生み出す。",
    siteName: "WELLTOPIA",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WELLTOPIA｜THE FUTURE OF WELL-BEING",
    description: "ウェルビーイングの未来を描き、社会に新しい価値を生み出す。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
