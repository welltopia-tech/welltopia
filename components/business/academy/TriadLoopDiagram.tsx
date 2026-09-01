"use client";

type Node = { key: string; en: string; ja: string };

/**
 * 3つの要素が一方向に循環していることを示す三角の円環図。
 * 曲線はSVG（装飾のみ・aria-hidden）、ラベルはHTMLテキストとして重ねる。
 */
export default function TriadLoopDiagram({ nodes, label }: { nodes: readonly [Node, Node, Node]; label: string }) {
  const positions = [
    { left: "50%", top: "12%" },
    { left: "84%", top: "70%" },
    { left: "16%", top: "70%" },
  ] as const;

  return (
    <div className="relative mx-auto aspect-[400/360] w-full max-w-[420px]" role="img" aria-label={label}>
      <svg viewBox="0 0 400 360" className="absolute inset-0 h-full w-full" aria-hidden="true" focusable="false">
        <defs>
          <marker id="triad-loop-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#8fbbe0" />
          </marker>
        </defs>
        <path d="M200,40 A150,150 0 0,1 330,255" fill="none" stroke="#8fbbe0" strokeWidth="1.5" markerEnd="url(#triad-loop-arrow)" />
        <path d="M330,255 A150,150 0 0,1 70,255" fill="none" stroke="#8fbbe0" strokeWidth="1.5" markerEnd="url(#triad-loop-arrow)" />
        <path d="M70,255 A150,150 0 0,1 200,40" fill="none" stroke="#8fbbe0" strokeWidth="1.5" markerEnd="url(#triad-loop-arrow)" />
      </svg>

      {nodes.map((n, i) => (
        <div
          key={n.key}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-full border border-[#1a4f8a]/20 bg-white px-4 py-3 text-center shadow-sm md:px-5 md:py-4"
          style={positions[i]}
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
