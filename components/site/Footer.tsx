import Link from "next/link";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Business", href: "/#business" },
  { label: "Works", href: "/#works" },
  { label: "Company", href: "/#company" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#0c1c33] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <img
              src="/images/logo/welltopia-white.png"
              alt="WELLTOPIA"
              className="mb-4 h-4 w-auto"
            />
            <p className="font-light leading-relaxed text-white/60">
              心地よさを、社会の新しい価値基準に。
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <span>東京都千代田区神田神保町3丁目11番6号　神保町ビル10階</span>
          <span>© {new Date().getFullYear()} WELLTOPIA Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
