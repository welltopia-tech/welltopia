"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* グリッド */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#1a4f8a 1px, transparent 1px), linear-gradient(90deg, #1a4f8a 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* 右上の光 */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#e8f0fb] to-transparent opacity-60" />
        {/* 左下の光 */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#e8f5f0] to-transparent opacity-40" />
        {/* 有機的な円弧 */}
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.06]"
          viewBox="0 0 600 900"
          fill="none"
        >
          <ellipse cx="500" cy="450" rx="400" ry="600" stroke="#1a4f8a" strokeWidth="1" />
          <ellipse cx="520" cy="460" rx="300" ry="460" stroke="#1a4f8a" strokeWidth="1" />
          <ellipse cx="540" cy="450" rx="180" ry="300" stroke="#2d8a6b" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24">
        {/* ブランドロゴ・タグ */}
        <motion.div
          className="flex items-center gap-3 mb-12"
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a] font-medium uppercase">
              Welltopia
            </span>
          </div>
          <div className="h-px w-8 bg-[#1a4f8a] opacity-40" />
          <span className="text-xs tracking-[0.15em] text-[#6b7280]">
            共創マネジメント診断
          </span>
        </motion.div>

        {/* メインタイトル */}
        <motion.h1
          className="text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0d2d52] mb-8"
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          共創力診断
          <span className="block text-[clamp(1rem,2.5vw,1.5rem)] font-normal tracking-[0.15em] text-[#1a4f8a] mt-4 ml-1">
            CO-CREATION ASSESSMENT
          </span>
        </motion.h1>

        {/* サブコピー */}
        <motion.p
          className="text-[clamp(1rem,2vw,1.375rem)] text-[#374151] font-light leading-relaxed mb-14 max-w-xl"
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          自社の共創力を可視化し、
          <br className="hidden sm:block" />
          次の成長につなげる。
        </motion.p>

        {/* CTAボタン群 */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1a4f8a] text-white text-sm tracking-[0.08em] font-medium rounded-full hover:bg-[#0d2d52] transition-all duration-300 shadow-lg shadow-[#1a4f8a]/20"
          >
            <span>診断を申し込む</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#diagnosis"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1a4f8a]/30 text-[#1a4f8a] text-sm tracking-[0.08em] font-medium rounded-full hover:bg-[#e8f0fb] transition-all duration-300"
          >
            診断内容を見る
          </a>
        </motion.div>

        {/* 数字メトリクス */}
        <motion.div
          className="mt-20 pt-12 border-t border-[#e5e7eb] grid grid-cols-3 gap-8 max-w-2xl"
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          {[
            { num: "5", unit: "領域", label: "診断軸" },
            { num: "40", unit: "問", label: "設問数" },
            { num: "2", unit: "ルート", label: "成長パス" },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl md:text-4xl font-light text-[#1a4f8a]">{item.num}</span>
                <span className="text-sm text-[#1a4f8a]">{item.unit}</span>
              </div>
              <p className="text-xs tracking-[0.1em] text-[#9ca3af]">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* スクロール誘導 */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.3em] text-[#9ca3af] uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-[#1a4f8a]/40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
