import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/Header";
import SiteFooter from "@/components/site/Footer";
import Works from "@/components/site/Works";

export const metadata: Metadata = {
  title: "実績｜WELLTOPIA",
  description:
    "WELLTOPIAが手がけた共創プロジェクトの実績をご紹介します。一社では踏み出せない挑戦を、パートナーとの共創によって形にしてきました。",
};

export default function WorksPage() {
  return (
    <>
      <SiteHeader solid />
      <main className="bg-[#0d2d52] pt-[72px]">
        <div className="mx-auto max-w-6xl px-5 pt-10 md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-white/50 transition-colors hover:text-white"
          >
            ← WELLTOPIA トップへ戻る
          </Link>
        </div>
        <Works />
      </main>
      <SiteFooter />
    </>
  );
}
