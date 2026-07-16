const fs = require("fs");
const path = require("path");
const https = require("https");

const DATA_FILE = path.join(__dirname, "..", "awesome-list.json");

function loadData() {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { timeout: 10000 }, (res) => {
      const status = res.statusCode;
      const isOk = status >= 200 && status < 400;
      resolve({ url, status, ok: isOk });
      req.destroy();
    });

    req.on("error", () => {
      resolve({ url, status: 0, ok: false });
    });

    req.on("timeout", () => {
      req.destroy();
      resolve({ url, status: 0, ok: false });
    });
  });
}

async function checkAllUrls() {
  const data = loadData();
  const categories = data.categories;

  const urls = [];
  for (const cat of Object.values(categories)) {
    if (!cat.tools) continue;
    for (const tool of cat.tools) {
      if (tool.url) {
        urls.push({ name: tool.name, url: tool.url });
      }
    }
  }

  console.log(`\n🔍 Checking ${urls.length} URLs...\n`);

  const batchSize = 5;
  const results = [];

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map((u) => checkUrl(u.url)));
    results.push(...batchResults);

    for (let j = 0; j < batch.length; j++) {
      const result = batchResults[j];
      const name = batch[j].name;
      if (result.ok) {
        console.log(`  ✅ ${name} (${result.status})`);
      } else {
        console.log(`  ❌ ${name} - ${result.status || "Failed"}`);
      }
    }
  }

  const failed = results.filter((r) => !r.ok);
  const passed = results.filter((r) => r.ok);

  console.log(`\n📊 Results: ${passed.length} passed, ${failed.length} failed out of ${results.length}\n`);

  if (failed.length > 0) {
    console.log("Failed URLs:");
    for (const f of failed) {
      console.log(`  - ${f.url}`);
    }
    console.log("");
  }

  process.exit(failed.length > 0 ? 1 : 0);
}

checkAllUrls();
