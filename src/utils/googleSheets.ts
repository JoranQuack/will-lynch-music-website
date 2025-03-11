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

  // First, get the values as usual
  const valueResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: spreadsheetId,
    range: sheetName,
  });
  
  // Get the grid data with hyperlinks
  const gridData = await sheets.spreadsheets.get({
    spreadsheetId: spreadsheetId,
    ranges: [sheetName],
    fields: "sheets.data.rowData.values.hyperlink,sheets.data.rowData.values.formattedValue"
  });
  
  const hyperlinks = gridData.data.sheets?.[0]?.data?.[0]?.rowData?.map(row => {
    return row.values?.map(cell => cell.hyperlink || cell.formattedValue) || [];
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
    // Get hyperlinks for this row (add 1 to skip header row)
    const rowHyperlinks = hyperlinks[rowIndex + 1] || [];
    
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
      sampleID: extractSampleID(row[11])
    };
  });

  console.log(requests);

  return requests;
}