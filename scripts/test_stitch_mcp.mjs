const API_KEY = "AQ.Ab8RN6JdcpEOz5xPg2hkW5zux8Bmk4rl2Lmu00bUzndpj53Buw";
const URL = "https://stitch.googleapis.com/mcp";

async function main() {
  console.log("Calling Stitch MCP endpoint...");
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": API_KEY,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "tools/list",
      params: {}
    })
  });

  console.log("Status:", res.status, res.statusText);
  const text = await res.text();
  console.log("Response:", text);
}

main().catch(console.error);

