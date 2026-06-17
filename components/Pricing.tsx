"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const includes = [
  "7軸診断レポート（PDF・全30〜50ページ）",
  "スコア詳細解説と業界比較",
  "ネクストアクション提言書",
  "90分フィードバックセッション（オンライン）",
  "3ヶ月後フォローアップチェックイン（30分）",
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="py-28 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-[#1a4f8a] uppercase font-medium">
            Pricing
          </span>
          <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-light text-[#0d2d52] leading-tight">
            シンプルな料金体系
          </h2>
        </motion.div>

        {/* 料金カード */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 通常価格 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="rounded-3xl border border-[#e5e7eb] p-8 md:p-10"
          >
            <div className="text-xs tracking-[0.2em] text-[#9ca3af] uppercase font-medium mb-4">
              通常価格
            </div>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl md:text-5xl font-light text-[#6b7280]">300,000</span>
              <span className="text-xl text-[#6b7280]">円</span>
              <span className="text-sm text-[#9ca3af] ml-1">（税別）</span>
            </div>
            <div className="h-px bg-[#e5e7eb] mb-6" />
            <ul className="space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#6b7280] font-light">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 共創基準構築パートナー価格 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative rounded-3xl border-2 border-[#1a4f8a] p-8 md:p-10 overflow-hidden"
          >
            {/* バッジ */}
            <div className="absolute top-0 right-0">
              <div className="bg-[#1a4f8a] text-white text-xs tracking-[0.1em] font-medium px-5 py-2 rounded-bl-2xl rounded-tr-3xl">
                限定募集中
              </div>
            </div>

            {/* 背景装飾 */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-[#e8f0fb] opacity-60" />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#e8f5f0] opacity-40" />

            <div className="relative">
              <div className="text-xs tracking-[0.15em] text-[#1a4f8a] font-medium mb-1">
                共創基準構築パートナー価格
              </div>
              <div className="text-[10px] tracking-[0.1em] text-[#9ca3af] mb-4">CO-CREATION PARTNER PRICE</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl md:text-5xl font-light text-[#0d2d52]">150,000</span>
                <span className="text-xl text-[#0d2d52]">円</span>
                <span className="text-sm text-[#9ca3af] ml-1">（税別）</span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs text-[#2d8a6b] bg-[#e8f5f0] px-2 py-0.5 rounded-full font-medium">
                  特別価格
                </span>
                <span className="text-xs text-[#9ca3af]line-through">通常 300,000円</span>
              </div>

              <div className="h-px bg-[#1a4f8a]/10 mb-6" />

              <ul className="space-y-3 mb-8">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#1a4f8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#374151] font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block w-full text-center py-4 bg-[#1a4f8a] text-white text-sm tracking-[0.08em] font-medium rounded-2xl hover:bg-[#0d2d52] transition-colors duration-300 shadow-lg shadow-[#1a4f8a]/20"
              >
                パートナーとして申し込む
              </a>

              <p className="text-center text-xs text-[#9ca3af] mt-3">
                ※ 共創基準構築パートナー枠は残りわずかです
              </p>
            </div>
          </motion.div>
        </div>

        {/* 注記 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-xs text-[#9ca3af] mt-10 font-light"
        >
          ※ 別途、交通費・宿泊費が発生する場合は実費精算となります。
          お支払いは銀行振込（前払い）となります。
        </motion.p>
      </div>
    </section>
  );
}
