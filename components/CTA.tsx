"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const assurances = [
  "診断後に別サービスの契約は不要です",
  "回答内容を外部へ公開することはありません",
  "業種・企業規模を問わずご利用いただけます",
  "3営業日以内に担当者よりご連絡します",
];

const wishOptions = [
  "共創力診断に申し込みたい",
  "まず詳しい説明を聞きたい",
  "サンプルレポートを見たい",
  "その他",
];

const initialForm = {
  company: "",
  department: "",
  position: "",
  name: "",
  email: "",
  phone: "",
  challenge: "",
  wish: wishOptions[0],
};

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#e5e7eb] text-[#374151] placeholder:text-[#d1d5db] focus:outline-none focus:border-[#1a4f8a]/50 focus:ring-2 focus:ring-[#1a4f8a]/10 transition-all text-sm";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.company || !form.name || !form.email) return;
    setStatus("sending");

    // 既存API（company / name / email / message）に合わせ、追加項目は message に集約
    const message = [
      `希望内容：${form.wish}`,
      form.department ? `部署名：${form.department}` : "",
      form.position ? `役職：${form.position}` : "",
      form.phone ? `電話番号：${form.phone}` : "",
      form.challenge ? `現在感じている共創上の課題：${form.challenge}` : "",
    ]
      .filter(Boolean)
      .join(" / ");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: form.company,
          name: form.name,
          email: form.email,
          message,
          department: form.department,
          position: form.position,
          phone: form.phone,
          challenge: form.challenge,
          wish: form.wish,
        }),
      });
      if (res.ok) {
        setStatus("done");
        setForm(initialForm);
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#f0f4fb] via-[#f0f8ff] to-[#e8f5f0] opacity-50" />
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
          <span className="text-xs tracking-[0.3em] text-[#1a4f8a] uppercase font-medium">Apply</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#1a4f8a]" />
        </motion.div>

        {/* ヘッドライン */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(1.75rem,5vw,3.25rem)] font-light text-[#0d2d52] leading-tight mb-8"
        >
          自社の共創力を、
          <br />
          測ることから始める。
        </motion.h2>

        {/* サブテキスト */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[#6b7280] font-light text-base md:text-lg leading-relaxed mb-14 max-w-xl mx-auto"
        >
          共創力は、感覚で語るものではなく、測れるものです。
          まずは自社の現在地を知ることから、次の一手が見えてきます。
        </motion.p>

        {/* フォーム */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white rounded-3xl border border-[#e5e7eb] shadow-xl shadow-[#1a4f8a]/5 p-8 md:p-12 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-light text-[#0d2d52] mb-8">お申込み・お問い合わせ</h3>

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
                  <label htmlFor="company" className="text-xs tracking-wider text-[#9ca3af] block mb-1.5">
                    会社名 <span className="text-[#e53e3e]">*</span>
                  </label>
                  <input id="company" type="text" name="company" value={form.company} onChange={handleChange} className={inputClass} placeholder="株式会社WELLTOPIA" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="department" className="text-xs tracking-wider text-[#9ca3af] block mb-1.5">部署名（任意）</label>
                    <input id="department" type="text" name="department" value={form.department} onChange={handleChange} className={inputClass} placeholder="新規事業開発部" />
                  </div>
                  <div>
                    <label htmlFor="position" className="text-xs tracking-wider text-[#9ca3af] block mb-1.5">役職（任意）</label>
                    <input id="position" type="text" name="position" value={form.position} onChange={handleChange} className={inputClass} placeholder="部長" />
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="text-xs tracking-wider text-[#9ca3af] block mb-1.5">
                    お名前 <span className="text-[#e53e3e]">*</span>
                  </label>
                  <input id="name" type="text" name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="山田 太郎" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="text-xs tracking-wider text-[#9ca3af] block mb-1.5">
                      メールアドレス <span className="text-[#e53e3e]">*</span>
                    </label>
                    <input id="email" type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="info@company.co.jp" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-xs tracking-wider text-[#9ca3af] block mb-1.5">電話番号（任意）</label>
                    <input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} placeholder="03-0000-0000" />
                  </div>
                </div>

                <div>
                  <label htmlFor="wish" className="text-xs tracking-wider text-[#9ca3af] block mb-1.5">希望内容</label>
                  <select id="wish" name="wish" value={form.wish} onChange={handleChange} className={`${inputClass} appearance-none bg-white`}>
                    {wishOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="challenge" className="text-xs tracking-wider text-[#9ca3af] block mb-1.5">
                    現在感じている共創上の課題（任意）
                  </label>
                  <textarea id="challenge" name="challenge" value={form.challenge} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} placeholder="社外との連携が実証で止まってしまう、社内の巻き込みが進まない など" />
                </div>
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm text-[#e53e3e] text-center">送信に失敗しました。時間をおいて再度お試しください。</p>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "sending" || !form.company || !form.name || !form.email}
                className="mt-8 w-full py-4 bg-[#1a4f8a] text-white text-sm tracking-[0.08em] font-medium rounded-2xl hover:bg-[#0d2d52] transition-all duration-300 shadow-lg shadow-[#1a4f8a]/20 group flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a4f8a]/40 focus-visible:ring-offset-2"
              >
                <span>{status === "sending" ? "送信中..." : "共創力診断に申し込む"}</span>
                {status !== "sending" && (
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </button>

              {/* 安心材料 */}
              <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-left">
                {assurances.map((a) => (
                  <div key={a} className="flex items-start gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#2d8a6b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-[#6b7280] font-light leading-relaxed">{a}</span>
                  </div>
                ))}
              </div>
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
          <p className="text-sm text-[#9ca3af] font-light">人、企業、社会を、もっと健康にする。</p>
        </motion.div>
      </div>
    </section>
  );
}
