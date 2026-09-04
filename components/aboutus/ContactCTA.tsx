"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutContactCTA() {
  return (
    <section className="border-t border-white/10 bg-[#0d2d52] px-5 py-24 text-white md:px-10 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="mb-6 flex items-center justify-center gap-2.5">
          <span className="h-px w-6 bg-[#8fbbe0]" />
          <span className="text-xs tracking-[0.25em] text-[#8fbbe0]">CONTACT</span>
          <span className="h-px w-6 bg-[#8fbbe0]" />
        </div>
        <h2
          className="mb-8 text-[clamp(26px,4.4vw,48px)] font-light italic"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          GET IN TOUCH WITH US.
        </h2>
        <p className="mx-auto mb-10 max-w-lg font-light leading-[1.9] text-white/70">
          まだ、課題が明確になっていなくても構いません。まだ言葉になっていない願いや違和感から、私たちに聞かせてください。人、企業、社会にとって、より良い体験を一緒に考えます。
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 rounded-md bg-gradient-to-br from-[#8fbbe0] to-[#1a4f8a] px-8 py-4 text-sm font-medium text-white shadow-lg shadow-[#1a4f8a]/20 transition-transform hover:scale-[1.02]"
        >
          WELLTOPIAに相談する →
        </Link>
      </motion.div>
    </section>
  );
}
