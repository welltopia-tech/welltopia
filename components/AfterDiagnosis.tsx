"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const paths = [
  {
    type: "共創準備企業",
    typeEn: "CO-CREATION READY",
    score: "〜69点",
    color: "#1a7a9a",
    bg: "#e8f4f8",
    border: "#1a7a9a",
    next: "共創力育成プログラム",
    nextEn: "Co-Creation Development",
    desc: "共創の土台をつくる段階。WELLTOPIAと共に7つの基準を体系的に強化し、共創できる組織へ変革します。",
    actions: [
      "共創基準ギャップ分析",
      "組織文化・マインドセット変革支援",
      "共創パートナー候補の探索・接触",
    ],
  },
  {
    type: "共創実装企業",
    typeEn: "CO-CREATION ACTIVE",
    score: "70点以上",
    color: "#1a4f8a",
    bg: "#e8f0fb",
    border: "#1a4f8a",
    next: "共創プロジェクト設計",
    nextEn: "Co-Creation Project Design",
    desc: "共創を実行する段階。具体的なプロジェクト設計からパートナーシップ構築まで、WELLTOPIAが伴走します。",
    actions: [
      "共創プロジェクト企画・設計支援",
      "産官学パートナーとのマッチング",
      "共創マネジメント体制の構築",
    ],
  },
];

export default function AfterDiagnosis() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 md:py-40 bg-[#0d2d52] relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#1a4f8a]/40" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#2d8a6b]/20" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-[#6b9fda] uppercase font-medium">
            After Diagnosis
          </span>
          <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-light text-white leading-tight">
            診断は、終わりではなく
            <br />
            次の成長への始まりです。
          </h2>
          <p className="mt-6 text-[#6b9fda] font-light text-base max-w-xl mx-auto leading-relaxed">
            スコアに応じて、WELLTOPIAが最適な共創の次のステップを提案します。
          </p>
        </motion.div>

        {/* 2つのパス */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {paths.map((path, i) => (
            <motion.div
              key={path.type}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm"
            >
              {/* タイプバッジ */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[10px] tracking-[0.3em] font-medium mb-1" style={{ color: path.color === "#1a4f8a" ? "#6b9fda" : "#7ec8d8" }}>
                    {path.typeEn}
                  </p>
                  <h3 className="text-white text-xl font-light">{path.type}</h3>
                </div>
                <span className="text-xs text-white/50 border border-white/10 px-3 py-1 rounded-full">
                  {path.score}
                </span>
              </div>

              {/* 矢印 + NEXT */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-white/10" />
                <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* NEXT ACTION */}
              <div
                className="rounded-2xl p-5 mb-6"
                style={{ backgroundColor: path.bg, borderLeft: `3px solid ${path.border}` }}
              >
                <p className="text-[10px] tracking-[0.25em] font-medium mb-1" style={{ color: path.color }}>
                  {path.nextEn}
                </p>
                <p className="text-[#0d2d52] font-medium text-base">{path.next}</p>
              </div>

              <p className="text-white/60 font-light text-sm leading-relaxed mb-6">
                {path.desc}
              </p>

              {/* アクションリスト */}
              <ul className="space-y-2.5">
                {path.actions.map((action) => (
                  <li key={action} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1 h-1 rounded-full bg-white/30 mt-2" />
                    <span className="text-white/70 text-sm font-light">{action}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 底部メッセージ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 text-white/40 text-xs tracking-[0.2em] uppercase">
            <div className="h-px w-12 bg-white/20" />
            <span>診断から始まる共創の旅</span>
            <div className="h-px w-12 bg-white/20" />
          </div>
          <p className="mt-6 text-white/60 font-light text-sm">
            どのステージからでも、WELLTOPIAは共に歩みます。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
