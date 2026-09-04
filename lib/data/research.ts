// COCOCHI Lab.（研究事業）が現在取り組んでいる応用研究テーマ。
// 基礎研究領域（EXPERIENCE / EVALUATION / CO-CREATION）を活用し、
// 特定のテーマに応用する研究として、基礎研究とは区別して扱う。
export type AppliedResearchField = {
  key: "gut" | "fermentation";
  en: string;
  ja: string;
  desc: string;
};

export const appliedResearchFields: AppliedResearchField[] = [
  {
    key: "gut",
    en: "GUT",
    ja: "腸",
    desc: "腸そのものだけではなく、腸内環境と、人の日常体験・身体感覚・心地よさとの関係を研究する。",
  },
  {
    key: "fermentation",
    en: "FERMENTATION",
    ja: "発酵",
    desc: "微生物、人、食材、環境、文化、時間。多様な存在の相互作用によって生まれる発酵を通して、食体験、身体、健康、文化、地域と人の心地よさとの関係を研究する。",
  },
];

export type ResearchProjectType =
  | "PROJECT"
  | "REPORT"
  | "PROOF OF CONCEPT"
  | "JOINT RESEARCH"
  | "PAPER"
  | "EVENT"
  | "FIELDWORK";

export type ResearchProject = {
  type: ResearchProjectType;
  field: "gut" | "fermentation" | "experience" | "evaluation" | "co-creation";
  date: string; // "2026.05" 形式
  title: string;
  summary?: string;
  href?: string;
  external?: boolean;
};

/**
 * COCOCHI Lab.の研究プロジェクト・レポート・実証実験・共同研究・論文・イベント・
 * フィールドワークなどを、カード形式で追加していくためのデータソース。
 * 新しい項目は配列の先頭に追加してください（新着順に表示されます）。
 * 実際の研究成果・実施内容が確定次第、ここに追加してください。
 */
export const researchProjects: ResearchProject[] = [];
