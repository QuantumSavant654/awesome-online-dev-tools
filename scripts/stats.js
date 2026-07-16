const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "awesome-list.json");

function loadData() {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

function generateStats() {
  const data = loadData();
  const categories = data.categories;

  const totalCategories = Object.keys(categories).length;
  let totalTools = 0;
  let openSourceCount = 0;
  let privacyFirstCount = 0;
  let aiToolsCount = 0;
  let offlineCount = 0;

  for (const cat of Object.values(categories)) {
    if (!cat.tools) continue;
    for (const tool of cat.tools) {
      totalTools++;
      if (tool.opensource) openSourceCount++;
      if (tool.badges && tool.badges.includes("privacy-first")) privacyFirstCount++;
      if (tool.badges && tool.badges.includes("ai-powered")) aiToolsCount++;
      if (tool.badges && tool.badges.includes("offline")) offlineCount++;
    }
  }

  const openSourcePct = totalTools > 0 ? Math.round((openSourceCount / totalTools) * 100) : 0;
  const privacyFirstPct = totalTools > 0 ? Math.round((privacyFirstCount / totalTools) * 100) : 0;

  const stats = {
    totalTools,
    totalCategories,
    openSourceCount,
    openSourcePercent: openSourcePct,
    privacyFirstCount,
    privacyFirstPercent: privacyFirstPct,
    aiToolsCount,
    offlineCount,
    lastUpdated: new Date().toISOString().split("T")[0],
  };

  const statsFile = path.join(__dirname, "..", "stats.json");
  fs.writeFileSync(statsFile, JSON.stringify(stats, null, 2) + "\n", "utf-8");

  console.log("\n📊 Statistics Generated:");
  console.log(`   Tools: ${totalTools}`);
  console.log(`   Categories: ${totalCategories}`);
  console.log(`   Open Source: ${openSourceCount} (${openSourcePct}%)`);
  console.log(`   Privacy-First: ${privacyFirstCount} (${privacyFirstPct}%)`);
  console.log(`   AI Tools: ${aiToolsCount}`);
  console.log(`   Offline Capable: ${offlineCount}`);
  console.log(`   Last Updated: ${stats.lastUpdated}\n`);
}

generateStats();
