"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90svh] flex-col justify-center overflow-hidden bg-[#0d2d52] px-5 py-28 text-white md:px-10"
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
            "linear-gradient(90deg, rgba(13,45,82,0.96) 0%, rgba(13,45,82,0.86) 35%, rgba(13,45,82,0.35) 70%, rgba(13,45,82,0.15) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <Link
          href="/#business"
          className="mb-10 inline-flex items-center gap-2 text-[13px] text-white/50 transition-colors hover:text-white"
        >
          ← WELLTOPIAの3つの事業へ戻る
        </Link>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 block text-sm italic tracking-[0.15em] text-[#8fbbe0]"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          CO-CREATION MANAGEMENT
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 max-w-[14ch] text-[clamp(34px,6vw,68px)] font-medium leading-[1.25]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          最高の共創を、科学する。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-8 max-w-xl text-[15px] font-light leading-[1.9] text-white/80 md:text-[17px]"
        >
          人と企業の可能性をつなぎ、新しい体験価値を社会に実装する。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-12 max-w-xl font-light leading-[1.9] text-white/60"
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
            className="inline-flex items-center gap-3 rounded-md border border-white/30 px-7 py-4 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            CCMの仕組みを見る
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative mx-auto mt-16 flex w-full max-w-6xl items-center gap-2.5 text-[10px] tracking-[0.2em] text-white/50"
        aria-hidden="true"
      >
        <span>SCROLL</span>
        <span className="h-px w-16 bg-gradient-to-r from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
