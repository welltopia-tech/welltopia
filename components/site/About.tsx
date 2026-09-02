"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative">
      {/*
        透過ゾーン：HeroのTHE FUTURE OF WELL-BEING背景（fixed）をそのまま見せながら、
        「体験価値の編集者」のメッセージがその上にスクロールインするパララックス演出。
        Hero側でスクロールに応じて背景が縮小・青トーンで暗くなるため、
        濃紺の半透明カードでどのタイミングでも読みやすさを確保する。
      */}
      <div className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-[#0d2d52]/80 p-8 shadow-xl shadow-[#0d2d52]/20 backdrop-blur-md md:p-14"
          >
            <div className="mb-4 inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#8fbbe0]" />
              <span className="text-xs tracking-[0.25em] text-[#8fbbe0]">ABOUT US</span>
            </div>
            <h2 className="mb-2 text-[clamp(20px,2.4vw,28px)] font-medium text-white">
              体験価値の編集者
            </h2>
            <p
              className="mb-6 text-sm italic text-white/70"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              — The Editor of Experience Value
            </p>
            <p className="mb-4 text-[13.5px] leading-[1.9] text-white/80">
              私たちは、社会に散らばる人・知識・技術・文化・データをつなぎ、人と企業にとっての新しい体験価値へと編集するマネジメント集団です。
            </p>
            <p className="mb-7 text-[13.5px] leading-[1.9] text-white/80">
              CX・EXの開発・改善を通じて、まだ言葉になっていない願いや課題を発見し、リサーチ、戦略、デザイン、マーケティング、クリエイティブ、新規事業・組織開発などの専門性を横断しながら、構想から実装、改善までを一気通貫で支援します。
            </p>
            <Link
              href="/aboutus"
              className="group/cta relative inline-flex w-fit items-center gap-2 text-[16.25px] font-medium text-[#8fbbe0] transition-colors hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 group-hover/cta:after:w-full"
            >
              私たちについて
              <span className="transition-transform group-hover/cta:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
