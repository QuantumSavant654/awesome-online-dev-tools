const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "awesome-list.json");

function loadData() {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

function checkScreenshots() {
  const data = loadData();
  const categories = data.categories;

  let missing = 0;
  let present = 0;

  for (const cat of Object.values(categories)) {
    if (!cat.tools) continue;
    for (const tool of cat.tools) {
      if (tool.screenshot) {
        const screenshotPath = path.join(__dirname, "..", tool.screenshot);
        if (fs.existsSync(screenshotPath)) {
          present++;
        } else {
          console.log(`⚠️ Missing screenshot for "${tool.name}": ${tool.screenshot}`);
          missing++;
        }
      }
    }
  }

  console.log(`\n📸 Screenshot check: ${present} found, ${missing} missing.\n`);
}

checkScreenshots();
