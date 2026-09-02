"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  {
    idx: "01",
    name: "共創マネジメント事業",
    desc: "顧客の声、従業員の実感、企業が持つ資産、社外の知識・技術・文化・データをつなぎ、CX・EX、新規事業、共創プロジェクトの構想から実装、測定・改善までを一気通貫で支援します。",
    cta: "共創マネジメント事業を見る",
    href: "/business/co-creation-management",
    logo: "/images/business/ccm-logo.png",
  },
  {
    idx: "02",
    name: "研究事業",
    desc: "ウェルビーイング、体験価値、共創、CX・EXを中心に、社会や生活者、組織に生まれている変化を研究します。独自調査、共同研究、実証実験を通じて、新しい知見と実践可能な方法論を生み出します。",
    cta: "詳しく見る",
    href: "/business/research",
    logo: "/images/business/cocochi-logo.png",
  },
  {
    idx: "03",
    name: "共創マネージャー育成事業",
    desc: "企業、地域、専門家、生活者など、多様な関係者をつなぎ、共通の未来を描きながらプロジェクトを前進させる「共創マネージャー」を育成します。知識の習得だけでなく、実践を通じて共創を推進する力を育てます。",
    cta: "育成事業を見る",
    href: "/business/co-creation-manager",
    logo: "/images/business/fronpeer-logo.png",
  },
];

export default function Business() {
  return (
    <section id="business" className="bg-[#f8f9fa] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">OUR BUSINESS</span>
          </div>
          <h2 className="text-[clamp(26px,3.4vw,40px)] font-medium text-[#0d2d52]">
            WELLTOPIAの3つの事業
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#e5e7eb] bg-[#e5e7eb] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative flex flex-col overflow-hidden transition-all duration-500 hover:z-10 hover:scale-[1.04] hover:shadow-2xl hover:shadow-[#0d2d52]/15 ${
                i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex aspect-[16/9] items-center justify-center border-[5px] border-[#1a4f8a]/40 bg-white p-10 transition-colors duration-500 group-hover:border-[#1a4f8a]">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-16 w-auto max-w-[70%] object-contain transition-transform duration-500 group-hover:scale-90"
                />
              </div>
              <div className="flex flex-1 flex-col bg-[#0d2d52] p-7 transition-colors duration-500 group-hover:bg-white md:p-8">
                <span
                  className="mb-3 text-lg italic text-[#8fbbe0] transition-colors duration-500 group-hover:text-[#1a4f8a]"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {item.idx}
                </span>
                <h3 className="mb-4 text-[25.5px] font-medium leading-snug text-white transition-colors duration-500 group-hover:text-[#0d2d52]">
                  {item.name}
                </h3>
                <p className="mb-6 flex-1 text-[13.5px] leading-relaxed text-white/70 transition-colors duration-500 group-hover:text-[#6b7280]">
                  {item.desc}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex w-fit items-center gap-2 text-[13px] font-medium text-[#8fbbe0] transition-all duration-500 group-hover:gap-3 group-hover:text-[#1a4f8a]"
                >
                  {item.cta} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
