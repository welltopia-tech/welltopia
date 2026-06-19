"use client";

import { motion } from "framer-motion";

const supports = [
  "独自基準7領域",
  "オンライン40問",
  "個別ヒアリング",
  "2週間以内にレポート",
  "90分フィードバック",
];

// 抽象的な共創ネットワーク図
function CoCreationVisual() {
  const nodes = [
    { cx: 200, cy: 200, r: 46, fill: "#1a4f8a", label: true },
    { cx: 80, cy: 90, r: 26, fill: "#2d6cb5" },
    { cx: 320, cy: 100, r: 22, fill: "#2d8a6b" },
    { cx: 340, cy: 270, r: 28, fill: "#2d6cb5" },
    { cx: 90, cy: 300, r: 24, fill: "#1a7a9a" },
    { cx: 200, cy: 40, r: 16, fill: "#2d8a6b" },
    { cx: 40, cy: 200, r: 14, fill: "#1a4f8a" },
    { cx: 360, cy: 180, r: 14, fill: "#1a4f8a" },
  ];

  return (
    <svg viewBox="0 0 400 360" className="w-full max-w-[460px] mx-auto" aria-hidden="true">
      {/* 接続線 */}
      {nodes.slice(1).map((n, i) => (
        <line
          key={i}
          x1={200}
          y1={200}
          x2={n.cx}
          y2={n.cy}
          stroke="#1a4f8a"
          strokeOpacity="0.18"
          strokeWidth="1.5"
        />
      ))}

      {/* 外周の柔らかい円 */}
      <motion.circle
        cx="200"
        cy="200"
        r="150"
        fill="none"
        stroke="#1a4f8a"
        strokeOpacity="0.08"
        strokeWidth="1"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      />

      {/* ノード */}
      {nodes.map((n, i) => (
        <motion.g
          key={i}
          animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} fillOpacity={n.label ? 1 : 0.85} />
          {n.label && (
            <text
              x={n.cx}
              y={n.cy + 5}
              textAnchor="middle"
              fontSize="15"
              fill="white"
              fontWeight="500"
            >
              共創力
            </text>
          )}
        </motion.g>
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 md:pt-36 pb-20 md:pb-28">
      {/* 背景 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4fb] via-white to-white" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(#1a4f8a0a 1px, transparent 1px), linear-gradient(90deg, #1a4f8a0a 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 50% 30%, black, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左：テキスト */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-xs tracking-[0.3em] text-[#1a4f8a] uppercase font-medium mb-6"
            >
              Co-Creation Assessment
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.75rem,8vw,5rem)] font-bold text-[#0d2d52] leading-[1.05] tracking-tight"
            >
              共創力、
              <br />
              測ってる？
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 text-lg md:text-xl font-light text-[#0d2d52] leading-relaxed"
            >
              競争する力に加えて、ともにつくる力が、
              <br className="hidden md:block" />
              企業の成長を決める時代です。
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-5 text-[#6b7280] font-light leading-loose max-w-xl"
            >
              WELLTOPIAの共創力診断は、企業が社内外の人や資源をつなぎ、
              新しい価値を生み出し、成果へ変える力を可視化します。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-[#1a4f8a] text-white text-sm tracking-wide font-medium px-8 py-4 rounded-full hover:bg-[#0d2d52] transition-colors duration-300 shadow-lg shadow-[#1a4f8a]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a4f8a]/40 focus-visible:ring-offset-2"
              >
                自社の共創力を診断する
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#diagnosis"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a4f8a] text-sm tracking-wide font-medium px-8 py-4 rounded-full border border-[#1a4f8a]/30 hover:border-[#1a4f8a] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a4f8a]/40"
              >
                診断内容を見る
              </a>
            </motion.div>
          </div>

          {/* 右：ビジュアル */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-first lg:order-last"
          >
            <CoCreationVisual />
          </motion.div>
        </div>

        {/* 下部補助情報 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 md:mt-20 pt-8 border-t border-[#e5e7eb] flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-10"
        >
          {supports.map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2d8a6b]" />
              <span className="text-xs md:text-sm font-light text-[#6b7280]">{s}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
