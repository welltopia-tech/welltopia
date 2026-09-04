/**
 * お問い合わせページのファーストビュー装飾。
 * ブランドの青系トーンで、しなやかに流れる曲線のリボンを表現する
 * 装飾用SVG（情報を持たないため aria-hidden）。
 */
export default function ContactHeroLines() {
  return (
    <svg
      viewBox="0 0 900 500"
      preserveAspectRatio="xMaxYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M-100,430 C120,460 260,220 460,190 C620,165 700,300 1000,140"
        fill="none"
        stroke="#1a4f8a"
        strokeWidth="2.5"
        opacity="0.5"
      />
      <path
        d="M-100,450 C130,478 270,245 470,212 C630,188 705,320 1000,165"
        fill="none"
        stroke="#1a4f8a"
        strokeWidth="1.5"
        opacity="0.32"
      />
      <path
        d="M-100,470 C140,494 280,268 480,233 C640,210 710,338 1000,188"
        fill="none"
        stroke="#8fbbe0"
        strokeWidth="1.5"
        opacity="0.4"
      />
      <path
        d="M-100,405 C110,438 250,196 450,168 C610,144 695,282 1000,118"
        fill="none"
        stroke="#8fbbe0"
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M-100,490 C150,512 290,290 490,253 C650,230 715,354 1000,208"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}
