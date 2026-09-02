"use client";

import { motion } from "framer-motion";

const values = [
  {
    num: "01",
    en: "STANDARD",
    ja: "自社にとっての「良い」を判断できる基準",
    desc: "感覚や好みではなく、根拠を持って「良い」を判断できるようになります。",
  },
  {
    num: "02",
    en: "UNDERSTANDING",
    ja: "顧客・従業員・生活者への深い理解",
    desc: "行動や発言の背景にある感情や願いまで理解できるようになります。",
  },
  {
    num: "03",
    en: "PRINCIPLE",
    ja: "より良い体験を生み出すための原則",
    desc: "心地よい体験を生む要素を、再現可能な原則として持てるようになります。",
  },
  {
    num: "04",
    en: "EVALUATION METHOD",
    ja: "定性的な価値を捉える評価方法",
    desc: "感覚的だった価値を、データとして扱える評価方法を得られます。",
  },
  {
    num: "05",
    en: "CO-CREATION METHOD",
    ja: "新しい価値を生み出す共創方法",
    desc: "異なる専門性や資産をつなぎ、新しい価値を生み出す方法を得られます。",
  },
  {
    num: "06",
    en: "RESEARCH ASSET",
    ja: "次の意思決定に使える研究資産",
    desc: "一度きりで終わらない、次の意思決定にも活用できる知見として残ります。",
  },
];

export default function Value() {
  return (
    <section id="value" className="scroll-mt-[180px] bg-white px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl md:mb-20"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">WHAT REMAINS</span>
          </div>
          <h2
            className="mb-6 text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            答えだけではなく、「判断できる基準」を残す。
          </h2>
          <p className="font-light leading-[1.9] text-[#6b7280]">
            COCOCHI Lab.が目指すのは、一度きりの調査結果を提出することではありません。研究によって、企業には次のものが残ります。
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 md:mb-24 lg:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-t border-[#e5e7eb] pt-6"
            >
              <span
                className="mb-3 block text-lg italic text-[#1a4f8a]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {v.num}
              </span>
              <p className="mb-1 text-[10.5px] font-medium tracking-[0.08em] text-[#6b7280]">{v.en}</p>
              <h3
                className="mb-3 text-[16px] font-medium leading-snug text-[#0d2d52]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                {v.ja}
              </h3>
              <p className="text-[13.5px] font-light leading-relaxed text-[#6b7280]">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center text-[20px] font-medium leading-relaxed text-[#0d2d52] md:text-[26px]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          研究を、レポートで終わらせない。
          <br />
          企業が継続的に使える知へ。
        </motion.p>
      </div>
    </section>
  );
}
