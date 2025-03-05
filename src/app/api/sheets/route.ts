import { google } from "googleapis";
import keys from "../../../../spreadsheet-keys.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const auth = await google.auth.getClient({
      projectId: keys.project_id,
      credentials: {
        type: "service_account",
        private_key: keys.private_key,
        client_email: keys.client_email,
        client_id: keys.client_id,
        token_url: keys.token_uri,
        universe_domain: "googleapis.com",
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });
  
    const sheets = google.sheets({ version: "v4", auth });
    const data = await sheets.spreadsheets.values.get({
      spreadsheetId: "1wnGDvRmqgMuHqkRar7EEU5NTQzI7J8fQoYuwYxn5-Gc",
      range: "Arrangements",
    });

    const unprocessedRequests = data.data.values || [];
    const requests = unprocessedRequests.map((row) => {
      return {
        title: row[0],
        voicings: row[1],
        smp: row[2],
        smd: row[3],
        arrangedFor: row[4],
        parts: row[5],
        purpose: row[6],
        inspiredBy: row[7],
        genreStyle: row[8],
        tempo: row[9],
        difficulty: row[10],
      };
    });
     
    return NextResponse.json({ 
      message: "Successfully retrieved data", 
      success: true, 
      data: requests 
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Error getting spreadsheet data", success: false },
      { status: 500 }
    );
  }
}