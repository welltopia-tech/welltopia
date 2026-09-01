"use client";

import { useEffect, useRef, useState } from "react";

export type AnchorItem = { id: string; label: string };

/**
 * 事業詳細ページ用のページ内ナビゲーション。
 * PC: 固定ヘッダー直下に横並びで表示し、現在のセクションを強調する。
 * スマートフォン: 同じ構造のまま横スクロールで操作する（開閉は不要な情報量のため）。
 */
export default function PageAnchorNav({ items }: { items: AnchorItem[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="ページ内ナビゲーション"
      className="sticky top-[72px] z-30 border-b border-[#e5e7eb] bg-white/90 backdrop-blur-sm"
    >
      <div
        ref={navRef}
        className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-3.5 [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`shrink-0 text-[11.5px] tracking-[0.12em] transition-colors ${
              active === item.id ? "text-[#1a4f8a]" : "text-[#9ca3af] hover:text-[#0d2d52]"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
