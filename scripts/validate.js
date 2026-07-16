const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "awesome-list.json");
const SCHEMA_FILE = path.join(__dirname, "..", "SCHEMA.md");

function loadData() {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

function validateEntry(entry, category) {
  const errors = [];
  const required = ["name", "url", "description", "category", "tags"];

  for (const field of required) {
    if (!entry[field]) {
      errors.push(`Missing required field "${field}" in "${entry.name || "unnamed"}"`);
    }
  }

  if (entry.url && !entry.url.startsWith("https://")) {
    errors.push(`URL must use HTTPS: ${entry.url} (${entry.name})`);
  }

  if (entry.description && entry.description.length > 200) {
    errors.push(`Description too long (>200 chars) in "${entry.name}"`);
  }

  if (entry.tags) {
    for (const tag of entry.tags) {
      if (!/^[a-z0-9-]+$/.test(tag)) {
        errors.push(`Invalid tag format "${tag}" in "${entry.name}" (use kebab-case)`);
      }
    }
  }

  if (entry.category !== category) {
    errors.push(`Category mismatch: "${entry.name}" has category "${entry.category}" but is in "${category}"`);
  }

  return errors;
}

function validate() {
  const data = loadData();
  let allErrors = [];
  let toolCount = 0;

  const categories = data.categories;

  for (const [catKey, catValue] of Object.entries(categories)) {
    if (!catValue.tools || !Array.isArray(catValue.tools)) {
      allErrors.push(`Category "${catKey}" has no tools array`);
      continue;
    }

    for (const tool of catValue.tools) {
      toolCount++;
      const errors = validateEntry(tool, catKey);
      allErrors.push(...errors);
    }
  }

  if (allErrors.length > 0) {
    console.error(`\n❌ Found ${allErrors.length} validation error(s):\n`);
    for (const err of allErrors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  } else {
    console.log(`\n✅ All ${toolCount} tools across ${Object.keys(categories).length} categories validated successfully.\n`);
  }
}

validate();
