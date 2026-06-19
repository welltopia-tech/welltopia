"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const types = [
  {
    key: "growth",
    name: "共創成長企業",
    en: "Co-Creation Growth",
    desc: "社内外どちらとも深く共創でき、出会いを継続的な成長へ変えられる企業。",
    color: "#1a4f8a",
    bg: "#f0f4fb",
    // 右上
    pos: "top-0 right-0",
  },
  {
    key: "external",
    name: "外部先行型",
    en: "External-Led",
    desc: "外部連携は得意だが、社内の巻き込みが追いつかず、成果が個人依存になりやすい企業。",
    color: "#2d6cb5",
    bg: "#eef3fb",
    // 右下
    pos: "bottom-0 right-0",
  },
  {
    key: "internal",
    name: "内部共創型",
    en: "Internal-Led",
    desc: "社内の連携や巻き込みは強いが、外部との接点づくりがこれからの企業。",
    color: "#2d8a6b",
    bg: "#e8f5f0",
    // 左上
    pos: "top-0 left-0",
  },
  {
    key: "stall",
    name: "共創停滞企業",
    en: "Co-Creation Stalled",
    desc: "社内外ともに共創の土台がこれからの段階。伸びしろが最も大きい企業。",
    color: "#6b7280",
    bg: "#f8f9fa",
    // 左下
    pos: "bottom-0 left-0",
  },
];

export default function TypeMatrix() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // マトリクス配置順（左上, 右上, 左下, 右下）
  const grid = [types[2], types[0], types[3], types[1]];

  return (
    <section id="type-matrix" ref={ref} className="py-24 md:py-36 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-[0.3em] text-[#1a4f8a] uppercase font-medium">
            Co-Creation Types
          </span>
          <h2 className="mt-4 text-[clamp(1.6rem,4vw,2.5rem)] font-light text-[#0d2d52] leading-snug">
            あなたの会社は、
            <br className="md:hidden" />
            どの共創タイプですか？
          </h2>
        </motion.div>

        {/* PC: マトリクス */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="hidden md:block"
        >
          <div className="relative pl-16 pb-16">
            {/* 縦軸ラベル */}
            <div className="absolute left-0 top-0 bottom-16 w-12 flex items-center justify-center">
              <span className="text-xs tracking-wider text-[#6b7280] [writing-mode:vertical-rl] rotate-180">
                外部企業との共創力 →
              </span>
            </div>
            {/* 横軸ラベル */}
            <div className="absolute left-16 right-0 bottom-0 h-12 flex items-center justify-center">
              <span className="text-xs tracking-wider text-[#6b7280]">従業員との共創力 →</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {grid.map((t) => (
                <div
                  key={t.key}
                  className="rounded-3xl border p-7 min-h-[180px] flex flex-col"
                  style={{ backgroundColor: t.bg, borderColor: t.color + "30" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: t.color }} />
                    <p className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: t.color }}>
                      {t.en}
                    </p>
                  </div>
                  <h3 className="text-lg font-medium text-[#0d2d52] mb-2">{t.name}</h3>
                  <p className="text-sm text-[#6b7280] font-light leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SP: 縦カード */}
        <div className="md:hidden space-y-4">
          {types.map((t, i) => (
            <motion.div
              key={t.key}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
              className="rounded-3xl border p-6"
              style={{ backgroundColor: t.bg, borderColor: t.color + "30" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: t.color }} />
                <p className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: t.color }}>
                  {t.en}
                </p>
              </div>
              <h3 className="text-lg font-medium text-[#0d2d52] mb-2">{t.name}</h3>
              <p className="text-sm text-[#6b7280] font-light leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center text-[#0d2d52] font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          どのタイプにも、次に伸ばすべき一手があります。
          診断は、自社の現在地と、進むべき方向を明らかにします。
        </motion.p>
      </div>
    </section>
  );
}
