"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stages = [
  {
    name: "共創基盤形成",
    en: "Foundation",
    range: "0–49",
    desc: "共創の土台をこれからつくる段階。目的や社内の足並みを整えることから始めます。",
    color: "#6b7280",
  },
  {
    name: "共創準備",
    en: "Preparation",
    range: "50–69",
    desc: "共創に向けた素地が育ちつつある段階。強みを言語化し、相手を選ぶ力を高めます。",
    color: "#1a7a9a",
  },
  {
    name: "共創実装",
    en: "Implementation",
    range: "70–84",
    desc: "共創を具体的なプロジェクトとして動かせる段階。実証から事業実装へ踏み出します。",
    color: "#2d6cb5",
  },
  {
    name: "共創展開",
    en: "Expansion",
    range: "85–100",
    desc: "共創を継続的な成長エンジンにできる段階。経験を次の共創へとつなげていきます。",
    color: "#1a4f8a",
  },
];

const routes = [
  {
    title: "共創力を高める",
    en: "Strengthen",
    color: "#2d8a6b",
    bg: "#e8f5f0",
    desc: "土台や準備の段階にある企業へ。7領域のうち、いま伸ばすべき力にしぼって、共創できる組織づくりを支援します。",
    points: ["共創基準のギャップ整理", "目的・強みの言語化支援", "社内の巻き込み・関係づくり"],
  },
  {
    title: "共創を実装する",
    en: "Implement",
    color: "#1a4f8a",
    bg: "#e8f0fb",
    desc: "実装・展開の段階にある企業へ。具体的なプロジェクト設計からパートナーとの連携まで、共創を成果に変える歩みに伴走します。",
    points: ["共創プロジェクトの企画・設計", "パートナーとのマッチング", "共創マネジメント体制づくり"],
  },
];

export default function AfterDiagnosis() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 md:py-40 bg-[#0d2d52] relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#1a4f8a]/40" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#2d8a6b]/20" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-[#6b9fda] uppercase font-medium">
            After Diagnosis
          </span>
          <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-light text-white leading-tight">
            診断は、終わりではなく
            <br />
            次の一歩の始まりです。
          </h2>
          <p className="mt-6 text-[#6b9fda] font-light text-base max-w-xl mx-auto leading-relaxed">
            スコアは合否ではなく、いまの段階を映すものです。
            状況に合わせて、WELLTOPIAが次の一手をご提案します。
          </p>
        </motion.div>

        {/* 4ステージ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-white/50">
                  {s.en}
                </span>
              </div>
              <p className="text-xs font-mono text-[#6b9fda] mb-1">{s.range}</p>
              <h3 className="text-white text-base font-medium mb-2">{s.name}</h3>
              <p className="text-white/55 text-xs font-light leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 2つの支援ルート */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-white/40 text-xs tracking-[0.2em] uppercase mb-8"
        >
          状況に合わせた、2つの支援ルート
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {routes.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm"
            >
              <div className="rounded-2xl p-5 mb-6" style={{ backgroundColor: r.bg, borderLeft: `3px solid ${r.color}` }}>
                <p className="text-[10px] tracking-[0.25em] font-medium mb-1" style={{ color: r.color }}>
                  {r.en}
                </p>
                <p className="text-[#0d2d52] font-medium text-lg">{r.title}</p>
              </div>
              <p className="text-white/60 font-light text-sm leading-relaxed mb-6">{r.desc}</p>
              <ul className="space-y-2.5">
                {r.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1 h-1 rounded-full bg-white/30 mt-2" />
                    <span className="text-white/70 text-sm font-light">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-12 text-center text-white/60 font-light text-sm"
        >
          どのステージからでも、WELLTOPIAは共に歩みます。
        </motion.p>
      </div>
    </section>
  );
}
