"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { news, type NewsCategory } from "@/lib/data/news";

const categories: NewsCategory[] = ["ニュース", "コラム", "プレスリリース"];
type Filter = "すべて" | NewsCategory;

export default function NewsList() {
  const [active, setActive] = useState<Filter>("すべて");
  const filtered = active === "すべて" ? news : news.filter((n) => n.category === active);

  return (
    <section className="bg-white px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap gap-3 md:mb-16">
          {(["すべて", ...categories] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`rounded-full px-5 py-2.5 text-[13px] font-medium tracking-wide transition-colors ${
                active === c
                  ? "bg-[#1a4f8a] text-white"
                  : "border border-[#e5e7eb] text-[#6b7280] hover:border-[#1a4f8a] hover:text-[#1a4f8a]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">
            {filtered.map((item, i) => {
              const cardBody = (
                <>
                  {item.thumbnail && (
                    <div className="mb-4 aspect-[16/9] overflow-hidden rounded-lg bg-[#f8f9fa]">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <span className="mb-3 inline-block rounded-full bg-[#1a4f8a] px-3 py-1 text-[11px] font-medium tracking-wide text-white">
                    {item.category}
                  </span>
                  <h3 className="mb-2 text-[17px] font-medium leading-snug text-[#0d2d52]">
                    {item.title}
                  </h3>
                  {item.excerpt && (
                    <p className="mb-3 text-[13.5px] leading-relaxed text-[#6b7280]">{item.excerpt}</p>
                  )}
                  <p className="text-[12px] text-[#9ca3af]">{item.date}</p>
                </>
              );

              return (
                <motion.div
                  key={`${item.date}-${item.title}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="group block border-t border-[#e5e7eb] pt-6"
                    >
                      {cardBody}
                    </Link>
                  ) : (
                    <div className="border-t border-[#e5e7eb] pt-6">{cardBody}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="border-t border-[#e5e7eb] py-16 text-center">
            <p className="text-[13.5px] font-light text-[#6b7280]">
              {active === "すべて"
                ? "最新のお知らせは準備中です。公開までしばらくお待ちください。"
                : `「${active}」のお知らせは準備中です。`}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
