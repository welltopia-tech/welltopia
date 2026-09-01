"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ctas = [
  {
    label: "FOR BUSINESS",
    title: "自社に共創を担える人材を育てたい",
    button: "共創マネージャー育成について相談する",
    href: "/contact?topic=academy-business",
  },
  {
    label: "FOR INDIVIDUAL",
    title: "共創マネージャーとしての専門性を身につけたい",
    button: "FRONPEER SCHOOLの情報を受け取る",
    href: "/contact?topic=academy-school",
  },
];

export default function GetStarted() {
  return (
    <section id="get-started" className="scroll-mt-[130px] bg-[#0d2d52] px-5 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center md:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-2.5">
            <span className="h-px w-6 bg-[#8fbbe0]" />
            <span className="text-xs tracking-[0.25em] text-[#8fbbe0]">GET STARTED</span>
            <span className="h-px w-6 bg-[#8fbbe0]" />
          </div>
          <h2
            className="mb-6 text-[clamp(22px,3.2vw,32px)] font-medium leading-snug"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            共創を動かせる人を、組織と社会へ。
          </h2>
          <p className="mx-auto max-w-xl font-light leading-[1.9] text-white/70">
            これからの企業に必要なのは、新しいアイデアだけではありません。人をつなぎ、専門性をつなぎ、組織を越え、新しい価値を実装まで導く人です。FRONPEERでは、企業・組織向けの共創マネージャー育成プログラムのご相談を受け付けています。また、2027年1月には共創マネージャー育成スクール「FRONPEER」の開校を予定しています。
          </p>
        </motion.div>

        <div className="mb-24 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mb-32">
          {ctas.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.03] p-7 text-center md:p-9"
            >
              <p className="mb-3 text-[11px] tracking-[0.15em] text-[#8fbbe0]">{c.label}</p>
              <h3 className="mb-7 flex-1 text-[17px] font-medium leading-snug">{c.title}</h3>
              <Link
                href={c.href}
                className="inline-flex items-center justify-center gap-3 rounded-md bg-gradient-to-br from-[#8fbbe0] to-[#1a4f8a] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#1a4f8a]/20 transition-transform hover:scale-[1.02]"
              >
                {c.button} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-2xl border-t border-white/10 pt-20 text-center"
      >
        <p
          className="mb-8 text-[clamp(20px,3vw,28px)] font-medium leading-relaxed"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          社会には、まだつながっていない可能性がある。
        </p>
        <p className="mb-4 font-light leading-[1.9] text-white/70">
          誰かの知識と、誰かの技術。
          <br />
          企業が持つ資産と、社会にある課題。
          <br />
          一人ひとりが持つ願いと、まだ見えていない未来。
        </p>
        <p className="mb-8 font-light leading-[1.9] text-white/70">
          その間に立ち、可能性を見つけ、つなぎ、新しい価値へ変えていく。
        </p>
        <p
          className="mb-10 text-[19px] font-medium leading-relaxed md:text-[22px]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          そんな人を、社会に増やしていく。
        </p>
        <span
          className="mb-2 block text-lg italic tracking-[0.1em] text-[#8fbbe0]"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          FRONPEER
        </span>
        <span className="text-[12px] tracking-[0.1em] text-white/50">Co-Creation Manager Development</span>
      </motion.div>
    </section>
  );
}
