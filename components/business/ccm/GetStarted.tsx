"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  { num: "01", en: "CONSULTATION", ja: "初回相談", desc: "企業が抱えている課題、実現したい未来、現在の取り組みを伺います。" },
  { num: "02", en: "DIAGNOSIS", ja: "共創力・体験ギャップ診断", desc: "顧客、従業員、組織、プロジェクトの現状を把握し、共創の可能性と課題を可視化します。" },
  { num: "03", en: "INITIAL DESIGN", ja: "共創マネジメント初期設計", desc: "共創テーマ、目標、体制、パートナー、プロセス、評価指標を設計します。" },
  { num: "04", en: "MANAGEMENT", ja: "共創プロジェクト伴走", desc: "LINAを中核に、プロジェクトの実装、測定、改善を継続的に支援します。" },
];

export default function GetStarted() {
  return (
    <section id="get-started" className="scroll-mt-[180px] bg-[#0d2d52] px-5 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center md:mb-20"
        >
          <div className="mb-5 flex items-center justify-center gap-2.5">
            <span className="h-px w-6 bg-[#8fbbe0]" />
            <span className="text-xs tracking-[0.25em] text-[#8fbbe0]">GET STARTED</span>
            <span className="h-px w-6 bg-[#8fbbe0]" />
          </div>
          <h2
            className="mb-6 text-[clamp(22px,3.2vw,32px)] font-medium leading-snug"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            共創は、まだ言葉になっていない課題から始まる。
          </h2>
          <p className="mx-auto max-w-xl font-light leading-[1.9] text-white/70">
            明確なプロジェクトや企画が決まっていなくても構いません。「顧客のことが分からない」「社内に資産はあるが、活かし方が見つからない」「社外と共創したいが、進め方が分からない」「実施した施策の成果を測りたい」。そのような、まだ整理されていない課題や願いから、WELLTOPIAはともに考えます。
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mb-20">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t border-white/15 pt-5"
            >
              <span
                className="mb-2 block text-lg italic text-[#8fbbe0]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                STEP {s.num}
              </span>
              <p className="mb-1 text-[11px] tracking-[0.08em] text-white/50">{s.en}</p>
              <h3 className="mb-2 text-[16px] font-medium">{s.ja}</h3>
              <p className="text-[13px] font-light leading-relaxed text-white/60">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-5 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?topic=ccm"
              className="inline-flex items-center gap-3 rounded-md bg-gradient-to-br from-[#8fbbe0] to-[#1a4f8a] px-7 py-4 text-sm font-medium text-white shadow-lg shadow-[#1a4f8a]/20 transition-transform hover:scale-[1.02]"
            >
              共創マネジメントについて相談する →
            </Link>
            <Link
              href="/co-creation-diagnosis"
              className="inline-flex items-center gap-3 rounded-md border border-white/30 px-7 py-4 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
            >
              共創力診断から始める
            </Link>
          </div>
          <p className="text-[12.5px] text-white/50">
            相談内容が具体的に決まっていない段階でも、お問い合わせいただけます。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
