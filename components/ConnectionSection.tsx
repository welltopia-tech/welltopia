"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const internal = ["経営層", "従業員", "部門", "知識", "経験"];
const external = ["企業", "地域", "研究者", "技術", "顧客"];
const outcomes = ["新規事業", "顧客価値", "採用・組織", "社会価値", "非連続成長"];

function ConnectionDiagram() {
  return (
    <svg viewBox="0 0 800 460" className="w-full max-w-[820px] mx-auto" aria-hidden="true">
      {/* 接続線：左→中央 */}
      {internal.map((_, i) => {
        const y = 70 + i * 70;
        return <line key={`l${i}`} x1="170" y1={y} x2="400" y2="200" stroke="#1a4f8a" strokeOpacity="0.18" strokeWidth="1.5" />;
      })}
      {/* 右→中央 */}
      {external.map((_, i) => {
        const y = 70 + i * 70;
        return <line key={`r${i}`} x1="630" y1={y} x2="400" y2="200" stroke="#2d8a6b" strokeOpacity="0.18" strokeWidth="1.5" />;
      })}
      {/* 中央→下 */}
      {outcomes.map((_, i) => {
        const x = 160 + i * 120;
        return <line key={`o${i}`} x1="400" y1="200" x2={x} y2="400" stroke="#0d2d52" strokeOpacity="0.15" strokeWidth="1.5" />;
      })}

      {/* 左ノード */}
      {internal.map((label, i) => {
        const y = 70 + i * 70;
        return (
          <g key={`li${i}`}>
            <rect x="60" y={y - 18} width="110" height="36" rx="18" fill="#f0f4fb" stroke="#1a4f8a" strokeOpacity="0.25" />
            <text x="115" y={y + 5} textAnchor="middle" fontSize="13" fill="#1a4f8a">{label}</text>
          </g>
        );
      })}
      {/* 右ノード */}
      {external.map((label, i) => {
        const y = 70 + i * 70;
        return (
          <g key={`ri${i}`}>
            <rect x="630" y={y - 18} width="110" height="36" rx="18" fill="#e8f5f0" stroke="#2d8a6b" strokeOpacity="0.25" />
            <text x="685" y={y + 5} textAnchor="middle" fontSize="13" fill="#2d8a6b">{label}</text>
          </g>
        );
      })}

      {/* ラベル：社内 / 社外 */}
      <text x="115" y="30" textAnchor="middle" fontSize="11" fill="#9ca3af" letterSpacing="2">社内</text>
      <text x="685" y="30" textAnchor="middle" fontSize="11" fill="#9ca3af" letterSpacing="2">社外</text>

      {/* 中央 */}
      <circle cx="400" cy="200" r="68" fill="#1a4f8a" />
      <circle cx="400" cy="200" r="84" fill="none" stroke="#1a4f8a" strokeOpacity="0.2" strokeWidth="1" />
      <text x="400" y="195" textAnchor="middle" fontSize="20" fill="white" fontWeight="500">共創力</text>
      <text x="400" y="216" textAnchor="middle" fontSize="9" fill="#9fc0e8" letterSpacing="2">CO-CREATION</text>

      {/* 下ノード */}
      {outcomes.map((label, i) => {
        const x = 160 + i * 120;
        return (
          <g key={`oi${i}`}>
            <rect x={x - 55} y="382" width="110" height="36" rx="18" fill="#0d2d52" />
            <text x={x} y="405" textAnchor="middle" fontSize="12" fill="white">{label}</text>
          </g>
        );
      })}
      <text x="400" y="450" textAnchor="middle" fontSize="11" fill="#9ca3af" letterSpacing="2">生まれる価値</text>
    </svg>
  );
}

export default function ConnectionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-light text-[#0d2d52] leading-snug">
            社外と共創する力は、
            <br />
            <span className="text-[#1a4f8a] font-medium">社内の共創力</span>
            から始まる。
          </h2>
          <p className="mt-6 text-[#6b7280] font-light leading-loose">
            社内の経営層・従業員・部門が、知識や経験を持ち寄ってつながるとき、組織は外に開く力を持ちます。
            そこに社外の企業・地域・研究者・技術・顧客がつながることで、一社では生み出せなかった価値が生まれます。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
        >
          <ConnectionDiagram />
        </motion.div>
      </div>
    </section>
  );
}
