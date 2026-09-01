"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  {
    en: "RESEARCH",
    ja: "COCOCHI Lab.｜知を生み出す。",
    current: true,
    desc: "体験・評価・共創を研究し、新しい知・評価体系・方法論を生み出す。",
    gives: ["体験・評価・共創の研究知見", "WLMの理論的基盤", "WSSの評価基準", "LINAの理論的基盤"],
    href: null,
  },
  {
    en: "MANAGEMENT",
    ja: "共創マネジメント｜社会へ実装する。",
    current: false,
    desc: "研究によって得られた知見や方法論を、企業・商品・サービス・組織・地域へ実装する。WSS・WLM・LINAなどの研究成果もここで活用される。",
    gives: ["共創プロジェクト", "商品・サービスへの実装", "実践データとナレッジ"],
    href: "/business/co-creation-management",
  },
  {
    en: "EDUCATION",
    ja: "共創マネージャー育成｜担い手を増やす。",
    current: false,
    desc: "研究と実践から生まれた知を教育し、共創を社会で実践できる人材を増やす。",
    gives: ["共創マネージャー", "社内推進人材", "地域・企業の実践者"],
    href: "/business/co-creation-manager",
  },
];

export default function Relation() {
  return (
    <section id="relation" className="scroll-mt-[130px] bg-white px-5 py-24 md:px-10 md:py-36">
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
            知を生み出し、実装し、担い手を育てる。
            <br />
            その循環が、次の研究を生む。
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
                    ? "border-[#1a4f8a] bg-[#f8f9fa] shadow-lg shadow-[#1a4f8a]/10"
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
          そこで生まれた実践結果・課題・データ・問いを、再びCOCOCHI Lab.へ戻す。
        </motion.p>
      </div>
    </section>
  );
}
