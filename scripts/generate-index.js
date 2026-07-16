const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "awesome-list.json");
const INDEX_FILE = path.join(__dirname, "..", "search-index.json");
const CATEGORIES_DIR = path.join(__dirname, "..", "categories");

function loadData() {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

function generateSearchIndex() {
  const data = loadData();
  const index = [];
  const categories = data.categories;

  for (const [catKey, catValue] of Object.entries(categories)) {
    if (!catValue.tools) continue;
    for (const tool of catValue.tools) {
      index.push({
        name: tool.name,
        url: tool.url,
        description: tool.description,
        category: catKey,
        categoryName: catValue.name,
        tags: tool.tags || [],
        license: tool.license || "",
        pricing: tool.pricing || "free",
        opensource: tool.opensource || false,
        badges: tool.badges || [],
      });
    }
  }

  fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2) + "\n", "utf-8");
  console.log(`\n✅ Search index generated with ${index.length} entries.\n`);
}

function generateCategoryFiles() {
  const data = loadData();
  const categories = data.categories;

  if (!fs.existsSync(CATEGORIES_DIR)) {
    fs.mkdirSync(CATEGORIES_DIR, { recursive: true });
  }

  for (const [catKey, catValue] of Object.entries(categories)) {
    if (!catValue.tools) continue;
    const content = {
      category: catKey,
      name: catValue.name,
      description: catValue.description,
      icon: catValue.icon || "🔧",
      tools: catValue.tools.map((t) => ({
        name: t.name,
        url: t.url,
        description: t.description,
        tags: t.tags,
        license: t.license,
        pricing: t.pricing,
        opensource: t.opensource,
      })),
    };

    const filePath = path.join(CATEGORIES_DIR, `${catKey}.json`);
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + "\n", "utf-8");
  }

  console.log(`✅ Generated ${Object.keys(categories).length} category files.\n`);
}

generateSearchIndex();
generateCategoryFiles();
