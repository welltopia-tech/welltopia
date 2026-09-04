"use client";

import { motion } from "framer-motion";

const lines = [
  { text: "優れた企業とは、どのような企業でしょうか。", size: "lg" as const },
  { text: "高い利益を生み出し続ける企業でしょうか。", size: "lg" as const },
  { text: "優れた技術や、模倣困難な競争優位性を持つ企業でしょうか。", size: "lg" as const },
  { text: "もちろん、それらは企業の成長に欠かせないものです。", size: "md" as const },
  {
    text: "しかし私たちは、数字の先にいる人が、どのような体験をし、何を感じているのかを置き去りにしてはならないと考えています。",
    size: "md" as const,
  },
  { text: "顧客が心から選びたいと思えること。", size: "sm" as const },
  { text: "働く人が、自分の可能性を信じられること。", size: "sm" as const },
  { text: "企業の成長が、社会のより良い状態につながっていること。", size: "sm" as const },
  { text: "心地よさと企業価値は、分断されるものではありません。", size: "md" as const },
  {
    text: "人の体験の質に向き合うことは、企業の未来に向き合うことでもある。",
    size: "lg" as const,
  },
  { text: "それが、WELLTOPIAの信念です。", size: "xl" as const },
];

const sizeClass: Record<string, string> = {
  sm: "text-[15px] md:text-[17px] text-[#6b7280] font-light",
  md: "text-[16px] md:text-[19px] text-[#374151] font-light",
  lg: "text-[18px] md:text-[22px] text-[#0d2d52]",
  xl: "text-[22px] md:text-[28px] text-[#0d2d52] font-medium",
};

export default function Belief() {
  return (
    <section className="bg-[#f8f9fa] px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[640px]">
        <div className="mb-14 flex items-center gap-2.5 md:mb-20">
          <span className="h-px w-6 bg-[#1a4f8a]" />
          <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">INTRODUCTION</span>
        </div>

        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`mb-8 leading-[1.9] last:mb-0 md:mb-10 ${sizeClass[line.size]}`}
            style={
              line.size === "xl" || line.size === "lg"
                ? { fontFamily: "var(--font-noto-serif-jp), serif" }
                : undefined
            }
          >
            {line.text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
