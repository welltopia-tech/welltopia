"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "市場の成熟",
    desc: "多くの市場が成熟し、同じ土俵での価格・性能競争だけでは差がつきにくくなっています。",
  },
  {
    title: "経営資源の限界",
    desc: "一社が抱える人・技術・知識には限りがあり、自前主義だけでは新しい価値を生みにくくなっています。",
  },
  {
    title: "課題の複雑化",
    desc: "顧客や社会の課題は複雑に絡み合い、単独の企業では解ききれないものが増えています。",
  },
];

export default function WhyNow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-now" ref={ref} className="py-24 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="text-xs tracking-[0.3em] text-[#1a4f8a] uppercase font-medium">
            Why Co-Creation Now
          </span>
          <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-light text-[#0d2d52] leading-tight">
            競争力だけでは、
            <br />
            成長し続けられない時代へ。
          </h2>
          <p className="mt-6 text-[#6b7280] font-light leading-loose">
            これまで企業の成長は、他社よりも良いものを、安く、速く提供する「競争力」に支えられてきました。
            しかし、市場が成熟し、課題が複雑になるなかで、自社の力だけで勝ち続けることは難しくなっています。
          </p>
        </motion.div>

        {/* 3カード */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 relative">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl border border-[#e5e7eb] bg-[#f8f9fa] p-8"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center mb-5">
                <span className="text-xs font-mono text-[#1a4f8a]">0{i + 1}</span>
              </div>
              <h3 className="text-lg font-medium text-[#0d2d52] mb-3">{card.title}</h3>
              <p className="text-sm text-[#6b7280] font-light leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 中央接続 → 結論 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col items-center mt-4"
        >
          <svg width="2" height="48" aria-hidden="true">
            <line x1="1" y1="0" x2="1" y2="48" stroke="#1a4f8a" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="rounded-3xl bg-[#f0f4fb] border border-[#1a4f8a]/10 p-8 md:p-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-[#0d2d52] font-light text-base md:text-lg leading-loose">
            自社の中にある資源で競うだけでなく、
            <span className="text-[#1a4f8a] font-medium">社内外の資源をつなぎ、価値に変える力</span>
            が必要です。
          </p>
        </motion.div>

        {/* 強調コピー */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-14 text-center text-[clamp(1.25rem,3vw,2rem)] font-light text-[#0d2d52] leading-snug"
        >
          競争する力に加えて、
          <br className="md:hidden" />
          <span className="text-[#1a4f8a] font-medium">ともにつくる力</span>
          が、
          <br />
          企業の成長を決める時代です。
        </motion.p>
      </div>
    </section>
  );
}
