const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "awesome-list.json");

function loadData() {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

function sortEntries() {
  const data = loadData();
  const categories = data.categories;

  for (const [catKey, catValue] of Object.entries(categories)) {
    if (!catValue.tools) continue;
    catValue.tools.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  }

  const sortedCategories = {};
  const sortedKeys = Object.keys(categories).sort();

  for (const key of sortedKeys) {
    sortedCategories[key] = categories[key];
  }

  data.categories = sortedCategories;

  saveData(data);
  const totalTools = Object.values(categories).reduce((sum, cat) => sum + (cat.tools ? cat.tools.length : 0), 0);
  console.log(`\n✅ Sorted ${totalTools} tools across ${sortedKeys.length} categories.\n`);
}

sortEntries();
