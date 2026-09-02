"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  {
    en: "RESEARCH",
    ja: "研究事業",
    current: false,
    desc: "共創、体験価値、ウェルビーイングを研究し、新しい指標、方法論、問いを生み出す。",
    gives: ["共創に関する研究知見", "WLMの理論的基盤", "WSSの評価基準", "CX・EXの測定方法", "社会や生活者の変化"],
    href: "/business/research",
  },
  {
    en: "CO-CREATION MANAGEMENT",
    ja: "共創マネジメント事業",
    current: true,
    desc: "研究によって得た知見を、企業や社会の実際のプロジェクトで検証・実装する。",
    gives: ["新しい商品・サービス", "顧客・従業員体験の改善", "新規事業", "共創プロジェクト", "実践データとナレッジ"],
    href: null,
  },
  {
    en: "CO-CREATION MANAGER ACADEMY",
    ja: "共創マネージャー育成事業",
    current: false,
    desc: "研究と実践から得た方法論を体系化し、次の共創を担う人材へ伝える。",
    gives: ["共創マネージャー", "社内推進人材", "地域・企業の実践者", "新しい共創プロジェクト", "次の研究テーマ"],
    href: "/business/co-creation-manager",
  },
];

export default function Relation() {
  return (
    <section id="relation" className="scroll-mt-[180px] bg-[#f8f9fa] px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">CIRCLE OF POSSIBILITY</span>
          </div>
          <h2
            className="text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            研究し、実装し、育てる。
            <br />
            その循環が、次の可能性を生み出す。
          </h2>
        </motion.div>

        <div>
          {items.map((item, i) => (
            <div key={item.en}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl border p-7 md:p-8 ${
                  item.current
                    ? "border-[#1a4f8a] bg-white shadow-lg shadow-[#1a4f8a]/10"
                    : "border-[#e5e7eb] bg-white"
                }`}
              >
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span
                    className="text-sm italic text-[#1a4f8a]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {item.en}
                  </span>
                  {item.current && (
                    <span className="rounded bg-[#1a4f8a] px-2 py-0.5 text-[10px] tracking-wide text-white">
                      現在地
                    </span>
                  )}
                </div>
                <h3
                  className="mb-3 text-[18px] font-medium text-[#0d2d52]"
                  style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                >
                  {item.ja}
                </h3>
                <p className="mb-5 max-w-2xl font-light leading-relaxed text-[#6b7280]">{item.desc}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.gives.map((g) => (
                    <span key={g} className="rounded border border-[#e5e7eb] px-2.5 py-1 text-[11px] text-[#6b7280]">
                      {g}
                    </span>
                  ))}
                </div>
                {item.href && (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-[#1a4f8a] transition-colors hover:text-[#0d2d52]"
                  >
                    詳しく見る →
                  </Link>
                )}
              </motion.div>
              {i < items.length - 1 && (
                <div className="flex justify-center py-3 text-[#1a4f8a]/40" aria-hidden="true">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-10 text-center text-[13.5px] font-light leading-relaxed text-[#6b7280] md:mt-14"
        >
          そこで生まれた新しい実践とデータは、また研究事業へ還元されていきます。
        </motion.p>
      </div>
    </section>
  );
}
