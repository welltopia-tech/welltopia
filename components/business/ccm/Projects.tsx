"use client";

import { motion } from "framer-motion";
import { works } from "@/lib/data/works";

export default function Projects() {
  const items = works.filter((w) => w.business === "co-creation-management");

  return (
    <section id="projects" className="scroll-mt-[180px] bg-white px-5 py-24 md:px-10 md:py-36">
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
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">CASE STUDY</span>
          </div>
          <h2
            className="text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            共創によって、体験はどう変わったのか。
          </h2>
        </motion.div>

        <div>
          {items.map((w, i) => (
            <motion.div
              key={w.tag}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid grid-cols-1 gap-3 border-t border-[#e5e7eb] py-8 md:grid-cols-[160px_1fr] md:gap-8"
            >
              <div>
                <span className="italic text-[#1a4f8a]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  {w.tag}
                </span>
                <div className="mt-1 text-[11px] text-[#9ca3af]">{w.meta}</div>
              </div>
              <div>
                <p
                  className="mb-2 text-[16px] leading-relaxed text-[#0d2d52]"
                  style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                >
                  {w.title}
                </p>
                <p className="mb-3 text-[11.5px] text-[#9ca3af]">{w.partners}</p>
                {(w.capabilities?.length || w.ccmPhases?.length) && (
                  <div className="flex flex-wrap gap-1.5">
                    {w.capabilities?.map((c) => (
                      <span key={c} className="rounded border border-[#e5e7eb] px-2 py-0.5 text-[10px] text-[#1a4f8a]">
                        {c}
                      </span>
                    ))}
                    {w.ccmPhases?.map((p) => (
                      <span key={p} className="rounded bg-[#f0f4fb] px-2 py-0.5 text-[10px] text-[#1a4f8a]">
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="border-t border-[#e5e7eb] py-8 text-[13.5px] font-light text-[#9ca3af]"
          >
            プロジェクトを順次公開予定です。
          </motion.div>
          <div className="border-t border-[#e5e7eb]" />
        </div>
      </div>
    </section>
  );
}
