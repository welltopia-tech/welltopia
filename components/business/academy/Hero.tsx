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
        className="absolute inset-0 bg-cover bg-[position:70%_center]"
        style={{ backgroundImage: "url(/images/business/academy-hero.jpg)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(240,244,251,0.96) 0%, rgba(240,244,251,0.88) 38%, rgba(240,244,251,0.4) 72%, rgba(240,244,251,0.12) 100%)",
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

        <div className="mb-8 block w-fit rounded-lg bg-white px-5 py-3 shadow-sm">
          <img src="/images/business/fronpeer-logo.png" alt="FRONPEER" className="h-7 w-auto md:h-8" />
        </div>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 block text-sm italic tracking-[0.15em] text-[#1a4f8a]"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Co-Creation Manager Development
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 max-w-[15ch] text-[clamp(32px,5.6vw,60px)] font-medium leading-[1.3] text-[#0d2d52]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          共創を、仕事にできる人を育てる。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-4 max-w-xl font-light leading-[1.9] text-[#374151]"
        >
          FRONPEER（フロンピア）は、異なる人・知識・技術・資産・想いをつなぎ、新しい価値を共創によって実装まで導く「共創マネージャー」を育成するWELLTOPIAの人材育成事業です。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-10 max-w-xl font-light leading-[1.9] text-[#6b7280]"
        >
          企業・組織を対象とした共創マネージャー育成と、2027年1月開校予定の共創マネージャー育成スクール「FRONPEER」を通じて、共創を担える人材を社会に増やしていきます。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="mb-10 max-w-xl text-[16px] font-medium leading-relaxed text-[#0d2d52] md:text-[18px]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          共創を、一部の才能から、身につけられる専門性へ。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/contact?topic=academy"
            className="inline-flex items-center gap-3 rounded-md bg-gradient-to-br from-[#8fbbe0] to-[#1a4f8a] px-7 py-4 text-sm font-medium text-white shadow-lg shadow-[#1a4f8a]/20 transition-transform hover:scale-[1.02]"
          >
            共創マネージャー育成について相談する →
          </Link>
          <Link
            href="#offering"
            className="inline-flex items-center gap-3 rounded-md border border-[#0d2d52]/25 px-7 py-4 text-sm font-medium text-[#0d2d52] transition-colors hover:border-[#0d2d52] hover:bg-[#0d2d52]/5"
          >
            プログラムを見る
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
