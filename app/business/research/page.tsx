import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/Header";
import SiteFooter from "@/components/site/Footer";

const title = "研究事業｜WELLTOPIA RESEARCH";
const description =
  "まだ見えていない、人と社会の可能性を探究する。WELLTOPIAは、ウェルビーイング、体験価値、共創、CX・EXを中心に研究を進める研究事業「COCOCHI Lab.」を運営しています。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, siteName: "WELLTOPIA", locale: "ja_JP", type: "website" },
};

export default function ResearchPage() {
  return (
    <>
      <SiteHeader solid />
      <main className="bg-white pt-[72px]">
        {/* A-01 key visual */}
        <section className="relative flex min-h-[85vh] flex-col justify-end overflow-hidden px-5 pb-16 pt-20 md:px-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/business/research-hero.jpg)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(240,244,251,0.5) 0%, rgba(240,244,251,0.05) 35%, rgba(240,244,251,0.75) 100%)",
            }}
          />
          <div className="relative z-10 mx-auto w-full max-w-5xl">
            <Link href="/#business" className="mb-8 inline-flex items-center gap-2 text-[13px] text-[#0d2d52]/60 transition-colors hover:text-[#0d2d52]">
              ← WELLTOPIAの3つの事業へ戻る
            </Link>
            <span
              className="mb-4 block text-2xl italic text-[#1a4f8a]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              COCOCHI Lab.
            </span>
            <h1 className="mb-6 max-w-[16ch] text-[clamp(24px,3.6vw,40px)] font-medium leading-tight text-[#0d2d52]">
              まだ見えていない、人と社会の可能性を探究する。
            </h1>
            <p className="max-w-2xl font-light leading-[1.9] text-[#374151]">
              WELLTOPIAは、ウェルビーイング、体験価値、共創、CX・EXを中心に、人と企業、社会の中で生まれている変化を研究します。まだ言葉や数値になっていない兆しを捉え、新しい価値基準と、社会で実践できる方法論へ変えていきます。
            </p>
          </div>
          <div className="relative z-10 mx-auto mt-14 flex w-full max-w-5xl items-center gap-2.5 text-[10px] tracking-[0.2em] text-[#0d2d52]/50">
            <span>SCROLL</span>
            <span className="h-px w-16 bg-gradient-to-r from-[#0d2d52]/40 to-transparent" />
          </div>
        </section>

        {/* A-02 why we research */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#1a4f8a]" />
              <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">WHY WE RESEARCH</span>
            </div>
            <h2 className="mb-8 text-[clamp(22px,2.8vw,32px)] font-medium text-[#0d2d52]">
              なぜ、WELLTOPIAは研究するのか。
            </h2>
            <p className="mb-5 font-light leading-[1.9] text-[#6b7280]">
              人が感じる心地よさや幸福、働きがい、信頼、共感。
              <br />
              これらは企業や社会にとって重要な価値でありながら、目に見えにくく、既存の指標だけでは十分に捉えられません。
            </p>
            <p className="font-light leading-[1.9] text-[#6b7280]">
              私たちは、人の感覚や体験を感覚論のまま終わらせず、観察し、問いを立て、測定し、実証することで、企業活動や社会の中で活用できる知見へ変えていきます。研究のための研究ではなく、より良い体験と、より良い未来を実装するための研究を進めています。
            </p>
          </div>
        </section>

        {/* distinguishing note */}
        <section className="bg-[#f8f9fa] px-5 py-16 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-[#1a4f8a]/20 bg-white p-7">
              <p className="mb-2 text-[11px] font-medium tracking-wide text-[#1a4f8a]">WELLTOPIA RESEARCH</p>
              <p className="text-[13.5px] leading-relaxed text-[#6b7280]">
                WELLTOPIA自身が主体となる研究活動。社会や生活者に生まれている変化を、自ら問いを立てて探究します。
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-7">
              <p className="mb-2 text-[11px] font-medium tracking-wide text-[#6b7280]">CLIENT INSIGHT &amp; RESEARCH</p>
              <p className="text-[13.5px] leading-relaxed text-[#6b7280]">
                クライアント企業の課題解決を目的とした調査支援。共創マネジメント事業のケイパビリティのひとつです。
              </p>
            </div>
          </div>
        </section>

        {/* contact CTA */}
        <section className="bg-[#0d2d52] px-5 py-20 text-center text-white md:px-10 md:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 text-[clamp(20px,2.6vw,28px)] font-medium">研究事業について相談する</h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-gradient-to-br from-[#8fbbe0] to-[#1a4f8a] px-7 py-4 text-sm font-medium text-[#08182c] transition-transform hover:scale-[1.02]"
            >
              お問い合わせをする →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
