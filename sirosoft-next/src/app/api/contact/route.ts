import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { randomUUID } from "crypto";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  company: z.string().min(1).max(200),
  name: z.string().min(1).max(200),
  email: z.string().email(),
  interests: z.array(z.string()).default([]),
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

async function sendEmail(record: ContactRecord): Promise<boolean> {
  const host = process.env.SMTP_HOST?.trim();
  if (!host) return false;

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth:
        process.env.SMTP_USERNAME && process.env.SMTP_PASSWORD
          ? { user: process.env.SMTP_USERNAME, pass: process.env.SMTP_PASSWORD }
          : undefined,
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? "noreply@sirotech.hu",
      to: process.env.CONTACT_INBOX ?? "info@sirotech.hu",
      replyTo: record.email,
      subject: `[sirotech.hu] Új megkeresés – ${record.company}`,
      text:
        `Új kapcsolatfelvételi üzenet érkezett a sirotech.hu oldalról\n\n` +
        `Cégnév: ${record.company}\n` +
        `Név: ${record.name}\n` +
        `E-mail: ${record.email}\n` +
        `Érdeklődési terület: ${record.interests.length ? record.interests.join(", ") : "-"}\n\n` +
        `Üzenet:\n${record.message || "-"}\n\n` +
        `Időpont: ${record.created_at}`,
    });
    return true;
  } catch (err) {
    console.warn("[contact] SMTP send skipped:", err);
    return false;
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
    const [stored, emailed] = await Promise.all([
      storeInMongo(record),
      sendEmail(record),
    ]);

    return NextResponse.json(
      { success: true, emailed, stored, id: record.id },
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
