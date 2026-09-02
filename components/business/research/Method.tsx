"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const evaluationMethods = [
  {
    code: "WSS",
    name: "WELLTOPIA SCORING SYSTEM",
    desc: "「評価とは何か」を追究する研究から生まれた、WELLTOPIA独自のスコアリング体系。",
  },
  {
    code: "WLM",
    name: "WELLTOPIA LADDER METHOD",
    desc: "体験研究・評価研究から生まれた、共創を段階的に前進させるための開発メソッド。",
  },
];

const coCreationMethods = [
  {
    code: "LINA",
    name: "Co-Creation Management System",
    desc: "共創そのものを研究する中から生まれた、WELLTOPIA独自の共創マネジメントシステム。",
  },
];

const cycle = ["RESEARCH", "METHOD", "IMPLEMENTATION", "EVALUATION"];

function MethodCard({ code, name, desc }: { code: string; name: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-7 md:p-8">
      <span
        className="mb-2 block text-2xl italic text-[#1a4f8a]"
        style={{ fontFamily: "var(--font-cormorant), serif" }}
      >
        {code}
      </span>
      <p className="mb-4 text-[11px] tracking-[0.08em] text-[#6b7280]">{name}</p>
      <p className="mb-5 text-[13.5px] font-light leading-relaxed text-[#6b7280]">{desc}</p>
      <Link
        href="/business/co-creation-management#ccm-system"
        className="inline-flex items-center gap-2 text-[12.5px] font-medium text-[#1a4f8a] transition-colors hover:text-[#0d2d52]"
      >
        CCMでの活用を見る →
      </Link>
    </div>
  );
}

export default function Method() {
  return (
    <section id="method" className="scroll-mt-[180px] bg-white px-5 py-24 md:px-10 md:py-36">
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
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">FROM RESEARCH TO METHOD</span>
          </div>
          <h2
            className="mb-6 text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            研究を、社会が使える方法論へ。
          </h2>
          <p className="font-light leading-[1.9] text-[#6b7280]">
            COCOCHI Lab.では、研究成果を研究室の中だけに留めません。研究を続ける中で得られた知見を、企業や社会が実際に使用できる評価体系やマネジメントシステムへ変換しています。
          </p>
        </motion.div>

        <div className="mb-16 md:mb-20">
          <p className="mb-5 text-xs tracking-[0.25em] text-[#1a4f8a]">FROM EVALUATION RESEARCH</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {evaluationMethods.map((m, i) => (
              <motion.div
                key={m.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <MethodCard {...m} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-20 md:mb-28">
          <p className="mb-5 text-xs tracking-[0.25em] text-[#1a4f8a]">FROM CO-CREATION RESEARCH</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {coCreationMethods.map((m) => (
              <motion.div
                key={m.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                <MethodCard {...m} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl bg-[#f8f9fa] p-8 md:p-12"
        >
          <div className="mb-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-0">
            {cycle.map((c) => (
              <div key={c} className="flex flex-col items-center sm:flex-row">
                <span className="rounded-full border border-[#1a4f8a]/25 bg-white px-4 py-2 text-[11px] tracking-[0.1em] text-[#1a4f8a]">
                  {c}
                </span>
                <span className="text-[#1a4f8a]/40" aria-hidden="true">
                  <span className="block py-1.5 sm:hidden">↓</span>
                  <span className="hidden px-3 sm:block">→</span>
                </span>
              </div>
            ))}
            <span className="rounded-full border border-[#1a4f8a]/25 bg-white px-4 py-2 text-[11px] tracking-[0.1em] text-[#1a4f8a]">
              RESEARCH
            </span>
          </div>
          <p className="mx-auto max-w-xl text-center text-[13.5px] font-light leading-relaxed text-[#6b7280]">
            研究する。方法論へ変える。社会で使う。結果を評価する。そして、また研究する。この循環によって、WELLTOPIAの研究は更新され続けます。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
