"use client";

import { motion } from "framer-motion";

const competencies = [
  { num: "01", en: "DISCOVER", ja: "可能性を見つける", desc: "まだ表面化していない課題、願い、企業資産、専門性、社会の変化を発見する。" },
  { num: "02", en: "CONNECT", ja: "可能性をつなぐ", desc: "必要な人・企業・知識・技術・資産を見つけ、新しい関係を構築する。" },
  { num: "03", en: "ENVISION", ja: "共通の未来を描く", desc: "異なる立場の人たちが共有できる目的や、実現したい未来を描く。" },
  { num: "04", en: "DESIGN", ja: "共創を設計する", desc: "誰と、何を、なぜ、どのようにつくるのか。共創プロジェクトそのものを設計する。" },
  { num: "05", en: "FACILITATE", ja: "力を引き出す", desc: "異なる意見や専門性を受け止め、それぞれの力が発揮される関係をつくる。" },
  { num: "06", en: "MANAGE", ja: "共創を前へ進める", desc: "目的・役割・プロセスを整理し、多様なステークホルダーとプロジェクトを推進する。" },
  { num: "07", en: "IMPLEMENT", ja: "価値を形にする", desc: "対話やアイデアで終わらせず、事業・サービス・体験・仕組みとして社会へ実装する。" },
  { num: "08", en: "EVALUATE", ja: "生まれた価値を測る", desc: "共創によって生まれた変化や体験価値を捉え、次の改善へつなげる。" },
];

export default function Competencies() {
  return (
    <div>
      <p className="mb-10 text-xs tracking-[0.25em] text-[#1a4f8a] md:mb-12">共創マネージャーの8つの能力</p>
      <div className="grid grid-cols-1 gap-x-12 gap-y-0 md:grid-cols-2">
        {competencies.map((c, i) => (
          <motion.div
            key={c.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 + Math.floor(i / 2) * 0.04 }}
            className="grid grid-cols-[52px_1fr] gap-5 border-t border-[#e5e7eb] py-7"
          >
            <span
              className="text-lg italic text-[#1a4f8a]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {c.num}
            </span>
            <div>
              <p className="mb-1 text-[11px] font-medium tracking-[0.1em] text-[#6b7280]">{c.en}</p>
              <h3
                className="mb-2 text-[16px] font-medium text-[#0d2d52]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                {c.ja}
              </h3>
              <p className="text-[13px] font-light leading-relaxed text-[#6b7280]">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="border-t border-[#e5e7eb]" />
    </div>
  );
}
