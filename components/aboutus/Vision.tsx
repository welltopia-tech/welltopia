"use client";

import { motion } from "framer-motion";
import AudienceGrid from "./AudienceGrid";

export default function Vision() {
  return (
    <section className="bg-[#0d2d52] px-5 py-24 text-white md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[minmax(280px,440px)_1fr] md:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/aboutus/cycle-of-possibility.png"
              alt="可能性の循環：1.可能性を見つける、2.つなぎ、共創する、3.新しい価値を生む、4.企業が成長する、5.社会へ還元する、6.次の挑戦がひらく、という循環図"
              className="mx-auto w-full max-w-[420px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#8fbbe0]" />
              <span className="text-xs tracking-[0.25em] text-[#8fbbe0]">VISION</span>
            </div>
            <p className="mb-2 text-sm tracking-wide text-white/60">私たちのつくりたい世界</p>
            <h2 className="mb-3 text-[clamp(24px,3.4vw,36px)] font-medium">可能性の循環</h2>
            <p
              className="mb-8 text-[12px] italic tracking-wide text-[#8fbbe0]/80"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Circle of Possibility
            </p>
            <p className="mb-4 max-w-lg font-light leading-[1.9] text-white/70">
              私たちが目指すのは、誰かの願いが、誰かの知識や技術とつながり、新しい可能性が生まれ続ける社会です。企業の中に眠る資産。生活者が感じている小さな違和感。地域に受け継がれてきた文化。専門家が持つ知識や技術。
            </p>
            <p className="max-w-lg font-light leading-[1.9] text-white/70">
              それらが立場や領域を越えてつながったとき、これまで存在しなかった体験価値が生まれます。生まれた価値が人の態度を変え、企業を成長させ、次の挑戦を生み出していく。願いから価値が生まれ、価値から新しい可能性が生まれる。その循環が社会のいたるところで起きている未来を、WELLTOPIAはつくります。
            </p>
          </motion.div>
        </div>

        <div className="mt-20 md:mt-28">
          <AudienceGrid
            dark
            items={[
              {
                label: "for Business",
                text: "企業が保有する技術、顧客基盤、場所、ブランド、データなどの資産を、新しい顧客体験や事業の可能性へ変えていきます。",
              },
              {
                label: "for People",
                text: "人の願いや違和感が、新しい商品、サービス、働き方、地域体験として社会に反映される状態をつくります。",
              },
              {
                label: "for Society",
                text: "企業成長と社会価値が両立し、ひとつの挑戦が次の挑戦を生み出す持続的な共創の循環を育てます。",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
