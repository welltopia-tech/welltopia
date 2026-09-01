"use client";

import { motion } from "framer-motion";
import CycleDiagram from "./CycleDiagram";

const editorialLines = [
  { text: "人と向き合う。", size: "md" as const },
  { text: "異なる意見を受け止める。", size: "md" as const },
  { text: "予想していなかった問題に対応する。", size: "lg" as const },
  { text: "プロジェクトを前へ進める。", size: "md" as const },
  { text: "価値が生まれる瞬間まで責任を持つ。", size: "xl" as const },
];

const sizeClass: Record<string, string> = {
  md: "text-[16px] md:text-[18px] text-[#374151] font-light",
  lg: "text-[18px] md:text-[21px] text-[#0d2d52]",
  xl: "text-[20px] md:text-[24px] text-[#0d2d52] font-medium",
};

const cycleNodes = [
  { key: "education", en: "EDUCATION", ja: "育てる" },
  { key: "practice", en: "PRACTICE", ja: "実践する" },
  { key: "experience", en: "EXPERIENCE", ja: "経験を蓄積する" },
  { key: "next", en: "NEXT CO-CREATION", ja: "次の共創を生み出す" },
] as const;

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-[130px] bg-white px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-16"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">PRACTICE</span>
          </div>
          <h2
            className="text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            学びを、実践へ。
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16"
        >
          <p className="mb-4 font-light leading-[1.9] text-[#6b7280]">
            FRONPEERの原点には、WELLTOPIAが実際の共創プロジェクトを進める中で行ってきた人材育成があります。
          </p>
          <p className="font-light leading-[1.9] text-[#6b7280]">
            共創マネージャーとして育成してきたフリーランスメンバーの一部は、現在もWELLTOPIAの共創マネジメントサービス「CCM」を支えるメンバーとして、実際のプロジェクトに参画しています。
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-[19px] font-medium leading-relaxed text-[#0d2d52] md:mb-14 md:text-[24px]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          学ぶだけでは、共創マネージャーにはなれない。
        </motion.p>

        <div className="mb-20 md:mb-28">
          {editorialLines.map((line, i) => (
            <motion.p
              key={line.text}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`mb-5 leading-relaxed last:mb-0 md:mb-6 ${sizeClass[line.size]}`}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-2 text-xs tracking-[0.25em] text-[#1a4f8a]">EDUCATION × PRACTICE CYCLE</p>
            <p className="font-light leading-[1.9] text-[#6b7280]">
              育て、実践し、経験を蓄積し、次の共創を生み出す。その循環がFRONPEERを更新し続けます。
            </p>
          </div>
          <CycleDiagram
            nodes={cycleNodes}
            label="EDUCATION（育てる）からPRACTICE（実践する）、EXPERIENCE（経験を蓄積する）、NEXT CO-CREATION（次の共創を生み出す）を経て、再びEDUCATIONへ戻る循環図"
          />
        </motion.div>
      </div>
    </section>
  );
}
