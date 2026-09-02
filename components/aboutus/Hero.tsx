"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="flex min-h-[85vh] flex-col justify-center bg-white px-5 py-28 md:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-7 flex items-center justify-center gap-2.5"
        >
          <span className="h-px w-6 bg-[#1a4f8a]" />
          <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">ABOUT US</span>
          <span className="h-px w-6 bg-[#1a4f8a]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(44px,12vw,150px)] font-light leading-[1] tracking-tight text-[#0d2d52]"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          WELLTOPIA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-6 text-[clamp(14px,1.8vw,18px)] tracking-wide text-[#6b7280]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          私たちについて
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mx-auto mt-10 max-w-[280px] text-[clamp(17px,2vw,22px)] leading-[1.9] text-[#0d2d52] sm:max-w-none"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          心地よさを、
          <br className="hidden sm:block" />
          社会の新しい価値基準にする。
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-3 text-[12px] italic tracking-wide text-[#1a4f8a]/70"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Make well-being a new measure of value.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mx-auto mt-20 flex items-center gap-2.5 text-[10px] tracking-[0.2em] text-[#6b7280]"
        aria-hidden="true"
      >
        <span className="h-10 w-px bg-gradient-to-b from-[#1a4f8a]/50 to-transparent" />
      </motion.div>
    </section>
  );
}
