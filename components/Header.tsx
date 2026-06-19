"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "なぜ共創力なのか", href: "#why-now" },
  { label: "企業比較", href: "#external-comparison" },
  { label: "診断内容", href: "#diagnosis" },
  { label: "レポート", href: "#report" },
  { label: "実施の流れ", href: "#flow" },
  { label: "料金", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_1px_20px_rgba(13,45,82,0.08)]"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 md:h-[72px] flex items-center justify-between gap-4">
        {/* ロゴ */}
        <a
          href="#"
          className="flex items-baseline gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a4f8a]/40 rounded"
          aria-label="WELLTOPIA 共創力診断 トップへ"
        >
          <span className="text-base md:text-lg font-medium tracking-wide text-[#0d2d52]">
            WELLTOPIA
          </span>
          <span className="hidden sm:inline text-[#1a4f8a]/40">｜</span>
          <span className="hidden sm:inline text-xs md:text-sm font-light text-[#1a4f8a]">
            共創力診断
          </span>
        </a>

        {/* PC ナビ */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-light text-[#374151] hover:text-[#1a4f8a] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a4f8a]/40 rounded px-0.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 右側 */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center bg-[#1a4f8a] text-white text-xs md:text-sm tracking-wide font-medium px-4 md:px-6 py-2.5 rounded-full hover:bg-[#0d2d52] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a4f8a]/40 focus-visible:ring-offset-2"
          >
            共創力診断に申し込む
          </a>

          {/* ハンバーガー */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-[#f0f4fb] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a4f8a]/40"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-[1.5px] bg-[#0d2d52]"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-[#0d2d52]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-[1.5px] bg-[#0d2d52]"
            />
          </button>
        </div>
      </div>

      {/* SP メニュー */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white border-t border-[#e5e7eb]"
            aria-label="モバイルナビゲーション"
          >
            <div className="px-5 py-4 flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="py-3 text-sm font-light text-[#374151] border-b border-[#f0f4fb] last:border-b-0 hover:text-[#1a4f8a] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-4 text-center bg-[#1a4f8a] text-white text-sm font-medium py-3 rounded-full hover:bg-[#0d2d52] transition-colors"
              >
                共創力診断に申し込む
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
