"use client";

/**
 * EXPERIENCE / EVALUATION / CO-CREATION の3研究領域が
 * 相互に作用し合っていることを示す図解。
 * 曲線はSVG（装飾のみ・aria-hidden）、ラベルはHTMLテキストとして重ね、
 * どの画面幅でも文字が縮小しすぎないようにしている。
 */
const nodes = [
  { key: "experience", en: "EXPERIENCE", ja: "体験研究", left: "50%", top: "10%" },
  { key: "evaluation", en: "EVALUATION", ja: "評価研究", left: "13%", top: "90%" },
  { key: "co-creation", en: "CO-CREATION", ja: "共創研究", left: "87%", top: "90%" },
] as const;

export default function ResearchFieldsDiagram() {
  return (
    <div
      className="relative mx-auto aspect-[400/360] w-full max-w-[420px]"
      role="img"
      aria-label="体験研究・評価研究・共創研究の3つの研究領域が、相互に研究成果を循環させている図"
    >
      <svg
        viewBox="0 0 400 360"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <marker id="rf-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse">
            <path d="M0,0 L8,4 L0,8 Z" fill="#8fbbe0" />
          </marker>
        </defs>
        <path
          d="M200,40 Q100,170 60,300"
          fill="none"
          stroke="#8fbbe0"
          strokeWidth="1.5"
          markerStart="url(#rf-arrow)"
          markerEnd="url(#rf-arrow)"
        />
        <path
          d="M60,300 Q200,260 340,300"
          fill="none"
          stroke="#8fbbe0"
          strokeWidth="1.5"
          markerStart="url(#rf-arrow)"
          markerEnd="url(#rf-arrow)"
        />
        <path
          d="M340,300 Q300,170 200,40"
          fill="none"
          stroke="#8fbbe0"
          strokeWidth="1.5"
          markerStart="url(#rf-arrow)"
          markerEnd="url(#rf-arrow)"
        />
      </svg>

      {nodes.map((n) => (
        <div
          key={n.key}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-full border border-[#1a4f8a]/20 bg-white px-4 py-3 text-center shadow-sm md:px-5 md:py-4"
          style={{ left: n.left, top: n.top }}
        >
          <span
            className="text-[11px] italic tracking-[0.08em] text-[#1a4f8a] md:text-[12px]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {n.en}
          </span>
          <span className="text-[11px] font-medium text-[#0d2d52] md:text-[12px]">{n.ja}</span>
        </div>
      ))}
    </div>
  );
}
