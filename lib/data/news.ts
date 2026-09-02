export type NewsCategory = "ニュース" | "コラム" | "プレスリリース";

export type NewsItem = {
  date: string; // "2026.05.01" 形式
  category: NewsCategory;
  title: string;
  excerpt?: string; // 一覧カードに表示する要約文
  thumbnail?: string; // 一覧カードのキービジュアル
  href?: string; // 内部ページ or 外部リンク。未指定の場合はリンクなしで表示。
  external?: boolean; // trueの場合は新規タブで開く
};

/**
 * /news（お知らせ一覧）ページ、およびトップページ NEWS セクションで
 * 表示するお知らせ一覧。新しい項目は配列の先頭に追加してください
 * （新着順に表示されます）。
 * 実際の告知・プレスリリースが公開され次第、ここに追加してください。
 */
export const news: NewsItem[] = [];
