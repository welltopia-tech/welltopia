import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactHeroLines from "@/components/contact/ContactHeroLines";
import SiteHeader from "@/components/site/Header";
import SiteFooter from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "お問い合わせ｜WELLTOPIA",
  description:
    "WELLTOPIAへのお問い合わせはこちらから。サービス、取材・メディア掲載、採用など、お気軽にご連絡ください。",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader solid />
      <main className="min-h-screen bg-white pt-[120px]">
        {/* ファーストビュー：しなやかな曲線の装飾＋見出し */}
        <div className="relative overflow-hidden border-b border-[#e5e7eb] bg-[#f8f9fa] px-5 py-16 md:px-10 md:py-24">
          <ContactHeroLines />
          <div className="relative mx-auto max-w-3xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-[13px] text-[#6b7280] transition-colors hover:text-[#1a4f8a] md:mb-12"
            >
              ← WELLTOPIA トップへ戻る
            </Link>

            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#1a4f8a]" />
              <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">CONTACT</span>
            </div>
            <h1
              className="mb-3 text-[clamp(40px,7vw,72px)] italic leading-none text-[#0d2d52]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Contact Us
            </h1>
            <p className="mb-6 text-lg font-medium text-[#1a4f8a]">お問い合わせ</p>
            <p className="max-w-xl font-light leading-relaxed text-[#6b7280]">
              堅いご挨拶も、資料の準備もいりません。まずは、心地よさをめぐる可能性についてお話しさせてください。通常2営業日以内に、担当者よりご連絡いたします。
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-20">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
