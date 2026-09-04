"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

type Step = "input" | "confirm" | "complete";

type FormState = {
  company: string;
  name: string;
  email: string;
  tel: string;
  type: string;
  message: string;
};

const initialForm: FormState = {
  company: "",
  name: "",
  email: "",
  tel: "",
  type: "",
  message: "",
};

const typeOptions = [
  "サービスについて",
  "取材・メディア掲載について",
  "採用について",
  "その他",
];

const inputClass =
  "w-full min-h-[48px] rounded-md border border-[#e5e7eb] bg-white px-4 py-3 text-[16px] text-[#0d2d52] placeholder:text-[#a9b4c2] transition-colors focus:outline-none focus:border-[#1a4f8a] focus:ring-2 focus:ring-[#1a4f8a]/15";

function RequiredBadge() {
  return (
    <span className="rounded bg-[#1a4f8a]/10 px-2 py-0.5 text-[10.5px] font-semibold tracking-wide text-[#1a4f8a]">
      必須
    </span>
  );
}
function OptionalBadge() {
  return (
    <span className="rounded border border-[#e5e7eb] bg-[#f8f9fa] px-2 py-0.5 text-[10.5px] font-semibold tracking-wide text-[#6b7280]">
      任意
    </span>
  );
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<Step>("input");
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | "agree", string>>>({});
  const [agree, setAgree] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  useEffect(() => {
    const topic = searchParams.get("topic");
    if (topic === "academy") {
      setForm((prev) => ({
        ...prev,
        type: "その他",
        message: "共創マネージャー育成事業について伺いたいです。",
      }));
    } else if (topic === "academy-business") {
      setForm((prev) => ({
        ...prev,
        type: "サービスについて",
        message: "FRONPEER（共創マネージャー育成事業）の法人向け育成について伺いたいです。",
      }));
    } else if (topic === "academy-school") {
      setForm((prev) => ({
        ...prev,
        type: "サービスについて",
        message: "FRONPEER SCHOOL（2027年1月開校予定）の情報を受け取りたいです。",
      }));
    } else if (topic === "ccm") {
      setForm((prev) => ({
        ...prev,
        type: "サービスについて",
        message: "共創マネジメント事業（CCM）について伺いたいです。",
      }));
    } else if (topic === "research") {
      setForm((prev) => ({
        ...prev,
        type: "サービスについて",
        message: "COCOCHI Lab.（研究事業）について伺いたいです。",
      }));
    } else if (topic === "research-joint") {
      setForm((prev) => ({
        ...prev,
        type: "サービスについて",
        message: "COCOCHI Lab.との共同研究・受託研究について伺いたいです。",
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  function validate(): boolean {
    const next: Partial<Record<keyof FormState | "agree", string>> = {};
    if (!form.company.trim()) next.company = "会社名は必須項目です。入力してください。";
    if (!form.name.trim()) next.name = "お名前は必須項目です。入力してください。";
    if (!form.email.trim()) {
      next.email = "メールアドレスは必須項目です。入力してください。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "メールアドレスの形式が正しくありません。";
    }
    if (!form.message.trim()) next.message = "お問い合わせ内容は必須項目です。入力してください。";
    if (!agree) next.agree = "プライバシーポリシーへの同意が必要です。";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleReviewSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStep("confirm");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleFinalSubmit() {
    setSending(true);
    setSendError("");
    try {
      const res = await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStep("complete");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSendError("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="mx-auto max-w-[620px] rounded-xl border border-[#e5e7eb] bg-[#f8f9fa] p-7 md:p-12">
      {step === "input" && (
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          noValidate
          onSubmit={handleReviewSubmit}
        >
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2.5">
              <label htmlFor="f-company" className="text-sm font-medium text-[#0d2d52]">会社名</label>
              <RequiredBadge />
            </div>
            <input id="f-company" name="company" type="text" value={form.company} onChange={handleChange}
              placeholder="例）株式会社WELLTOPIA" autoComplete="organization" className={inputClass} />
            {errors.company && <p className="mt-2 text-[12.5px] text-red-600">{errors.company}</p>}
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2.5">
              <label htmlFor="f-name" className="text-sm font-medium text-[#0d2d52]">お名前</label>
              <RequiredBadge />
            </div>
            <input id="f-name" name="name" type="text" value={form.name} onChange={handleChange}
              placeholder="例）山田 太郎" autoComplete="name" className={inputClass} />
            {errors.name && <p className="mt-2 text-[12.5px] text-red-600">{errors.name}</p>}
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2.5">
              <label htmlFor="f-email" className="text-sm font-medium text-[#0d2d52]">メールアドレス</label>
              <RequiredBadge />
            </div>
            <input id="f-email" name="email" type="email" value={form.email} onChange={handleChange}
              placeholder="例）example@company.com" autoComplete="email" className={inputClass} />
            {errors.email && <p className="mt-2 text-[12.5px] text-red-600">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2.5">
              <label htmlFor="f-tel" className="text-sm font-medium text-[#0d2d52]">電話番号</label>
              <OptionalBadge />
            </div>
            <input id="f-tel" name="tel" type="tel" value={form.tel} onChange={handleChange}
              placeholder="例）03-1234-5678" autoComplete="tel" className={inputClass} />
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2.5">
              <label htmlFor="f-type" className="text-sm font-medium text-[#0d2d52]">お問い合わせ種別</label>
              <OptionalBadge />
            </div>
            <select id="f-type" name="type" value={form.type} onChange={handleChange}
              className={`${inputClass} appearance-none bg-white`}>
              <option value="">選択してください</option>
              {typeOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2.5">
              <label htmlFor="f-message" className="text-sm font-medium text-[#0d2d52]">お問い合わせ内容</label>
              <RequiredBadge />
            </div>
            <textarea id="f-message" name="message" rows={6} value={form.message} onChange={handleChange}
              placeholder="例）貴社サービスについて詳しく伺いたいです。" className={`${inputClass} resize-y leading-relaxed`} />
            {errors.message && <p className="mt-2 text-[12.5px] text-red-600">{errors.message}</p>}
          </div>

          <label className="mb-2 flex cursor-pointer items-start gap-2.5 text-[12.5px] leading-relaxed text-[#6b7280]">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)}
              className="mt-0.5 h-4 w-4 flex-none accent-[#1a4f8a]" />
            <span>取得した個人情報は、お問い合わせへの対応以外の目的では使用いたしません。内容に同意の上、送信してください。</span>
          </label>
          {errors.agree && <p className="mb-5 text-[12.5px] text-red-600">{errors.agree}</p>}

          <button type="submit"
            className="mt-2 flex w-full min-h-[50px] items-center justify-center gap-3 rounded-md bg-[#1a4f8a] text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#0d2d52]">
            内容を確認する
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <p className="mt-4 text-center text-[11.5px] text-[#6b7280]">🔒 このフォームはSSLで暗号化されています</p>
        </motion.form>
      )}

      {step === "confirm" && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <dl>
            {([
              ["会社名", form.company],
              ["お名前", form.name],
              ["メールアドレス", form.email],
              ["電話番号", form.tel || "（未入力）"],
              ["お問い合わせ種別", form.type || "（未選択）"],
              ["お問い合わせ内容", form.message],
            ] as const).map(([label, value]) => (
              <div key={label}>
                <dt className="mt-6 text-[11.5px] tracking-wide text-[#6b7280] first:mt-0">{label}</dt>
                <dd className="whitespace-pre-wrap border-b border-[#e5e7eb] pb-4 pt-1.5 text-[15px] text-[#0d2d52]">{value}</dd>
              </div>
            ))}
          </dl>

          {sendError && <p className="mt-5 text-[12.5px] text-red-600">{sendError}</p>}

          <div className="mt-7 flex flex-col gap-3.5 sm:flex-row">
            <button type="button" onClick={() => setStep("input")}
              className="flex min-h-[50px] flex-1 items-center justify-center rounded-md border border-[#e5e7eb] text-sm font-medium text-[#0d2d52] transition-colors hover:border-[#1a4f8a]">
              ← 内容を修正する
            </button>
            <button type="button" onClick={handleFinalSubmit} disabled={sending}
              className="flex min-h-[50px] flex-1 items-center justify-center gap-3 rounded-md bg-[#1a4f8a] text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#0d2d52] disabled:opacity-50">
              {sending ? "送信中…" : "送信する"}
              {!sending && (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              )}
            </button>
          </div>
        </motion.div>
      )}

      {step === "complete" && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="py-4 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a4f8a] text-xl text-white">
            ✓
          </div>
          <h2 className="mb-3.5 text-xl font-medium text-[#0d2d52]">お問い合わせありがとうございます</h2>
          <p className="mx-auto mb-7 max-w-[42ch] text-sm leading-relaxed text-[#6b7280]">
            内容を確認の上、通常2営業日以内に担当者よりご連絡いたします。今しばらくお待ちください。
          </p>
          <Link href="/"
            className="inline-flex min-h-[50px] items-center justify-center rounded-md border border-[#e5e7eb] px-8 text-sm font-medium text-[#0d2d52] transition-colors hover:border-[#1a4f8a]">
            トップページに戻る
          </Link>
        </motion.div>
      )}
    </div>
  );
}
