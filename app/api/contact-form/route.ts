import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { company, name, email, tel, type, message } = await req.json();

    if (!company || !name || !email || !message) {
      return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 });
    }

    // Google スプレッドシートに記録
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
      range: "inquiry!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, company, name, email, tel || "", type || "", message]],
      },
    });

    // 送信者へ自動返信メール
    await resend.emails.send({
      from: "WELLTOPIA <onboarding@resend.dev>",
      to: email,
      subject: "【WELLTOPIA】お問い合わせありがとうございます",
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 48px 32px; color: #374151;">
          <div style="margin-bottom: 40px;">
            <p style="font-size: 11px; letter-spacing: 0.3em; color: #0d2d52; text-transform: uppercase; margin: 0 0 8px;">Welltopia</p>
            <div style="height: 1px; background: #e5e7eb;"></div>
          </div>

          <p style="font-size: 16px; color: #0d2d52; font-weight: 300; margin: 0 0 32px;">
            ${name} 様
          </p>

          <p style="font-size: 15px; line-height: 1.8; color: #374151; font-weight: 300; margin: 0 0 24px;">
            このたびは、WELLTOPIAへお問い合わせいただき、誠にありがとうございます。
          </p>

          <p style="font-size: 15px; line-height: 1.8; color: #374151; font-weight: 300; margin: 0 0 32px;">
            内容を確認の上、通常2営業日以内に担当者よりご連絡いたします。今しばらくお待ちください。
          </p>

          <div style="background: #f8f9fa; border-radius: 16px; padding: 24px; margin: 0 0 40px;">
            <p style="font-size: 12px; color: #9ca3af; margin: 0 0 12px; letter-spacing: 0.1em;">お問い合わせ内容</p>
            <p style="font-size: 14px; color: #374151; margin: 4px 0;">会社名：${company}</p>
            <p style="font-size: 14px; color: #374151; margin: 4px 0;">お名前：${name}</p>
            <p style="font-size: 14px; color: #374151; margin: 4px 0;">メール：${email}</p>
            ${tel ? `<p style="font-size: 14px; color: #374151; margin: 4px 0;">電話番号：${tel}</p>` : ""}
            ${type ? `<p style="font-size: 14px; color: #374151; margin: 4px 0;">お問い合わせ種別：${type}</p>` : ""}
            <p style="font-size: 14px; color: #374151; margin: 12px 0 0; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 24px;">
            <p style="font-size: 12px; color: #9ca3af; margin: 0;">WELLTOPIA</p>
            <p style="font-size: 11px; color: #d1d5db; margin: 4px 0;">ウェルビーイングの未来を描き、社会に新しい価値を生み出す。</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("contact-form API error:", error);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }
}
