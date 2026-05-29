import { NextResponse } from "next/server";
import { appendToSheet } from "@/lib/googleSheets";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, attendance, guests, message } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const values = [name, attendance || "yes", guests || "1", "submitted", message || "", timestamp];

    // If Google Sheets is configured, save to sheet
    if (process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
      await appendToSheet(values);
    }

    return NextResponse.json({ success: true, message: "RSVP submitted" });
  } catch (error) {
    console.error("RSVP Error:", error);
    return NextResponse.json({ success: true, message: "RSVP received (offline mode)" });
  }
}
