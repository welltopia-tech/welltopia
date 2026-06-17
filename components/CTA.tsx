"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ company: "", name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.company || !form.name || !form.email) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("done");
        setForm({ company: "", name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="py-28 md:py-48 bg-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#e8f0fb] via-[#f0f8ff] to-[#e8f5f0] opacity-50" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          viewBox="0 0 1440 600"
          fill="none"
        >
          <ellipse cx="720" cy="300" rx="700" ry="400" stroke="#1a4f8a" strokeWidth="1" />
          <ellipse cx="720" cy="300" rx="500" ry="280" stroke="#1a4f8a" strokeWidth="1" />
          <ellipse cx="720" cy="300" rx="300" ry="160" stroke="#2d8a6b" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* ラベル */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#1a4f8a]" />
          <span className="text-xs tracking-[0.3em] text-[#1a4f8a] uppercase font-medium">
            Apply Now
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#1a4f8a]" />
        </motion.div>

        {/* ヘッドライン */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2rem,5vw,3.75rem)] font-light text-[#0d2d52] leading-tight mb-8"
        >
          自社の共創力を、
          <br />
          今日から可視化する。
        </motion.h2>

        {/* サブテキスト */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[#6b7280] font-light text-lg leading-relaxed mb-14 max-w-xl mx-auto"
        >
          診断は、終わりではなく始まりです。
          <br />
          WELLTOPIAと共に、次の共創への扉を開きましょう。
        </motion.p>

        {/* フォーム */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white rounded-3xl border border-[#e5e7eb] shadow-xl shadow-[#1a4f8a]/5 p-8 md:p-12 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-light text-[#0d2d52] mb-8">お問い合わせ・申込み</h3>

          {status === "done" ? (
            <div className="py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-[#e8f5f0] flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#2d8a6b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-[#0d2d52] font-light text-lg mb-2">送信が完了しました</p>
              <p className="text-[#9ca3af] text-sm font-light">3営業日以内にご連絡いたします。</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 text-left">
                <div>
                  <label className="text-xs tracking-wider text-[#9ca3af] block mb-1.5">
                    会社名 <span className="text-[#e53e3e]">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] text-[#374151] placeholder:text-[#d1d5db] focus:outline-none focus:border-[#1a4f8a]/50 focus:ring-2 focus:ring-[#1a4f8a]/10 transition-all text-sm"
                    placeholder="株式会社WELLTOPIA"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-wider text-[#9ca3af] block mb-1.5">
                    お名前 <span className="text-[#e53e3e]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] text-[#374151] placeholder:text-[#d1d5db] focus:outline-none focus:border-[#1a4f8a]/50 focus:ring-2 focus:ring-[#1a4f8a]/10 transition-all text-sm"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-wider text-[#9ca3af] block mb-1.5">
                    メールアドレス <span className="text-[#e53e3e]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] text-[#374151] placeholder:text-[#d1d5db] focus:outline-none focus:border-[#1a4f8a]/50 focus:ring-2 focus:ring-[#1a4f8a]/10 transition-all text-sm"
                    placeholder="info@company.co.jp"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-wider text-[#9ca3af] block mb-1.5">
                    ご興味・ご状況（任意）
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] text-[#374151] placeholder:text-[#d1d5db] focus:outline-none focus:border-[#1a4f8a]/50 focus:ring-2 focus:ring-[#1a4f8a]/10 transition-all text-sm resize-none"
                    placeholder="共創への関心や現在の取り組みなどをお気軽にお書きください"
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm text-[#e53e3e] text-center">送信に失敗しました。時間をおいて再度お試しください。</p>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "sending" || !form.company || !form.name || !form.email}
                className="mt-8 w-full py-4 bg-[#1a4f8a] text-white text-sm tracking-[0.08em] font-medium rounded-2xl hover:bg-[#0d2d52] transition-all duration-300 shadow-lg shadow-[#1a4f8a]/20 group flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{status === "sending" ? "送信中..." : "申込み内容を送信する"}</span>
                {status !== "sending" && (
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </button>

              <p className="text-center text-xs text-[#9ca3af] mt-4 font-light">
                3営業日以内にご連絡いたします。まずはお気軽にご連絡ください。
              </p>
            </>
          )}
        </motion.div>

        {/* ブランドメッセージ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-20 pt-16 border-t border-[#e5e7eb]"
        >
          <p className="text-xs tracking-[0.4em] text-[#9ca3af] uppercase mb-3">Welltopia</p>
          <p className="text-sm text-[#9ca3af] font-light">
            人、企業、社会を、もっと健康にする。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
