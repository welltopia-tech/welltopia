"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "診断申込み",
    desc: "フォームより申込み。担当者より3営業日以内にご連絡します。",
    duration: "1〜3日",
  },
  {
    step: "02",
    title: "ヒアリング",
    desc: "オンラインにて1時間のキックオフヒアリング。貴社のビジョンと現状を深く伺います。",
    duration: "60分",
  },
  {
    step: "03",
    title: "診断実施",
    desc: "40問のオンライン設問と、WELLTOPIAアナリストによる補足インタビューを実施。",
    duration: "1〜2週間",
  },
  {
    step: "04",
    title: "レポート作成",
    desc: "5軸スコアの分析と、貴社固有のネクストアクション提言を含む詳細レポートを作成。",
    duration: "1週間",
  },
  {
    step: "05",
    title: "フィードバックセッション",
    desc: "レポートをもとに90分の対話セッション。具体的な次の一手を共に設計します。",
    duration: "90分",
  },
];

export default function ServiceFlow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 md:py-40 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-[#1a4f8a] uppercase font-medium">
            Service Flow
          </span>
          <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-light text-[#0d2d52] leading-tight">
            診断から提言まで、
            <br />
            全5ステップ
          </h2>
        </motion.div>

        {/* フロー */}
        <div className="relative">
          {/* 縦線（PC） */}
          <div className="hidden md:block absolute left-[2.75rem] top-0 bottom-0 w-px bg-gradient-to-b from-[#1a4f8a]/20 via-[#1a4f8a]/20 to-transparent" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-8 md:gap-12 pb-12 last:pb-0"
              >
                {/* ステップ番号 */}
                <div className="flex-shrink-0 relative">
                  <div className="w-11 h-11 rounded-full bg-[#1a4f8a] flex items-center justify-center z-10 relative shadow-md shadow-[#1a4f8a]/20">
                    <span className="text-white text-xs font-mono">{step.step}</span>
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="flex-1 pt-2 pb-12 border-b border-[#e5e7eb] last:border-b-0">
                  <div className="flex items-baseline gap-4 mb-2 flex-wrap">
                    <h3 className="text-xl font-light text-[#0d2d52]">{step.title}</h3>
                    <span className="text-xs tracking-wider text-[#9ca3af] bg-white border border-[#e5e7eb] px-3 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[#6b7280] font-light text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 総期間 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-5 border border-[#e5e7eb] shadow-sm"
        >
          <div>
            <p className="text-xs text-[#9ca3af] tracking-wider">TOTAL DURATION</p>
            <p className="text-2xl font-light text-[#0d2d52] mt-0.5">約3〜4週間</p>
          </div>
          <div className="w-px h-10 bg-[#e5e7eb]" />
          <p className="text-sm text-[#6b7280] font-light max-w-[200px]">
            申込みから最終フィードバックまで
          </p>
        </motion.div>
      </div>
    </section>
  );
}
