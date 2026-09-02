"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative">
      {/*
        透過ゾーン：HeroのTHE FUTURE OF WELL-BEING背景（fixed）をそのまま見せながら、
        イントロダクションのメッセージがその上にスクロールインするパララックス演出。
        背景の写真がどの明るさでも読めるよう、半透明の白カードで視認性を確保する。
      */}
      <div className="px-5 pb-16 pt-24 md:px-10 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mx-auto w-fit rounded-3xl bg-white/85 px-8 py-10 text-center shadow-xl shadow-[#0d2d52]/10 backdrop-blur-md md:px-16 md:py-14"
          >
            <div className="mb-6 inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#1a4f8a]" />
              <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">INTRODUCTION</span>
            </div>
            <p
              className="text-[clamp(20px,2.6vw,30px)] leading-[1.9] tracking-wide text-[#0d2d52]"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              私たち&ldquo;WELLTOPIA&rdquo;は
              <br />
              世界で最も
              <br />
              「心地よさ」を探求する
              <br />
              チームであり
              <br />
              コミュニティであり
              <br />
              ライフスタイルブランドです
            </p>
          </motion.div>
        </div>
      </div>

      {/* 不透明ゾーン：ここからは通常の白背景に戻り、パララックス演出を終える */}
      <div className="bg-white px-5 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-5xl">
          {/* editor card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[16/10] md:aspect-[16/8]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/top/editor.jpg)" }}
              />
              <div className="absolute inset-y-[2%] right-[2%] flex w-[92%] flex-col justify-center rounded-xl bg-[#0d2d52]/75 p-7 backdrop-blur-md md:w-[48%] md:p-12">
                <div className="mb-4 inline-flex items-center gap-2.5">
                  <span className="h-px w-6 bg-[#8fbbe0]" />
                  <span className="text-xs tracking-[0.25em] text-[#8fbbe0]">ABOUT US</span>
                </div>
                <h3 className="mb-2 text-[clamp(20px,2.4vw,28px)] font-medium text-white">
                  体験価値の編集者
                </h3>
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
