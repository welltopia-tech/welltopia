"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const routes = [
  {
    stage: "共創準備段階",
    stageEn: "PREPARATION STAGE",
    score: "スコア 60未満",
    color: "#1a4f8a",
    bgColor: "#e8f0fb",
    borderColor: "#1a4f8a",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    actions: [
      "共創力育成プログラムへの参加",
      "共創マインドセット教育・研修",
      "WELLTOPIAによる伴走支援",
      "段階的な組織変革サポート",
    ],
    desc: "共創の基盤を整え、パートナーとして育つための段階です。WELLTOPIAが伴走し、共創できる組織体制を共に構築します。",
  },
  {
    stage: "共創実装段階",
    stageEn: "IMPLEMENTATION STAGE",
    score: "スコア 60以上",
    color: "#2d8a6b",
    bgColor: "#e8f5f0",
    borderColor: "#2d8a6b",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    actions: [
      "共創プロジェクト設計への参画",
      "WELLTOPIAとの共創パートナー契約",
      "社会課題解決プロジェクトの共同実装",
      "産官学連携プロジェクトへの参加",
    ],
    desc: "共創を即座に実装できる段階です。WELLTOPIAと共にプロジェクトを設計し、健やかさを産業に根づかせる実装パートナーとして活動します。",
  },
];

export default function RouteSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-[#1a4f8a] uppercase font-medium">
            Growth Route
          </span>
          <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-light text-[#0d2d52] leading-tight">
            診断結果から
            <br />
            2つの成長ルートへ
          </h2>
          <p className="mt-6 text-[#6b7280] font-light max-w-xl mx-auto leading-relaxed">
            スコアに応じて最適なネクストアクションを提示。
            どのステージにいても、WELLTOPIAがその先を共に歩みます。
          </p>
        </motion.div>

        {/* ルートカード */}
        <div className="grid md:grid-cols-2 gap-8">
          {routes.map((route, i) => (
            <motion.div
              key={route.stage}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border-2 overflow-hidden"
              style={{ borderColor: route.borderColor + "40" }}
            >
              {/* カードヘッダー */}
              <div
                className="px-8 py-8"
                style={{ backgroundColor: route.bgColor }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: route.color, color: "white" }}
                >
                  {route.icon}
                </div>
                <div
                  className="text-xs tracking-[0.2em] font-medium mb-2"
                  style={{ color: route.color }}
                >
                  {route.stageEn}
                </div>
                <h3 className="text-2xl font-light text-[#0d2d52]">{route.stage}</h3>
                <span
                  className="inline-block mt-2 text-xs px-3 py-1 rounded-full font-medium"
                  style={{ backgroundColor: route.color + "18", color: route.color }}
                >
                  {route.score}
                </span>
              </div>

              {/* カードボディ */}
              <div className="px-8 py-8 bg-white">
                <p className="text-[#6b7280] font-light text-sm leading-relaxed mb-6">
                  {route.desc}
                </p>
                <ul className="space-y-3">
                  {route.actions.map((action) => (
                    <li key={action} className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                        style={{ backgroundColor: route.color }}
                      />
                      <span className="text-sm text-[#374151] font-light">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 接続矢印 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-[#9ca3af] text-sm font-light">
            準備段階から実装段階へ——WELLTOPIAは、その全プロセスに伴走します。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
