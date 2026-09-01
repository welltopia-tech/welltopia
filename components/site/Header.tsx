"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Business", href: "/#business" },
  { label: "Works", href: "/#works" },
  { label: "Company", href: "/#company" },
];

export default function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const dark = solid || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        dark ? "bg-[#0d2d52]/95 backdrop-blur-sm py-3.5" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 md:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src="/images/logo/welltopia-white.png"
            alt="WELLTOPIA"
            className="h-4 w-auto md:h-[18px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-md border border-white/40 px-5 py-2.5 text-[12.5px] tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
        >
          お問い合わせ
        </Link>
      </div>
    </header>
  );
}
