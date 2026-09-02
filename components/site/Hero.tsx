"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  // Hero区間をスクロールする間（Heroの上端が画面上端に来た瞬間→Heroの下端が
  // 画面上端に来た瞬間＝ABOUTUSの文章が見え始める瞬間）で0→1に進む進捗値。
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const tintOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.55]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-14 md:pb-20"
    >
      <div className="fixed inset-0 -z-10 bg-[#0d2d52]">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center md:bg-[position:center_22%]"
            style={{ backgroundImage: "url(/images/top/hero.jpg)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0) 55%), linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 26%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.55) 82%, rgba(255,255,255,0.82) 100%)",
            }}
          />
        </motion.div>
        {/* スクロールに応じて濃くなる青トーンのヴェール。ABOUTUSの文章が
            見えやすくなるよう、画面全体を少し暗く・爽やかな青に沈める */}
        <motion.div
          className="absolute inset-0 bg-[#0d2d52]"
          style={{ opacity: tintOpacity }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 whitespace-nowrap text-[clamp(31px,6vw,78px)] font-light leading-tight text-[#0d2d52]"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          The Future
          <br />
          <em className="italic text-[#1a4f8a]">of Well-Being</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="mb-9 whitespace-nowrap text-[clamp(13px,1.5vw,18px)] tracking-wide text-[#0d2d52]/80"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          ウェルビーイングの未来を描き、社会に新しい価値を生み出す。
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/#about"
            className="rounded-md bg-gradient-to-br from-[#8fbbe0] to-[#1a4f8a] px-6 py-4 text-sm font-medium text-white shadow-lg shadow-[#1a4f8a]/20 transition-transform hover:scale-[1.02]"
          >
            会社概要を見る →
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-[#0d2d52]/35 bg-white/40 px-6 py-4 text-sm font-medium text-[#0d2d52] backdrop-blur-sm transition-colors hover:border-[#0d2d52] hover:bg-white/70"
          >
            お問い合わせ →
          </Link>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-16 hidden w-full max-w-7xl items-center gap-2.5 px-10 text-[10px] tracking-[0.2em] text-[#0d2d52]/60 md:flex">
        <span>SCROLL</span>
        <span className="h-px w-16 bg-gradient-to-r from-[#0d2d52]/50 to-transparent" />
      </div>
    </section>
  );
}
