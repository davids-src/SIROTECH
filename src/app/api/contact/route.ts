import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { randomUUID } from "crypto";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  interest: z.string().min(1).max(200),
  company: z.string().min(1).max(200),
  email: z.string().email(),
  phone: z.string().max(50).optional().default(""),
  message: z.string().max(5000).optional().default(""),
});

type ContactRecord = z.infer<typeof schema> & {
  id: string;
  created_at: string;
};

async function storeInMongo(record: ContactRecord): Promise<boolean> {
  const url = process.env.MONGO_URL?.trim();
  if (!url) return false;
  try {
    const { MongoClient } = await import("mongodb");
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(process.env.DB_NAME || "sirotech");
    await db.collection("contact_messages").insertOne({ ...record });
    await client.close();
    return true;
  } catch (err) {
    console.warn("[contact] Mongo insert skipped:", err);
    return false;
  }
}

function generateClientHtmlEmail(record: ContactRecord): string {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://sirotech.hu";
  const phone = process.env.NEXT_PUBLIC_SIRONIC_PHONE || "+36 70 273 5532";
  const adminEmail = process.env.SIROTECH_ADMIN_EMAIL || "hello@sironic.hu";
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Köszönjük megkeresését! - SIROTECH Kft.</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0A0A0C; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F0F0F5; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0A0A0C; padding: 40px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #111116; border-radius: 12px; border: 1px solid #2A2A35; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
          
          <!-- Top Accent Bar (Brand Divisions Colors) -->
          <tr>
            <td style="height: 5px; background: linear-gradient(90deg, #E8271A 0%, #1A6BE8 33%, #1AE87B 66%, #F5B81C 100%);"></td>
          </tr>

          <!-- Header -->
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

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px 40px;">
              <h2 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 600; color: #FFFFFF;">
                Tisztelt ${record.company}!
              </h2>
              <p style="margin: 0 0 18px 0; font-size: 15px; line-height: 1.6; color: #C0C0D0;">
                Köszönjük, hogy felvette a kapcsolatot a <strong style="color: #FFFFFF;">SIROTECH Kft.</strong>-vel! Megkeresését sikeresen rögzítettük.
              </p>
              <p style="margin: 0 0 28px 0; font-size: 15px; line-height: 1.6; color: #C0C0D0;">
                Szakértő csapatunk megkezdte a megadott információk feldolgozását. Kollégánk <strong style="color: #1AE87B;">1 munkanapon belül</strong> felveszi Önnel a kapcsolatot a megadott elérhetőségek egyikén.
              </p>

              <!-- Summary Box -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #18181F; border-radius: 8px; border: 1px solid #2A2A35; padding: 20px; margin-bottom: 32px;">
                <tr>
                  <td>
                    <h3 style="margin: 0 0 14px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #8888A0; letter-spacing: 1px;">
                      Az Ön által beküldött megkeresés részletei:
                    </h3>
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="4" style="font-size: 14px; color: #F0F0F5;">
                      <tr>
                        <td width="35%" style="color: #8888A0; vertical-align: top; padding: 6px 0;">Érdeklődés:</td>
                        <td width="65%" style="color: #FFFFFF; font-weight: 600; vertical-align: top; padding: 6px 0;">${record.interest}</td>
                      </tr>
                      <tr>
                        <td style="color: #8888A0; vertical-align: top; padding: 6px 0;">Cégnév / Név:</td>
                        <td style="color: #FFFFFF; font-weight: 500; vertical-align: top; padding: 6px 0;">${record.company}</td>
                      </tr>
                      <tr>
                        <td style="color: #8888A0; vertical-align: top; padding: 6px 0;">E-mail cím:</td>
                        <td style="color: #FFFFFF; vertical-align: top; padding: 6px 0;">${record.email}</td>
                      </tr>
                      <tr>
                        <td style="color: #8888A0; vertical-align: top; padding: 6px 0;">Telefonszám:</td>
                        <td style="color: #FFFFFF; vertical-align: top; padding: 6px 0;">${record.phone || 'Nem adta meg'}</td>
                      </tr>
                      ${record.message ? `
                      <tr>
                        <td style="color: #8888A0; vertical-align: top; padding: 6px 0;">Üzenet:</td>
                        <td style="color: #C0C0D0; vertical-align: top; padding: 6px 0; font-style: italic;">"${record.message}"</td>
                      </tr>` : ''}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Marketing Highlight Section -->
              <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 700; color: #FFFFFF;">
                Komplex Technológiai és Biztonsági Megoldások Egy Kézből
              </h3>

              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #2A2A35;">
                    <div style="font-weight: 700; color: #E8271A; font-size: 14px;">SIRONIC &mdash; IT Infrastruktúra & Üzemeltetés</div>
                    <div style="font-size: 13px; color: #8888A0; margin-top: 3px;">Rendszergazdai szolgáltatások, szerver- és hálózatkezelés, biztonságos felhő infrastruktúra.</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #2A2A35;">
                    <div style="font-weight: 700; color: #1A6BE8; font-size: 14px;">SIRO-VÉD &mdash; Biztonságtechnika & Távfelügyelet</div>
                    <div style="font-size: 13px; color: #8888A0; margin-top: 3px;">Ipari kamerarendszerek, okos riasztók, beléptetők és 24/7 diszpécserközpont.</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #2A2A35;">
                    <div style="font-weight: 700; color: #1AE87B; font-size: 14px;">SIROSOFT &mdash; Egyedi Szoftverfejlesztés</div>
                    <div style="font-size: 13px; color: #8888A0; margin-top: 3px;">Vállalati CRM/ERP rendszerek, webes felületek és üzleti folyamatautomatizálás.</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <div style="font-weight: 700; color: #F5B81C; font-size: 14px;">SIROVILL &mdash; Villanyszerelés & Kivitelezés</div>
                    <div style="font-size: 13px; color: #8888A0; margin-top: 3px;">Erős- és gyengeáramú hálózatépítés, ipari villamosság és intelligens épületek.</div>
                  </td>
                </tr>
              </table>

              <!-- Call to Action -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="text-align: center; margin-top: 10px;">
                <tr>
                  <td>
                    <a href="${appUrl}" target="_blank" style="display: inline-block; background-color: #1A6BE8; color: #FFFFFF; font-weight: 600; font-size: 14px; text-decoration: none; padding: 14px 28px; border-radius: 6px;">
                      Weboldal Megtekintése &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #0E0E12; border-top: 1px solid #2A2A35; text-align: center;">
              <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; color: #FFFFFF;">
                SIROTECH Informatikai és Biztonságtechnikai Kft.
              </p>
              <p style="margin: 0 0 12px 0; font-size: 12px; color: #8888A0;">
                8000 Székesfehérvár, Lövölde utca 24. &bull; Tel: <a href="tel:${phone.replace(/\s+/g, '')}" style="color: #1A6BE8; text-decoration: none;">${phone}</a> &bull; E-mail: <a href="mailto:${adminEmail}" style="color: #1A6BE8; text-decoration: none;">${adminEmail}</a>
              </p>
              <p style="margin: 0; font-size: 11px; color: #555566; line-height: 1.4;">
                Ez egy automatikus visszaigazoló üzenet. Amennyiben sürgős kérdése van, hívja bizalommal ügyfélszolgálatunkat.<br>
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
        Forrás: sirotech.hu kapcsolatfelvételi űrlap
      </p>
    </div>

    <div style="padding: 24px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A; width: 30%;">Érdeklődési terület:</th>
          <td style="padding: 10px; border-bottom: 1px solid #F4F4F5; font-weight: 700; color: #1A6BE8;">${record.interest}</td>
        </tr>
        <tr>
          <th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A;">Cégnév / Név:</th>
          <td style="padding: 10px; border-bottom: 1px solid #F4F4F5; font-weight: 600;">${record.company}</td>
        </tr>
        <tr>
          <th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A;">E-mail cím:</th>
          <td style="padding: 10px; border-bottom: 1px solid #F4F4F5;">
            <a href="mailto:${record.email}" style="color: #1A6BE8; text-decoration: none; font-weight: 500;">${record.email}</a>
          </td>
        </tr>
        <tr>
          <th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A;">Telefonszám:</th>
          <td style="padding: 10px; border-bottom: 1px solid #F4F4F5;">
            ${record.phone ? `<a href="tel:${record.phone.replace(/\s+/g, '')}" style="color: #1A6BE8; text-decoration: none;">${record.phone}</a>` : '<span style="color: #A1A1AA;">-</span>'}
          </td>
        </tr>
        <tr>
          <th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A; vertical-align: top;">Üzenet:</th>
          <td style="padding: 10px; border-bottom: 1px solid #F4F4F5; line-height: 1.5; white-space: pre-wrap;">${record.message || '-'}</td>
        </tr>
        <tr>
          <th style="padding: 10px; border-bottom: 1px solid #F4F4F5; text-align: left; color: #71717A;">Időpont:</th>
          <td style="padding: 10px; border-bottom: 1px solid #F4F4F5; color: #71717A;">${record.created_at}</td>
        </tr>
        <tr>
          <th style="padding: 10px; text-align: left; color: #71717A;">ID:</th>
          <td style="padding: 10px; font-family: monospace; color: #71717A; font-size: 12px;">${record.id}</td>
        </tr>
      </table>
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
      subject: `[SIROTECH Megkeresés] ${record.company} - ${record.interest}`,
      text:
        `Új kapcsolatfelvételi üzenet érkezett a sirotech.hu oldalról\n\n` +
        `Érdeklődési terület: ${record.interest}\n` +
        `Cégnév / Név: ${record.company}\n` +
        `E-mail: ${record.email}\n` +
        `Telefon: ${record.phone || "-"}\n\n` +
        `Üzenet:\n${record.message || "-"}\n\n` +
        `Időpont: ${record.created_at}\n` +
        `ID: ${record.id}`,
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
      subject: `Köszönjük megkeresését! | SIROTECH Informatikai és Biztonságtechnikai Kft.`,
      text:
        `Tisztelt ${record.company}!\n\n` +
        `Köszönjük, hogy felvette a kapcsolatot a SIROTECH Kft.-vel!\n` +
        `Megkeresését sikeresen rögzítettük, és kollégánk 1 munkanapon belül felveszi Önnel a kapcsolatot.\n\n` +
        `Az Ön által megadott adatok:\n` +
        `- Érdeklődés: ${record.interest}\n` +
        `- Cégnév / Név: ${record.company}\n` +
        `- E-mail: ${record.email}\n` +
        `- Telefon: ${record.phone || "-"}\n` +
        `- Üzenet: ${record.message || "-"}\n\n` +
        `Üdvözlettel,\n` +
        `SIROTECH Informatikai és Biztonságtechnikai Kft.\n` +
        `https://sirotech.hu`,
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
    const [stored, emailResult] = await Promise.all([
      storeInMongo(record),
      sendEmails(record),
    ]);

    return NextResponse.json(
      {
        success: true,
        emailed: emailResult.adminSent || emailResult.clientSent,
        emailDetails: emailResult,
        stored,
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
