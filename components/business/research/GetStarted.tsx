"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const wantedFor = [
  "自社にとっての「良い体験」を定義したい。",
  "新しい評価基準をつくりたい。",
  "顧客や従業員の感覚を、もっと深く理解したい。",
  "新しい商品やサービスの価値を検証したい。",
  "異なる専門性との共同研究を始めたい。",
];

export default function GetStarted() {
  return (
    <section id="get-started" className="scroll-mt-[180px] bg-[#0d2d52] px-5 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center md:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-2.5">
            <span className="h-px w-6 bg-[#8fbbe0]" />
            <span className="text-xs tracking-[0.25em] text-[#8fbbe0]">RESEARCH WITH US.</span>
            <span className="h-px w-6 bg-[#8fbbe0]" />
          </div>
          <h2
            className="text-[clamp(22px,3.2vw,32px)] font-medium leading-snug"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            まだ答えのない問いを、一緒に研究する。
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16"
        >
          <ul className="mx-auto max-w-lg space-y-2.5">
            {wantedFor.map((w) => (
              <li key={w} className="text-[14.5px] font-light leading-relaxed text-white/75">
                ・{w}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-lg text-center font-light leading-[1.9] text-white/70">
            まだ答えがないからこそ、研究する価値があります。COCOCHI Lab.では、企業・自治体・研究機関などからの受託研究・共同研究についてご相談を受け付けています。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-5 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?topic=research"
              className="inline-flex items-center gap-3 rounded-md bg-gradient-to-br from-[#8fbbe0] to-[#1a4f8a] px-7 py-4 text-sm font-medium text-white shadow-lg shadow-[#1a4f8a]/20 transition-transform hover:scale-[1.02]"
            >
              研究について相談する →
            </Link>
            <Link
              href="/contact?topic=research-joint"
              className="inline-flex items-center gap-3 rounded-md border border-white/30 px-7 py-4 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
            >
              共同研究について問い合わせる
            </Link>
          </div>
          <Link
            href="#projects"
            className="text-[12.5px] text-white/50 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
          >
            研究・プロジェクトを見る →
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-24 max-w-3xl border-t border-white/10 pt-20 text-center md:mt-32"
      >
        <p
          className="mb-6 text-[clamp(22px,3.6vw,36px)] font-medium leading-snug"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          「心地いい」には、
          <br />
          まだ知らないことがある。
        </p>
        <p className="mb-8 font-light leading-[1.9] text-white/70">
          だから、私たちは研究する。
          <br />
          人の感覚から始まり、
          <br className="hidden sm:block" />
          評価し、共創し、社会へ実装する。
        </p>
        <span
          className="text-lg italic tracking-[0.1em] text-[#8fbbe0]"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          COCOCHI Lab.
        </span>
      </motion.div>
    </section>
  );
}
