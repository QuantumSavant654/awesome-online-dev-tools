const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "awesome-list.json");

// LangStop is held to one tool per category: the one that best fits it.
// validate.js enforces the limit.
const PICKS = {
  "ai-tools": "AI Prompt Generator",
  "api-tools": "REST API Client",
  "base64-encoding": "Base64 Converter",
  "cli-tools": "Linux Command Builders",
  "color-tools": "Color Workbench",
  "config-tools": "Connection String Builder",
  converters: "JSON to YAML",
  "css-tools": "CSS Specificity Calculator",
  "csv-tools": "CSV to JSON",
  "database-tools": "ER Diagram Generator",
  "diff-tools": "JSON Diff",
  "encoding-tools": "URL Encoder",
  formatters: "JavaScript Formatter",
  generators: "JSON Schema GUI Builder",
  hashing: "Hash Generator",
  "html-tools": "HTML Formatter",
  "javascript-tools": "JavaScript Minifier",
  "json-tools": "JSON Formatter",
  "jwt-tools": "JWT Decoder",
  "linux-tools": "Chmod Command Builder",
  markdown: "Markdown Editor",
  "mock-data": "JSON Mock Data Generator",
  networking: "Curl Command Builder",
  openapi: "OpenAPI Diff",
  productivity: "Resume Builder",
  regex: "Regex Tester",
  security: "Password Generator",
  "sql-tools": "SQL Formatter",
  "system-design": "Mermaid Sequence Diagram Editor",
  "testing-tools": "JSON Validator",
  "text-tools": "Word Counter",
  "time-tools": "Timestamp Converter",
  "toml-tools": "TOML to JSON",
  "typescript-tools": "JSON to TypeScript",
  "uuid-generators": "UUID v4 Generator",
  validators: "YAML Validator",
  "workflow-tools": "JSON Pipeline Builder",
  "xml-tools": "XML Formatter",
  "yaml-tools": "YAML Formatter",
};

const isLangStop = (tool) => /^https:\/\/([a-z0-9-]+\.)?langstop\.com(\/|$)/.test(tool.url || "");

const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
let removed = 0;

for (const [key, category] of Object.entries(data.categories)) {
  const tools = category.tools || [];
  const own = tools.filter(isLangStop);
  if (own.length === 0) continue;

  const pick = PICKS[key];
  if (!own.some((tool) => tool.name === pick)) {
    throw new Error(`No LangStop tool named "${pick}" in category "${key}". Update PICKS.`);
  }

  category.tools = tools.filter((tool) => !isLangStop(tool) || tool.name === pick);
  removed += tools.length - category.tools.length;
}

const allTools = Object.values(data.categories).flatMap((category) => category.tools || []);
data.meta.totalTools = allTools.length;
data.meta.totalCategories = Object.keys(data.categories).length;
data.meta.url = "https://github.com/QuantumSavant654/awesome-online-dev-tools";
delete data.meta.maintainer;

fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2) + "\n", "utf-8");
console.log(`Removed ${removed} LangStop entries; ${allTools.length} tools remain.`);
