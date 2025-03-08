import { google } from "googleapis";

export async function getGoogleSheetsData(sheetName: string, spreadsheetId: string | undefined) {
    const auth = await google.auth.getClient({
        projectId: process.env.GOOGLE_PROJECT_ID,
        credentials: {
          type: process.env.GOOGLE_SERVICE_ACCOUNT_TYPE,
          private_key: process.env.GOOGLE_PRIVATE_KEY,
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          client_id: process.env.GOOGLE_CLIENT_ID,
          token_url: process.env.GOOGLE_TOKEN_URI,
          universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN,
        },
        scopes: [
          "https://www.googleapis.com/auth/spreadsheets.readonly",
        ],
      });

  const sheets = google.sheets({ version: "v4", auth });

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: spreadsheetId,
    range: sheetName,
  });

  function extractSampleID(url: string) {
    if (!url) return [];
    return url.split("/")[5];
  }

  const unprocessedRequests = data.data.values || [];
    const requests = unprocessedRequests.slice(1).map((row) => {
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
        sampleID: extractSampleID(row[11])
      };
    });

    console.log(requests);

    return requests;
}