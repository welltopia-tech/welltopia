export type NewsCategory = "PRESS RELEASE" | "MEDIA" | "EVENT" | "NOTICE";

export type NewsItem = {
  date: string; // "2026.05.01" 形式
  category: NewsCategory;
  title: string;
  href?: string; // 内部ページ or 外部リンク。未指定の場合はリンクなしで表示。
  external?: boolean; // trueの場合は新規タブで開く
};

/**
 * トップページ NEWS セクションに表示するお知らせ一覧。
 * 新しい項目は配列の先頭に追加してください（新着順に表示されます）。
 * 実際の告知・プレスリリースが公開され次第、ここに追加してください。
 */
export const news: NewsItem[] = [];
