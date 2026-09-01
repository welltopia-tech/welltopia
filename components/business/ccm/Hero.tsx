"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90svh] flex-col justify-center overflow-hidden bg-[#f0f4fb] px-5 py-28 text-[#0d2d52] md:px-10"
    >
      <div
        className="absolute inset-0 bg-cover bg-[position:75%_center]"
        style={{ backgroundImage: "url(/images/business/ccm-hero.jpg)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(240,244,251,0.97) 0%, rgba(240,244,251,0.9) 35%, rgba(240,244,251,0.45) 70%, rgba(240,244,251,0.15) 100%)",
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
          CO-CREATION MANAGEMENT
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 max-w-[14ch] text-[clamp(34px,6vw,68px)] font-medium leading-[1.25] text-[#0d2d52]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          最高の共創を、科学する。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-8 max-w-xl text-[15px] font-light leading-[1.9] text-[#374151] md:text-[17px]"
        >
          人と企業の可能性をつなぎ、新しい体験価値を社会に実装する。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-12 max-w-xl font-light leading-[1.9] text-[#6b7280]"
        >
          WELLTOPIAの共創マネジメントは、異なる願い、課題、知識、技術、文化、データをつなぎ、一社では生み出せない体験価値へ編集する仕組みです。共創を一度限りのアイデア創出やイベントで終わらせず、構想し、試し、測り、改善しながら、企業と社会に残る価値へ変えていきます。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/contact?topic=ccm"
            className="inline-flex items-center gap-3 rounded-md bg-gradient-to-br from-[#8fbbe0] to-[#1a4f8a] px-7 py-4 text-sm font-medium text-white shadow-lg shadow-[#1a4f8a]/20 transition-transform hover:scale-[1.02]"
          >
            共創マネジメントについて相談する →
          </Link>
          <Link
            href="#ccm-system"
            className="inline-flex items-center gap-3 rounded-md border border-[#0d2d52]/25 px-7 py-4 text-sm font-medium text-[#0d2d52] transition-colors hover:border-[#0d2d52] hover:bg-[#0d2d52]/5"
          >
            CCMの仕組みを見る
          </Link>
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
