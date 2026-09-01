const nodes = [
  { num: "01", label: "願い", top: "4%", left: "50%" },
  { num: "02", label: "接続", top: "27%", left: "92%" },
  { num: "03", label: "体験価値", top: "73%", left: "92%" },
  { num: "04", label: "態度変容", top: "96%", left: "50%" },
  { num: "05", label: "次なる\n可能性", top: "73%", left: "8%" },
  { num: "06", label: "つながり", top: "27%", left: "8%" },
];

export default function CycleDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="cycleGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8fbbe0" />
            <stop offset="100%" stopColor="#1a4f8a" />
          </linearGradient>
          <marker id="cycleArrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill="#8fbbe0" />
          </marker>
        </defs>
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="url(#cycleGrad)"
          strokeWidth="1.4"
          strokeDasharray="4 10"
          markerEnd="url(#cycleArrow)"
          transform="rotate(-2 200 200)"
        />
        <circle cx="200" cy="50" r="4" fill="#8fbbe0" />
        <circle cx="368" cy="108" r="4" fill="#8fbbe0" />
        <circle cx="368" cy="292" r="4" fill="#8fbbe0" />
        <circle cx="200" cy="350" r="4" fill="#8fbbe0" />
        <circle cx="32" cy="292" r="4" fill="#8fbbe0" />
        <circle cx="32" cy="108" r="4" fill="#8fbbe0" />
      </svg>
      {nodes.map((n) => (
        <div
          key={n.num}
          className="absolute w-[110px] -translate-x-1/2 -translate-y-1/2 text-center"
          style={{ top: n.top, left: n.left }}
        >
          <span
            className="mb-1 block text-[12px] italic text-[#8fbbe0]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {n.num}
          </span>
          <span
            className="whitespace-pre-line text-[13px] leading-relaxed text-white"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            {n.label}
          </span>
        </div>
      ))}
    </div>
  );
}
