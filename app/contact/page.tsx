import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";
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
      <main className="min-h-screen bg-white pt-[72px]">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-10 md:py-28">
          <Link href="/" className="mb-10 inline-flex items-center gap-2 text-[13px] text-[#6b7280] transition-colors hover:text-[#1a4f8a] md:mb-14">
            ← WELLTOPIA トップへ戻る
          </Link>

          <div className="mx-auto mb-12 max-w-[62ch] text-center md:mb-16">
            <div className="mb-4 inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#1a4f8a]" />
              <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">CONTACT</span>
            </div>
            <h1 className="mb-5 text-[clamp(1.75rem,4vw,2.5rem)] font-medium text-[#0d2d52]">
              お問い合わせ
            </h1>
            <p className="font-light leading-relaxed text-[#6b7280]">
              堅いご挨拶も、資料の準備もいりません。まずは、心地よさをめぐる可能性についてお話しさせてください。通常2営業日以内に、担当者よりご連絡いたします。
            </p>
          </div>

          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
