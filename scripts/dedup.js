const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "awesome-list.json");
const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));

const seen = new Map();
let removed = 0;

for (const [catKey, catValue] of Object.entries(data.categories)) {
  if (!catValue.tools) continue;
  const deduped = [];
  for (const tool of catValue.tools) {
    const key = tool.url || tool.name;
    if (seen.has(key)) {
      removed++;
    } else {
      seen.set(key, true);
      deduped.push(tool);
    }
  }
  catValue.tools = deduped;
}

fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2) + "\n", "utf-8");
console.log(`\n✅ Removed ${removed} duplicate entries. Total unique tools: ${seen.size}`);
