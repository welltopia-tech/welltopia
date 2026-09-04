import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/Header";
import SiteFooter from "@/components/site/Footer";
import NewsList from "@/components/site/NewsList";

export const metadata: Metadata = {
  title: "お知らせ｜WELLTOPIA",
  description:
    "WELLTOPIAからのお知らせです。プレスリリース、メディア掲載、イベント情報などの最新情報をお届けします。",
};

export default function NewsPage() {
  return (
    <>
      <SiteHeader solid />
      <main className="bg-white pt-[120px]">
        <div className="border-b border-[#e5e7eb] bg-[#f8f9fa] px-5 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-[13px] text-[#6b7280] transition-colors hover:text-[#1a4f8a]"
            >
              ← WELLTOPIA トップへ戻る
            </Link>
            <div className="mb-4 inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#1a4f8a]" />
              <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">NEWS</span>
            </div>
            <h1 className="text-[clamp(32px,5vw,56px)] font-medium text-[#0d2d52]">お知らせ</h1>
          </div>
        </div>

        <NewsList />
      </main>
      <SiteFooter />
    </>
  );
}
