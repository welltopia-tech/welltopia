"use client";

const navItems = [
  { label: "なぜ共創力なのか", href: "#why-now" },
  { label: "診断内容", href: "#diagnosis" },
  { label: "レポート", href: "#report" },
  { label: "実施の流れ", href: "#flow" },
  { label: "料金", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "申し込む", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d2d52] text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* ロゴ・メッセージ */}
          <div className="max-w-sm">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-xl font-medium tracking-wide">WELLTOPIA</span>
              <span className="text-white/30">｜</span>
              <span className="text-sm font-light text-[#6b9fda]">共創力診断</span>
            </div>
            <p className="text-white/70 font-light leading-relaxed">
              人、企業、社会を、もっと健康にする。
            </p>
          </div>

          {/* ナビ */}
          <nav aria-label="フッターナビゲーション">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-light text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 tracking-wider">
            © {new Date().getFullYear()} WELLTOPIA. All rights reserved.
          </p>
          <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase">
            Co-Creation Assessment
          </p>
        </div>
      </div>
    </footer>
  );
}
