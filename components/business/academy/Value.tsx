"use client";

import { motion } from "framer-motion";

const values = [
  {
    num: "01",
    en: "INSIGHT",
    ja: "課題の奥にある可能性を見つける力",
    desc: "表面的な要望だけでなく、その奥にある可能性まで見抜けるようになります。",
  },
  {
    num: "02",
    en: "CONNECTION",
    ja: "人と専門性をつなぐ力",
    desc: "必要な人や専門性を見極め、新しい関係をつくれるようになります。",
  },
  {
    num: "03",
    en: "ALIGNMENT",
    ja: "異なる立場をまとめる力",
    desc: "異なる意見や利害を受け止め、共通の目的へ導けるようになります。",
  },
  {
    num: "04",
    en: "PROJECT DESIGN",
    ja: "共創をプロジェクトにする力",
    desc: "アイデアや対話を、実行可能なプロジェクトへ変えられるようになります。",
  },
  {
    num: "05",
    en: "IMPLEMENTATION",
    ja: "最後まで実装する力",
    desc: "構想で終わらせず、成果が生まれるところまでやり切れるようになります。",
  },
  {
    num: "06",
    en: "CROSS-DISCIPLINE",
    ja: "自分の専門性を越えて価値を生み出す力",
    desc: "自分の専門領域に閉じず、異なる知見を組み合わせて価値を生み出せるようになります。",
  },
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
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">WHAT YOU GAIN</span>
          </div>
          <h2
            className="text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            自分一人では生み出せない価値を、生み出せる人になる。
          </h2>
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
                className="mb-3 text-[16px] font-medium leading-snug text-[#0d2d52]"
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
          自分が何でもできる人ではなく、
          <br />
          必要な可能性をつなげられる人へ。
        </motion.p>
      </div>
    </section>
  );
}
