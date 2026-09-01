"use client";

import { motion } from "framer-motion";

const rows = [
  { label: "社名", value: "株式会社WELLTOPIA" },
  { label: "事業内容", value: "Co-Creation Management　共創マネジメント事業" },
  { label: "代表者", value: "代表取締役CEO　加藤 有希" },
  { label: "本社所在地", value: "東京都千代田区神田神保町3丁目11番6号　神保町ビル10階" },
  { label: "創業", value: "2024年7月" },
  { label: "問い合わせ先", value: "well-topia.com/contact" },
];

export default function Company() {
  return (
    <section id="company" className="bg-white px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">COMPANY</span>
          </div>
          <h2 className="text-[clamp(26px,3.4vw,40px)] font-medium text-[#0d2d52]">会社概要</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-[110px_1fr] gap-4 border-t border-[#e5e7eb] py-4 first:border-t sm:grid-cols-[140px_1fr]">
                <dt className="text-[12.5px] tracking-wide text-[#6b7280]">{r.label}</dt>
                <dd className="text-[14.5px] text-[#0d2d52]">{r.value}</dd>
              </div>
            ))}
            <div className="border-t border-[#e5e7eb]" />
          </motion.dl>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-[#e5e7eb] bg-[#f8f9fa] p-8"
          >
            <span className="mb-5 block text-xs font-medium tracking-wide text-[#1a4f8a]">
              代表プロフィール
            </span>
            <div className="mb-5 flex items-center gap-4">
              <img
                src="/images/company/representative.png"
                alt="代表取締役 加藤有希"
                className="h-16 w-16 flex-none rounded-full object-cover"
              />
              <p
                className="text-[15px] font-medium leading-snug text-[#0d2d52]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                加藤 有希 ── 代表取締役／看護師／健康経営エキスパートアドバイザー
              </p>
            </div>
            <p className="mb-4 text-[13.5px] leading-relaxed text-[#6b7280]">
              慶應義塾大学看護医療学部卒業後、慶應義塾大学病院の血液内科にて看護師として勤務。医療現場で多くの患者と向き合った経験から、「病気になる前から、よりよい未来をつくる」ことを志し、ウェルビーイング領域の事業開発へ。
            </p>
            <p className="text-[13.5px] leading-relaxed text-[#6b7280]">
              おもちゃAED「トイこころ」の社会実装に携わり、AED功労賞最優秀賞を受賞。発酵をテーマに国内外で展開する「HAKKO EXPO」の企画・プロデュースなど、企業・地域・専門家との共創を通じて、健やかさを新しい体験価値へ変える事業を推進している。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
