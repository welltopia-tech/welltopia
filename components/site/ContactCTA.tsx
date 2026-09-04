"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="border-t border-white/10 bg-[#0d2d52] px-5 py-24 text-white md:px-10 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl"
      >
        <div className="mb-4 inline-flex items-center gap-2.5">
          <span className="h-px w-6 bg-[#8fbbe0]" />
          <span className="text-xs tracking-[0.25em] text-[#8fbbe0]">CONTACT</span>
        </div>
        <h2
          className="mb-6 max-w-[18ch] text-[clamp(28px,4.6vw,52px)] font-light italic"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Let&rsquo;s create the next <span className="text-[#8fbbe0]">cycle of possibility.</span>
        </h2>
        <p className="mb-9 max-w-xl font-light text-white/70">
          堅いご挨拶も、資料の準備もいりません。まずは、心地よさをめぐる可能性についてお話しさせてください。
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 rounded-md bg-gradient-to-br from-[#8fbbe0] to-[#1a4f8a] px-7 py-4 text-sm font-medium text-[#08182c] transition-transform hover:scale-[1.02]"
        >
          お問い合わせをする →
        </Link>
      </motion.div>
    </section>
  );
}
