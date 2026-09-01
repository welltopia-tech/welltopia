"use client";

import { motion } from "framer-motion";

const questions = [
  "自社にとって「最高の顧客体験」とは何か",
  "自社ブランドにおける「上質さ」とは何か",
  "また利用したくなる体験は何によって生まれるのか",
  "働き続けたいと思える会社とはどんな会社なのか",
  "商品やサービスの定性的な価値をどう評価すればよいのか",
  "自社独自の品質基準を構築できないか",
  "共創プロジェクトはなぜ成功・失敗するのか",
  "異なる専門性をどう組み合わせれば新しい価値が生まれるのか",
  "新しい商品・サービスの価値をどう検証すればよいのか",
];

export default function Issues() {
  return (
    <section id="issues" className="scroll-mt-[130px] bg-[#f8f9fa] px-5 py-24 md:px-10 md:py-36">
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
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">ISSUES WE RESEARCH</span>
          </div>
          <h2
            className="mb-6 text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            企業には、「まだ答えのない問い」がある。
          </h2>
          <p className="font-light leading-[1.9] text-[#6b7280]">
            事業を進める中で生まれる重要な問いの多くは、検索すれば答えが出てくるものではありません。例えば、
          </p>
        </motion.div>

        <div className="mb-14 grid grid-cols-1 gap-x-10 gap-y-1.5 md:mb-16">
          {questions.map((q, i) => (
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
          「重要だけれど、まだ答えがない問い」を研究可能なテーマへ変え、
          <br className="hidden sm:block" />
          企業とともに答えを探します。
        </motion.p>
      </div>
    </section>
  );
}
