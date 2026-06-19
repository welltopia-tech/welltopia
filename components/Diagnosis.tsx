"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const axes = [
  {
    number: "01",
    en: "PURPOSE",
    title: "存在目的の明確化",
    desc: "なぜ共創するのか。自社の社会的使命と共創の動機を言語化し、外部に伝える力。",
    color: "#1a4f8a",
  },
  {
    number: "02",
    en: "VALUE DESIGN",
    title: "価値設計力",
    desc: "共創から生まれる価値を設計し、関係者全員にとって意義ある成果を描く力。",
    color: "#2d6cb5",
  },
  {
    number: "03",
    en: "RESOURCE EDIT",
    title: "資源編集力",
    desc: "自社の資産・ネットワーク・知見を組み替え、共創に必要なリソースを調達・配置する力。",
    color: "#2d8a6b",
  },
  {
    number: "04",
    en: "RELATIONSHIP",
    title: "関係構築力",
    desc: "多様なステークホルダーと深い信頼関係を構築し、長期的なパートナーシップを育む力。",
    color: "#1a7a9a",
  },
  {
    number: "05",
    en: "ROLE DESIGN",
    title: "役割設計力",
    desc: "共創プロジェクトにおける各者の役割・責任・権限を明確にデザインし、機能させる力。",
    color: "#3a6fd8",
  },
  {
    number: "06",
    en: "MANAGEMENT",
    title: "共創マネジメント力",
    desc: "異なる文化・目的を持つ組織間の協働を管理し、プロジェクトを推進し続ける力。",
    color: "#0d2d52",
  },
  {
    number: "07",
    en: "GROWTH",
    title: "成長転換力",
    desc: "共創の経験を学習資産として内部化し、次の共創につなげる組織的な成長サイクルを回す力。",
    color: "#1a6b5a",
  },
];

export default function Diagnosis() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diagnosis" ref={ref} className="py-28 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* ヘッダー */}
        <div className="grid md:grid-cols-2 gap-16 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs tracking-[0.3em] text-[#1a4f8a] uppercase font-medium">
              Co-Creation Assessment
            </span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-light text-[#0d2d52] leading-tight">
              共創力を、
              <br />
              感覚のままにしない。
            </h2>
            <p className="mt-4 text-xs tracking-[0.2em] text-[#9ca3af] uppercase font-medium border border-[#e5e7eb] inline-block px-3 py-1.5 rounded-full mt-6">
              独自共創基準 7領域
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[#6b7280] font-light leading-loose self-end text-base md:text-lg"
          >
            これまで感覚や個人の経験で語られてきた共創力を、WELLTOPIAが共創プロジェクトの実践知から設計した独自基準で可視化します。
            7つの領域から、企業が共創を成果に変える力を多角的に評価します。
          </motion.p>
        </div>

        {/* 基本情報 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-14 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {[
            { v: "7領域", l: "独自共創基準" },
            { v: "40問", l: "オンライン回答" },
            { v: "60分", l: "個別ヒアリング" },
            { v: "PDF", l: "診断レポート" },
            { v: "90分", l: "フィードバック" },
            { v: "2週間以内", l: "レポート納品" },
          ].map((item) => (
            <div key={item.l} className="rounded-2xl border border-[#e5e7eb] bg-[#f8f9fa] px-4 py-4 text-center">
              <p className="text-lg font-medium text-[#1a4f8a]">{item.v}</p>
              <p className="text-xs text-[#9ca3af] font-light mt-1">{item.l}</p>
            </div>
          ))}
        </motion.div>

        {/* 診断軸リスト */}
        <div className="space-y-0">
          {axes.map((axis, i) => (
            <motion.div
              key={axis.number}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-start gap-6 md:gap-10 py-7 border-b border-[#e5e7eb] hover:bg-[#f8f9fa] -mx-6 px-6 md:-mx-12 md:px-12 transition-colors duration-200"
            >
              {/* ナンバー */}
              <span
                className="flex-shrink-0 text-xs font-mono tracking-widest mt-1"
                style={{ color: axis.color }}
              >
                {axis.number}
              </span>

              {/* コンテンツ */}
              <div className="flex-1 grid md:grid-cols-3 gap-2 md:gap-8 items-baseline">
                <div>
                  <p className="text-[10px] tracking-[0.3em] font-medium mb-1" style={{ color: axis.color }}>
                    {axis.en}
                  </p>
                  <h3 className="text-base font-medium text-[#0d2d52]">{axis.title}</h3>
                </div>
                <p className="md:col-span-2 text-[#6b7280] font-light text-sm leading-relaxed">
                  {axis.desc}
                </p>
              </div>

              {/* 矢印 */}
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ borderColor: axis.color, color: axis.color }}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 設問数表示 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-[#1a4f8a]/20 to-transparent" />
          <p className="text-sm text-[#9ca3af] font-light whitespace-nowrap">
            各領域 約6問 × 7軸 ＝ 計 40問
          </p>
        </motion.div>
      </div>
    </section>
  );
}
