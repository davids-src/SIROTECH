import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";
import { randomUUID } from "crypto";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  company: z.string().min(1).max(200),
  name: z.string().min(1).max(200),
  email: z.string().email(),
  interests: z.array(z.string()).default([]),
  message: z.string().max(5000).optional().default(""),
});

let cachedClient: MongoClient | null = null;
async function getMongo() {
  if (cachedClient) return cachedClient;
  const url = process.env.MONGO_URL;
  if (!url) throw new Error("MONGO_URL is not configured");
  cachedClient = new MongoClient(url);
  await cachedClient.connect();
  return cachedClient;
}

async function sendEmail(record: {
  company: string;
  name: string;
  email: string;
  interests: string[];
  message: string;
  created_at: string;
}): Promise<boolean> {
  const host = process.env.SMTP_HOST?.trim();
  if (!host) return false;

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
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "validation_error", details: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const record = {
    id: randomUUID(),
    ...parsed.data,
    created_at: new Date().toISOString(),
    email_sent: false,
  };

  try {
    record.email_sent = await sendEmail(record);
  } catch (err) {
    console.warn("Contact email failed:", err);
  }

  try {
    const client = await getMongo();
    const db = client.db(process.env.DB_NAME);
    await db.collection("contact_messages").insertOne({ ...record });
  } catch (err) {
    console.error("Mongo insert failed:", err);
    return NextResponse.json({ error: "storage_error" }, { status: 500 });
  }

  return NextResponse.json(record, { status: 200 });
}
