"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    en: "QUESTION",
    ja: "問いを定める。",
    desc: "企業が抱える曖昧な課題・違和感を、研究可能な問いへ変換する。",
  },
  {
    num: "02",
    en: "EVALUATION",
    ja: "評価基準を構築する。",
    desc: "何をもって「良い状態」とするのかを研究する。",
  },
  {
    num: "03",
    en: "EXPERIENCE",
    ja: "体験を研究する。",
    desc: "その状態がどのような体験から生まれるのかを調査・分析・実証する。",
  },
  {
    num: "04",
    en: "CO-CREATION",
    ja: "共創による実現方法を研究する。",
    desc: "必要な知識・専門性・資産をつなぎ、新しい解決方法を検証する。",
  },
  {
    num: "05",
    en: "EVALUATION",
    ja: "もう一度評価する。",
    desc: "生み出した体験が、最初に定めた価値を本当に実現したのかを検証する。",
  },
  {
    num: "06",
    en: "KNOWLEDGE",
    ja: "知を残す。",
    desc: "評価基準、研究結果、方法論、レポートなどとして蓄積し、次の研究や事業へ還元する。",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-[130px] bg-[#f8f9fa] px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl md:mb-20"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">RESEARCH PROCESS</span>
          </div>
          <h2
            className="mb-6 text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            「何をつくるか」の前に、「何を良しとするか」を決める。
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-[#e5e7eb] md:block"
            aria-hidden="true"
          />
          <div className="space-y-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative rounded-xl border border-[#e5e7eb] bg-white p-6 md:ml-10"
              >
                <span
                  className="absolute left-[-49px] top-6 hidden h-4 w-4 rounded-full border-2 border-[#1a4f8a] bg-[#f8f9fa] md:block"
                  aria-hidden="true"
                />
                <div className="flex items-baseline gap-4">
                  <span
                    className="text-lg italic text-[#1a4f8a]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {s.num}
                  </span>
                  <span>
                    <span className="mr-2 text-[11px] font-medium tracking-[0.1em] text-[#6b7280]">
                      {s.en}
                    </span>
                    <span
                      className="text-[16px] font-medium text-[#0d2d52]"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      {s.ja}
                    </span>
                  </span>
                </div>
                <p className="mt-2 pl-[calc(1.125rem+1rem)] text-[13.5px] leading-relaxed text-[#6b7280]">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
