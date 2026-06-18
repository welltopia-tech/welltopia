import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CALENDLY_URL = "https://calendly.com/haccolina-terasu-story/welltopia";

export async function POST(req: Request) {
  try {
    const { company, name, email, message } = await req.json();

    if (!company || !name || !email) {
      return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 });
    }

    // Google Sheetsに記録
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const timestamp = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: "sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, company, name, email, message || ""]],
      },
    });

    // 申込者へ自動返信メール
    await resend.emails.send({
      from: "WELLTOPIA <onboarding@resend.dev>",
      to: email,
      subject: "【WELLTOPIA】共創力診断のお申込みありがとうございます",
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 48px 32px; color: #374151;">
          <div style="margin-bottom: 40px;">
            <p style="font-size: 11px; letter-spacing: 0.3em; color: #1a4f8a; text-transform: uppercase; margin: 0 0 8px;">Welltopia</p>
            <div style="height: 1px; background: #e5e7eb;"></div>
          </div>

          <p style="font-size: 16px; color: #0d2d52; font-weight: 300; margin: 0 0 32px;">
            ${name} 様
          </p>

          <p style="font-size: 15px; line-height: 1.8; color: #374151; font-weight: 300; margin: 0 0 24px;">
            このたびは、WELLTOPIAの「共創力診断」にお申込みいただき、ありがとうございます。
          </p>

          <p style="font-size: 15px; line-height: 1.8; color: #374151; font-weight: 300; margin: 0 0 24px;">
            新しい成長の糸口を探すうえで、自社だけでは生み出せない価値を、誰と、どのようにつくっていくのか。
          </p>

          <p style="font-size: 15px; line-height: 1.8; color: #374151; font-weight: 300; margin: 0 0 24px;">
            共創力診断では、現在の共創に向けた準備状況や強み、これから整えていくべきポイントを可視化し、次の一歩を具体的にしていきます。
          </p>

          <p style="font-size: 15px; line-height: 1.8; color: #374151; font-weight: 300; margin: 0 0 24px;">
            診断に先立ち、${name} 様が現在感じている課題や、実現したい構想についてお伺いするため、30分ほどの事前ヒアリングを実施しています。
          </p>

          <p style="font-size: 15px; line-height: 1.8; color: #374151; font-weight: 300; margin: 0 0 24px;">
            まだ構想が整理されていない段階でも問題ありません。
          </p>

          <div style="background: #f8f9fa; border-left: 3px solid #1a4f8a; border-radius: 0 12px 12px 0; padding: 20px 24px; margin: 0 0 32px;">
            <p style="font-size: 14px; line-height: 2; color: #374151; font-weight: 300; margin: 0;">
              「新しい事業の可能性を探している」<br>
              「社外との連携を進めたいが、進め方が分からない」<br>
              「自社の強みを、別の価値につなげたい」
            </p>
          </div>

          <p style="font-size: 15px; line-height: 1.8; color: #374151; font-weight: 300; margin: 0 0 32px;">
            といった状況も含め、現在地から一緒に整理させていただきます。
          </p>

          <p style="font-size: 15px; line-height: 1.8; color: #374151; font-weight: 300; margin: 0 0 24px;">
            下記より、ご都合のよい日時をお選びください。
          </p>

          <div style="text-align: center; margin: 0 0 40px;">
            <a href="${CALENDLY_URL}"
               style="display: inline-block; background: #1a4f8a; color: white; text-decoration: none;
                      font-size: 14px; letter-spacing: 0.08em; font-weight: 500;
                      padding: 16px 40px; border-radius: 100px;">
              事前ヒアリングの日程を予約する →
            </a>
          </div>

          <div style="background: #f8f9fa; border-radius: 16px; padding: 24px; margin: 0 0 40px;">
            <p style="font-size: 12px; color: #9ca3af; margin: 0 0 8px; letter-spacing: 0.1em;">お申込み内容</p>
            <p style="font-size: 14px; color: #374151; margin: 4px 0;">会社名：${company}</p>
            <p style="font-size: 14px; color: #374151; margin: 4px 0;">お名前：${name}</p>
            <p style="font-size: 14px; color: #374151; margin: 4px 0;">メール：${email}</p>
            ${message ? `<p style="font-size: 14px; color: #374151; margin: 4px 0;">ご状況：${message}</p>` : ""}
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 24px;">
            <p style="font-size: 12px; color: #9ca3af; margin: 0;">WELLTOPIA</p>
            <p style="font-size: 11px; color: #d1d5db; margin: 4px 0;">人、企業、社会を、もっと健康にする。</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Sheets API error:", error);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }
}
