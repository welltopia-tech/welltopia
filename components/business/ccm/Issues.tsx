"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    num: "01",
    en: "CUSTOMER EXPERIENCE",
    ja: "顧客体験の課題",
    items: [
      "顧客の本音や潜在ニーズが分からない",
      "商品は売れているが、推奨やリピートにつながらない",
      "店舗、接客、Web、商品体験が分断されている",
      "顧客にとっての心地よい体験を再設計したい",
    ],
    related: ["CLIENT INSIGHT & RESEARCH", "CX DESIGN"],
  },
  {
    num: "02",
    en: "EMPLOYEE EXPERIENCE",
    ja: "従業員体験の課題",
    items: [
      "MVVが社内に浸透していない",
      "採用と入社後の体験にギャップがある",
      "従業員エンゲージメントが低下している",
      "部署を越えた対話や連携が生まれない",
    ],
    related: ["EX DESIGN", "EXPERIENCE STRATEGY"],
  },
  {
    num: "03",
    en: "NEW BUSINESS",
    ja: "新規事業の課題",
    items: [
      "技術や資産はあるが、顧客ニーズが見つからない",
      "アイデアはあるが、実現する資産や専門性が足りない",
      "PoCや実証実験の先へ進めない",
      "新しい事業を市場へ届ける方法が定まらない",
    ],
    related: ["NEW VALUE INCUBATION", "CLIENT INSIGHT & RESEARCH"],
  },
  {
    num: "04",
    en: "OPEN INNOVATION",
    ja: "社外共創の課題",
    items: [
      "連携先はいるが、共通目的が定まらない",
      "企業同士の利害や役割を整理できない",
      "マッチングやイベントだけで終わってしまう",
      "共創を継続する体制や評価基準がない",
    ],
    related: ["CO-CREATION DESIGN", "MEASURE & OPTIMIZE"],
  },
  {
    num: "05",
    en: "REGION & SOCIETY",
    ja: "地域・社会課題",
    items: [
      "地域資産を新しい価値へ変えたい",
      "企業、自治体、生活者の連携を生み出したい",
      "社会課題と事業成長を両立させたい",
      "単発ではない継続的なプロジェクトをつくりたい",
    ],
    related: ["CO-CREATION DESIGN", "CREATIVE & COMMUNICATION"],
  },
];

export default function Issues() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="issues" className="scroll-mt-[130px] bg-white px-5 py-24 md:px-10 md:py-36">
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
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">ISSUES WE ADDRESS</span>
          </div>
          <h2
            className="text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            CCMは、企業の中にある「分断」を解決する。
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map((cat, i) => {
            const open = openIndex === i;
            return (
              <motion.div
                key={cat.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`rounded-xl border border-[#e5e7eb] bg-white ${i === 4 ? "sm:col-span-2" : ""}`}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`issue-panel-${cat.num}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a4f8a]"
                >
                  <span>
                    <span
                      className="mb-1 block text-[11px] font-medium tracking-[0.1em] text-[#1a4f8a]"
                    >
                      {cat.num}｜{cat.en}
                    </span>
                    <span
                      className="text-[17px] font-medium text-[#0d2d52]"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      {cat.ja}
                    </span>
                  </span>
                  <span className="flex-none text-lg text-[#1a4f8a]" aria-hidden="true">
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open && (
                  <div id={`issue-panel-${cat.num}`} className="px-6 pb-6">
                    <ul className="mb-5 space-y-2.5 border-t border-[#e5e7eb] pt-5">
                      {cat.items.map((item) => (
                        <li key={item} className="text-[13.5px] leading-relaxed text-[#6b7280]">
                          ・{item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-2">
                      {cat.related.map((tag) => (
                        <a
                          key={tag}
                          href="#ccm-system"
                          className="rounded border border-[#e5e7eb] px-2.5 py-1 text-[10.5px] tracking-wide text-[#1a4f8a] transition-colors hover:border-[#1a4f8a]"
                        >
                          {tag}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
