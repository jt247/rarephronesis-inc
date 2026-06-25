import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function buildSubject(data: Record<string, string>): string {
  switch (data.type) {
    case "inquiry": return `New general inquiry from ${data.name}`;
    case "request": return `New service request from ${data.name} — ${data.tier}`;
    case "quote":   return `New quote request from ${data.name} — ${data.service}`;
    default:        return "New contact form submission";
  }
}

function buildBody(data: Record<string, string>): string {
  const lines: string[] = [];
  for (const [k, v] of Object.entries(data)) {
    if (k !== "type" && v) lines.push(`<strong>${k}:</strong> ${v}`);
  }
  return `<p>${lines.join("</p><p>")}</p>`;
}

function confirmationBody(name: string): string {
  return `
    <p>Hi ${name},</p>
    <p>Thanks for reaching out — we've received your message and will get back to you within 1–2 business days to discuss next steps.</p>
    <p>In the meantime, feel free to explore our <a href="https://rarephronesis.com/portfolio">portfolio</a> or <a href="https://rarephronesis.com/services">services page</a>.</p>
    <p>— The Rare Phronesis team</p>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const generalEmail = process.env.CONTACT_EMAIL_INQUIRY ?? "";
    const serviceEmail = process.env.CONTACT_EMAIL_SERVICE ?? "";
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "noreply@rarephronesis.com";

    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const data = (await req.json()) as Record<string, string>;
    const { name, email, type } = data;

    if (!name || !email || !type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const toEmail = type === "inquiry" ? generalEmail : serviceEmail;
    if (!toEmail) {
      return NextResponse.json({ error: "Contact email not configured" }, { status: 500 });
    }

    await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: buildSubject(data),
        html: buildBody(data),
      }),
      resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "We got your message — Rare Phronesis",
        html: confirmationBody(name),
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
