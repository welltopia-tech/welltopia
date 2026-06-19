"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function DetailAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="rounded-2xl border border-[#e5e7eb] overflow-hidden">
      {details.map((d, i) => (
        <div key={d.label} className="border-b border-[#e5e7eb] last:border-b-0">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-[#f8f9fa] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a4f8a]/30"
          >
            <span className="flex items-center gap-3">
              <span className="text-sm font-medium text-[#0d2d52]">{d.label}</span>
              <span className="text-xs font-mono text-[#1a4f8a]">{d.score}</span>
            </span>
            <svg
              className={`w-4 h-4 text-[#1a4f8a] transition-transform ${open === i ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 text-sm text-[#6b7280] font-light leading-relaxed">{d.text}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

const axes = [
  { label: "存在目的の明確化", en: "Purpose", value: 88 },
  { label: "価値設計力", en: "Value Design", value: 85 },
  { label: "資源編集力", en: "Resource Edit", value: 78 },
  { label: "関係構築力", en: "Relationship", value: 75 },
  { label: "役割設計力", en: "Role Design", value: 80 },
  { label: "共創マネジメント力", en: "Management", value: 92 },
  { label: "成長転換力", en: "Growth", value: 68 },
];

const actions = [
  {
    priority: "最優先",
    color: "#1a4f8a",
    bg: "#e8f0fb",
    title: "成長転換力を高める仕組みづくり",
    desc: "唯一60点台の成長転換力を改善するため、共創の経験を振り返り、次の共創に活かす学習サイクルを設計する。",
  },
  {
    priority: "推奨",
    color: "#2d8a6b",
    bg: "#e8f5f0",
    title: "関係構築力の底上げ",
    desc: "外部パートナーとの信頼関係を深めるため、初期段階での目的・期待値のすり合わせプロセスを整える。",
  },
  {
    priority: "継続",
    color: "#1a7a9a",
    bg: "#e8f4f8",
    title: "共創マネジメント力の横展開",
    desc: "最高スコア92点の強みを全社に波及させるため、推進ノウハウのナレッジベース化を進める。",
  },
];

const details = [
  {
    label: "存在目的の明確化",
    score: 88,
    text: "なぜ共創するのかという目的が明確で、外部にも自社の使命として伝えられています。共創の出発点が強固です。",
  },
  {
    label: "共創マネジメント力",
    score: 92,
    text: "異なる組織との協働を推進し続ける力が突出しています。プロジェクトを前に進める実行力が貴社の強みです。",
  },
  {
    label: "成長転換力",
    score: 68,
    text: "共創の経験を学習資産として次につなげる仕組みに伸び代があります。ここを強化することで共創の速度が大きく向上します。",
  },
];

// SVGレーダーチャート
function RadarChart({ animated }: { animated: boolean }) {
  const cx = 200;
  const cy = 200;
  const maxR = 140;
  const n = axes.length;

  const getPoint = (index: number, radius: number) => {
    const angle = (Math.PI * 2 * index) / n - Math.PI / 2;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  };

  const gridLevels = [0.25, 0.5, 0.75, 1];

  const dataPath = (progress: number) => {
    return axes
      .map((axis, i) => {
        const r = (axis.value / 100) * maxR * progress;
        const p = getPoint(i, r);
        return `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
      })
      .join(" ") + " Z";
  };

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!animated) return;
    let start: number | null = null;
    const duration = 1200;
    const raf = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const p = Math.min(elapsed / duration, 1);
      // ease out quart
      setProgress(1 - Math.pow(1 - p, 4));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [animated]);

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-[360px] mx-auto">
      {/* グリッド */}
      {gridLevels.map((level, li) => {
        const points = axes.map((_, i) => {
          const p = getPoint(i, maxR * level);
          return `${p.x.toFixed(2)},${p.y.toFixed(2)}`;
        });
        return (
          <polygon
            key={li}
            points={points.join(" ")}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        );
      })}

      {/* 軸線 */}
      {axes.map((_, i) => {
        const outer = getPoint(i, maxR);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={outer.x.toFixed(2)}
            y2={outer.y.toFixed(2)}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        );
      })}

      {/* データ塗りつぶし */}
      <path
        d={dataPath(progress)}
        fill="#1a4f8a"
        fillOpacity="0.12"
        stroke="none"
      />

      {/* データ枠線 */}
      <path
        d={dataPath(progress)}
        fill="none"
        stroke="#1a4f8a"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* データ点 */}
      {axes.map((axis, i) => {
        const r = (axis.value / 100) * maxR * progress;
        const p = getPoint(i, r);
        return (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4"
            fill="#1a4f8a"
            stroke="white"
            strokeWidth="2"
          />
        );
      })}

      {/* 軸ラベル */}
      {axes.map((axis, i) => {
        const labelR = maxR + 28;
        const p = getPoint(i, labelR);
        const anchor =
          p.x < cx - 5 ? "end" : p.x > cx + 5 ? "start" : "middle";
        return (
          <g key={i}>
            <text
              x={p.x}
              y={p.y - 4}
              textAnchor={anchor}
              fontSize="11"
              fill="#374151"
              fontWeight="500"
            >
              {axis.label}
            </text>
            <text
              x={p.x}
              y={p.y + 10}
              textAnchor={anchor}
              fontSize="10"
              fill="#9ca3af"
            >
              {axis.value}
            </text>
          </g>
        );
      })}

      {/* 中心スコア */}
      <text x={cx} y={cy - 8} textAnchor="middle" fontSize="22" fontWeight="300" fill="#0d2d52">
        81
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize="10" fill="#9ca3af" letterSpacing="2">
        TOTAL
      </text>
    </svg>
  );
}

export default function DiagnosisResult() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="report" ref={ref} className="py-28 md:py-40 bg-[#f8f9fa] relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#e8f0fb] to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#e8f5f0] to-transparent opacity-50" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="text-xs tracking-[0.3em] text-[#1a4f8a] uppercase font-medium">
            Report
          </span>
          <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-light text-[#0d2d52] leading-tight">
            診断後、自社の現在地と
            <br />
            次の一手が届きます。
          </h2>
          <p className="mt-4 text-[#9ca3af] text-sm font-light">
            ※ 下記は架空企業のサンプルレポートです
          </p>
        </motion.div>

        {/* 診断カード本体 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 bg-white rounded-3xl shadow-2xl shadow-[#1a4f8a]/8 border border-[#e5e7eb] overflow-hidden"
        >
          {/* カードヘッダー */}
          <div className="bg-[#0d2d52] px-8 md:px-12 py-8 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#1a4f8a]/40" />
              <div className="absolute -bottom-8 left-1/3 w-48 h-48 rounded-full bg-[#2d8a6b]/20" />
              <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="card-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#card-dots)" />
              </svg>
            </div>
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* 会社名・日付 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2d8a6b]" />
                  <span className="text-xs tracking-[0.3em] text-[#6b9fda] uppercase">
                    Welltopia 共創力診断レポート
                  </span>
                </div>
                <h3 className="text-white text-2xl font-light">株式会社サンプル</h3>
                <p className="text-[#6b9fda] text-sm mt-1 font-light">
                  新規事業開発部 / 診断実施日：2025年11月
                </p>
              </div>

              {/* スコア・ランク */}
              <div className="flex items-center gap-6 md:gap-10">
                {/* 総合スコア */}
                <div className="text-center">
                  <div className="text-xs tracking-[0.2em] text-[#6b9fda] mb-1">TOTAL SCORE</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl md:text-6xl font-light text-white">81</span>
                    <span className="text-xl text-[#6b9fda]">/100</span>
                  </div>
                </div>

                <div className="w-px h-14 bg-white/10" />

                {/* ランク */}
                <div className="text-center">
                  <div className="text-xs tracking-[0.2em] text-[#6b9fda] mb-1">RANK</div>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-light text-white">A</span>
                    <div>
                      <div className="text-xs text-[#2d8a6b] bg-[#2d8a6b]/20 px-2.5 py-1 rounded-full font-medium whitespace-nowrap">
                        共創実装型
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* カードボディ */}
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* レーダーチャート */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-4 rounded-full bg-[#1a4f8a]" />
                  <h4 className="text-sm font-medium text-[#0d2d52] tracking-wider">
                    7軸スコア分布
                  </h4>
                </div>
                <RadarChart animated={inView} />

                {/* 凡例 */}
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 justify-center">
                  {axes.map((axis) => (
                    <div key={axis.label} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#1a4f8a]" />
                      <span className="text-xs text-[#6b7280]">{axis.label}</span>
                      <span className="text-xs font-mono text-[#1a4f8a]">{axis.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 右カラム */}
              <div className="space-y-8">
                {/* 総合所見 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-4 rounded-full bg-[#2d8a6b]" />
                    <h4 className="text-sm font-medium text-[#0d2d52] tracking-wider">
                      総合所見
                    </h4>
                  </div>
                  <div className="bg-[#f8f9fa] rounded-2xl p-5 border border-[#e5e7eb]">
                    <p className="text-[#374151] font-light text-sm leading-loose">
                      貴社は共創の<strong className="text-[#1a4f8a] font-medium">実装フェーズに到達</strong>しています。
                      特に共創マネジメント力（92点）と存在目的の明確化（88点）が高く、
                      外部パートナーを巻き込んだプロジェクト推進の素地が整っています。
                      一方、成長転換力（68点）に伸び代があり、
                      この点を強化することで共創の速度が大きく向上する見込みです。
                    </p>
                  </div>
                </div>

                {/* 推奨アクション */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-4 rounded-full bg-[#1a7a9a]" />
                    <h4 className="text-sm font-medium text-[#0d2d52] tracking-wider">
                      推奨アクション
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {actions.map((action, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 16 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.12, duration: 0.6 }}
                        className="rounded-2xl border p-4"
                        style={{ borderColor: action.color + "25", backgroundColor: action.bg }}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className="flex-shrink-0 text-[10px] tracking-wider font-medium px-2 py-0.5 rounded-full mt-0.5"
                            style={{ color: action.color, backgroundColor: action.color + "18" }}
                          >
                            {action.priority}
                          </span>
                          <div>
                            <p className="text-sm font-medium text-[#0d2d52] mb-1">{action.title}</p>
                            <p className="text-xs text-[#6b7280] font-light leading-relaxed">{action.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 領域別詳細（アコーディオン） */}
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-4 rounded-full bg-[#0d2d52]" />
                <h4 className="text-sm font-medium text-[#0d2d52] tracking-wider">領域別の詳細</h4>
              </div>
              <DetailAccordion />
            </div>

            {/* フッター */}
            <div className="mt-10 pt-8 border-t border-[#e5e7eb] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#e8f0fb] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#1a4f8a]" />
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af]">診断・分析</p>
                  <p className="text-sm text-[#374151] font-light">WELLTOPIA 共創アナリストチーム</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#9ca3af]">次のステップ</p>
                <p className="text-sm font-medium text-[#1a4f8a]">
                  フィードバックセッション（90分）→ 共創パートナー参画提案
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 誘導テキスト */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center text-[#9ca3af] text-sm font-light mt-10"
        >
          このようなレポートが、診断後2週間以内に手元に届きます。
        </motion.p>
      </div>
    </section>
  );
}
