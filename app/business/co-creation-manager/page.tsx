import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/Header";
import SiteFooter from "@/components/site/Footer";

const title = "共創マネージャー育成事業｜CO-CREATION MANAGER ACADEMY";
const description =
  "願いをつなぎ、共通の未来を動かす人を育てる。WELLTOPIAの共創マネージャー育成事業（CO-CREATION MANAGER ACADEMY）についてご紹介します。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, siteName: "WELLTOPIA", locale: "ja_JP", type: "website" },
};

const triad = [
  {
    en: "LISTEN",
    ja: "まだ言葉になっていない願いや課題を聴き取る。",
  },
  {
    en: "CONNECT",
    ja: "人、企業、知識、技術、文化、データをつなぐ。",
  },
  {
    en: "IMPLEMENT",
    ja: "対話やアイデアを、実行可能なプロジェクトへ変える。",
  },
];

export default function CoCreationManagerBusinessPage() {
  return (
    <>
      <SiteHeader solid />
      <main className="bg-white pt-[72px]">
        {/* B-01 key visual */}
        <section className="relative overflow-hidden bg-[#0d2d52] px-5 py-24 text-white md:px-10 md:py-32">
          <div
            className="absolute inset-0 bg-cover bg-[position:70%_center]"
            style={{ backgroundImage: "url(/images/business/academy-hero.jpg)" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(13,45,82,0.95) 0%, rgba(13,45,82,0.85) 38%, rgba(13,45,82,0.3) 72%, rgba(13,45,82,0.1) 100%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-5xl">
            <Link href="/#business" className="mb-10 inline-flex items-center gap-2 text-[13px] text-white/50 transition-colors hover:text-white">
              ← WELLTOPIAの3つの事業へ戻る
            </Link>
            <div className="mb-8 block w-fit rounded-lg bg-white px-5 py-3">
              <img src="/images/business/fronpeer-logo.png" alt="FRONPEER" className="h-7 w-auto md:h-8" />
            </div>
            <span
              className="mb-5 block text-sm italic tracking-[0.15em] text-[#8fbbe0]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              CO-CREATION MANAGER ACADEMY
            </span>
            <h1 className="mb-8 max-w-[18ch] text-[clamp(28px,4vw,46px)] font-medium leading-tight">
              願いをつなぎ、共通の未来を動かす人を育てる。
            </h1>
            <p className="mb-10 max-w-2xl font-light leading-[1.9] text-white/70">
              企業や組織の境界を越え、多様な人の願いと可能性をつなぎ、まだ存在しない価値を形にしていく。WELLTOPIAは、対話から構想、関係構築、実装、改善までを導く「共創マネージャー」を育成します。
            </p>
            <Link
              href="/contact?topic=academy"
              className="inline-flex items-center gap-3 rounded-md bg-gradient-to-br from-[#8fbbe0] to-[#1a4f8a] px-7 py-4 text-sm font-medium text-[#08182c] transition-transform hover:scale-[1.02]"
            >
              育成プログラムについて相談する →
            </Link>
          </div>
        </section>

        {/* B-02 why co-creation managers */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#1a4f8a]" />
              <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">WHY CO-CREATION MANAGERS</span>
            </div>
            <h2 className="mb-8 text-[clamp(22px,2.8vw,32px)] font-medium text-[#0d2d52]">
              なぜ今、共創をマネジメントする人が必要なのか。
            </h2>
            <p className="mb-5 font-light leading-[1.9] text-[#6b7280]">
              社会や企業が向き合う課題は、複雑になっています。
              <br />
              ひとつの企業、ひとつの部署、ひとつの専門性だけでは、解決できない課題が増えています。
            </p>
            <p className="mb-5 font-light leading-[1.9] text-[#6b7280]">
              一方で、多様な人を集めるだけでは、共創は生まれません。目的や立場の違いによって対話が止まり、アイデアが実行されず、プロジェクトが一過性で終わることも少なくありません。
            </p>
            <p className="mb-5 font-light leading-[1.9] text-[#6b7280]">
              必要なのは、それぞれの願いと専門性を読み解き、共通の未来を描き、関係者が力を発揮できる環境をつくり、実装まで前進させる人です。
            </p>
            <p className="font-light leading-[1.9] text-[#0d2d52]">
              WELLTOPIAは、その役割を「共創マネージャー」と呼びます。
            </p>
          </div>
        </section>

        {/* B-03 who is a co-creation manager */}
        <section className="bg-[#f8f9fa] px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#1a4f8a]" />
              <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">WHO IS A CO-CREATION MANAGER?</span>
            </div>
            <h2 className="mb-8 text-[clamp(22px,2.8vw,32px)] font-medium text-[#0d2d52]">共創マネージャーとは。</h2>
            <p className="mb-14 max-w-2xl font-light leading-[1.9] text-[#6b7280] md:mb-16">
              共創マネージャーとは、異なる立場、専門性、価値観を持つ人々の間に立ち、それぞれの願いと可能性をつなぎながら、共通の目的を描き、プロジェクトを社会実装へ導く人です。単なる司会者や進行管理者ではありません。
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {triad.map((t) => (
                <div key={t.en} className="rounded-xl border border-[#e5e7eb] bg-white p-7">
                  <p
                    className="mb-4 text-lg italic text-[#1a4f8a]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {t.en}
                  </p>
                  <p className="text-[13.5px] leading-relaxed text-[#0d2d52]">{t.ja}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* contact CTA */}
        <section className="bg-[#0d2d52] px-5 py-20 text-center text-white md:px-10 md:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 text-[clamp(20px,2.6vw,28px)] font-medium">育成プログラムについて相談する</h2>
            <Link
              href="/contact?topic=academy"
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
