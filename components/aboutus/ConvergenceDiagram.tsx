const sources = [
  { label: "人", x: 70, y: 70 },
  { label: "知識", x: 330, y: 70 },
  { label: "技術", x: 370, y: 260 },
  { label: "文化", x: 200, y: 360 },
  { label: "データ", x: 30, y: 260 },
];

export default function ConvergenceDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="convergeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8fbbe0" />
            <stop offset="100%" stopColor="#1a4f8a" />
          </linearGradient>
        </defs>
        {sources.map((s) => (
          <line
            key={s.label}
            x1={s.x}
            y1={s.y}
            x2="200"
            y2="200"
            stroke="url(#convergeGrad)"
            strokeWidth="1"
            opacity="0.5"
          />
        ))}
        {sources.map((s) => (
          <circle key={s.label} cx={s.x} cy={s.y} r="4" fill="#8fbbe0" />
        ))}
        <circle cx="200" cy="200" r="46" fill="#0d2d52" stroke="url(#convergeGrad)" strokeWidth="1.5" />
      </svg>
      {sources.map((s) => (
        <span
          key={s.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-[13px] text-white/85"
          style={{
            top: `${(s.y / 400) * 100}%`,
            left: `${(s.x / 400) * 100}%`,
            fontFamily: "var(--font-noto-serif-jp), serif",
          }}
        >
          {s.label}
        </span>
      ))}
      <span
        className="absolute left-1/2 top-1/2 w-[84px] -translate-x-1/2 -translate-y-1/2 text-center text-[12.5px] leading-tight text-white"
        style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
      >
        体験価値
      </span>
    </div>
  );
}
