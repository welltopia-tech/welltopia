"use client";

import { motion } from "framer-motion";
import { works } from "@/lib/data/works";

export default function Works() {
  return (
    <section id="works" className="bg-[#0d2d52] px-5 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#8fbbe0]" />
              <span className="text-xs tracking-[0.25em] text-[#8fbbe0]">WORKS</span>
            </div>
            <h2 className="text-[clamp(24px,3vw,36px)] font-medium">共創プロジェクトの実績</h2>
          </div>
          <p className="max-w-md font-light text-white/60">
            一社では踏み出せない挑戦を、パートナーとの共創によって形にしてきました。
          </p>
        </motion.div>

        <div>
          {works.map((w, i) => (
            <motion.div
              key={w.tag}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid grid-cols-1 gap-2 border-t border-white/10 py-8 transition-all hover:pl-3 md:grid-cols-[160px_1fr] md:gap-8 md:py-9"
            >
              <div>
                <span
                  className="italic text-[#8fbbe0]"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {w.tag}
                </span>
                <div className="mt-1 text-[11px] tracking-wide text-white/50">{w.meta}</div>
              </div>
              <div>
                <p
                  className="mb-2 text-[clamp(15px,1.6vw,19px)] leading-relaxed"
                  style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                >
                  {w.title}
                </p>
                <p className="mb-4 text-[11.5px] text-white/50">{w.partners}</p>

                {(w.service?.length || w.industry?.length || w.issues?.length) && (
                  <dl className="space-y-2.5">
                    {(
                      [
                        ["Service", w.service],
                        ["Industry", w.industry],
                        ["Issues", w.issues],
                      ] as const
                    ).map(([label, tags]) =>
                      tags?.length ? (
                        <div key={label} className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
                          <dt className="w-[70px] flex-none text-[11px] tracking-wide text-white/40">{label}</dt>
                          <dd className="flex flex-wrap gap-1.5">
                            {tags.map((t) => (
                              <span
                                key={t}
                                className="rounded border border-white/15 bg-white px-2.5 py-1 text-[11px] text-[#0d2d52]"
                              >
                                #{t}
                              </span>
                            ))}
                          </dd>
                        </div>
                      ) : null
                    )}
                  </dl>
                )}
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
