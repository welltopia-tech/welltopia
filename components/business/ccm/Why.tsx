"use client";

import { motion } from "framer-motion";

const disconnects = [
  "顧客の声と経営判断がつながっていない",
  "経営者が考える価値と、顧客が感じる価値に差がある",
  "顧客体験と従業員体験が別々に設計されている",
  "社内に資産はあるが、新しい活用方法が見つからない",
  "アイデアはあるが、実装に必要な資産や専門性が足りない",
  "社外の企業や専門家と出会っても、プロジェクトが前進しない",
  "新規事業がPoCやイベントで止まってしまう",
  "実施後の成果を測れず、次の改善につながらない",
];

export default function Why() {
  return (
    <section id="why" className="scroll-mt-[180px] bg-white px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl md:mb-20"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">WHY CO-CREATION MANAGEMENT?</span>
          </div>
          <h2
            className="mb-6 text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            人を集めただけでは、共創は生まれない。
          </h2>
          <p className="font-light leading-[1.9] text-[#6b7280]">
            企業には、技術、ブランド、顧客基盤、施設、人材、ネットワークなど、まだ十分に活かされていない資産があります。一方、社会や生活者の中には、満たされていない願いや、解決されていない課題があります。しかし、資産を持つ企業と、課題やニーズを持つ人が出会うだけでは、新しい価値は生まれません。
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-x-10 gap-y-3 md:mb-20 md:grid-cols-2">
          {disconnects.map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-t border-[#e5e7eb] py-4 text-[14px] leading-relaxed text-[#6b7280]"
            >
              {text}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 grid grid-cols-1 gap-8 rounded-2xl bg-[#f8f9fa] p-8 text-center sm:grid-cols-2 md:mb-24 md:p-14"
        >
          <p
            className="text-[18px] leading-relaxed text-[#0d2d52] md:text-[20px]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            資産がある。
            <br />
            しかし、ニーズが見えていない。
          </p>
          <p
            className="text-[18px] leading-relaxed text-[#0d2d52] md:text-[20px]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            ニーズがある。
            <br />
            しかし、実現する資産が足りない。
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center text-[20px] font-medium leading-relaxed text-[#0d2d52] md:text-[26px]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          共創に必要なのは、出会いだけではない。
          <br />
          共創を動かし続ける、マネジメントです。
        </motion.p>
      </div>
    </section>
  );
}
