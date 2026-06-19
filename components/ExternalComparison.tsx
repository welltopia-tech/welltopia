"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  { label: "共創の目的", high: "事業成長という目的から逆算して共創を設計する", low: "話題性や付き合いで、とりあえず連携してみる" },
  { label: "相手の選び方", high: "目指す価値に必要な相手を、意図を持って選ぶ", low: "声をかけてくれた相手と、流れで組む" },
  { label: "自社資源", high: "自社の強みを言語化し、提供価値として差し出す", low: "自社が何を出せるか、明確になっていない" },
  { label: "役割分担", high: "誰が何を担うかを初期に握り、責任を明確にする", low: "役割が曖昧なまま、なんとなく進める" },
  { label: "社内連携", high: "現場・経営・関連部門を巻き込み、組織で動く", low: "担当者個人の頑張りに依存する" },
  { label: "実装", high: "実証で終わらせず、事業へ実装する道筋を描く", low: "実証実験やPoCで満足し、止まってしまう" },
  { label: "成果", high: "売上・顧客価値など、成果指標で評価する", low: "やったこと自体を成果として扱う" },
  { label: "継続性", high: "学びを蓄積し、次の共創につなげていく", low: "一度きりで終わり、ノウハウが残らない" },
];

function ComparisonTable({ inView }: { inView: boolean }) {
  return (
    <>
      {/* PC: 2カラム */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[140px_1fr_1fr] gap-px bg-[#e5e7eb] rounded-3xl overflow-hidden border border-[#e5e7eb]">
          <div className="bg-[#f8f9fa]" />
          <div className="bg-[#0d2d52] px-6 py-5">
            <p className="text-[10px] tracking-[0.25em] text-[#6b9fda] uppercase mb-1">High</p>
            <p className="text-white font-medium">共創力の高い企業</p>
          </div>
          <div className="bg-[#6b7280] px-6 py-5">
            <p className="text-[10px] tracking-[0.25em] text-white/60 uppercase mb-1">Low</p>
            <p className="text-white font-medium">共創力の低い企業</p>
          </div>

          {rows.map((row, i) => (
            <div key={row.label} className="contents">
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="bg-[#f8f9fa] px-5 py-5 flex items-center"
              >
                <span className="text-sm font-medium text-[#0d2d52]">{row.label}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.12 + i * 0.05 }}
                className="bg-[#f0f4fb] px-6 py-5"
              >
                <span className="text-sm text-[#1a4f8a] font-light leading-relaxed">{row.high}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.14 + i * 0.05 }}
                className="bg-white px-6 py-5"
              >
                <span className="text-sm text-[#6b7280] font-light leading-relaxed">{row.low}</span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* SP: カード */}
      <div className="md:hidden space-y-4">
        {rows.map((row, i) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 + i * 0.05, duration: 0.5 }}
            className="rounded-2xl border border-[#e5e7eb] overflow-hidden"
          >
            <div className="bg-[#f8f9fa] px-5 py-3 border-b border-[#e5e7eb]">
              <span className="text-sm font-medium text-[#0d2d52]">{row.label}</span>
            </div>
            <div className="bg-[#f0f4fb] px-5 py-4 border-b border-[#e5e7eb]">
              <p className="text-[10px] tracking-wider text-[#1a4f8a] uppercase mb-1">共創力の高い企業</p>
              <p className="text-sm text-[#1a4f8a] font-light">{row.high}</p>
            </div>
            <div className="bg-white px-5 py-4">
              <p className="text-[10px] tracking-wider text-[#9ca3af] uppercase mb-1">共創力の低い企業</p>
              <p className="text-sm text-[#6b7280] font-light">{row.low}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default function ExternalComparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="external-comparison" ref={ref} className="py-24 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <span className="text-xs tracking-[0.3em] text-[#1a4f8a] uppercase font-medium">
            External Co-Creation
          </span>
          <h2 className="mt-4 text-[clamp(1.6rem,4vw,2.5rem)] font-light text-[#0d2d52] leading-snug">
            外部との出会いを、
            <br className="md:hidden" />
            事業成長に変えられているか。
          </h2>
          <p className="mt-6 text-[#6b7280] font-light leading-loose">
            他社・地域・研究機関との連携は、増えています。
            けれど同じ「出会い」からでも、成果につなげる企業とそうでない企業がいます。その差は8つの観点に表れます。
          </p>
        </motion.div>

        <ComparisonTable inView={inView} />

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 text-center text-[#0d2d52] font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          違いをつくっているのは相手ではなく、
          <span className="text-[#1a4f8a] font-medium">出会いを成果へ変える、自社の共創力</span>
          です。
        </motion.p>
      </div>
    </section>
  );
}
