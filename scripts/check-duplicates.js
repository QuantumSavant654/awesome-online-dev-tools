const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "awesome-list.json");

function loadData() {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

function checkDuplicates() {
  const data = loadData();
  const categories = data.categories;

  const urlMap = new Map();
  const nameMap = new Map();

  for (const [catKey, catValue] of Object.entries(categories)) {
    if (!catValue.tools) continue;
    for (const tool of catValue.tools) {
      if (tool.url) {
        const existing = urlMap.get(tool.url);
        if (existing) {
          console.log(`⚠️ Duplicate URL: "${tool.url}" found in "${tool.name}" and "${existing.name}"`);
        }
        urlMap.set(tool.url, tool);
      }

      const nameLower = tool.name.toLowerCase();
      const existingName = nameMap.get(nameLower);
      if (existingName) {
        console.log(`⚠️ Duplicate name: "${tool.name}" found in category "${catKey}"`);
      }
      nameMap.set(nameLower, tool);
    }
  }

  console.log(`\n✅ Checked ${urlMap.size} unique URLs and ${nameMap.size} unique tool names.\n`);
}

checkDuplicates();
