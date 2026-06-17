"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    text: "新規事業や連携の話が\n「社内承認」で止まる",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: "パートナーとの関係が\n「おつきあい」で終わる",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    text: "オープンイノベーションが\n「イベント開催」で完結する",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "「共創」を推進したいが\n何から始めるかわからない",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 md:py-40 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-[#1a4f8a] uppercase font-medium">
            Problem
          </span>
          <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-light text-[#0d2d52] leading-tight">
            こんな課題を
            <br />
            感じていませんか？
          </h2>
        </motion.div>

        {/* 課題カード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white rounded-2xl p-8 border border-[#e5e7eb] hover:border-[#1a4f8a]/30 hover:shadow-xl hover:shadow-[#1a4f8a]/5 transition-all duration-400"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#e8f0fb] flex items-center justify-center text-[#1a4f8a] group-hover:bg-[#1a4f8a] group-hover:text-white transition-all duration-300">
                  {p.icon}
                </div>
                <p className="text-[#374151] text-base leading-relaxed font-light whitespace-pre-line">
                  {p.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ブリッジテキスト */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-[#6b7280] text-lg font-light leading-relaxed">
            これらの課題の根本は、
            <br className="sm:hidden" />
            <span className="text-[#1a4f8a] font-medium">「共創力」の現在地</span>
            が可視化されていないことにあります。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
