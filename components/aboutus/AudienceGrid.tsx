"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Item = { label: string; text: string };

export default function AudienceGrid({
  items,
  dark = false,
}: {
  items: [Item, Item, Item];
  dark?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`border-t text-left ${dark ? "border-white/15" : "border-[#e5e7eb]"}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `audience-panel-${item.label.replace(/\s+/g, "-")}`;

        return (
          <div key={item.label} className={`border-b ${dark ? "border-white/15" : "border-[#e5e7eb]"}`}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className={`flex w-full items-center justify-between gap-6 py-6 text-left transition-colors ${
                dark ? "text-[#8fbbe0] hover:text-white" : "text-[#1a4f8a] hover:text-[#0d2d52]"
              }`}
            >
              <span className="text-sm italic tracking-wide" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                {item.label}
              </span>
              <span
                className={`relative h-4 w-4 flex-shrink-0 ${dark ? "text-white/60" : "text-[#6b7280]"}`}
                aria-hidden="true"
              >
                <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                <span
                  className={`absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 ${
                    isOpen ? "rotate-90 opacity-0" : ""
                  }`}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p
                    className={`pb-6 text-[13.5px] font-light leading-relaxed ${
                      dark ? "text-white/70" : "text-[#6b7280]"
                    }`}
                  >
                    {item.text}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
