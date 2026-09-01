"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { news } from "@/lib/data/news";

export default function News() {
  return (
    <section id="news" className="bg-[#f8f9fa] px-5 py-24 md:px-10 md:py-32">
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
              <span className="h-px w-6 bg-[#1a4f8a]" />
              <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">NEWS</span>
            </div>
            <h2 className="text-[clamp(24px,3vw,36px)] font-medium text-[#0d2d52]">お知らせ</h2>
          </div>
          <p className="max-w-md font-light text-[#6b7280]">
            プレスリリース、メディア掲載、イベント情報などの最新情報をお届けします。
          </p>
        </motion.div>

        {news.length > 0 ? (
          <div>
            {news.map((item, i) => {
              const row = (
                <>
                  <div>
                    <span className="text-[12px] tracking-wide text-[#6b7280]">{item.date}</span>
                    <div className="mt-1 text-[11px] tracking-wide text-[#1a4f8a]">{item.category}</div>
                  </div>
                  <p className="text-[clamp(14px,1.5vw,17px)] leading-relaxed text-[#0d2d52]">
                    {item.title}
                  </p>
                </>
              );
              const rowClass =
                "grid grid-cols-1 gap-2 border-t border-[#e5e7eb] py-7 transition-all md:grid-cols-[160px_1fr] md:gap-8";

              return (
                <motion.div
                  key={`${item.date}-${item.title}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className={`${rowClass} hover:pl-3 hover:bg-white`}
                    >
                      {row}
                    </Link>
                  ) : (
                    <div className={rowClass}>{row}</div>
                  )}
                </motion.div>
              );
            })}
            <div className="border-t border-[#e5e7eb]" />
          </div>
        ) : (
          <div className="border-t border-[#e5e7eb] py-16 text-center">
            <p className="text-[13.5px] font-light text-[#6b7280]">
              最新のお知らせは準備中です。公開までしばらくお待ちください。
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
