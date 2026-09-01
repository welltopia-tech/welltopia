"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-14 md:pb-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-[position:center_22%]"
        style={{ backgroundImage: "url(/images/top/hero.jpg)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(9,20,38,0.88) 0%, rgba(9,20,38,0.62) 26%, rgba(9,20,38,0.28) 50%, rgba(9,20,38,0.04) 74%), linear-gradient(180deg, rgba(7,16,30,0.55) 0%, rgba(7,16,30,0.05) 30%, rgba(7,16,30,0.12) 48%, rgba(6,13,25,0.55) 74%, rgba(6,13,25,0.92) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 whitespace-nowrap text-[clamp(24px,4.6vw,60px)] font-light leading-tight text-[#fbf8f1]"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          THE FUTURE OF <em className="italic text-[#8fbbe0]">WELL-BEING</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mb-9 whitespace-nowrap text-[clamp(13px,1.5vw,18px)] tracking-wide text-white/90"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          ウェルビーイングの未来を描き、社会に新しい価値を生み出す。
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/#about"
            className="rounded-md bg-gradient-to-br from-[#8fbbe0] to-[#1a4f8a] px-6 py-4 text-sm font-medium text-[#08182c] transition-transform hover:scale-[1.02]"
          >
            会社概要を見る →
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-white/50 px-6 py-4 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            お問い合わせ →
          </Link>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-16 hidden w-full max-w-7xl items-center gap-2.5 px-10 text-[10px] tracking-[0.2em] text-white/60 md:flex">
        <span>SCROLL</span>
        <span className="h-px w-16 bg-gradient-to-r from-white/50 to-transparent" />
      </div>
    </section>
  );
}
