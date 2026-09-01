const nodes = [
  { num: "01", label: "人にとっての\nより良さ", top: "6%", left: "50%" },
  { num: "02", label: "企業の\n成長", top: "50%", left: "94%" },
  { num: "03", label: "社会への\n価値還元", top: "94%", left: "50%" },
  { num: "04", label: "次なる\n可能性", top: "50%", left: "6%" },
];

export default function CycleDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="cycleGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8fbbe0" />
            <stop offset="100%" stopColor="#1a4f8a" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="150" fill="none" stroke="url(#cycleGrad)" strokeWidth="1.4" />
        <circle cx="200" cy="50" r="4" fill="#8fbbe0" />
        <circle cx="350" cy="200" r="4" fill="#8fbbe0" />
        <circle cx="200" cy="350" r="4" fill="#8fbbe0" />
        <circle cx="50" cy="200" r="4" fill="#8fbbe0" />
      </svg>
      {nodes.map((n) => (
        <div
          key={n.num}
          className="absolute w-[132px] -translate-x-1/2 -translate-y-1/2 text-center"
          style={{ top: n.top, left: n.left }}
        >
          <span
            className="mb-1 block text-[13px] italic text-[#8fbbe0]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {n.num}
          </span>
          <span
            className="whitespace-pre-line text-[13.5px] leading-relaxed text-white"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            {n.label}
          </span>
        </div>
      ))}
    </div>
  );
}
