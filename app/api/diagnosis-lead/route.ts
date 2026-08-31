import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { company, name, email, requestType, result } = await req.json();

    if (!company || !name || !email) {
      return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const timestamp = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
    const catScores = Array.isArray(result?.catScores) ? result.catScores : [];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: "diagnosis!A:P",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          timestamp,
          company,
          name,
          email,
          requestType || "",
          result?.overall ?? "",
          result?.level?.name ? `${result.level.code}（${result.level.name}）` : "",
          result?.type?.name ? `${result.type.code}（${result.type.name}）` : "",
          ...Array.from({ length: 8 }, (_, i) => catScores[i] ?? ""),
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("diagnosis-lead API error:", error);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }
}
