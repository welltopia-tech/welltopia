"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TriadLoopDiagram from "./TriadLoopDiagram";

const mainCycle = [
  { key: "research", en: "RESEARCH", ja: "研究する" },
  { key: "education", en: "EDUCATION", ja: "人を育てる" },
  { key: "implementation", en: "IMPLEMENTATION", ja: "社会に実装する" },
] as const;

const items = [
  {
    en: "COCOCHI Lab.",
    ja: "共創を研究する。",
    current: false,
    desc: "共創や評価について研究し、その構造・方法・評価方法を体系化する。",
    href: "/business/research",
  },
  {
    en: "FRONPEER",
    ja: "共創する人を育てる。",
    current: true,
    desc: "研究から得られた知見を、人が実践できる能力へ変える。",
    href: null,
  },
  {
    en: "CCM",
    ja: "共創を社会に実装する。",
    current: false,
    desc: "共創マネージャーとともに企業・地域・社会の課題に向き合い、新しい体験や事業を生み出す。",
    href: "/business/co-creation-management",
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
          className="mb-14 text-center md:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">WELLTOPIA ECOSYSTEM</span>
            <span className="h-px w-6 bg-[#1a4f8a]" />
          </div>
          <h2
            className="text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            研究する。育てる。実装する。
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <TriadLoopDiagram
            nodes={mainCycle}
            label="RESEARCH（研究する）からEDUCATION（人を育てる）、IMPLEMENTATION（社会に実装する）を経て、再びRESEARCHへ戻る、WELLTOPIA3事業の循環図"
          />
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
                <p className="mb-1 max-w-2xl font-light leading-relaxed text-[#6b7280]">{item.desc}</p>
                {item.href && (
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-[#1a4f8a] transition-colors hover:text-[#0d2d52]"
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
          実践から得た知見は、再びCOCOCHI Lab.へ還元されていきます。
        </motion.p>
      </div>
    </section>
  );
}
