"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CoCreationGap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="co-creation-gap" ref={ref} className="py-24 md:py-36 bg-[#f8f9fa]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs tracking-[0.3em] text-[#1a4f8a] uppercase font-medium">
            Co-Creation Gap
          </span>
          <h2 className="mt-4 text-[clamp(1.6rem,4vw,2.5rem)] font-light text-[#0d2d52] leading-snug">
            同じ「共創」でも、
            <br />
            成果につながる企業と、
            <br className="md:hidden" />
            途中で止まる企業があります。
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-10 space-y-6 text-[#6b7280] font-light leading-loose"
        >
          <p>
            「共創」「オープンイノベーション」「協業」——言葉はすっかり一般的になりました。
            実際に、他社や地域、研究機関との取り組みを始めている企業も少なくありません。
          </p>
          <p>
            それでも、共創が事業の成果につながる企業と、関係づくりや実証実験のまま止まってしまう企業に分かれます。
            その違いは、相手や運に左右されるものではなく、
            <span className="text-[#0d2d52] font-medium">
              企業そのものに備わった「共創を成果に変える力」
            </span>
            の差にあります。
          </p>
          <p>
            この力は、これまで感覚や個人の経験に頼って語られがちでした。
            WELLTOPIAの共創力診断は、その力を7つの領域から可視化し、
            自社がいま、共創のどの段階にいるのかを明らかにします。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
