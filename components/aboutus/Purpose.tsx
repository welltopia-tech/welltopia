"use client";

import { motion } from "framer-motion";
import AudienceGrid from "./AudienceGrid";

export default function Purpose() {
  return (
    <section className="bg-white px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl md:mb-24"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">PURPOSE</span>
          </div>
          <p className="mb-2 text-sm tracking-wide text-[#6b7280]">私たちの存在意義</p>
          <h2
            className="mb-3 text-[clamp(26px,4vw,44px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            心地よさを、
            <br />
            社会の新しい価値基準にする。
          </h2>
          <p
            className="mb-8 text-[12px] italic tracking-wide text-[#1a4f8a]/70"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Make well-being a new measure of value.
          </p>
          <p className="font-light leading-[1.9] text-[#6b7280]">
            WELLTOPIAは、心地よさを個人の感覚や一時的な満足で終わらせません。顧客の体験、従業員の実感、企業が持つ資産、社会にある知識や技術をつなぎ、その価値を発見し、可視化し、事業として実装していきます。人にとってより良い状態をつくることと、企業が選ばれ、成長し続けることを分断しない。心地よさを、企業と社会の意思決定を支える新しい価値基準へ変えていくことが、WELLTOPIAの存在意義です。
          </p>
        </motion.div>

        <AudienceGrid
          items={[
            {
              label: "for Business",
              text: "顧客の声、従業員の実感、企業が持つ資産や専門性をつなぎ、CXとEXを描き、試し、測り、改善します。人の心地よさを、選ばれること、働き続けられること、事業が成長することへ変換します。",
            },
            {
              label: "for People",
              text: "一人ひとりの願いや違和感を、個人だけが抱える問題で終わらせません。まだ言葉になっていない実感を見つけ、より良い体験や選択肢として社会に実装します。",
            },
            {
              label: "for Society",
              text: "企業活動と社会的価値を対立させず、人にとってより良い状態をつくることが、持続的な経済価値にもつながる仕組みを育てます。",
            },
          ]}
        />
      </div>
    </section>
  );
}
