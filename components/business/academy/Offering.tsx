"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const audience = [
  "新規事業担当",
  "経営企画",
  "事業開発",
  "人事・組織開発",
  "CX・EX担当",
  "地域共創担当",
  "オープンイノベーション担当",
  "次世代経営人材",
  "プロジェクトリーダー",
];

const schoolFlow = ["学ぶ", "試す", "つなぐ", "動かす", "実装する"];

export default function Offering() {
  return (
    <section id="offering" className="scroll-mt-[180px] bg-[#f8f9fa] px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl md:mb-20"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">PROGRAM</span>
          </div>
          <h2
            className="text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            共創を学ぶ。その先の、実践まで。
          </h2>
        </motion.div>

        {/* 01 FRONPEER for BUSINESS */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="border-t border-[#e5e7eb] py-10 md:py-14"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[64px_1fr]">
            <span
              className="text-lg italic text-[#1a4f8a]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              01
            </span>
            <div>
              <p className="mb-1 text-[11px] font-medium tracking-[0.1em] text-[#1a4f8a]">FRONPEER for BUSINESS</p>
              <h3
                className="mb-5 text-[21px] font-medium text-[#0d2d52] md:text-[24px]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                法人向け 共創マネージャー育成
              </h3>
              <p className="mb-6 max-w-2xl font-light leading-[1.9] text-[#6b7280]">
                企業・自治体・組織の人材を対象とした、基本6か月間の実践型育成プログラム。一般的な集合研修ではなく、その企業が実際に抱えるテーマやプロジェクトを題材にしながら、共創を実践できる人材を育てます。
              </p>
              <p className="mb-3 text-[11px] tracking-[0.15em] text-[#9ca3af]">対象</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {audience.map((a) => (
                  <span key={a} className="rounded border border-[#e5e7eb] bg-white px-2.5 py-1 text-[11.5px] text-[#6b7280]">
                    {a}
                  </span>
                ))}
              </div>
              <p className="mb-7 text-[15px] font-medium leading-relaxed text-[#0d2d52]">
                自社の中に、社内外の可能性をつなぎ、新しい価値を生み出せる人材を育てる。
              </p>
              <Link
                href="/contact?topic=academy-business"
                className="inline-flex items-center gap-3 rounded-md bg-gradient-to-br from-[#8fbbe0] to-[#1a4f8a] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#1a4f8a]/20 transition-transform hover:scale-[1.02]"
              >
                法人向け育成について相談する →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 02 FRONPEER SCHOOL */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="border-t border-[#e5e7eb] py-10 md:py-14"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[64px_1fr]">
            <span
              className="text-lg italic text-[#1a4f8a]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              02
            </span>
            <div>
              <div className="mb-1 flex flex-wrap items-center gap-2.5">
                <p className="text-[11px] font-medium tracking-[0.1em] text-[#1a4f8a]">FRONPEER SCHOOL</p>
                <span className="rounded-full bg-[#1a4f8a] px-2.5 py-0.5 text-[10px] tracking-wide text-white">
                  2027年1月開校予定
                </span>
              </div>
              <h3
                className="mb-5 text-[21px] font-medium text-[#0d2d52] md:text-[24px]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                共創マネージャー育成スクール
              </h3>
              <p className="mb-6 max-w-2xl font-light leading-[1.9] text-[#6b7280]">
                共創マネージャーという専門性を本格的に身につけるための、基本6か月間の実践型スクール。講義を受けて終わるのではなく、次の経験を通して共創マネージャーを目指します。
              </p>
              <div className="mb-6 flex flex-wrap items-center gap-2">
                {schoolFlow.map((f, i) => (
                  <span key={f} className="flex items-center gap-2">
                    <span className="rounded border border-[#e5e7eb] bg-white px-2.5 py-1 text-[11.5px] text-[#1a4f8a]">
                      {f}
                    </span>
                    {i < schoolFlow.length - 1 && (
                      <span className="text-[#9ca3af]" aria-hidden="true">→</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="mb-7 text-[15px] font-medium leading-relaxed text-[#0d2d52]">
                自ら一つの共創プロジェクトを設計し、実装までマネジメントできる状態になる。
              </p>
              <Link
                href="/contact?topic=academy-school"
                className="inline-flex items-center gap-3 rounded-md bg-gradient-to-br from-[#8fbbe0] to-[#1a4f8a] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#1a4f8a]/20 transition-transform hover:scale-[1.02]"
              >
                FRONPEER SCHOOLの情報を受け取る →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 03 FRONPEER NETWORK */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-t border-b border-[#e5e7eb] py-10 md:py-14"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[64px_1fr]">
            <span
              className="text-lg italic text-[#1a4f8a]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              03
            </span>
            <div>
              <p className="mb-1 text-[11px] font-medium tracking-[0.1em] text-[#1a4f8a]">FRONPEER NETWORK</p>
              <h3
                className="mb-5 text-[21px] font-medium text-[#0d2d52] md:text-[24px]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                共創マネージャーネットワーク
              </h3>
              <p className="mb-4 max-w-2xl font-light leading-[1.9] text-[#6b7280]">
                FRONPEERは育成して終わるスクールを目指していません。プログラムを通じて培った専門性を、その後の実践へつなげていきます。
              </p>
              <p className="max-w-2xl font-light leading-[1.9] text-[#6b7280]">
                一定の能力・経験を持つ共創マネージャーには、WELLTOPIAが手がける共創プロジェクトをはじめ、さまざまな実践機会へ参画する可能性があります。学びと実践を分断しない環境、それがFRONPEER NETWORKです。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
