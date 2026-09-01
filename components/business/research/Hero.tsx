"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const tags = ["EXPERIENCE", "EVALUATION", "CO-CREATION"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90svh] flex-col justify-center overflow-hidden bg-[#f0f4fb] px-5 py-28 text-[#0d2d52] md:px-10"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/business/research-hero.jpg)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(240,244,251,0.97) 0%, rgba(240,244,251,0.9) 38%, rgba(240,244,251,0.5) 72%, rgba(240,244,251,0.18) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <Link
          href="/#business"
          className="mb-10 inline-flex items-center gap-2 text-[13px] text-[#0d2d52]/50 transition-colors hover:text-[#0d2d52]"
        >
          ← WELLTOPIAの3つの事業へ戻る
        </Link>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 block text-sm italic tracking-[0.15em] text-[#1a4f8a]"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          COCOCHI Lab.
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 max-w-[14ch] text-[clamp(32px,5.6vw,60px)] font-medium leading-[1.3] text-[#0d2d52]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          「心地いい体験」を、研究する。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-6 max-w-xl font-light leading-[1.9] text-[#374151]"
        >
          人は、どんな瞬間を心地いいと感じるのか。その価値を、私たちはどう評価できるのか。そして、より良い体験を、どうすれば生み出せるのか。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-10 max-w-xl font-light leading-[1.9] text-[#6b7280]"
        >
          COCOCHI Lab.は、「体験」「評価」「共創」を研究するWELLTOPIAの研究事業です。独自研究に加え、企業・自治体・研究機関などから寄せられる問いに対して、研究設計から評価基準構築、体験研究、共創による実証までを行っています。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap gap-2"
        >
          {tags.map((t) => (
            <span
              key={t}
              className="rounded border border-[#1a4f8a]/25 px-2.5 py-1 text-[11px] tracking-[0.08em] text-[#1a4f8a]"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative mx-auto mt-16 flex w-full max-w-6xl items-center gap-2.5 text-[10px] tracking-[0.2em] text-[#0d2d52]/50"
        aria-hidden="true"
      >
        <span>SCROLL</span>
        <span className="h-px w-16 bg-gradient-to-r from-[#0d2d52]/40 to-transparent" />
      </motion.div>
    </section>
  );
}
