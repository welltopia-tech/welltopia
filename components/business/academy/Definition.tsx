"use client";

import { motion } from "framer-motion";
import Competencies from "./Competencies";

export default function Definition() {
  return (
    <section id="definition" className="scroll-mt-[180px] bg-[#f8f9fa] px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-16"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">CO-CREATION MANAGER</span>
          </div>
          <h2
            className="text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            異なる可能性をつなぎ、新しい価値を実装まで導く専門職。
          </h2>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 border-l-2 border-[#1a4f8a] py-2 pl-6 text-[19px] font-medium leading-relaxed text-[#0d2d52] md:mb-20 md:text-[24px]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          共創マネージャーとは、異なる人・知識・技術・資産・想いをつなぎ、まだ存在していない価値を、共創によって実装まで導く専門職です。
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="mb-4 font-light leading-[1.9] text-[#6b7280]">
            共創マネージャーは、単に人を集める人でも、会議を進行する人でもありません。
          </p>
          <p className="font-light leading-[1.9] text-[#6b7280]">
            まだ言葉になっていない課題や可能性を見つけ、必要な人や専門性をつなぎ、共通の未来を描き、共創そのものを設計し、異なる立場の人たちを巻き込み、プロジェクトを実装まで前へ進めていきます。
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center text-[19px] font-medium leading-relaxed text-[#0d2d52] md:mb-28 md:text-[24px]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          「答えを持っている人」ではなく、
          <br />
          「答えが生まれる関係をつくれる人」。
        </motion.p>

        <Competencies />
      </div>
    </section>
  );
}
