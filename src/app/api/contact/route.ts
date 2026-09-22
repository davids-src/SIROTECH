import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { randomUUID } from "crypto";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  customer_type: z.enum(["Vállalkozás / intézmény", "Magánszemély"]),
  request_type: z.enum([
    "Új kivitelezés / új rendszer",
    "Meglévő rendszer bővítése",
    "Javítás / hibaelhárítás",
    "Korszerűsítés / csere",
    "Hosszú távú karbantartás / üzemeltetés",
    "Még nem tudom pontosan",
  ]),
  location: z.string().trim().min(1, "A helyszín megadása kötelező").max(100),
  timeframe: z.enum([
    "Sürgős / néhány napon belül",
    "1 hónapon belül",
    "1–3 hónapon belül",
    "3–6 hónapon belül",
    "Később / tervezési szakasz",
  ]),
  name: z.string().trim().min(1, "A név megadása kötelező").max(200),
  company: z.string().trim().max(200).optional().default(""),
  email: z.string().trim().email("Érvénytelen e-mail cím"),
  phone: z.string().trim().max(50).optional().default(""),
  message: z.string().trim().min(1, "Üzenet megadása kötelező").max(5000),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "Az adatvédelmi tájékoztató elfogadása kötelező" }),
  }),
  first_touch: z.string().optional().default("{}"),
  last_touch: z.string().optional().default("{}"),
  landing_page: z.string().optional().default(""),
});

type ContactRecord = z.infer<typeof schema> & {
  id: string;
  created_at: string;
};

// Simple HTML escaper
const escapeHtml = (unsafe: string) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

function generateClientHtmlEmail(record: ContactRecord): string {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://sirotech.hu";
  const phone = process.env.NEXT_PUBLIC_SIRONIC_PHONE || "+36 70 273 5532";
  const adminEmail = process.env.SIROTECH_ADMIN_EMAIL || "hello@sironic.hu";
  const year = new Date().getFullYear();

  const displayName = record.customer_type === "Vállalkozás / intézmény" && record.company ? record.company : record.name;

  return `<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Köszönjük megkeresését! - SIROTECH Kft.</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0A0A0C; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F0F0F5;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0A0A0C; padding: 40px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #111116; border-radius: 12px; border: 1px solid #2A2A35; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
          <tr>
            <td style="height: 5px; background: linear-gradient(90deg, #E8271A 0%, #1A6BE8 33%, #1AE87B 66%, #F5B81C 100%);"></td>
          </tr>
          <tr>
            <td style="padding: 36px 40px 24px 40px; text-align: center; border-bottom: 1px solid #2A2A35;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 800; color: #FFFFFF; letter-spacing: 2px;">
                SIRO<span style="color: #1A6BE8;">TECH</span>
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 12px; color: #8888A0; text-transform: uppercase; letter-spacing: 1.5px;">
                Informatikai és Biztonságtechnikai Kft.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 40px;">
              <h2 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 600; color: #FFFFFF;">
                Tisztelt ${escapeHtml(displayName)}!
              </h2>
              <p style="margin: 0 0 18px 0; font-size: 15px; line-height: 1.6; color: #C0C0D0;">
                Köszönjük, hogy felvette a kapcsolatot a <strong style="color: #FFFFFF;">SIROTECH Kft.</strong>-vel! Megkeresését sikeresen rögzítettük.
              </p>
              <p style="margin: 0 0 28px 0; font-size: 15px; line-height: 1.6; color: #C0C0D0;">
                Szakértő csapatunk megkezdte a megadott információk feldolgozását. Kollégánk <strong style="color: #1AE87B;">1 munkanapon belül</strong> felveszi Önnel a kapcsolatot a megadott elérhetőségek egyikén.
              </p>
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #18181F; border-radius: 8px; border: 1px solid #2A2A35; padding: 20px; margin-bottom: 32px;">
                <tr>
                  <td>
                    <h3 style="margin: 0 0 14px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #8888A0; letter-spacing: 1px;">
                      Az Ön által beküldött megkeresés részletei:
                    </h3>
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="4" style="font-size: 14px; color: #F0F0F5;">
                      <tr><td width="35%" style="color: #8888A0; vertical-align: top; padding: 6px 0;">Ügyfél típusa:</td><td width="65%" style="color: #FFFFFF; font-weight: 600; vertical-align: top; padding: 6px 0;">${escapeHtml(record.customer_type)}</td></tr>
                      <tr><td style="color: #8888A0; vertical-align: top; padding: 6px 0;">Megkeresés típusa:</td><td style="color: #FFFFFF; font-weight: 600; vertical-align: top; padding: 6px 0;">${escapeHtml(record.request_type)}</td></tr>
                      <tr><td style="color: #8888A0; vertical-align: top; padding: 6px 0;">Helyszín:</td><td style="color: #FFFFFF; font-weight: 600; vertical-align: top; padding: 6px 0;">${escapeHtml(record.location)}</td></tr>
                      <tr><td style="color: #8888A0; vertical-align: top; padding: 6px 0;">Időkeret:</td><td style="color: #FFFFFF; font-weight: 600; vertical-align: top; padding: 6px 0;">${escapeHtml(record.timeframe)}</td></tr>
                      <tr><td style="color: #8888A0; vertical-align: top; padding: 6px 0;">Név:</td><td style="color: #FFFFFF; font-weight: 500; vertical-align: top; padding: 6px 0;">${escapeHtml(record.name)}</td></tr>
                      ${record.company ? `<tr><td style="color: #8888A0; vertical-align: top; padding: 6px 0;">Cégnév:</td><td style="color: #FFFFFF; font-weight: 500; vertical-align: top; padding: 6px 0;">${escapeHtml(record.company)}</td></tr>` : ""}
                      <tr><td style="color: #8888A0; vertical-align: top; padding: 6px 0;">E-mail cím:</td><td style="color: #FFFFFF; vertical-align: top; padding: 6px 0;">${escapeHtml(record.email)}</td></tr>
                      <tr><td style="color: #8888A0; vertical-align: top; padding: 6px 0;">Telefonszám:</td><td style="color: #FFFFFF; vertical-align: top; padding: 6px 0;">${escapeHtml(record.phone || 'Nem adta meg')}</td></tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 40px; background-color: #0E0E12; border-top: 1px solid #2A2A35; text-align: center;">
              <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; color: #FFFFFF;">
                SIROTECH Informatikai és Biztonságtechnikai Kft.
              </p>
              <p style="margin: 0 0 12px 0; font-size: 12px; color: #8888A0;">
                8000 Székesfehérvár, Lövölde utca 24. &bull; Tel: <a href="tel:${phone.replace(/\s+/g, '')}" style="color: #1A6BE8; text-decoration: none;">${phone}</a> &bull; E-mail: <a href="mailto:${adminEmail}" style="color: #1A6BE8; text-decoration: none;">${adminEmail}</a>
              </p>
              <p style="margin: 0; font-size: 11px; color: #555566; line-height: 1.4;">
                Ez egy automatikus visszaigazoló üzenet.<br>
                &copy; ${year} SIROTECH Kft. Minden jog fenntartva.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function generateAdminHtmlEmail(record: ContactRecord): string {
  let firstTouchObj = {};
  let lastTouchObj = {};
  try {
    firstTouchObj = JSON.parse(record.first_touch || "{}");
    lastTouchObj = JSON.parse(record.last_touch || "{}");
  } catch (e) {}

  return `<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Új kapcsolatfelvétel - SIROTECH</title>
</head>
<body style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #F4F4F5; margin: 0; padding: 24px; color: #18181B;">
  <div style="max-width: 640px; margin: 0 auto; background: #FFFFFF; border-radius: 8px; border: 1px solid #E4E4E7; overflow: hidden;">
    <div style="background-color: #0A0A0C; padding: 20px 24px; border-bottom: 3px solid #1A6BE8;">
      <h2 style="color: #FFFFFF; margin: 0; font-size: 18px; font-weight: 700;">
        🔔 Új kapcsolatfelvételi üzenet érkezett
      </h2>
      <p style="color: #8888A0; margin: 4px 0 0 0; font-size: 13px;">
        Forrás: sirotech.hu űrlap
      </p>
    </div>

    <div style="padding: 24px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A; width: 35%;">Ügyfél típusa:</th><td style="padding: 10px; border-bottom: 1px solid #F4F4F5; font-weight: 700; color: #1A6BE8;">${escapeHtml(record.customer_type)}</td></tr>
        <tr><th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A;">Megkeresés típusa:</th><td style="padding: 10px; border-bottom: 1px solid #F4F4F5; font-weight: 700;">${escapeHtml(record.request_type)}</td></tr>
        <tr><th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A;">Helyszín:</th><td style="padding: 10px; border-bottom: 1px solid #F4F4F5;">${escapeHtml(record.location)}</td></tr>
        <tr><th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A;">Időkeret:</th><td style="padding: 10px; border-bottom: 1px solid #F4F4F5;">${escapeHtml(record.timeframe)}</td></tr>
        <tr><th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A;">Név:</th><td style="padding: 10px; border-bottom: 1px solid #F4F4F5; font-weight: 600;">${escapeHtml(record.name)}</td></tr>
        <tr><th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A;">Cégnév:</th><td style="padding: 10px; border-bottom: 1px solid #F4F4F5; font-weight: 600;">${escapeHtml(record.company || '-')}</td></tr>
        <tr><th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A;">E-mail:</th><td style="padding: 10px; border-bottom: 1px solid #F4F4F5;"><a href="mailto:${escapeHtml(record.email)}" style="color: #1A6BE8; text-decoration: none; font-weight: 500;">${escapeHtml(record.email)}</a></td></tr>
        <tr><th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A;">Telefon:</th><td style="padding: 10px; border-bottom: 1px solid #F4F4F5;">${record.phone ? `<a href="tel:${escapeHtml(record.phone.replace(/\s+/g, ''))}" style="color: #1A6BE8; text-decoration: none;">${escapeHtml(record.phone)}</a>` : '-'}</td></tr>
        <tr><th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A; vertical-align: top;">Üzenet:</th><td style="padding: 10px; border-bottom: 1px solid #F4F4F5; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(record.message)}</td></tr>
        <tr><th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A;">Landing Page:</th><td style="padding: 10px; border-bottom: 1px solid #F4F4F5; color: #71717A;">${escapeHtml(record.landing_page || '-')}</td></tr>
      </table>
      <div style="margin-top: 24px;">
        <h3 style="font-size: 14px; color: #71717A; margin-bottom: 12px;">Attribution Adatok</h3>
        <pre style="background: #F4F4F5; padding: 12px; border-radius: 6px; font-size: 11px; color: #52525B; overflow-x: auto;">
<b>First Touch:</b>
${escapeHtml(JSON.stringify(firstTouchObj, null, 2))}

<b>Last Touch:</b>
${escapeHtml(JSON.stringify(lastTouchObj, null, 2))}
        </pre>
      </div>
    </div>
  </div>
</body>
</html>`;
}

async function sendEmails(record: ContactRecord): Promise<{ adminSent: boolean; clientSent: boolean }> {
  const host = process.env.SMTP_HOST?.trim();
  if (!host) {
    console.warn("[contact] SMTP_HOST is not configured. Email dispatch skipped.");
    return { adminSent: false, clientSent: false };
  }

  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER || process.env.SMTP_USERNAME;
  const pass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM || user || "noreply@sirotech.hu";
  const adminEmail = process.env.SIROTECH_ADMIN_EMAIL || process.env.CONTACT_INBOX || "hello@sironic.hu";

  const siteCode = "SIROTECH";
  const subject = `[${siteCode}] ${record.request_type} | ${record.customer_type} | ${record.location}`;

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: user && pass ? { user, pass } : undefined,
    });

    // 1. Admin Email
    const adminMailPromise = transporter.sendMail({
      from: `"SIROTECH Webform" <${from}>`,
      to: adminEmail,
      replyTo: record.email,
      subject,
      html: generateAdminHtmlEmail(record),
    }).then(() => true).catch((err) => {
      console.error("[contact] Admin email dispatch failed:", err);
      return false;
    });

    // 2. Client Confirmation Email
    const clientMailPromise = transporter.sendMail({
      from: `"SIROTECH Kft." <${from}>`,
      to: record.email,
      replyTo: adminEmail,
      subject: `Köszönjük megkeresését! | SIROTECH Kft.`,
      html: generateClientHtmlEmail(record),
    }).then(() => true).catch((err) => {
      console.error("[contact] Client confirmation email dispatch failed:", err);
      return false;
    });

    const [adminSent, clientSent] = await Promise.all([adminMailPromise, clientMailPromise]);
    return { adminSent, clientSent };
  } catch (err) {
    console.error("[contact] SMTP transporter error:", err);
    return { adminSent: false, clientSent: false };
  }
}

export async function POST(req: Request) {
  const raw = await req.json().catch(() => null);
  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "validation_error",
        details: parsed.error.flatten(),
      },
      { status: 422 }
    );
  }

  const record: ContactRecord = {
    ...parsed.data,
    id: randomUUID(),
    created_at: new Date().toISOString(),
  };

  try {
    const emailResult = await sendEmails(record);

    return NextResponse.json(
      {
        success: true,
        emailed: emailResult.adminSent || emailResult.clientSent,
        emailDetails: emailResult,
        id: record.id,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "server_error" },
      { status: 500 }
    );
  }
}
