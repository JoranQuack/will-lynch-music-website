import { google } from "googleapis";

export async function getGoogleSheetsData(
  sheetName: string,
  spreadsheetId: string | undefined
) {
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
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const valueResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: spreadsheetId,
    range: sheetName,
  });

  const gridData = await sheets.spreadsheets.get({
    spreadsheetId: spreadsheetId,
    ranges: [sheetName],
    fields:
      "sheets.data.rowData.values.hyperlink,sheets.data.rowData.values.formattedValue",
  });

  const hyperlinks =
    gridData.data.sheets?.[0]?.data?.[0]?.rowData?.map((row) => {
      return (
        row.values?.map((cell) => cell.hyperlink || cell.formattedValue) || []
      );
    }) || [];

  function extractSampleID(url: string) {
    if (!url) return [];
    return url.split("/")[5];
  }

  function extractHyperlink(cellValue: unknown) {
    if (typeof cellValue === "string" && cellValue.startsWith("=HYPERLINK(")) {
      const match = cellValue.match(/=HYPERLINK\("([^"]+)",[^)]+\)/);
      return match ? match[1] : cellValue;
    }
    return cellValue;
  }

  const unprocessedRequests = valueResponse.data.values || [];
  const requests = unprocessedRequests.slice(1).map((row, rowIndex) => {
    const rowHyperlinks = hyperlinks[rowIndex + 1] || [];

    if (sheetName === "Arrangements") {
      return {
        title: row[0],
        voicings: row[1],
        // Use hyperlink if available, otherwise use extracted value
        smp: rowHyperlinks[2] || extractHyperlink(row[2]),
        smd: rowHyperlinks[3] || extractHyperlink(row[3]),
        arrangedFor: row[4],
        parts: row[5],
        purpose: row[6],
        inspiredBy: row[7],
        genreStyle: row[8],
        tempo: row[9],
        difficulty: row[10],
        sampleID: extractSampleID(row[11]),
      };
    } else {
      return {
        title: row[0],
        voicings: row[1],
        arrangedBy: row[2],
        parts: row[3],
        purpose: row[4],
        inspiredBy: row[5],
        genreStyle: row[6],
        tempo: row[7],
        difficulty: row[8],
        sampleID: extractSampleID(row[9]),
      };
    }
  });

  console.log(requests);

  return requests;
}
