import { NextResponse } from "next/server";
import { getWishesFromSheet } from "@/lib/googleSheets";

export async function GET() {
  try {
    if (process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
      const wishes = await getWishesFromSheet();
      return NextResponse.json({ wishes });
    }
    // Return empty array if Google Sheets not configured (awaiting real data)
    return NextResponse.json({
      wishes: [],
    });
  } catch (error) {
    console.error("Wishes Error:", error);
    return NextResponse.json({ wishes: [] });
  }
}
