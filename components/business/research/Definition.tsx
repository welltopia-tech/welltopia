"use client";

import { motion } from "framer-motion";
import ResearchFieldsDiagram from "./ResearchFieldsDiagram";

const history = [
  {
    num: "01",
    en: "EXPERIENCE",
    ja: "心地いい体験を研究する。",
    body: "人の感情、身体感覚、行動、記憶、期待、環境。人と何かが接する瞬間に起きていることを捉え、「どのような体験を、人は心地いいと感じるのか」を研究します。ここがCOCOCHI Lab.のすべての研究の原点です。",
    question: "その体験を、何をもって良いと判断するのか。",
  },
  {
    num: "02",
    en: "EVALUATION",
    ja: "評価そのものを研究する。",
    body: "何を評価するのか。誰が評価するのか。定性的な価値をどう捉えるのか。優れた品質とは何か。心地いい体験を評価する研究から始まり、現在では、「評価とは何か」そのものを研究する独立した領域へと発展しています。",
    question: "より良い体験を、どうすれば生み出せるのか。",
  },
  {
    num: "03",
    en: "CO-CREATION",
    ja: "共創そのものを研究する。",
    body: "異なる専門性、企業、生活者、研究者、地域、文化、技術。それらをどのようにつなげれば、新しい価値が生まれるのか。共創が成功する条件、関係性、チーム、対話、プロセス、マネジメントなどを対象に、「共創とは何か」そのものを研究しています。",
    question: null,
  },
];

export default function Definition() {
  return (
    <section id="definition" className="scroll-mt-[130px] bg-[#f8f9fa] px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">WHAT IS COCOCHI Lab.?</span>
          </div>
          <h2
            className="text-[clamp(24px,3.4vw,36px)] font-medium leading-snug text-[#0d2d52]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            すべては、「心地いい体験」の研究から始まりました。
          </h2>
        </motion.div>

        <div className="mb-20 md:mb-28">
          {history.map((h, i) => (
            <div key={h.num}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="border-t border-[#e5e7eb] py-8"
              >
                <div className="mb-4 flex items-baseline gap-4">
                  <span
                    className="text-lg italic text-[#1a4f8a]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {h.num}
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.1em] text-[#6b7280]">{h.en}</span>
                </div>
                <h3
                  className="mb-4 max-w-lg text-[19px] font-medium leading-snug text-[#0d2d52] md:text-[22px]"
                  style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                >
                  {h.ja}
                </h3>
                <p className="max-w-2xl font-light leading-[1.9] text-[#6b7280]">{h.body}</p>
              </motion.div>

              {h.question && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-col items-center gap-2 py-6 text-center"
                >
                  <p className="max-w-md text-[14px] italic leading-relaxed text-[#1a4f8a]/80">
                    「{h.question}」
                  </p>
                  <span className="text-[#1a4f8a]/40" aria-hidden="true">↓</span>
                </motion.div>
              )}
            </div>
          ))}
          <div className="border-t border-[#e5e7eb]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 flex items-center justify-center gap-2.5">
            <span className="h-px w-6 bg-[#1a4f8a]" />
            <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">THREE RESEARCH FIELDS</span>
            <span className="h-px w-6 bg-[#1a4f8a]" />
          </div>
          <p className="mx-auto mb-14 max-w-xl text-center font-light leading-[1.9] text-[#6b7280] md:mb-16">
            現在は、EXPERIENCE｜体験研究、EVALUATION｜評価研究、CO-CREATION｜共創研究の3つを独立した研究領域として持ちながら、相互に研究成果を循環させています。
          </p>

          <ResearchFieldsDiagram />
        </motion.div>
      </div>
    </section>
  );
}
