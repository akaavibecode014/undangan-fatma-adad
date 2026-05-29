import { NextResponse } from "next/server";
import { getWishesFromSheet } from "@/lib/googleSheets";

// export const dynamic = 'force-dynamic'; // Dihapus karena membuat server bekerja terlalu keras
export const revalidate = 2; // Cache disimpan selama 2 detik, lalu diperbarui di latar belakang

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
