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
            このたびはWELLTOPIA 共創力診断にお申込みいただき、<br>
            誠にありがとうございます。
          </p>

          <p style="font-size: 15px; line-height: 1.8; color: #374151; font-weight: 300; margin: 0 0 40px;">
            次のステップとして、担当者との商談日程をご調整ください。<br>
            以下のURLより、ご都合のよい日時をお選びいただけます。
          </p>

          <div style="text-align: center; margin: 0 0 40px;">
            <a href="${CALENDLY_URL}"
               style="display: inline-block; background: #1a4f8a; color: white; text-decoration: none;
                      font-size: 14px; letter-spacing: 0.08em; font-weight: 500;
                      padding: 16px 40px; border-radius: 100px;">
              商談日程を予約する →
            </a>
          </div>

          <div style="background: #f8f9fa; border-radius: 16px; padding: 24px; margin: 0 0 40px;">
            <p style="font-size: 12px; color: #9ca3af; margin: 0 0 8px; letter-spacing: 0.1em;">お申込み内容</p>
            <p style="font-size: 14px; color: #374151; margin: 4px 0;">会社名：${company}</p>
            <p style="font-size: 14px; color: #374151; margin: 4px 0;">お名前：${name}</p>
            <p style="font-size: 14px; color: #374151; margin: 4px 0;">メール：${email}</p>
            ${message ? `<p style="font-size: 14px; color: #374151; margin: 4px 0;">ご状況：${message}</p>` : ""}
          </div>

          <p style="font-size: 13px; line-height: 1.8; color: #9ca3af; font-weight: 300; margin: 0 0 40px;">
            ご不明な点がございましたら、このメールにご返信ください。<br>
            担当者より改めてご連絡いたします。
          </p>

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
