"use client";

import { motion } from "framer-motion";

const feelings = [
  "心地いい。",
  "また訪れたい。",
  "働き続けたい。",
  "誰かに勧めたい。",
  "安心する。",
  "身体の調子がいい。",
  "自然と続けたくなる。",
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
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">WHY WE RESEARCH</span>
          </div>
          <h2
            className="text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            「なんとなく良い」を、そのままにしない。
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 font-light leading-[1.9] text-[#6b7280]"
        >
          私たちの身のまわりには、まだ十分に説明されていない価値があります。
        </motion.p>

        <div className="mb-10 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {feelings.map((text, i) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="text-[17px] leading-relaxed text-[#0d2d52]"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <p className="mb-4 font-light leading-[1.9] text-[#6b7280]">
            人は確かにそう感じているにもかかわらず、「なぜそう感じるのか」「何がその体験を生んでいるのか」「どうすれば再現できるのか」については、まだ曖昧なまま扱われているものが少なくありません。
          </p>
          <p className="font-light leading-[1.9] text-[#6b7280]">
            COCOCHI Lab.の研究は、そんな人の感覚に向き合うところから始まりました。
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-center text-[22px] font-medium leading-relaxed text-[#0d2d52] md:text-[28px]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          心地いいには、理由がある。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-xl text-center font-light leading-[1.9] text-[#6b7280]"
        >
          感覚を観察し、言葉にし、構造を捉え、評価し、再び体験へ戻す。私たちは研究を通じて、これまで感覚として扱われてきた価値を、社会が扱える「知」へと変えていきます。
        </motion.p>
      </div>
    </section>
  );
}
