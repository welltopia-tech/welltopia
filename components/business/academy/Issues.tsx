"use client";

import { motion } from "framer-motion";

const issues = [
  "新規事業を任せられる人材が育っていない",
  "社内外を巻き込めるプロジェクトリーダーが少ない",
  "部署を越えたプロジェクトが前に進まない",
  "オープンイノベーションが交流だけで終わっている",
  "外部パートナーとの共創をうまく設計できない",
  "優秀な専門人材はいるが、互いの力をつなげられていない",
  "アイデアは生まれても事業化・実装まで進まない",
  "共創プロジェクトが特定の人材に依存している",
  "次世代リーダーに、これから必要となる実践力を身につけさせたい",
];

export default function Issues() {
  return (
    <section id="issues" className="scroll-mt-[130px] bg-white px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl md:mb-16"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">ISSUES</span>
          </div>
          <h2
            className="mb-6 text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            共創したい。しかし、動かせる人がいない。
          </h2>
          <p className="font-light leading-[1.9] text-[#6b7280]">
            企業や組織の中では、共創の必要性が高まる一方で、それを担える人材が不足しています。
          </p>
        </motion.div>

        <div className="mb-14 grid grid-cols-1 gap-x-10 gap-y-1.5 md:mb-16">
          {issues.map((q, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-t border-[#e5e7eb] py-4 text-[14.5px] leading-relaxed text-[#374151]"
            >
              ・{q}
            </motion.div>
          ))}
          <div className="border-t border-[#e5e7eb]" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center text-[19px] font-medium leading-relaxed text-[#0d2d52] md:text-[24px]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          自ら共創を生み出し、動かせる人材を、組織と社会に増やす。
        </motion.p>
      </div>
    </section>
  );
}
