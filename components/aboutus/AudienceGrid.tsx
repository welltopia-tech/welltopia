"use client";

import { motion } from "framer-motion";

type Item = { label: string; text: string };

export default function AudienceGrid({
  items,
  dark = false,
}: {
  items: [Item, Item, Item];
  dark?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: i * 0.08 }}
          className={`border-t pt-6 ${dark ? "border-white/15" : "border-[#e5e7eb]"}`}
        >
          <span
            className={`mb-3 block text-xs italic tracking-wide ${
              dark ? "text-[#8fbbe0]" : "text-[#1a4f8a]"
            }`}
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {item.label}
          </span>
          <p
            className={`text-[13.5px] leading-relaxed font-light ${
              dark ? "text-white/70" : "text-[#6b7280]"
            }`}
          >
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
