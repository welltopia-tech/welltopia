"use client";

import { motion } from "framer-motion";

const phases = [
  {
    num: "01",
    months: "MONTH 1–2",
    en: "FOUNDATION",
    ja: "共創を理解する。",
    items: [
      "共創とは何か",
      "なぜ共創が必要なのか",
      "課題・可能性の発見",
      "人や組織の理解",
      "WELLTOPIAが研究してきた共創・評価方法論",
      "共創マネージャーとしての基礎",
    ],
  },
  {
    num: "02",
    months: "MONTH 3–4",
    en: "DESIGN & PRACTICE",
    ja: "共創を設計する。",
    items: ["共創テーマ設定", "ステークホルダー設計", "共創チーム形成", "目的・未来像の設計", "共創プロセス設計", "実践開始"],
  },
  {
    num: "03",
    months: "MONTH 5–6",
    en: "IMPLEMENTATION",
    ja: "共創を実装する。",
    items: ["プロジェクト推進", "ステークホルダーとの調整", "実証・プロトタイピング", "改善", "価値評価", "成果共有"],
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-[180px] bg-white px-5 py-24 md:px-10 md:py-36">
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
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">6 MONTHS PROGRAM</span>
          </div>
          <h2
            className="mb-6 text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            6か月間で、共創を実践できる人へ。
          </h2>
          <p className="font-light leading-[1.9] text-[#6b7280]">
            FRONPEERの育成は、知識習得だけでは終わりません。学ぶ→試す→実践する→振り返る→実装する。半年間を通して、実際に共創を経験しながら能力を身につけます。
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="absolute bottom-8 left-[27px] top-8 hidden w-px bg-[#e5e7eb] md:block"
            aria-hidden="true"
          />
          <div className="space-y-14 md:space-y-20">
            {phases.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative grid grid-cols-1 gap-5 md:grid-cols-[56px_1fr] md:gap-10"
              >
                <div
                  className="relative z-10 hidden h-14 w-14 flex-none items-center justify-center rounded-full border border-[#1a4f8a]/30 bg-white text-[11px] font-medium tracking-wide text-[#1a4f8a] md:flex"
                  aria-hidden="true"
                >
                  {p.num}
                </div>
                <div>
                  <span
                    className="mb-2 block text-[26px] italic leading-none text-[#1a4f8a] md:text-[32px]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {p.months}
                  </span>
                  <p className="mb-1 text-[11px] font-medium tracking-[0.1em] text-[#6b7280] md:hidden">
                    PHASE {p.num}｜{p.en}
                  </p>
                  <p className="mb-1 hidden text-[11px] font-medium tracking-[0.1em] text-[#6b7280] md:block">
                    {p.en}
                  </p>
                  <h3
                    className="mb-5 text-[20px] font-medium text-[#0d2d52] md:text-[24px]"
                    style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                  >
                    {p.ja}
                  </h3>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-1.5 sm:grid-cols-2">
                    {p.items.map((item) => (
                      <p key={item} className="text-[13.5px] leading-relaxed text-[#6b7280]">
                        ・{item}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center md:mt-28"
        >
          <p className="mb-2 text-[15px] font-light text-[#9ca3af]">半年かけて共創を勉強するのではない。</p>
          <p
            className="text-[22px] font-medium leading-relaxed text-[#0d2d52] md:text-[28px]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            半年かけて、一つの共創を生み出す。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
