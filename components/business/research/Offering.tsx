"use client";

import { motion } from "framer-motion";

const offerings = [
  {
    num: "01",
    en: "EVALUATION DESIGN",
    ja: "評価基準を構築する。",
    body: "研究の起点は、「何をもって、良いとするのか」を定義すること。生活者調査、インタビュー、既存データ、専門家知見などをもとに、感覚的・定性的だった価値を評価基準へ変えていきます。",
    flow: ["言語化", "構造化", "評価基準化"],
  },
  {
    num: "02",
    en: "EXPERIENCE RESEARCH",
    ja: "体験を研究する。",
    body: "構築した評価基準をもとに、「その状態は、どのような体験によって生まれるのか」を研究します。人の行動・感情・認識・身体感覚・環境・接点などを捉えながら、価値が生まれる体験の構造を明らかにします。",
    flow: ["行動", "感情", "認識", "身体感覚", "環境", "接点"],
  },
  {
    num: "03",
    en: "CO-CREATION RESEARCH",
    ja: "共創による実現方法を研究する。",
    body: "研究によって明らかになった体験を実現するために必要な、人・企業・専門家・技術・知識・文化・地域・資産をつなぎます。新しい組み合わせによる仮説検証や実証を行い、「どうすれば、その体験を生み出せるのか」を研究します。",
    flow: ["人", "企業", "専門家", "技術", "知識", "文化", "地域", "資産"],
  },
];

export default function Offering() {
  return (
    <section id="offering" className="scroll-mt-[130px] bg-white px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl md:mb-20"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">RESEARCH PARTNERSHIP</span>
          </div>
          <h2
            className="mb-6 text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            まだ答えのない問いを、ともに研究する。
          </h2>
          <p className="font-light leading-[1.9] text-[#6b7280]">
            COCOCHI Lab.では、自主研究だけでなく、企業・自治体・研究機関・教育機関・地域・その他各種団体との受託研究・共同研究を行います。主要な研究提供領域は以下です。
          </p>
        </motion.div>

        <div>
          {offerings.map((o, i) => (
            <motion.div
              key={o.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="grid grid-cols-1 gap-5 border-t border-[#e5e7eb] py-9 md:grid-cols-[64px_1fr] md:gap-10"
            >
              <span
                className="text-lg italic text-[#1a4f8a]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {o.num}
              </span>
              <div>
                <p className="mb-1 text-[11px] font-medium tracking-[0.1em] text-[#6b7280]">{o.en}</p>
                <h3
                  className="mb-4 text-[19px] font-medium text-[#0d2d52]"
                  style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                >
                  {o.ja}
                </h3>
                <p className="mb-5 max-w-2xl font-light leading-relaxed text-[#6b7280]">{o.body}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {o.flow.map((f, fi) => (
                    <span key={f} className="flex items-center gap-2">
                      <span className="rounded border border-[#e5e7eb] px-2.5 py-1 text-[11px] text-[#1a4f8a]">
                        {f}
                      </span>
                      {fi < o.flow.length - 1 && (
                        <span className="text-[#9ca3af]" aria-hidden="true">→</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#e5e7eb]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-20"
        >
          <div className="rounded-xl border border-[#1a4f8a]/20 bg-[#f8f9fa] p-7">
            <p className="mb-2 text-[11px] font-medium tracking-wide text-[#1a4f8a]">COCOCHI Lab.（研究事業）</p>
            <p className="text-[13.5px] leading-relaxed text-[#6b7280]">
              COCOCHI Lab.自身が主体となる研究活動。体験・評価・共創を、自ら問いを立てて探究します。
            </p>
          </div>
          <div className="rounded-xl border border-[#e5e7eb] bg-[#f8f9fa] p-7">
            <p className="mb-2 text-[11px] font-medium tracking-wide text-[#6b7280]">CLIENT INSIGHT &amp; RESEARCH</p>
            <p className="text-[13.5px] leading-relaxed text-[#6b7280]">
              クライアント企業の課題解決を目的とした調査支援。共創マネジメント事業のケイパビリティのひとつです。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
