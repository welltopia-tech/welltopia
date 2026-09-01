"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { capabilities } from "@/lib/data/capabilities";

const systems = [
  {
    code: "WLM",
    name: "WELLTOPIA LADDER METHOD",
    role: "共創のプロセスを設計する。",
    desc: "WLMは、まだ言葉になっていない願いや課題を発見し、共通の未来を描き、実装可能なプロジェクトへ段階的に引き上げる共創開発メソッドです。",
    functions: [
      "願い・課題の発見",
      "企業資産の棚卸し",
      "体験ギャップの可視化",
      "共通ビジョンの設計",
      "体験価値コンセプト開発",
      "共創プロジェクト設計",
      "PoC・実証実験",
      "社会実装・事業化",
    ],
  },
  {
    code: "LINA",
    name: "",
    role: "共創プロジェクトを動かし続ける。",
    desc: "LINAは、関係者、目的、役割、意思決定、進捗、課題、学びを一元的に管理し、多様なステークホルダーが参加する共創プロジェクトを前進させるマネジメントシステムです。",
    functions: [
      "ステークホルダー管理",
      "目的・ビジョン共有",
      "役割・責任設計",
      "タスク・進捗管理",
      "会議・意思決定管理",
      "課題・リスク管理",
      "対話・フィードバック蓄積",
      "プロジェクトナレッジ管理",
    ],
  },
  {
    code: "WSS",
    name: "WELLTOPIA SCORING SYSTEM",
    role: "共創と体験価値を測り、育てる。",
    desc: "WSSは、顧客や従業員が感じる体験価値、共創プロセスの状態、プロジェクトの成果を独自の評価基準で可視化するスコアリングシステムです。単純な満足度だけでなく、信頼、共感、参加、行動変容、継続意向など、共創によって生まれる価値を多面的に評価します。",
    functions: [
      "CX・EX測定",
      "Experience Gap測定",
      "共創プロセス評価",
      "NPS・eNPS設計",
      "定性データの定量化",
      "行動変容・態度変容評価",
      "プロジェクト効果検証",
      "継続改善指標設計",
    ],
  },
];

export default function CcmSystem() {
  const [openCap, setOpenCap] = useState<string | null>(null);

  return (
    <section id="ccm-system" className="scroll-mt-[130px] bg-[#0d2d52] px-5 py-24 text-white md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl md:mb-20"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#8fbbe0]" />
            <span className="text-xs tracking-[0.25em] text-[#8fbbe0]">CCM SYSTEM</span>
          </div>
          <h2 className="mb-6 text-[clamp(24px,3.4vw,36px)] font-medium leading-snug">
            共創を生み出し、動かし、育てる3つの仕組み。
          </h2>
          <p className="font-light leading-[1.9] text-white/70">
            CCMの中核には、共創のプロセス、プロジェクト推進、評価・改善を支える3つの独自システムがあります。
          </p>
        </motion.div>

        {/* 3システムがひとつのCCMを構成することを示す縦の背骨 */}
        <div className="relative">
          <div
            className="absolute bottom-6 left-[27px] top-6 hidden w-px bg-gradient-to-b from-[#8fbbe0]/50 via-[#8fbbe0]/25 to-[#8fbbe0]/50 md:block"
            aria-hidden="true"
          />
          <div className="space-y-10 md:space-y-14">
            {systems.map((sys, i) => (
              <motion.div
                key={sys.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative grid grid-cols-1 gap-6 md:grid-cols-[56px_1fr] md:gap-10"
              >
                <div
                  className="relative z-10 hidden h-14 w-14 flex-none items-center justify-center rounded-full border border-[#8fbbe0]/40 bg-[#0d2d52] text-[11px] font-medium tracking-wide text-[#8fbbe0] md:flex"
                  aria-hidden="true"
                >
                  {sys.code}
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:p-9">
                  <p className="mb-1 text-[11px] font-medium tracking-[0.1em] text-white/50 md:hidden">
                    {sys.code}
                  </p>
                  {sys.name && (
                    <p className="mb-2 text-[11px] tracking-[0.08em] text-white/50">{sys.name}</p>
                  )}
                  <h3
                    className="mb-4 text-[19px] font-medium text-white md:text-[22px]"
                    style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                  >
                    {sys.role}
                  </h3>
                  <p className="mb-6 max-w-2xl font-light leading-[1.9] text-white/70">{sys.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {sys.functions.map((f) => (
                      <span
                        key={f}
                        className="rounded border border-white/15 px-2.5 py-1 text-[11px] text-white/60"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 text-center text-[15px] font-light leading-relaxed text-white/60 md:mt-20"
        >
          WLMが共創を生み出し、LINAが動かし続け、WSSが測り、育てる。
          <br className="hidden sm:block" />
          3つの仕組みが揃って、はじめてひとつのCCMになります。
        </motion.p>

        {/* 8つのケイパビリティ */}
        <div className="mt-24 md:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mb-12 max-w-2xl md:mb-16"
          >
            <p className="mb-3 text-xs tracking-[0.25em] text-[#8fbbe0]">OUR CAPABILITIES</p>
            <h3
              className="text-[clamp(19px,2.4vw,26px)] font-medium leading-snug"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              8つの専門領域を横断し、構想から改善まで支援する。
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => {
              const open = openCap === c.num;
              return (
                <motion.button
                  key={c.num}
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenCap(open ? null : c.num)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-left transition-colors hover:border-[#8fbbe0]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8fbbe0]"
                >
                  <span
                    className="mb-3 block text-sm italic text-[#8fbbe0]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {c.num}
                  </span>
                  <p className="mb-1.5 text-[10px] font-medium tracking-wide text-white/50">{c.en}</p>
                  <p className="mb-2.5 text-[15px] font-medium text-white">{c.ja}</p>
                  <p className="text-[12.5px] font-light leading-relaxed text-white/60">{c.copy}</p>
                  {open && (
                    <ul className="mt-4 space-y-1 border-t border-white/10 pt-4">
                      {c.tags.map((t) => (
                        <li key={t} className="text-[11px] leading-relaxed text-white/50">
                          ・{t}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="mt-3 block text-[11px] text-[#8fbbe0]">
                    {open ? "閉じる" : "支援内容を見る"}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
