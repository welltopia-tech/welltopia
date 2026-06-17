"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const scores = [
  { label: "ビジョン共鳴力", value: 78, color: "#1a4f8a" },
  { label: "関係構築力", value: 65, color: "#2d6cb5" },
  { label: "プロジェクト実装力", value: 82, color: "#2d8a6b" },
  { label: "組織受容力", value: 54, color: "#1a7a9a" },
  { label: "価値創出力", value: 70, color: "#0d2d52" },
];

function AnimatedBar({ value, color, delay }: { value: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const width = useTransform(spring, [0, 100], ["0%", "100%"]);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        motionVal.set(value);
      }, delay * 1000);
    }
  }, [inView, value, delay, motionVal]);

  return (
    <div ref={ref} className="h-1.5 bg-[#e5e7eb] rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ width, backgroundColor: color }}
      />
    </div>
  );
}

export default function ScoreSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 md:py-40 bg-[#0d2d52] relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1a4f8a]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#2d8a6b]/10 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* テキスト側 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs tracking-[0.3em] text-[#2d8a6b] uppercase font-medium">
              Score Report
            </span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-light text-white leading-tight">
              スコアは
              <br />
              次の一手を示す地図
            </h2>
            <p className="mt-6 text-[#9ca3af] font-light leading-loose text-base">
              数値化された5軸のスコアは、単なる評価ではありません。
              どの領域に投資し、どのパートナーと組み、
              どの順番で動くべきか——
              <span className="text-white">具体的な戦略の起点</span>となります。
            </p>

            <div className="mt-10 flex items-center gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-white">A</div>
                <div className="text-xs text-[#6b7280] mt-1 tracking-wider">共創実装段階</div>
              </div>
              <div className="h-px flex-1 bg-white/10" />
              <div className="text-center">
                <div className="text-4xl font-light text-[#9ca3af]">B</div>
                <div className="text-xs text-[#6b7280] mt-1 tracking-wider">共創準備段階</div>
              </div>
            </div>
          </motion.div>

          {/* スコアビジュアル */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            {/* レーダーチャートの代わりに洗練されたバーグラフ */}
            <div className="mb-6 flex items-baseline justify-between">
              <span className="text-white text-sm font-medium">サンプルスコア</span>
              <span className="text-[#9ca3af] text-xs">総合スコア: 69.8</span>
            </div>

            <div className="space-y-5">
              {scores.map((s, i) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#d1d5db] font-light">{s.label}</span>
                    <motion.span
                      className="text-sm font-mono"
                      style={{ color: s.color === "#0d2d52" ? "#60a5fa" : s.color }}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      {s.value}
                    </motion.span>
                  </div>
                  <AnimatedBar value={s.value} color={s.color === "#0d2d52" ? "#60a5fa" : s.color} delay={0.4 + i * 0.12} />
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2d8a6b]" />
                <p className="text-xs text-[#6b7280]">
                  このスコアは診断後、詳細レポートとして提供されます
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
