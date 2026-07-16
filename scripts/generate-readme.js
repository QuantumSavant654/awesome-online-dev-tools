const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "awesome-list.json");
const README_FILE = path.join(__dirname, "..", "README.md");

const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
const categories = data.categories;

const catKeys = Object.keys(categories);
const categoryTitle = (key) => categories[key].name || key;
const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const now = new Date().toISOString().slice(0, 10);

let md = "";

// Header with badges (repo-agnostic, neutral)
md += `<div align="center">\n\n`;
md += `# 🛠 Awesome Online Dev Tools\n\n`;
md += `### A curated, community-driven collection of the best browser-based developer tools\n\n`;
md += `[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)\n`;
md += `[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)\n`;
md += `[![GitHub contributors](https://img.shields.io/github/contributors/QuantumSavant654/awesome-online-dev-tools)](https://github.com/QuantumSavant654/awesome-online-dev-tools/graphs/contributors)\n`;
md += `[![GitHub stars](https://img.shields.io/github/stars/QuantumSavant654/awesome-online-dev-tools?style=social)](https://github.com/QuantumSavant654/awesome-online-dev-tools)\n`;
md += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)\n`;

const totalTools = catKeys.reduce(
  (sum, k) => sum + (categories[k].tools ? categories[k].tools.length : 0),
  0
);
const catCount = catKeys.length;
md += `[![Tools Count](https://img.shields.io/badge/tools-${totalTools}-blue)](#)\n`;
md += `[![Categories](https://img.shields.io/badge/categories-${catCount}-green)](#)\n`;
md += `[![Validate](https://github.com/QuantumSavant654/awesome-online-dev-tools/actions/workflows/validate.yml/badge.svg)](https://github.com/QuantumSavant654/awesome-online-dev-tools/actions/workflows/validate.yml)\n`;
md += `[![Open Source](https://img.shields.io/badge/open%20source-contributions%20welcome-success)](#)\n\n`;
md += `</div>\n\n---\n`;
md += `\n## Why Browser-Based Developer Tools?\n\n`;
md += `**No installation required.** Open a browser tab and start working. Zero setup, zero configuration, zero friction.\n\n`;
md += `**Cross-platform by nature.** Whether you're on macOS, Windows, Linux, or ChromeOS, the same tools work everywhere. No platform-specific builds, no dependency hell.\n\n`;
md += `**Always up to date.** Browser tools update themselves. You always get the latest version without running \`apt upgrade\`, \`brew update\`, or downloading new installers.\n\n`;
md += `**Free and accessible.** The vast majority of online developer tools are free to use. No credit card required, no time-limited trials, no feature gates.\n\n`;
md += `**Privacy-respecting.** Many tools run entirely in your browser — your data never touches a server. For sensitive work like JWTs, certificates, or private keys, this matters.\n\n`;
md += `**Offline capable.** A growing number of tools work offline via Service Workers and WebAssembly. Formatters, validators, encoders, and generators can run with zero network access.\n\n`;
md += `**Collaboration-ready.** Share a URL instead of a screenshot. Send a live playground link instead of copying code into a chat window.\n\n`;
md += `**From anywhere.** Need to validate a JSON payload on your phone? Format YAML on a friend's laptop? Fix a regex from an internet cafe? Online tools are there when your local environment isn't.\n\n`;
md += `---\n`;

// Table of contents (grouped by first letter for brevity)
md += `## Table of Contents\n\n`;
md += `<details>\n<summary><strong>All Categories</strong></summary>\n\n`;
for (const key of catKeys) {
  md += `- [${categoryTitle(key)}](#${slugify(categoryTitle(key))})\n`;
}
md += `\n</details>\n\n---\n`;

// One section per category, listing every tool
for (const key of catKeys) {
  const cat = categories[key];
  md += `## ${categoryTitle(key)}\n\n`;
  if (cat.description) {
    md += `${cat.description}\n\n`;
  }
  const tools = cat.tools || [];
  if (tools.length === 0) {
    md += `_No tools listed yet — [add one](CONTRIBUTING.md)!_\n\n`;
    md += `---\n\n`;
    continue;
  }
  // Sort alphabetically by name
  const sorted = [...tools].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  for (const t of sorted) {
    const badges = [];
    if (t.opensource) badges.push("`open-source`");
    if (t.badges && t.badges.includes("privacy-first"))
      badges.push("`privacy-first`");
    if (t.pricing && t.pricing !== "free") badges.push(`\`${t.pricing}\``);
    const badgeStr = badges.length ? " " + badges.join(" ") : "";
    md += `- 🌐 [${t.name}](${t.url}) — ${t.description}${badgeStr}\n`;
  }
  md += `\n---\n\n`;
}

// Stats
md += `## Statistics\n\n`;
md += `<div align="center">\n\n`;
md += `| Metric | Count |\n|--------|-------|\n`;
md += `| 🛠 Tools | ${totalTools} |\n`;
md += `| 📂 Categories | ${catCount} |\n`;
md += `| ⭐ Open Source | ${data.stats?.openSourcePercent ?? "n/a"}% |\n`;
md += `| 🔒 Privacy-First | ${data.stats?.privacyPercent ?? "n/a"}% |\n`;
md += `| 🤖 AI Tools | ${data.stats?.ai ?? "n/a"} |\n`;
md += `| 🌐 Last Updated | ${now} |\n`;
md += `| 👥 Contributors | Join us! |\n\n`;
md += `</div>\n\n---\n`;

// Contributing
md += `## Contributing\n\n`;
md += `This is a community resource. Contributions are what make it valuable — every tool suggestion, category addition, or improvement helps thousands of developers.\n\n`;
md += `**Quick start:** Add your tool to \`awesome-list.json\` and submit a PR. See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.\n\n`;
md += `<div align="center">\n\n`;
md += `[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)\n`;
md += `[![GitHub contributors](https://img.shields.io/github/contributors/QuantumSavant654/awesome-online-dev-tools)](https://github.com/QuantumSavant654/awesome-online-dev-tools/graphs/contributors)\n`;
md += `[![GitHub issues](https://img.shields.io/github/issues/QuantumSavant654/awesome-online-dev-tools)](https://github.com/QuantumSavant654/awesome-online-dev-tools/issues)\n\n`;
md += `</div>\n\n---\n`;

// License (neutral, no vendor mention)
md += `## License\n\n`;
md += `This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.\n\n`;
md += `The tools listed in this repository are the property of their respective owners. Listing here does not imply endorsement by or affiliation with any tool's operator.\n\n`;
md += `<div align="center">\n\n`;
md += `**Made with ❤️ for the developer community**\n\n`;
md += `[![GitHub stars](https://img.shields.io/github/stars/QuantumSavant654/awesome-online-dev-tools?style=social)](https://github.com/QuantumSavant654/awesome-online-dev-tools)\n`;
md += `[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FQuantumSavant654%2Fawesome-online-dev-tools)](https://twitter.com/intent/tweet?text=Check%20out%20Awesome%20Online%20Dev%20Tools%3A%20https%3A%2F%2Fgithub.com%2FQuantumSavant654%2Fawesome-online-dev-tools)\n\n`;
md += `⭐ Star us on GitHub — it helps developers discover this resource!\n\n`;
md += `</div>\n`;

fs.writeFileSync(README_FILE, md, "utf-8");
console.log(
  `✅ Generated README.md with ${totalTools} tools across ${catCount} categories.`
);
