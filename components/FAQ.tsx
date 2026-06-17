"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "どのような企業が対象ですか？",
    a: "経営者・新規事業責任者・事業開発担当・地域連携担当・オープンイノベーション担当の方がいらっしゃる企業様が主な対象です。業種・規模は問いません。「共創で何かしたい」という意志を持つ企業様であれば、どなたでもご参加いただけます。",
  },
  {
    q: "診断は完全オンラインで完結しますか？",
    a: "はい。設問回答、ヒアリング、フィードバックセッションはすべてオンラインで実施します。全国・海外からもご参加いただけます。",
  },
  {
    q: "モニター価格はいつまで適用されますか？",
    a: "モニター枠は限定数のみの募集となっています。枠が埋まり次第、通常価格（30万円）に戻ります。お早めのお申し込みをお勧めします。",
  },
  {
    q: "診断後、必ず何かのサービスを契約しなければなりませんか？",
    a: "いいえ。診断自体が独立したサービスです。その後の支援・伴走・パートナー参画については、フィードバックセッション後に改めてご提案し、貴社のご判断で選択いただきます。",
  },
  {
    q: "診断結果は社内共有できますか？",
    a: "はい。提供するレポートPDFは社内での共有を前提として設計されています。経営層への報告資料としてもご活用いただけます。",
  },
  {
    q: "共創パートナーになるとは具体的にどういうことですか？",
    a: "WELLTOPIAが推進する共創プロジェクト（産官学連携・地域健康プロジェクト・企業間共創など）に、企業として参画いただくことです。詳細はフィードバックセッションでご説明します。",
  },
];

function FAQItem({ q, a, i, inView }: { q: string; a: string; i: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
      className="border-b border-[#e5e7eb] last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
      >
        <div className="flex items-start gap-4">
          <span className="flex-shrink-0 text-xs font-mono text-[#1a4f8a] mt-1">Q</span>
          <span className="text-[#0d2d52] font-light group-hover:text-[#1a4f8a] transition-colors duration-200">
            {q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 rounded-full border border-[#e5e7eb] flex items-center justify-center mt-0.5"
        >
          <svg className="w-3 h-3 text-[#1a4f8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="flex gap-4 pb-6">
              <span className="flex-shrink-0 text-xs font-mono text-[#2d8a6b] mt-0">A</span>
              <p className="text-[#6b7280] font-light text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 md:py-40 bg-[#f8f9fa]">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-[#1a4f8a] uppercase font-medium">FAQ</span>
          <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-light text-[#0d2d52] leading-tight">
            よくある質問
          </h2>
        </motion.div>

        {/* FAQ リスト */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
