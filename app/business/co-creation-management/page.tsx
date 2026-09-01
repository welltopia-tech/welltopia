import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/Header";
import SiteFooter from "@/components/site/Footer";

const title = "共創マネジメント事業｜WELLTOPIA";
const description =
  "顧客と従業員の体験を起点に、企業と社会の新しい価値をつくる。WELLTOPIAの共創マネジメント事業（CCM）が提供する8つのケイパビリティと支援プロセスをご紹介します。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, siteName: "WELLTOPIA", locale: "ja_JP", type: "website" },
};

const challenges = [
  "顧客や従業員の本音が分からない",
  "目指すべき顧客体験・従業員体験が定まらない",
  "商品、店舗、Webの体験を改善したい",
  "採用、定着、組織文化を改善したい",
  "社外企業、専門家、地域と共創したい",
  "新規事業を構想・検証したい",
  "企業やプロジェクトの価値が伝わらない",
  "施策の成果を測定し、継続的に改善したい",
];

const process = [
  { en: "DISCOVER", ja: "見つける" },
  { en: "DEFINE", ja: "描く" },
  { en: "CO-CREATE", ja: "つなぐ" },
  { en: "BUILD", ja: "つくる" },
  { en: "COMMUNICATE", ja: "伝える" },
  { en: "OPTIMIZE", ja: "測り、育てる" },
];

const capabilities = [
  {
    num: "01",
    en: "CLIENT INSIGHT & RESEARCH",
    ja: "顧客・組織インサイトリサーチ",
    copy: "まだ言葉になっていない願いを見つける。",
    tags: ["顧客・従業員理解", "市場・ブランド理解", "体験構造の分析"],
  },
  {
    num: "02",
    en: "EXPERIENCE STRATEGY",
    ja: "エクスペリエンス戦略",
    copy: "どんな体験をつくるべきかを描く。",
    tags: ["CX・EX戦略", "体験コンセプト", "ジャーニー・タッチポイント設計", "KPI・改善ロードマップ"],
  },
  {
    num: "03",
    en: "CX DESIGN",
    ja: "顧客体験デザイン",
    copy: "顧客にとっての「心地よい」をつくる。",
    tags: ["商品・サービス体験", "店舗・接客体験", "Web・アプリ体験", "顧客関係・継続体験"],
  },
  {
    num: "04",
    en: "EX DESIGN",
    ja: "従業員体験デザイン",
    copy: "働く人にとっての「心地よい」をつくる。",
    tags: ["組織文化・MVV", "採用・オンボーディング", "エンゲージメント", "働き方・職場体験"],
  },
  {
    num: "05",
    en: "CO-CREATION DESIGN",
    ja: "共創デザイン",
    copy: "一社ではつくれない価値をつくる。",
    tags: ["パートナー探索・連携", "共創コミュニティ", "ワークショップ・対話設計", "共創プロジェクトマネジメント"],
  },
  {
    num: "06",
    en: "NEW VALUE INCUBATION",
    ja: "新規価値・事業開発",
    copy: "願いを、新しい事業やサービスへ変える。",
    tags: ["事業構想", "商品・サービス企画", "PoC・プロトタイピング", "市場導入・事業成長"],
  },
  {
    num: "07",
    en: "CREATIVE & COMMUNICATION",
    ja: "クリエイティブ＆コミュニケーション",
    copy: "体験を、伝わる形へ翻訳する。",
    tags: ["ブランド構築", "Web・コンテンツ", "PR・プロモーション", "社内外コミュニケーション"],
  },
  {
    num: "08",
    en: "MEASURE & OPTIMIZE",
    ja: "体験測定・継続改善",
    copy: "つくって終わらず、測り、育てる。",
    tags: ["CX・EX測定", "NPS・eNPS", "データ分析", "仮説検証・継続改善"],
  },
];

const cases = [
  {
    tag: "CASE 01",
    meta: "JAPAN — 2025.07",
    title: "日韓越境体験 共創プロジェクト「81/82 ―ハチイチハチニ―」",
    partners: "共創パートナー｜FLYING JAPAN・ユニゾンシステムズ・terasu",
  },
  {
    tag: "CASE 02",
    meta: "LOS ANGELES — 2026.02",
    title: "発酵博覧会 国際共創プロジェクト「HAKKO EXPO & MARKET in LA」",
    partners: "共創パートナー｜SUZU GROUP・JACCC・terasu",
  },
  {
    tag: "CASE 03",
    meta: "JAPAN — 2024.11",
    title: "AED認知委員会「おもちゃAED トイこころ」開発",
    partners: "共創パートナー｜坂野電機工業所・スワニー・terasu",
  },
];

export default function CoCreationManagementPage() {
  return (
    <>
      <SiteHeader solid />
      <main className="bg-white pt-[72px]">
        {/* 1. key visual */}
        <section className="bg-[#0d2d52] px-5 py-24 text-white md:px-10 md:py-32">
          <div className="mx-auto max-w-5xl">
            <Link href="/#business" className="mb-10 inline-flex items-center gap-2 text-[13px] text-white/50 transition-colors hover:text-white">
              ← WELLTOPIAの3つの事業へ戻る
            </Link>
            <span
              className="mb-5 block text-sm italic tracking-[0.15em] text-[#8fbbe0]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              CO-CREATION MANAGEMENT
            </span>
            <h1 className="mb-8 max-w-[18ch] text-[clamp(28px,4vw,46px)] font-medium leading-tight">
              顧客と従業員の体験を起点に、企業と社会の新しい価値をつくる。
            </h1>
            <p className="max-w-2xl font-light leading-[1.9] text-white/70">
              WELLTOPIAは、リサーチ、戦略、デザイン、共創、新規事業、クリエイティブ、測定・改善を横断し、構想だけで終わらない体験価値の実装を支援します。
            </p>
          </div>
        </section>

        {/* 2. what is CCM */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-[220px_1fr]">
            <img src="/images/business/ccm-logo.png" alt="CCM" className="w-full max-w-[200px]" />
            <div>
              <div className="mb-4 inline-flex items-center gap-2.5">
                <span className="h-px w-6 bg-[#1a4f8a]" />
                <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">共創マネジメントとは</span>
              </div>
              <h2 className="mb-5 text-[clamp(20px,2.4vw,28px)] font-medium text-[#0d2d52]">
                顧客体験と従業員体験から、企業価値を共創する
              </h2>
              <p className="font-light leading-[1.9] text-[#6b7280]">
                CCM（Co-Creation Management）は、顧客や従業員の声と、企業の技術や資産、異なる専門性を共創によってつなぎ、CX・EXの開発・改善を通じて、人にとっての心地よさを企業にとっての新しい価値へ変える共創マネジメントサービスです。
              </p>
            </div>
          </div>
        </section>

        {/* 3. challenges */}
        <section className="bg-[#f8f9fa] px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 md:mb-16">
              <div className="mb-4 inline-flex items-center gap-2.5">
                <span className="h-px w-6 bg-[#1a4f8a]" />
                <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">課題から探す</span>
              </div>
              <h2 className="text-[clamp(22px,2.8vw,32px)] font-medium text-[#0d2d52]">解決する課題</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {challenges.map((c) => (
                <div
                  key={c}
                  className="rounded-xl border border-[#e5e7eb] bg-white p-6 text-[14px] leading-relaxed text-[#0d2d52] transition-shadow hover:shadow-lg hover:shadow-[#0d2d52]/5"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. process */}
        <section className="bg-[#0d2d52] px-5 py-20 text-white md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 md:mb-16">
              <div className="mb-4 inline-flex items-center gap-2.5">
                <span className="h-px w-6 bg-[#8fbbe0]" />
                <span className="text-xs tracking-[0.25em] text-[#8fbbe0]">支援プロセス</span>
              </div>
              <h2 className="text-[clamp(22px,2.8vw,32px)] font-medium">構想から実装、改善までを一気通貫で</h2>
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
              {process.map((p, i) => (
                <div key={p.en} className="bg-[#0d2d52] p-6">
                  <span
                    className="mb-3 block text-lg italic text-[#8fbbe0]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mb-1 text-[13px] font-medium tracking-wide text-white">{p.en}</p>
                  <p className="text-[12px] text-white/60">｜{p.ja}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. capabilities */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 md:mb-16">
              <div className="mb-4 inline-flex items-center gap-2.5">
                <span className="h-px w-6 bg-[#1a4f8a]" />
                <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">OUR CAPABILITIES</span>
              </div>
              <h2 className="text-[clamp(22px,2.8vw,32px)] font-medium text-[#0d2d52]">8つのケイパビリティ</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((c) => (
                <div
                  key={c.num}
                  className="group cursor-default rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all duration-400 hover:z-10 hover:scale-[1.06] hover:border-[#1a4f8a]/30 hover:shadow-xl hover:shadow-[#0d2d52]/10"
                >
                  <span
                    className="mb-3 block text-sm italic text-[#1a4f8a]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {c.num}
                  </span>
                  <p className="mb-2 text-[10.5px] font-medium tracking-wide text-[#6b7280]">{c.en}</p>
                  <h3 className="mb-2.5 text-[15px] font-medium text-[#0d2d52]">{c.ja}</h3>
                  <p className="mb-4 text-[12.5px] leading-relaxed text-[#6b7280]">{c.copy}</p>
                  <ul className="space-y-1">
                    {c.tags.map((t) => (
                      <li key={t} className="text-[11px] leading-relaxed text-[#9ca3af]">
                        ・{t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. cases */}
        <section className="bg-[#f8f9fa] px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 md:mb-16">
              <div className="mb-4 inline-flex items-center gap-2.5">
                <span className="h-px w-6 bg-[#1a4f8a]" />
                <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">CASES</span>
              </div>
              <h2 className="text-[clamp(22px,2.8vw,32px)] font-medium text-[#0d2d52]">プロジェクト事例</h2>
            </div>
            <div>
              {cases.map((c) => (
                <div
                  key={c.tag}
                  className="grid grid-cols-1 gap-2 border-t border-[#e5e7eb] py-7 md:grid-cols-[160px_1fr] md:gap-8"
                >
                  <div>
                    <span className="italic text-[#1a4f8a]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                      {c.tag}
                    </span>
                    <div className="mt-1 text-[11px] text-[#9ca3af]">{c.meta}</div>
                  </div>
                  <div>
                    <p className="mb-1.5 text-[15px] leading-relaxed text-[#0d2d52]" style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}>
                      {c.title}
                    </p>
                    <p className="text-[11.5px] text-[#9ca3af]">{c.partners}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-[#e5e7eb]" />
            </div>
          </div>
        </section>

        {/* 7. how we work */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#1a4f8a]" />
              <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">支援の進め方</span>
            </div>
            <h2 className="mb-6 text-[clamp(20px,2.4vw,26px)] font-medium text-[#0d2d52]">
              まずは、現在地をお伺いすることから
            </h2>
            <p className="font-light leading-[1.9] text-[#6b7280]">
              課題が明確になっていない段階でもかまいません。8つのケイパビリティのどこから始めるべきかも含め、状況をお伺いしながら、必要な支援の範囲とプロセスをご提案します。
            </p>
          </div>
        </section>

        {/* 8. contact CTA */}
        <section className="bg-[#0d2d52] px-5 py-20 text-center text-white md:px-10 md:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 text-[clamp(20px,2.6vw,28px)] font-medium">共創マネジメントについて相談する</h2>
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
