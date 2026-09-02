"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const phases = [
  {
    num: "01",
    en: "DISCOVER",
    ja: "願いと課題を発見する。",
    actions: ["顧客・従業員インタビュー", "定量・定性調査", "市場・競合調査", "企業資産の棚卸し", "Experience Gap分析"],
    outputs: ["インサイトレポート", "課題構造", "体験ギャップ", "共創テーマ"],
  },
  {
    num: "02",
    en: "ENVISION",
    ja: "共通の未来を描く。",
    actions: ["ビジョン設計", "体験価値定義", "CX・EX戦略", "コンセプト開発", "ジャーニー設計"],
    outputs: ["共通ビジョン", "体験価値コンセプト", "CX・EX戦略", "プロジェクト仮説"],
  },
  {
    num: "03",
    en: "CONNECT",
    ja: "必要な人と資産をつなぐ。",
    actions: ["パートナー探索", "ステークホルダー設計", "産学官・地域連携", "専門家・クリエイター連携", "共創チーム形成"],
    outputs: ["共創体制", "パートナーマップ", "役割・責任設計", "共創ガバナンス"],
  },
  {
    num: "04",
    en: "CREATE",
    ja: "新しい体験をつくる。",
    actions: ["商品・サービス企画", "CX・EXデザイン", "プロトタイピング", "PoC", "実証実験"],
    outputs: ["商品・サービス案", "体験プロトタイプ", "MVP", "実証プロジェクト"],
  },
  {
    num: "05",
    en: "IMPLEMENT",
    ja: "社会へ届ける。",
    actions: ["ブランド開発", "Web・クリエイティブ", "PR・コミュニケーション", "Go-to-Market戦略", "本格導入・運用設計"],
    outputs: ["ブランド・クリエイティブ", "市場導入計画", "運用体制", "事業化ロードマップ"],
  },
  {
    num: "06",
    en: "MEASURE & OPTIMIZE",
    ja: "測り、改善し、育てる。",
    actions: ["CX・EX測定", "共創プロセス評価", "KPIモニタリング", "フィードバック分析", "継続改善"],
    outputs: ["WSS評価レポート", "改善施策", "経営報告", "次期ロードマップ"],
  },
];

export default function Process() {
  const [open, setOpen] = useState<string | null>("01");

  return (
    <section id="process" className="scroll-mt-[180px] bg-white px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl md:mb-20"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">CCM PROCESS</span>
          </div>
          <h2
            className="mb-6 text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            願いの発見から、社会実装と継続改善まで。
          </h2>
          <p className="font-light leading-[1.9] text-[#6b7280]">
            WLMが6つのフェーズを導き、LINAがすべての工程のプロジェクト推進を支え、WSSが各フェーズの状態と成果を測定します。
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-[#e5e7eb] md:block"
            aria-hidden="true"
          />
          <div className="space-y-3">
            {phases.map((phase, i) => {
              const isOpen = open === phase.num;
              return (
                <motion.div
                  key={phase.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative rounded-xl border border-[#e5e7eb] bg-white md:ml-10"
                >
                  <span
                    className="absolute left-[-49px] top-6 hidden h-4 w-4 rounded-full border-2 border-[#1a4f8a] bg-white md:block"
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`phase-panel-${phase.num}`}
                    onClick={() => setOpen(isOpen ? null : phase.num)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a4f8a]"
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        className="text-lg italic text-[#1a4f8a]"
                        style={{ fontFamily: "var(--font-cormorant), serif" }}
                      >
                        {phase.num}
                      </span>
                      <span>
                        <span className="mr-2 text-[11px] font-medium tracking-[0.1em] text-[#6b7280]">
                          {phase.en}
                        </span>
                        <span
                          className="text-[16px] font-medium text-[#0d2d52]"
                          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                        >
                          {phase.ja}
                        </span>
                      </span>
                    </span>
                    <span className="flex-none text-lg text-[#1a4f8a]" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div id={`phase-panel-${phase.num}`} className="grid grid-cols-1 gap-6 border-t border-[#e5e7eb] px-6 pb-6 pt-5 sm:grid-cols-2">
                      <div>
                        <p className="mb-2 text-[11px] tracking-wide text-[#9ca3af]">実施内容</p>
                        <ul className="space-y-1.5">
                          {phase.actions.map((a) => (
                            <li key={a} className="text-[13px] leading-relaxed text-[#6b7280]">
                              ・{a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-2 text-[11px] tracking-wide text-[#9ca3af]">主な成果物</p>
                        <ul className="space-y-1.5">
                          {phase.outputs.map((o) => (
                            <li key={o} className="text-[13px] leading-relaxed text-[#6b7280]">
                              ・{o}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
