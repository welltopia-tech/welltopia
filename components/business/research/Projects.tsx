"use client";

import { motion } from "framer-motion";
import { appliedResearchFields, researchProjects } from "@/lib/data/research";

const baseFields = ["EXPERIENCE", "EVALUATION", "CO-CREATION"];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-[130px] bg-[#f8f9fa] px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl md:mb-20"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">OUR RESEARCH</span>
          </div>
          <h2
            className="mb-6 text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            COCOCHI Lab.独自研究
          </h2>
          <p className="font-light leading-[1.9] text-[#6b7280]">
            EXPERIENCE／EVALUATION／CO-CREATIONの3つの基礎研究領域を土台に、COCOCHI Lab.が現在取り組んでいる応用研究テーマとして、以下があります。
          </p>
        </motion.div>

        {/* 基礎研究 → 応用研究 の関係を示すミニ構造 */}
        <div className="mb-14 flex flex-col items-center gap-3 md:mb-16">
          <p className="text-[11px] tracking-[0.2em] text-[#9ca3af]">基礎となる研究領域</p>
          <div className="flex flex-wrap justify-center gap-2">
            {baseFields.map((f) => (
              <span
                key={f}
                className="rounded-full border border-[#1a4f8a]/20 bg-white px-3.5 py-1.5 text-[11px] tracking-[0.06em] text-[#1a4f8a]"
              >
                {f}
              </span>
            ))}
          </div>
          <span className="text-[#1a4f8a]/40" aria-hidden="true">↓</span>
          <p className="text-[11px] tracking-[0.2em] text-[#9ca3af]">それらを活用する応用研究</p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mb-20">
          {appliedResearchFields.map((f, i) => (
            <motion.div
              key={f.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-[#e5e7eb] bg-white p-7 md:p-8"
            >
              <span
                className="mb-2 block text-sm italic tracking-[0.1em] text-[#1a4f8a]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {f.en}
              </span>
              <h3
                className="mb-3 text-[19px] font-medium text-[#0d2d52]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                {f.ja}
              </h3>
              <p className="text-[13.5px] font-light leading-relaxed text-[#6b7280]">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 研究プロジェクト・レポート・実証実験などをカード形式で追加していく領域 */}
        <div>
          <p className="mb-5 text-xs tracking-[0.25em] text-[#1a4f8a]">PROJECTS &amp; REPORTS</p>
          {researchProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {researchProjects.map((p) => (
                <div key={p.title} className="rounded-xl border border-[#e5e7eb] bg-white p-6">
                  <div className="mb-2 flex items-center gap-2 text-[11px] tracking-wide text-[#1a4f8a]">
                    <span>{p.type}</span>
                    <span className="text-[#9ca3af]">/</span>
                    <span className="text-[#9ca3af]">{p.date}</span>
                  </div>
                  <p className="mb-2 text-[15px] font-medium text-[#0d2d52]">{p.title}</p>
                  {p.summary && (
                    <p className="text-[13px] font-light leading-relaxed text-[#6b7280]">{p.summary}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="border-t border-[#e5e7eb] py-8 text-[13.5px] font-light text-[#9ca3af]">
              研究プロジェクト、レポート、実証実験、共同研究、論文、イベント、フィールドワークなどは、順次公開予定です。
            </div>
          )}
          <div className="border-t border-[#e5e7eb]" />
        </div>
      </div>
    </section>
  );
}
