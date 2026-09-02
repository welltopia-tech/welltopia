import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/Header";
import SiteFooter from "@/components/site/Footer";
import News from "@/components/site/News";

export const metadata: Metadata = {
  title: "お知らせ｜WELLTOPIA",
  description:
    "WELLTOPIAからのお知らせです。プレスリリース、メディア掲載、イベント情報などの最新情報をお届けします。",
};

export default function NewsPage() {
  return (
    <>
      <SiteHeader solid />
      <main className="bg-[#f8f9fa] pt-[120px]">
        <div className="mx-auto max-w-6xl px-5 pt-10 md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-[#6b7280] transition-colors hover:text-[#1a4f8a]"
          >
            ← WELLTOPIA トップへ戻る
          </Link>
        </div>
        <News />
      </main>
      <SiteFooter />
    </>
  );
}
