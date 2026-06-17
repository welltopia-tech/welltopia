"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const axes = [
  {
    number: "01",
    title: "ビジョン共鳴力",
    en: "Vision Resonance",
    desc: "自社のビジョンを外部に伝え、共鳴を生む力。",
    color: "#1a4f8a",
  },
  {
    number: "02",
    title: "関係構築力",
    en: "Relationship Building",
    desc: "多様なステークホルダーと深い信頼関係を構築する力。",
    color: "#2d6cb5",
  },
  {
    number: "03",
    title: "プロジェクト実装力",
    en: "Project Implementation",
    desc: "共創プロジェクトを設計し、実行まで推進する力。",
    color: "#2d8a6b",
  },
  {
    number: "04",
    title: "組織受容力",
    en: "Organizational Receptivity",
    desc: "外部との連携を社内で受け入れ、動かす力。",
    color: "#1a7a9a",
  },
  {
    number: "05",
    title: "価値創出力",
    en: "Value Creation",
    desc: "共創活動から新たな社会的・経済的価値を生む力。",
    color: "#0d2d52",
  },
];

export default function Diagnosis() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diagnosis" ref={ref} className="py-28 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* ヘッダー */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs tracking-[0.3em] text-[#1a4f8a] uppercase font-medium">
              Diagnosis
            </span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-light text-[#0d2d52] leading-tight">
              5つの軸で
              <br />
              共創力を解析する
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[#6b7280] font-light leading-loose self-end text-base md:text-lg"
          >
            WELLTOPIAが蓄積した共創プロジェクトの知見をもとに設計された
            40の設問が、貴社の共創マネジメント力を多角的に可視化します。
          </motion.p>
        </div>

        {/* 診断軸リスト */}
        <div className="space-y-0">
          {axes.map((axis, i) => (
            <motion.div
              key={axis.number}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-start gap-6 md:gap-10 py-8 border-b border-[#e5e7eb] hover:bg-[#f8f9fa] -mx-6 px-6 md:-mx-12 md:px-12 transition-colors duration-200"
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
                  <h3 className="text-lg font-medium text-[#0d2d52]">{axis.title}</h3>
                  <p className="text-xs tracking-wider text-[#9ca3af] mt-0.5">{axis.en}</p>
                </div>
                <p className="md:col-span-2 text-[#6b7280] font-light text-sm md:text-base leading-relaxed">
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
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-[#1a4f8a]/20 to-transparent" />
          <p className="text-sm text-[#9ca3af] font-light whitespace-nowrap">
            各領域 8問 × 5軸 ＝ 計 40問
          </p>
        </motion.div>
      </div>
    </section>
  );
}
