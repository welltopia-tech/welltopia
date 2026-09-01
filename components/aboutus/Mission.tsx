"use client";

import { motion } from "framer-motion";
import ConvergenceDiagram from "./ConvergenceDiagram";
import AudienceGrid from "./AudienceGrid";

export default function Mission() {
  return (
    <section className="bg-white px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[1fr_minmax(280px,420px)] md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#1a4f8a]" />
              <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">MISSION</span>
            </div>
            <p className="mb-2 text-sm tracking-wide text-[#6b7280]">私たちの社会的使命</p>
            <h2
              className="mb-3 text-[clamp(24px,3.4vw,36px)] font-medium text-[#0d2d52]"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              体験価値の編集者
            </h2>
            <p
              className="mb-8 text-[12px] italic tracking-wide text-[#1a4f8a]/70"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              The Editor of Experience Value
            </p>
            <p className="mb-4 max-w-lg font-light leading-[1.9] text-[#6b7280]">
              WELLTOPIAは、社会に存在する人、知識、技術、文化、データをつなぎ、新しい体験価値へ編集する共創カンパニーです。リサーチ、戦略、デザイン、マーケティング、クリエイティブ、新規事業、組織開発を横断し、顧客体験と従業員体験の両面から、まだ言葉になっていない願いや課題を発見します。
            </p>
            <p className="max-w-lg font-light leading-[1.9] text-[#6b7280]">
              構想を描くだけで終わらず、試し、測り、改善し、社会に定着するところまで伴走します。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl bg-[#0d2d52] p-8 md:p-10"
          >
            <ConvergenceDiagram />
          </motion.div>
        </div>

        <div className="mt-20 md:mt-28">
          <AudienceGrid
            items={[
              {
                label: "for Business",
                text: "一社、一部署だけでは解けない課題に対し、外部の専門性や当事者の声をつなぎ、事業と組織の新しい体験価値を共につくります。",
              },
              {
                label: "for People",
                text: "生活者や従業員を調査対象として扱うのではなく、体験を共につくる当事者として迎え入れます。",
              },
              {
                label: "for Society",
                text: "領域を越えた共創を通じて、社会課題への取り組みを一過性の活動ではなく、持続可能な事業と仕組みへ変えていきます。",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
