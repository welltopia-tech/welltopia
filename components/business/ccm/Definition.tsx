"use client";

import { motion } from "framer-motion";

const elements = [
  { num: "01", en: "WISH", ja: "願い", desc: "顧客、従業員、企業、社会が本当に実現したい未来。" },
  { num: "02", en: "ASSET", ja: "資産", desc: "企業が持つ技術、商品、ブランド、施設、人材、データ、ネットワーク。" },
  { num: "03", en: "RELATIONSHIP", ja: "関係性", desc: "企業、地域、専門家、クリエイター、生活者などのつながり。" },
  { num: "04", en: "EXPERIENCE", ja: "体験", desc: "顧客や従業員が、商品・サービス・組織との接点で実際に感じる価値。" },
  { num: "05", en: "IMPACT", ja: "成果", desc: "行動変容、事業成長、組織変化、社会価値として生まれた結果。" },
];

export default function Definition() {
  return (
    <section id="definition" className="scroll-mt-[180px] bg-[#f8f9fa] px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">WHAT IS CCM?</span>
          </div>
          <h2
            className="mb-6 text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            共創を、偶然から再現可能な仕組みへ。
          </h2>
          <p className="mb-4 max-w-2xl font-light leading-[1.9] text-[#6b7280]">
            CCM（Co-Creation Management）とは、顧客・従業員・企業・社会の中にある願いと課題を発見し、必要な人、資産、専門性をつなぎ、新しい体験価値を構想・実装・評価・改善するマネジメントシステムです。
          </p>
          <p className="max-w-2xl font-light leading-[1.9] text-[#6b7280]">
            WELLTOPIAは、単にワークショップを開催したり、企業同士をマッチングしたりするだけではありません。共創が生まれる前の課題発見から、目指す未来の言語化、関係者の設計、プロジェクトの実装、成果の測定までを一貫して支援します。
          </p>
        </motion.div>

        <p className="mb-8 text-xs tracking-[0.25em] text-[#1a4f8a]">CCMがマネジメントする5つの要素</p>

        <div className="mb-16 md:mb-20">
          {elements.map((el, i) => (
            <motion.div
              key={el.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="grid grid-cols-[52px_1fr] gap-6 border-t border-[#e5e7eb] py-7 md:grid-cols-[64px_180px_1fr]"
            >
              <span
                className="text-lg italic text-[#1a4f8a]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {el.num}
              </span>
              <div>
                <p className="text-[11px] font-medium tracking-[0.1em] text-[#6b7280]">{el.en}</p>
                <h3
                  className="text-[17px] font-medium text-[#0d2d52]"
                  style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                >
                  {el.ja}
                </h3>
              </div>
              <p className="col-span-2 text-[13.5px] font-light leading-relaxed text-[#6b7280] md:col-span-1">
                {el.desc}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-[#e5e7eb]" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center text-[18px] font-medium leading-relaxed text-[#0d2d52] md:text-[22px]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          願いを見つけ、資産をつなぎ、体験をつくり、成果を育てる。
          <br />
          それが、WELLTOPIAの共創マネジメントです。
        </motion.p>
      </div>
    </section>
  );
}
