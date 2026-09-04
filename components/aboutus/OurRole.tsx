"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  { num: "01", label: "描く", desc: "顧客・従業員の願いや課題を捉え、理想の体験を設計する" },
  { num: "02", label: "試す", desc: "プロトタイプや実証プロジェクトとして、小さく社会に実装する" },
  { num: "03", label: "測る", desc: "定量データと定性的な実感から、体験の価値を評価する" },
  { num: "04", label: "改善する", desc: "評価をもとに体験と仕組みを磨き、継続的な価値へ育てる" },
];

export default function OurRole() {
  return (
    <section id="our-role" className="bg-[#f8f9fa] px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center md:mb-24"
        >
          <div className="mb-5 flex items-center justify-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">OUR ROLE</span>
            <span className="h-px w-6 bg-[#1a4f8a]" />
          </div>
          <h2
            className="mb-6 text-[clamp(22px,3vw,32px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            体験価値を、描く。試す。測る。改善する。
          </h2>
          <p className="mx-auto max-w-xl font-light leading-[1.9] text-[#6b7280]">
            WELLTOPIAは、顧客体験と従業員体験の開発・改善を、構想だけで終わらせません。多様な当事者と共に体験を描き、社会や現場で試し、データと実感の両面から評価し、継続的に改善します。
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative border-t border-[#e5e7eb] pt-6"
            >
              <span
                className="mb-3 block text-lg italic text-[#1a4f8a]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {step.num}
              </span>
              <h3
                className="mb-2 text-[18px] font-medium text-[#0d2d52]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                {step.label}
              </h3>
              <p className="text-[13.5px] leading-relaxed font-light text-[#6b7280]">{step.desc}</p>
              {i < steps.length - 1 && (
                <span
                  className="absolute right-[-14px] top-6 hidden text-[#1a4f8a]/40 lg:block"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </motion.div>
          ))}
          <span
            className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 text-[#1a4f8a]/30 lg:block"
            aria-hidden="true"
          >
            ↺
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center md:mt-20"
        >
          <Link
            href="/#business"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[#1a4f8a] transition-colors hover:text-[#0d2d52]"
          >
            事業について詳しく見る →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
