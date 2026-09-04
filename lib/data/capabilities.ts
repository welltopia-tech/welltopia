export type Capability = {
  num: string;
  en: string;
  ja: string;
  copy: string;
  tags: string[];
};

// 共創マネジメント事業（CCM）の8つのケイパビリティ。
// 研究事業（WELLTOPIA RESEARCH）と混同されないよう、
// 英語名称は必ず「CLIENT INSIGHT & RESEARCH」と表示する。
export const capabilities: Capability[] = [
  {
    num: "01",
    en: "CLIENT INSIGHT & RESEARCH",
    ja: "顧客・組織インサイトリサーチ",
    copy: "まだ言葉になっていない願いを見つける。",
    tags: ["顧客・従業員理解", "市場・ブランド理解", "体験構造の分析"],
  },
  {
    num: "02",
    en: "EXPERIENCE STRATEGY",
    ja: "エクスペリエンス戦略",
    copy: "どんな体験をつくるべきかを描く。",
    tags: ["CX・EX戦略", "体験コンセプト", "ジャーニー・タッチポイント設計", "KPI・改善ロードマップ"],
  },
  {
    num: "03",
    en: "CX DESIGN",
    ja: "顧客体験デザイン",
    copy: "顧客にとっての「心地よい」をつくる。",
    tags: ["商品・サービス体験", "店舗・接客体験", "Web・アプリ体験", "顧客関係・継続体験"],
  },
  {
    num: "04",
    en: "EX DESIGN",
    ja: "従業員体験デザイン",
    copy: "働く人にとっての「心地よい」をつくる。",
    tags: ["組織文化・MVV", "採用・オンボーディング", "エンゲージメント", "働き方・職場体験"],
  },
  {
    num: "05",
    en: "CO-CREATION DESIGN",
    ja: "共創デザイン",
    copy: "一社ではつくれない価値をつくる。",
    tags: ["パートナー探索・連携", "共創コミュニティ", "ワークショップ・対話設計", "共創プロジェクトマネジメント"],
  },
  {
    num: "06",
    en: "NEW VALUE INCUBATION",
    ja: "新規価値・事業開発",
    copy: "願いを、新しい事業やサービスへ変える。",
    tags: ["事業構想", "商品・サービス企画", "PoC・プロトタイピング", "市場導入・事業成長"],
  },
  {
    num: "07",
    en: "CREATIVE & COMMUNICATION",
    ja: "クリエイティブ＆コミュニケーション",
    copy: "体験を、伝わる形へ翻訳する。",
    tags: ["ブランド構築", "Web・コンテンツ", "PR・プロモーション", "社内外コミュニケーション"],
  },
  {
    num: "08",
    en: "MEASURE & OPTIMIZE",
    ja: "体験測定・継続改善",
    copy: "つくって終わらず、測り、育てる。",
    tags: ["CX・EX測定", "NPS・eNPS", "データ分析", "仮説検証・継続改善"],
  },
];
