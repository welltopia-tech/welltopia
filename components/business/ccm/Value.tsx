"use client";

import { motion } from "framer-motion";

const values = [
  { num: "01", en: "SHARED VISION", ja: "共通の未来", desc: "部署や企業を越えて共有できる、目指す未来と判断軸。" },
  { num: "02", en: "EXPERIENCE STANDARD", ja: "体験価値の基準", desc: "顧客や従業員に、どのような体験を提供するのかを判断する基準。" },
  { num: "03", en: "RELATIONSHIP ASSET", ja: "関係性という資産", desc: "プロジェクト後も継続する、企業、地域、専門家、生活者との関係。" },
  { num: "04", en: "IMPLEMENTATION SYSTEM", ja: "実装の仕組み", desc: "アイデアをPoC、事業化、改善へ進めるためのプロセスと運用体制。" },
  { num: "05", en: "MEASUREMENT SYSTEM", ja: "測定・評価の仕組み", desc: "体験価値と共創の成果を、感覚だけでなくデータで把握する基準。" },
  { num: "06", en: "CO-CREATION CAPABILITY", ja: "共創できる組織能力", desc: "次のプロジェクトを自ら生み出し、前進させられる人材と知識。" },
];

export default function Value() {
  return (
    <section id="value" className="scroll-mt-[130px] bg-[#f8f9fa] px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl md:mb-20"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">WHAT REMAINS</span>
          </div>
          <h2
            className="mb-6 text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            CCMがつくるのは、ひとつの成果物だけではない。
          </h2>
          <p className="font-light leading-[1.9] text-[#6b7280]">
            プロジェクトが終了したあとにも、企業の中に知識、関係性、判断基準、人材、仕組みが残る。それが、WELLTOPIAの共創マネジメントです。
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 md:mb-24 lg:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-t border-[#e5e7eb] pt-6"
            >
              <span
                className="mb-3 block text-lg italic text-[#1a4f8a]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {v.num}
              </span>
              <p className="mb-1 text-[10.5px] font-medium tracking-[0.08em] text-[#6b7280]">{v.en}</p>
              <h3
                className="mb-3 text-[17px] font-medium text-[#0d2d52]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                {v.ja}
              </h3>
              <p className="text-[13.5px] font-light leading-relaxed text-[#6b7280]">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center text-[20px] font-medium leading-relaxed text-[#0d2d52] md:text-[26px]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          成果物を納品するだけではない。
          <br />
          次の価値を生み出せる企業へ変わる。
        </motion.p>
      </div>
    </section>
  );
}
