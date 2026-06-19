"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const includes = [
  "7領域診断レポート（PDF）",
  "スコア詳細解説と領域別所見",
  "次の一手の提言",
  "個別ヒアリング（60分）",
  "フィードバックセッション（90分・オンライン）",
];

const partnerConditions = [
  {
    title: "診断後アンケートにご協力いただきます",
    desc: "診断の改善のため、簡単なアンケートへのご回答をお願いしています。",
  },
  {
    title: "外部公開は任意です",
    desc: "事例としての公開は任意で、強制ではありません。非公開のままでもご利用いただけます。",
  },
  {
    title: "継続契約は不要です",
    desc: "診断後に別サービスの契約を結ぶ義務はありません。診断単独でご利用いただけます。",
  },
  {
    title: "募集社数は後から設定されます",
    desc: "共創基準を共につくるための限定枠です。募集社数に達し次第、通常価格に戻ります。",
  },
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
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-[#f0f4fb] opacity-60" />
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
                <span className="text-xs text-[#9ca3af] line-through">通常 300,000円</span>
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
                className="block w-full text-center py-4 bg-[#1a4f8a] text-white text-sm tracking-[0.08em] font-medium rounded-2xl hover:bg-[#0d2d52] transition-colors duration-300 shadow-lg shadow-[#1a4f8a]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a4f8a]/40 focus-visible:ring-offset-2"
              >
                共創力診断に申し込む
              </a>

              <p className="text-center text-xs text-[#9ca3af] mt-3">
                ※ 共創基準構築パートナー枠は限定募集です
              </p>
            </div>
          </motion.div>
        </div>

        {/* 特別価格の理由 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-12 max-w-4xl mx-auto rounded-3xl bg-[#f0f4fb] border border-[#1a4f8a]/10 p-8 md:p-10"
        >
          <h3 className="text-base md:text-lg font-medium text-[#0d2d52] mb-3">
            なぜ、この特別価格なのか
          </h3>
          <p className="text-sm text-[#6b7280] font-light leading-loose mb-8">
            WELLTOPIAは現在、企業の共創力を測る基準そのものを磨き上げている段階にあります。
            共創基準構築パートナー価格は、その過程に協力いただける企業に向けた限定価格です。
            診断を受けていただくことが、共創の基準づくりそのものへの参画になります。次の4点を明示します。
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {partnerConditions.map((c) => (
              <div key={c.title} className="flex items-start gap-3 bg-white rounded-2xl border border-[#e5e7eb] p-5">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#2d8a6b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-[#0d2d52] mb-1">{c.title}</p>
                  <p className="text-xs text-[#6b7280] font-light leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 注記 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-xs text-[#9ca3af] mt-10 font-light"
        >
          ※ お支払いは銀行振込（前払い）となります。
        </motion.p>
      </div>
    </section>
  );
}
