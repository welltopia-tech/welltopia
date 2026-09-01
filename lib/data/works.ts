export type WorkCase = {
  tag: string;
  meta: string;
  title: string;
  partners: string;
  /** どの事業に関連するプロジェクトか（未設定 = 事業横断） */
  business?: "co-creation-management" | "research" | "co-creation-manager";
  /** 活用したケイパビリティ（lib/data/capabilities.ts の en と対応） */
  capabilities?: string[];
  /** WLM（WELLTOPIA LADDER METHOD）の実施フェーズ */
  ccmPhases?: string[];
  /** 体験価値がどう変化したかの一言（データが揃い次第、順次追加） */
  experienceChange?: string;
  /**
   * 事例詳細ページ用の拡張データ（BEFORE〜NEXT POSSIBILITY）。
   * 現時点で確定した内容がないため、型のみ用意し値は空にしている。
   * データが揃った事例から順次埋めていく。
   */
  detail?: {
    before?: string;
    discovery?: string;
    experienceGap?: string;
    coCreation?: string;
    design?: string;
    implementation?: string;
    measurement?: string;
    after?: string;
    nextPossibility?: string;
  };
};

// サイト内で共通利用する共創プロジェクトの実績データ。
// TOPページ・私たちについてページ・共創マネジメント事業ページで
// 同じデータを参照し、重複入力を避ける。
export const works: WorkCase[] = [
  {
    tag: "CASE 01",
    meta: "JAPAN — 2025.07",
    title: "日韓越境体験 共創プロジェクト「81/82 ―ハチイチハチニ―」",
    partners: "共創パートナー｜FLYING JAPAN・ユニゾンシステムズ・terasu",
    business: "co-creation-management",
    capabilities: ["CO-CREATION DESIGN", "EXPERIENCE STRATEGY"],
    ccmPhases: ["CONNECT", "CREATE"],
  },
  {
    tag: "CASE 02",
    meta: "LOS ANGELES — 2026.02",
    title: "発酵博覧会 国際共創プロジェクト「HAKKO EXPO & MARKET in LA」",
    partners:
      "雪国・新潟の発酵文化をテーマに、現地の来場者・料理関係者など約2,500名へ発信。共創パートナー｜SUZU GROUP・JACCC・terasu",
    business: "co-creation-management",
    capabilities: ["CO-CREATION DESIGN", "CREATIVE & COMMUNICATION"],
    ccmPhases: ["CONNECT", "IMPLEMENT"],
  },
  {
    tag: "CASE 03",
    meta: "JAPAN — 2024.11",
    title: "AED認知委員会「おもちゃAED トイこころ」開発",
    partners: "共創パートナー｜坂野電機工業所・スワニー・terasu",
    business: "co-creation-management",
    capabilities: ["NEW VALUE INCUBATION", "CX DESIGN"],
    ccmPhases: ["CREATE", "IMPLEMENT"],
  },
  {
    tag: "CASE 04",
    meta: "JAPAN — 2026.03〜",
    title: "WELLTOPIA NIGHT プロジェクト",
    partners: "心地よさを軸にした共創コミュニティイベントを継続的に展開中。",
  },
];
