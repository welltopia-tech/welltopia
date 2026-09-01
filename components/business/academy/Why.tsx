"use client";

import { motion } from "framer-motion";

const assets = ["企業には、技術があります。", "人材があります。", "顧客があります。", "ブランドがあります。"];

const problems = [
  "人を集めても、何も生まれない。",
  "アイデアが生まれても、実装されない。",
  "立場や利害の違いによって、プロジェクトが前に進まない。",
];

export default function Why() {
  return (
    <section id="why" className="scroll-mt-[130px] bg-white px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">WHY FRONPEER</span>
          </div>
          <h2
            className="text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            社会には、まだつながっていない可能性がある。
          </h2>
        </motion.div>

        <div className="mb-8 space-y-1.5">
          {assets.map((a, i) => (
            <motion.p
              key={a}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="text-[16px] leading-relaxed text-[#0d2d52]"
            >
              {a}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 font-light leading-[1.9] text-[#6b7280] md:mb-14"
        >
          地域には文化があり、専門家には知識があり、一人ひとりには想いがあります。しかし、それぞれが優れた可能性を持っていても、それだけでは新しい価値は生まれません。人と人。企業と企業。技術と課題。専門性と社会。それらが出会い、互いの力を引き出し、一つの目的へ向かうことで、初めて新しい価値が生まれます。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center text-[20px] font-medium leading-relaxed text-[#0d2d52] md:mb-20 md:text-[26px]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          「可能性を持つ人」だけではなく、
          <br />
          「可能性をつなぎ、価値へ変えられる人」が必要です。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-light leading-[1.9] text-[#6b7280]"
        >
          一方で、共創はこれまで個人の経験やセンス、人脈に依存することも少なくありませんでした。
        </motion.p>

        <div className="mb-8 space-y-1.5 border-l-2 border-[#e5e7eb] pl-5">
          {problems.map((p, i) => (
            <motion.p
              key={p}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="text-[14.5px] leading-relaxed text-[#6b7280]"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="font-light leading-[1.9] text-[#6b7280]"
        >
          FRONPEERは、こうした共創を「偶然」に任せるのではなく、学び、実践し、身につけられる専門性へ変えていきます。
        </motion.p>
      </div>
    </section>
  );
}
