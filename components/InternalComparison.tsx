"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  { label: "従業員の位置づけ", high: "価値を共につくる仲間として向き合う", low: "指示を実行する人として扱う" },
  { label: "目的の共有", high: "なぜやるのかを共有し、納得して動いてもらう", low: "やることだけを伝え、背景は共有しない" },
  { label: "意見の扱い", high: "現場の声を意思決定に取り込む", low: "上が決めたことを下ろすだけにとどまる" },
  { label: "裁量", high: "任せる範囲を決め、自ら考える余白を残す", low: "細かく管理し、判断の余地を与えない" },
  { label: "部門間の連携", high: "部門を越えて知恵と資源を持ち寄る", low: "部門ごとに分断され、情報が滞る" },
  { label: "挑戦の捉え方", high: "失敗を学びとして許容し、挑戦を後押しする", low: "失敗を責め、挑戦が起きにくくなる" },
  { label: "知識・経験", high: "個人の知見を組織の資産として蓄える", low: "属人化し、人が抜けると失われる" },
  { label: "成長", high: "共創の経験が、人と組織の成長につながる", low: "作業の繰り返しで、成長実感が生まれにくい" },
];

export default function InternalComparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-36 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <span className="text-xs tracking-[0.3em] text-[#2d8a6b] uppercase font-medium">
            Internal Co-Creation
          </span>
          <h2 className="mt-4 text-[clamp(1.6rem,4vw,2.5rem)] font-light text-[#0d2d52] leading-snug">
            従業員を、指示を受ける人ではなく、
            <br className="md:hidden" />
            価値をつくる仲間にできているか。
          </h2>
          <p className="mt-6 text-[#6b7280] font-light leading-loose">
            社外との共創を支えるのは、社内の共創力です。
            従業員との関係の築き方によって、組織が生み出せる価値は大きく変わります。
          </p>
        </motion.div>

        {/* PC */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[140px_1fr_1fr] gap-px bg-[#e5e7eb] rounded-3xl overflow-hidden border border-[#e5e7eb]">
            <div className="bg-white" />
            <div className="bg-[#2d8a6b] px-6 py-5">
              <p className="text-[10px] tracking-[0.25em] text-white/70 uppercase mb-1">High</p>
              <p className="text-white font-medium">共創力の高い企業</p>
            </div>
            <div className="bg-[#6b7280] px-6 py-5">
              <p className="text-[10px] tracking-[0.25em] text-white/60 uppercase mb-1">Low</p>
              <p className="text-white font-medium">共創力の低い企業</p>
            </div>

            {rows.map((row, i) => (
              <div key={row.label} className="contents">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="bg-white px-5 py-5 flex items-center"
                >
                  <span className="text-sm font-medium text-[#0d2d52]">{row.label}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.12 + i * 0.05 }}
                  className="bg-[#e8f5f0] px-6 py-5"
                >
                  <span className="text-sm text-[#1a6b5a] font-light leading-relaxed">{row.high}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.14 + i * 0.05 }}
                  className="bg-white px-6 py-5"
                >
                  <span className="text-sm text-[#6b7280] font-light leading-relaxed">{row.low}</span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* SP */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-[#e5e7eb] overflow-hidden bg-white"
            >
              <div className="bg-[#f8f9fa] px-5 py-3 border-b border-[#e5e7eb]">
                <span className="text-sm font-medium text-[#0d2d52]">{row.label}</span>
              </div>
              <div className="bg-[#e8f5f0] px-5 py-4 border-b border-[#e5e7eb]">
                <p className="text-[10px] tracking-wider text-[#2d8a6b] uppercase mb-1">共創力の高い企業</p>
                <p className="text-sm text-[#1a6b5a] font-light">{row.high}</p>
              </div>
              <div className="px-5 py-4">
                <p className="text-[10px] tracking-wider text-[#9ca3af] uppercase mb-1">共創力の低い企業</p>
                <p className="text-sm text-[#6b7280] font-light">{row.low}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 text-center text-[#0d2d52] font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          従業員を仲間にできる組織ほど、
          <span className="text-[#2d8a6b] font-medium">外部とも深く共創できる</span>
          。社内の共創力は、すべての土台です。
        </motion.p>
      </div>
    </section>
  );
}
