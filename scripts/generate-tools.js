const fs = require("fs");
const path = require("path");

const DEST = path.join(__dirname, "..", "awesome-list.json");

const data = {
  $schema: "https://raw.githubusercontent.com/langstop/awesome-online-dev-tools/main/SCHEMA.md",
  meta: {
    title: "Awesome Online Dev Tools",
    description: "A curated collection of the best browser-based developer tools",
    url: "https://github.com/langstop/awesome-online-dev-tools",
    totalTools: 0,
    totalCategories: 0,
    lastUpdated: "2026-07-16",
    maintainer: "LangStop"
  },
  categories: {}
};

function t(name, url, desc, cat, tags, opts = {}) {
  const entry = {
    name,
    url,
    description: desc,
    category: cat,
    tags,
    license: opts.license || "Proprietary",
    pricing: opts.pricing || "free",
    opensource: opts.opensource || false,
    features: opts.features || [],
    useCases: opts.useCases || [],
    lastUpdated: opts.lastUpdated || "2026-07-01",
    badges: opts.badges || ["browser-based"]
  };
  if (opts.github) entry.github = opts.github;
  return entry;
}

// ============================================================
// JSON TOOLS
// ============================================================
data.categories["json-tools"] = {
  name: "JSON Tools",
  description: "JSON formatters, validators, converters, minifiers, and code generators",
  icon: "📋",
  tools: [
    t("JSON Formatter", "https://langstop.com/json-formatter", "Format, validate, and beautify JSON with multi-tab support.", "json-tools", ["json", "formatter", "validator", "beautifier"], { features: ["Multi-tab editing", "Pretty print", "Minify", "Tree view", "Session persistence"], useCases: ["JSON formatting", "API response debugging"], badges: ["browser-based", "privacy-first"] }),
    t("JSON Validator", "https://langstop.com/json-validator", "Validate JSON syntax with real-time error highlighting.", "json-tools", ["json", "validator", "checker"], { features: ["Real-time validation", "Error line/column", "Pretty print"], useCases: ["JSON syntax checking", "API payload validation"], badges: ["browser-based", "privacy-first"] }),
    t("JSON Editor", "https://langstop.com/json-editor", "Edit JSON with interactive tree view and Monaco code editor.", "json-tools", ["json", "editor", "tree-view"], { features: ["Tree view", "Monaco editor", "JSON path", "Validation"], useCases: ["Editing JSON files", "Data exploration"] }),
    t("JSON Diff", "https://langstop.com/json-diff", "Compare two JSON objects side by side with color highlighting.", "json-tools", ["json", "diff", "compare"], { features: ["Side-by-side diff", "Color highlighting", "Structural analysis"], useCases: ["API response comparison", "Config diffing"], badges: ["browser-based", "privacy-first"] }),
    t("JSON Minifier", "https://langstop.com/json-minifier", "Minify JSON to reduce file size for production.", "json-tools", ["json", "minifier", "compress"], { features: ["Whitespace removal", "Size comparison"], useCases: ["Production optimization", "Bandwidth reduction"] }),
    t("JSON Fix", "https://langstop.com/json-fix", "Auto-correct malformed JSON with one click.", "json-tools", ["json", "fix", "repair"], { features: ["Auto-correction", "Error detection"], useCases: ["Fixing broken JSON", "Debugging parse errors"] }),
    t("JSON Sorter", "https://langstop.com/json-sorter", "Sort JSON keys alphabetically with recursive nesting.", "json-tools", ["json", "sorter", "sort-keys"], { features: ["Recursive sort", "Key ordering"], useCases: ["Organizing JSON", "Deterministic output"] }),
    t("JSON Escape / Unescape", "https://langstop.com/json-escape-unescape", "Escape or unescape JSON special characters.", "json-tools", ["json", "escape", "unescape"], { features: ["Escape", "Unescape", "Special characters"], useCases: ["JSON string embedding", "Data preparation"] }),
    t("JSONPath Explorer", "https://langstop.com/json-path-query", "Query JSON data using JSONPath expressions.", "json-tools", ["json", "jsonpath", "query"], { features: ["Real-time evaluation", "Expression builder"], useCases: ["JSON data extraction", "API response querying"] }),
    t("JSON Schema GUI Builder", "https://langstop.com/json-schema-gui-builder", "Visually build JSON Schema with an intuitive GUI.", "json-tools", ["json", "schema", "builder"], { features: ["Drag-and-drop", "Visual editing", "Export"], useCases: ["Form schema design", "API validation"] }),
    t("JSON Flatten / Unflatten", "https://langstop.com/json-flatten", "Flatten nested JSON or unflatten key-value pairs.", "json-tools", ["json", "flatten", "unflatten"], { features: ["Dot notation", "Export to .env/Bash/Properties"], useCases: ["Config conversion", "Data transformation"] }),
    t("JSON Transform", "https://langstop.com/json-transform", "Transform JSON data with custom rules.", "json-tools", ["json", "transform", "convert"], { features: ["Custom rules", "Mapping"], useCases: ["Data ETL", "Format conversion"] }),
    t("JSON Mock Data Generator", "https://langstop.com/json-mock-data-generator", "Generate realistic mock JSON data for testing.", "json-tools", ["json", "mock", "generator"], { features: ["Custom schemas", "Realistic data"], useCases: ["Test data", "Prototyping"] }),
    t("JSON Pipeline Builder", "https://langstop.com/pipeline-builder", "Compose JSON tools into reusable processing pipelines.", "json-tools", ["json", "pipeline", "workflow"], { features: ["Multi-step", "Reusable", "Export"], useCases: ["Data processing", "Automation"] }),
    t("String to JSON", "https://langstop.com/string-to-json", "Convert plain text strings into valid JSON.", "json-tools", ["json", "string", "converter"], { features: ["Auto-detection", "Format conversion"], useCases: ["Data preparation"] }),
    t("JSON to String", "https://langstop.com/json-to-string", "Convert JSON objects to escaped string literals.", "json-tools", ["json", "string", "stringify"], { features: ["Escaping", "Literal generation"], useCases: ["JSON embedding"] }),
    t("JSON to Code Generator", "https://langstop.com/json-to-code", "Convert JSON into strongly-typed code for 22+ languages.", "json-tools", ["json", "code-gen", "generator"], { features: ["TypeScript/Go/Python/Rust/Java/C#", "Idiomatic output"], useCases: ["Model generation", "API client generation"], badges: ["browser-based", "privacy-first", "ai-powered"] }),
    t("JSON to YAML", "https://langstop.com/json-to-yaml", "Convert JSON to human-friendly YAML.", "json-tools", ["json", "yaml", "converter"], { features: ["Instant conversion", "Preserves structure"], useCases: ["Config migration", "Data transformation"] }),
    t("JSON to XML", "https://langstop.com/json-to-xml", "Convert JSON to well-structured XML.", "json-tools", ["json", "xml", "converter"], { features: ["Root element", "Attributes"], useCases: ["Data interchange", "Legacy integration"] }),
    t("JSON to CSV", "https://langstop.com/json-to-csv", "Convert JSON arrays to CSV for spreadsheets.", "json-tools", ["json", "csv", "converter"], { features: ["Field mapping", "Delimiter options"], useCases: ["Data export", "Reporting"] }),
    t("JSON to TOML", "https://langstop.com/json-to-toml", "Convert JSON to TOML config format.", "json-tools", ["json", "toml", "converter"], { features: ["Preserves types", "Nested objects"], useCases: ["Config conversion"] }),
    t("JSON to TSV", "https://langstop.com/json-to-tsv", "Convert JSON arrays to tab-separated values.", "json-tools", ["json", "tsv", "converter"], { features: ["Tab separation", "Array support"], useCases: ["Spreadsheet data"] }),
    t("JSON to .env", "https://langstop.com/json-to-env", "Convert JSON to Node.js .env format.", "json-tools", ["json", "env", "dotenv"], { features: ["Nested flattening", "Export"], useCases: ["Environment config"] }),
    t("JSON to Bash", "https://langstop.com/json-to-bash", "Convert JSON to Bash export statements.", "json-tools", ["json", "bash", "shell"], { features: ["Export variables", "Shell sourcing"], useCases: ["Shell config"] }),
    t("JSON to Java Properties", "https://langstop.com/json-to-java-properties", "Convert JSON to Java .properties file format.", "json-tools", ["json", "java", "properties"], { features: ["Spring Boot compatible", "Escaping"], useCases: ["Java config"] }),
    t("JSON to Python Dict", "https://langstop.com/json-to-python-dict", "Convert JSON to Python dict literal format.", "json-tools", ["json", "python", "dict"], { features: ["True/False/None handling", "Literal output"], useCases: ["Python config"] }),
    t("JSON to PHP Array", "https://langstop.com/json-to-php-array", "Convert JSON to PHP array config format.", "json-tools", ["json", "php", "array"], { features: ["Return array", "Nested support"], useCases: ["PHP config"] }),
    t("JSON to PHP INI", "https://langstop.com/json-to-php-ini", "Convert JSON to PHP INI config format.", "json-tools", ["json", "php", "ini"], { features: ["Section support", "Escaping"], useCases: ["PHP config"] }),
    t("JSON to INI (Python)", "https://langstop.com/json-to-ini", "Convert JSON to INI config file format.", "json-tools", ["json", "ini", "configparser"], { features: ["Section headers", "Python compatible"], useCases: ["Python config"] }),
    t("JSON URL Encoder", "https://langstop.com/json-url-encoder", "Encode JSON objects to URL-safe strings.", "json-tools", ["json", "url", "encoder"], { features: ["URL-safe encoding", "Compact output"], useCases: ["URL parameters"] }),
    t("JSON URL Decoder", "https://langstop.com/json-url-decoder", "Decode URL-encoded strings back to JSON.", "json-tools", ["json", "url", "decoder"], { features: ["URL decoding", "JSON parsing"], useCases: ["URL data extraction"] }),
    t("JSON Schema to TypeScript", "https://langstop.com/json-schema-to-typescript", "Convert JSON Schema to TypeScript interfaces.", "json-tools", ["json", "typescript", "schema"], { features: ["Interface generation", "Type safety"], useCases: ["Type definitions"] }),
    t("JSON Schema to Zod", "https://langstop.com/json-schema-to-zod", "Convert JSON Schema to Zod validation schemas.", "json-tools", ["json", "zod", "schema"], { features: ["Zod schema", "Validation"], useCases: ["Runtime validation"] }),
    t("JSON to Pydantic", "https://langstop.com/json-to-pydantic", "Convert JSON to Pydantic BaseModel classes.", "json-tools", ["json", "pydantic", "python"], { features: ["Model generation", "Validation"], useCases: ["Python validation"] }),
    t("JSON Tools Hub", "https://langstop.com/json-tools", "Browse all 50+ JSON tools from LangStop.", "json-tools", ["json", "tools", "hub"], { features: ["Categorized listing", "Search"], useCases: ["Tool discovery"] }),
    // External JSON tools
    t("JSON Formatter & Validator", "https://jsonformatter.org", "Format, validate, and beautify JSON data.", "json-tools", ["json", "formatter", "validator"], { license: "Proprietary", badges: ["browser-based", "popular"] }),
    t("JSONLint", "https://jsonlint.com", "JSON validator and reformatter.", "json-tools", ["json", "validator", "linter"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
    t("JSON Hero", "https://jsonhero.io", "JSON viewer with schema inference.", "json-tools", ["json", "viewer", "explorer"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
    t("JSON Editor Online", "https://jsoneditoronline.org", "Tree editor for JSON documents.", "json-tools", ["json", "editor", "tree-view"], { license: "Apache-2.0", opensource: true, badges: ["browser-based", "open-source", "pwa"] }),
    t("JSON Diff", "https://jsondiff.com", "Compare two JSON documents side-by-side.", "json-tools", ["json", "diff", "comparison"], { badges: ["browser-based"] }),
    t("JSONCompare", "https://jsoncompare.com", "JSON comparison and merge tool.", "json-tools", ["json", "compare", "merge"], { badges: ["browser-based"] }),
    t("Code Beautify JSON Tools", "https://codebeautify.org/json-tools", "Collection of JSON formatters, validators, and converters.", "json-tools", ["json", "formatter", "validator", "beautifier"], { badges: ["browser-based", "popular"] }),
    t("Code Beautify JSON Viewer", "https://codebeautify.org/jsonviewer", "JSON viewer with tree and code view.", "json-tools", ["json", "viewer", "formatter"], { badges: ["browser-based"] }),
    t("JSON Formatter", "https://jsonformatter.org/json", "Popular online JSON formatter and viewer with tree mode.", "json-tools", ["json", "formatter", "viewer"], { license: "Proprietary", badges: ["browser-based", "popular"] }),
  ]
};

// ============================================================
// XML TOOLS
// ============================================================
data.categories["xml-tools"] = {
  name: "XML Tools",
  description: "XML editors, formatters, validators, and converters",
  icon: "📄",
  tools: [
    t("XML Formatter", "https://langstop.com/xml-formatter", "Format and beautify XML documents.", "xml-tools", ["xml", "formatter", "beautifier"], { features: ["Pretty print", "Indentation control"], useCases: ["XML formatting", "Cleaning XML"] }),
    t("XML Validator", "https://langstop.com/xml-validator", "Validate XML syntax for well-formedness.", "xml-tools", ["xml", "validator", "checker"], { features: ["Syntax checking", "Error reporting"], useCases: ["XML validation"] }),
    t("XML Editor", "https://langstop.com/xml-editor", "Edit XML with interactive tree view.", "xml-tools", ["xml", "editor", "tree-view"], { features: ["Tree view", "Code editor"], useCases: ["XML editing"] }),
    t("XML Minifier", "https://langstop.com/xml-minifier", "Minify XML for smaller file sizes.", "xml-tools", ["xml", "minifier", "compress"], { features: ["Whitespace removal", "Compression"], useCases: ["XML optimization"] }),
    t("XML to JSON", "https://langstop.com/xml-to-json", "Convert XML to JSON format.", "xml-tools", ["xml", "json", "converter"], { features: ["Attribute handling", "Namespace support"], useCases: ["Data conversion", "API integration"] }),
    t("XML to YAML", "https://langstop.com/xml-to-yaml", "Convert XML to YAML format.", "xml-tools", ["xml", "yaml", "converter"], { features: ["Nested conversion", "Format preservation"], useCases: ["Config migration"] }),
    t("XML to CSV", "https://langstop.com/xml-to-csv", "Convert XML data to CSV format.", "xml-tools", ["xml", "csv", "converter"], { features: ["Field mapping", "Delimiter options"], useCases: ["Data export", "Reporting"] }),
    t("XML to TOML", "https://langstop.com/xml-to-toml", "Convert XML to TOML config format.", "xml-tools", ["xml", "toml", "converter"], { features: ["Type preservation"], useCases: ["Config conversion"] }),
    t("XML Mock Data Generator", "https://langstop.com/xml-mock-data-generator", "Generate mock XML data for testing.", "xml-tools", ["xml", "mock", "generator"], { features: ["Custom schemas"], useCases: ["Test data generation"] }),
    t("XML to Code Generator", "https://langstop.com/xml-to-code", "Generate code from XML for multiple languages.", "xml-tools", ["xml", "code-gen", "generator"], { features: ["22+ languages", "Attribute support"], useCases: ["Model generation"], badges: ["browser-based", "ai-powered"] }),
    t("XML URL Encoder", "https://langstop.com/xml-url-encoder", "Encode XML to URL-safe strings.", "xml-tools", ["xml", "url", "encoder"], { features: ["URL encoding"], useCases: ["URL embedding"] }),
    t("XML URL Decoder", "https://langstop.com/xml-url-decoder", "Decode URL-encoded XML.", "xml-tools", ["xml", "url", "decoder"], { features: ["URL decoding"], useCases: ["Data extraction"] }),
    // External
    t("XML Formatter", "https://xmlformatter.org", "XML formatter, beautifier, and validator.", "xml-tools", ["xml", "formatter", "validator"], { badges: ["browser-based"] }),
    t("XML Formatter", "https://jsonformatter.org/xml-formatter", "Online XML formatter, validator, and pretty-printer.", "xml-tools", ["xml", "formatter", "validator"], { license: "Proprietary", badges: ["browser-based", "popular"] }),
    t("Code Beautify XML Viewer", "https://codebeautify.org/xmlviewer", "XML viewer, formatter, and tree display.", "xml-tools", ["xml", "viewer", "formatter"], { badges: ["browser-based"] }),
    t("XML to JSON Converter", "https://www.convertjson.com/xml-to-json.htm", "Convert XML to JSON.", "xml-tools", ["xml", "json", "converter"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// YAML TOOLS
// ============================================================
data.categories["yaml-tools"] = {
  name: "YAML Tools",
  description: "YAML parsers, validators, converters, and code generators",
  icon: "📐",
  tools: [
    t("YAML Formatter", "https://langstop.com/yaml-formatter", "Format and beautify YAML files.", "yaml-tools", ["yaml", "formatter", "beautifier"], { features: ["Pretty print", "Indentation"], useCases: ["YAML formatting", "Config cleanup"] }),
    t("YAML Validator", "https://langstop.com/yaml-validator", "Validate YAML syntax with error detection.", "yaml-tools", ["yaml", "validator", "linter"], { features: ["Syntax checking", "Error reporting"], useCases: ["YAML validation", "CI/CD configs"] }),
    t("YAML Editor", "https://langstop.com/yaml-editor", "Edit YAML with interactive tree view.", "yaml-tools", ["yaml", "editor", "tree-view"], { features: ["Tree view", "Code mirror"], useCases: ["YAML editing"] }),
    t("YAML Minifier", "https://langstop.com/yaml-minifier", "Minify YAML for compressed output.", "yaml-tools", ["yaml", "minifier", "compress"], { features: ["Whitespace removal"], useCases: ["Production optimization"] }),
    t("YAML to JSON", "https://langstop.com/yaml-to-json", "Convert YAML to structured JSON.", "yaml-tools", ["yaml", "json", "converter"], { features: ["Instant conversion", "Preserves structure"], useCases: ["Data transformation", "API prep"] }),
    t("YAML to XML", "https://langstop.com/yaml-to-xml", "Convert YAML to XML format.", "yaml-tools", ["yaml", "xml", "converter"], { features: ["Nested conversion"], useCases: ["Data interchange"] }),
    t("YAML to CSV", "https://langstop.com/yaml-to-csv", "Convert YAML documents to CSV.", "yaml-tools", ["yaml", "csv", "converter"], { features: ["Field extraction"], useCases: ["Data export"] }),
    t("YAML to TOML", "https://langstop.com/yaml-to-toml", "Convert YAML to TOML config format.", "yaml-tools", ["yaml", "toml", "converter"], { features: ["Type preservation"], useCases: ["Config migration"] }),
    t("YAML to .env", "https://langstop.com/yaml-to-env", "Convert YAML to .env format.", "yaml-tools", ["yaml", "env", "dotenv"], { features: ["Flattening", "Export"], useCases: ["Environment config"] }),
    t("YAML to Bash", "https://langstop.com/yaml-to-bash", "Convert YAML to Bash export statements.", "yaml-tools", ["yaml", "bash", "shell"], { features: ["Export variables"], useCases: ["Shell sourcing"] }),
    t("YAML to Java Properties", "https://langstop.com/yaml-to-java-properties", "Convert YAML to Java .properties.", "yaml-tools", ["yaml", "java", "properties"], { features: ["Dotted keys"], useCases: ["Java config"] }),
    t("YAML to Python Dict", "https://langstop.com/yaml-to-python-dict", "Convert YAML to Python dict literal.", "yaml-tools", ["yaml", "python", "dict"], { features: ["Literal output"], useCases: ["Python config"] }),
    t("YAML to PHP Array", "https://langstop.com/yaml-to-php-array", "Convert YAML to PHP array.", "yaml-tools", ["yaml", "php", "array"], { features: ["Return array"], useCases: ["PHP config"] }),
    t("YAML to PHP INI", "https://langstop.com/yaml-to-php-ini", "Convert YAML to PHP INI.", "yaml-tools", ["yaml", "php", "ini"], { features: ["Section support"], useCases: ["PHP config"] }),
    t("YAML to INI (Python)", "https://langstop.com/yaml-to-ini", "Convert YAML to Python INI.", "yaml-tools", ["yaml", "ini", "configparser"], { features: ["Section headers"], useCases: ["Python config"] }),
    t("YAML to Code Generator", "https://langstop.com/yaml-to-code", "Generate code from YAML for 22+ languages.", "yaml-tools", ["yaml", "code-gen", "generator"], { features: ["Multiple languages", "Anchor support"], useCases: ["Model generation"], badges: ["browser-based", "ai-powered"] }),
    t("YAML URL Encoder", "https://langstop.com/yaml-url-encoder", "Encode YAML to URL-safe strings.", "yaml-tools", ["yaml", "url", "encoder"], { features: ["URL encoding"], useCases: ["URL embedding"] }),
    t("YAML URL Decoder", "https://langstop.com/yaml-url-decoder", "Decode URL-encoded YAML.", "yaml-tools", ["yaml", "url", "decoder"], { features: ["URL decoding"], useCases: ["Data extraction"] }),
    // External
    t("YAML Lint", "https://www.yamllint.com", "YAML validator and linter.", "yaml-tools", ["yaml", "validator", "linter"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
    t("Code Beautify YAML Tools", "https://codebeautify.org/yaml-tools", "YAML formatters, validators, and converters.", "yaml-tools", ["yaml", "formatter", "validator"], { badges: ["browser-based"] }),
    t("YAML Formatter", "https://jsonformatter.org/yaml-formatter", "Online YAML formatter and validator with syntax highlighting.", "yaml-tools", ["yaml", "formatter", "validator"], { license: "Proprietary", badges: ["browser-based", "popular"] }),
  ]
};

// ============================================================
// CSV TOOLS
// ============================================================
data.categories["csv-tools"] = {
  name: "CSV Tools",
  description: "CSV editors, converters, and generators",
  icon: "📊",
  tools: [
    t("CSV to JSON", "https://langstop.com/csv-to-json", "Convert CSV rows to structured JSON.", "csv-tools", ["csv", "json", "converter"], { features: ["Header detection", "Type inference"], useCases: ["Data migration"] }),
    t("CSV to YAML", "https://langstop.com/csv-to-yaml", "Convert CSV to clean YAML.", "csv-tools", ["csv", "yaml", "converter"], { features: ["Nested output"], useCases: ["Config generation"] }),
    t("CSV to XML", "https://langstop.com/csv-to-xml", "Convert CSV to structured XML.", "csv-tools", ["csv", "xml", "converter"], { features: ["Root element", "Rows"], useCases: ["Data interchange"] }),
    t("CSV Mock Data Generator", "https://langstop.com/csv-mock-data-generator", "Generate realistic CSV mock data.", "csv-tools", ["csv", "mock", "generator"], { features: ["Custom columns", "Data types"], useCases: ["Test data"] }),
    t("JSON to CSV", "https://langstop.com/json-to-csv", "Convert JSON arrays to CSV.", "csv-tools", ["json", "csv", "converter"], { features: ["Field mapping"], useCases: ["Spreadsheet export"] }),
    // External
    t("CSV Viewer", "https://csvviewer.com", "Online CSV viewer and editor.", "csv-tools", ["csv", "viewer", "editor"], { badges: ["browser-based"] }),
    t("TableConvert", "https://tableconvert.com", "Convert CSV to various table formats.", "csv-tools", ["csv", "table", "converter"], { badges: ["browser-based"] }),
    t("Code Beautify CSV Tools", "https://codebeautify.org/csv-tools", "CSV viewers, converters, and validators.", "csv-tools", ["csv", "viewer", "converter"], { badges: ["browser-based"] }),
    t("CSV Formatter", "https://jsonformatter.org/csv", "Online CSV viewer, formatter, and converter.", "csv-tools", ["csv", "formatter", "viewer"], { license: "Proprietary", badges: ["browser-based", "popular"] }),
  ]
};

// ============================================================
// SQL TOOLS
// ============================================================
data.categories["sql-tools"] = {
  name: "SQL Tools",
  description: "SQL editors, formatters, and generators",
  icon: "🗄️",
  tools: [
    t("SQL Formatter", "https://langstop.com/sql-formatter", "Format SQL queries for 21+ dialects.", "sql-tools", ["sql", "formatter", "beautifier"], { features: ["21 dialects", "Keyword casing", "Multi-tab"], useCases: ["SQL formatting", "Query review"], badges: ["browser-based", "privacy-first"] }),
    // External
    t("DB Fiddle", "https://www.db-fiddle.com", "SQL playground with multiple engines.", "sql-tools", ["sql", "playground", "database"], { badges: ["browser-based", "popular"] }),
    t("SQLite Online", "https://sqliteonline.com", "Online SQLite editor.", "sql-tools", ["sql", "sqlite", "editor"], { badges: ["browser-based"] }),
    t("Code Beautify SQL Tools", "https://codebeautify.org/sql-tools", "SQL formatters, validators, and generators.", "sql-tools", ["sql", "formatter", "validator"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// REGEX
// ============================================================
data.categories["regex"] = {
  name: "Regex Tools",
  description: "Regex testers, builders, and pattern references",
  icon: "🔍",
  tools: [
    t("Regex Tester", "https://langstop.com/regex-tester", "Test regex with live highlighting and multi-tab sessions.", "regex", ["regex", "tester", "debugger"], { features: ["Multi-tab", "Save sessions", "IndexedDB", "Pattern library"], useCases: ["Regex debugging", "Pattern testing"], badges: ["browser-based", "privacy-first"] }),
    t("Common Regex Patterns", "https://langstop.com/regex-patterns", "Browse 30+ common regex patterns with examples.", "regex", ["regex", "patterns", "reference"], { features: ["Categorized patterns", "Copy-ready"], useCases: ["Quick regex reference"] }),
    // External
    t("Regex101", "https://regex101.com", "Regex tester with explanation engine.", "regex", ["regex", "tester", "debugger"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source", "popular"] }),
    t("Regexr", "https://regexr.com", "Learn and test regex with real-time feedback.", "regex", ["regex", "tester", "learning"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
    t("iHateRegex", "https://ihateregex.io", "Regex cheatsheet and visualizer.", "regex", ["regex", "cheatsheet", "visualizer"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
    t("Debuggex", "https://www.debuggex.com", "Regex visual debugger with railroad diagrams.", "regex", ["regex", "debugger", "visualization"], { badges: ["browser-based"] }),
    t("Regexper", "https://regexper.com", "Regex visualization with railroad diagrams.", "regex", ["regex", "visualizer", "diagram"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
  ]
};

// ============================================================
// JWT TOOLS
// ============================================================
data.categories["jwt-tools"] = {
  name: "JWT Tools",
  description: "JWT encoders, decoders, and debuggers",
  icon: "🔐",
  tools: [
    t("JWT Encoder", "https://langstop.com/jwt-encoder", "Create and sign JWTs with algorithm support.", "jwt-tools", ["jwt", "encoder", "sign"], { features: ["Multiple algorithms", "Header/payload editing"], useCases: ["JWT creation", "Auth testing"], badges: ["browser-based", "privacy-first"] }),
    t("JWT Decoder", "https://langstop.com/jwt-decoder", "Decode JWTs safely — client-side only.", "jwt-tools", ["jwt", "decoder", "debugger"], { features: ["Header inspection", "Payload decoding", "Signature verification"], useCases: ["Token debugging", "Auth verification"], badges: ["browser-based", "privacy-first"] }),
    // External
    t("JWT.io", "https://jwt.io", "JWT debugger with algorithm support.", "jwt-tools", ["jwt", "debugger", "token"], { badges: ["browser-based", "popular"] }),
  ]
};

// ============================================================
// BASE64 ENCODING
// ============================================================
data.categories["base64-encoding"] = {
  name: "Base64 Encoding",
  description: "Base64 encoders, decoders, and converters",
  icon: "🔡",
  tools: [
    t("Base64 Encoder", "https://langstop.com/base64-encoder", "Encode text to Base64.", "base64-encoding", ["base64", "encoder"], { features: ["Text encoding", "Copy output"], useCases: ["Data encoding"] }),
    t("Base64 Decoder", "https://langstop.com/base64-decoder", "Decode Base64 to plain text.", "base64-encoding", ["base64", "decoder"], { features: ["Text decoding"], useCases: ["Data decoding"] }),
    t("Base64 Converter", "https://langstop.com/base64-converter", "Switch between Base64 and other formats.", "base64-encoding", ["base64", "converter"], { features: ["Multi-format", "Bidirectional"], useCases: ["Format conversion"] }),
    t("Base64 to Image", "https://langstop.com/base64-to-image", "Convert Base64 to downloadable images.", "base64-encoding", ["base64", "image", "converter"], { features: ["Image preview", "Download"], useCases: ["Image extraction"] }),
    t("Image to Base64", "https://langstop.com/image-to-base64", "Convert images to Base64 strings.", "base64-encoding", ["base64", "image", "encoder"], { features: ["Drag-drop", "Data URI"], useCases: ["HTML embedding"] }),
    // External
    t("Base64 Guru", "https://base64.guru", "Base64 encoder/decoder with learning resources.", "base64-encoding", ["base64", "encoder", "decoder"], { badges: ["browser-based"] }),
    t("Code Beautify Base64 Tools", "https://codebeautify.org/base64-encode", "Base64 encode, decode, and convert tools.", "base64-encoding", ["base64", "encoder", "decoder"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// HASHING
// ============================================================
data.categories["hashing"] = {
  name: "Hashing Tools",
  description: "Hash generators and cryptographic tools",
  icon: "🔑",
  tools: [
    t("Hash Generator", "https://langstop.com/hash-generator", "Generate hashes with multiple algorithms.", "hashing", ["hash", "generator", "sha", "md5"], { features: ["MD5/SHA-1/SHA-256/SHA-512", "Real-time"], useCases: ["Hash generation", "Checksums"] }),
    // External
    t("CyberChef", "https://gchq.github.io/CyberChef", "Cyber Swiss Army Knife for encryption, encoding, and analysis.", "hashing", ["hash", "encryption", "encoding"], { license: "Apache-2.0", opensource: true, badges: ["browser-based", "open-source", "popular", "offline"] }),
    t("Code Beautify Hash Tools", "https://codebeautify.org/cryptography-tools", "Hash generators and cryptography tools.", "hashing", ["hash", "sha", "md5", "crypto"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// UUID GENERATORS
// ============================================================
data.categories["uuid-generators"] = {
  name: "UUID Generators",
  description: "UUID/GUID/ULID generators for all versions",
  icon: "🆔",
  tools: [
    t("UUID v1 Generator", "https://langstop.com/uuid-generator/v1", "Generate time-based UUID v1.", "uuid-generators", ["uuid", "v1", "time-based"], { features: ["Timestamp-based", "Node ID"], useCases: ["Distributed systems"] }),
    t("UUID v3 Generator", "https://langstop.com/uuid-generator/v3", "Generate name-based UUID v3 (MD5).", "uuid-generators", ["uuid", "v3", "name-based"], { features: ["MD5 hashing", "Namespace"], useCases: ["Consistent UUIDs"] }),
    t("UUID v4 Generator", "https://langstop.com/uuid-generator/v4", "Generate random UUID v4.", "uuid-generators", ["uuid", "v4", "random"], { features: ["Random generation", "Bulk"], useCases: ["General purpose IDs"] }),
    t("UUID v5 Generator", "https://langstop.com/uuid-generator/v5", "Generate name-based UUID v5 (SHA-1).", "uuid-generators", ["uuid", "v5", "name-based"], { features: ["SHA-1 hashing"], useCases: ["Consistent UUIDs"] }),
    t("UUID v7 Generator", "https://langstop.com/uuid-generator/v7", "Generate time-ordered UUID v7 for databases.", "uuid-generators", ["uuid", "v7", "time-ordered"], { features: ["Sortable", "Timestamp-based"], useCases: ["Database primary keys"] }),
    t("GUID Generator", "https://langstop.com/uuid-generator/guid", "Generate Microsoft-style GUIDs.", "uuid-generators", ["guid", "uuid", "generator"], { features: ["Microsoft format"], useCases: ["Windows compatibility"] }),
    t("ULID Generator", "https://langstop.com/uuid-generator/ulid", "Generate lexicographically sortable ULIDs.", "uuid-generators", ["ulid", "sortable", "id"], { features: ["Sortable", "Timestamp-based"], useCases: ["Modern applications"] }),
    t("UUID Tools Hub", "https://langstop.com/uuid-generator", "All UUID and ID generators in one place.", "uuid-generators", ["uuid", "generator", "hub"], { features: ["All versions", "Bulk"], useCases: ["ID generation"] }),
    // External
    t("UUID Generator", "https://www.uuidgenerator.net", "UUID/GUID generator for all versions.", "uuid-generators", ["uuid", "guid", "generator"], { badges: ["browser-based", "popular"] }),
    t("UUID Tools", "https://www.uuidtools.com", "UUID generation and validation.", "uuid-generators", ["uuid", "tools", "validation"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// NETWORKING
// ============================================================
data.categories["networking"] = {
  name: "Networking Tools",
  description: "Network diagnostic, DNS, and IP tools",
  icon: "🌍",
  tools: [
    t("REST API Client", "https://langstop.com/rest-api-client", "Send HTTP requests directly from your browser.", "networking", ["api", "client", "rest", "http"], { features: ["GET/POST/PUT/DELETE", "Headers", "Body"], useCases: ["API testing", "Endpoint debugging"], badges: ["browser-based", "privacy-first"] }),
    t("OpenAPI Editor", "https://langstop.com/openapi-editor", "Design and validate OpenAPI 3.x specs.", "networking", ["openapi", "swagger", "editor"], { features: ["Real-time validation", "YAML/JSON", "Preview"], useCases: ["API design", "Spec creation"], badges: ["browser-based", "privacy-first"] }),
    t("OpenAPI Diff", "https://langstop.com/openapi-diff", "Compare two OpenAPI specs side by side.", "networking", ["openapi", "diff", "compare"], { features: ["Endpoint diff", "Schema diff", "Breaking changes"], useCases: ["API versioning", "Contract review"] }),
    t("WebSocket Client", "https://langstop.com/websocket-client", "Test WebSocket connections from your browser.", "networking", ["websocket", "client", "realtime"], { features: ["Connection management", "Message log"], useCases: ["WebSocket testing", "Real-time debugging"] }),
    t("Curl Command Builder", "https://langstop.com/linux-tools/curl-command-builder", "Build curl commands visually.", "networking", ["curl", "http", "builder"], { features: ["Methods", "Headers", "Auth", "Body"], useCases: ["API requests", "CLI generation"] }),
    // External
    t("DNSChecker", "https://dnschecker.org", "DNS propagation checker.", "networking", ["dns", "network", "propagation"], { badges: ["browser-based", "popular"] }),
    t("MXToolbox", "https://mxtoolbox.com", "DNS and network diagnostics.", "networking", ["dns", "network", "diagnostic"], { badges: ["browser-based"] }),
    t("IPinfo", "https://ipinfo.io", "IP address and geolocation data.", "networking", ["ip", "geolocation", "network"], { badges: ["browser-based"] }),
    t("Code Beautify IP Tools", "https://codebeautify.org/ip-tools", "IP lookup, DNS, and network tools.", "networking", ["ip", "dns", "network"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// SECURITY
// ============================================================
data.categories["security"] = {
  name: "Security Tools",
  description: "SSL, password, and security analysis tools",
  icon: "🛡️",
  tools: [
    t("Password Generator", "https://langstop.com/password-generator", "Generate strong passwords with customizable options.", "security", ["security", "password", "generator"], { features: ["Custom length", "Character types"], useCases: ["Password creation"] }),
    // External
    t("SSL Labs", "https://www.ssllabs.com/ssltest", "SSL/TLS server configuration test.", "security", ["ssl", "tls", "security"], { badges: ["browser-based", "popular"] }),
    t("Security Headers", "https://securityheaders.com", "HTTP security headers analysis.", "security", ["security", "headers", "analysis"], { badges: ["browser-based"] }),
    t("Bitwarden Password Generator", "https://bitwarden.com/password-generator", "Open source password generator.", "security", ["password", "generator"], { license: "GPL-3.0", opensource: true, badges: ["browser-based", "open-source"] }),
    t("Code Beautify Password Generator", "https://codebeautify.org/password-generator", "Secure password generator.", "security", ["password", "generator"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// API TOOLS
// ============================================================
data.categories["api-tools"] = {
  name: "API Tools",
  description: "API clients, testers, and builders",
  icon: "🔌",
  tools: [
    t("REST API Client", "https://langstop.com/rest-api-client", "Full-featured REST API client in the browser.", "api-tools", ["api", "client", "rest"], { features: ["Methods", "Headers", "Body", "Auth"], useCases: ["API testing", "Development"], badges: ["browser-based", "privacy-first"] }),
    t("OpenAPI Editor", "https://langstop.com/openapi-editor", "Design OpenAPI 3.x specs with live preview.", "api-tools", ["openapi", "editor", "api-spec"], { features: ["Validation", "YAML/JSON", "Preview"], useCases: ["API design"] }),
    t("OpenAPI Diff", "https://langstop.com/openapi-diff", "Compare OpenAPI specifications.", "api-tools", ["openapi", "diff", "compare"], { features: ["Schema diff", "Breaking changes"], useCases: ["Version comparison"] }),
    t("WebSocket Client", "https://langstop.com/websocket-client", "Test WebSocket connections.", "api-tools", ["websocket", "client", "realtime"], { features: ["Messages", "Logging"], useCases: ["WebSocket testing"] }),
    t("API Tools Hub", "https://langstop.com/api-tools", "All API tools in one place.", "api-tools", ["api", "tools", "hub"], { features: ["Categorized"], useCases: ["Tool discovery"] }),
    // External
    t("Postman", "https://www.postman.com", "API platform for building and testing APIs.", "api-tools", ["api", "testing", "client"], { badges: ["browser-based", "popular"] }),
    t("Hoppscotch", "https://hoppscotch.io", "Open source API development tool.", "api-tools", ["api", "testing", "open-source"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source", "popular"] }),
    t("Insomnia", "https://insomnia.rest", "API client with GraphQL support.", "api-tools", ["api", "client", "graphql"], { license: "MIT", opensource: true, badges: ["desktop", "open-source", "popular"] }),
    t("Beeceptor", "https://beeceptor.com", "API mock server and inspector.", "api-tools", ["api", "mock", "inspect"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// IMAGE TOOLS
// ============================================================
data.categories["image-tools"] = {
  name: "Image Tools",
  description: "Image editors, optimizers, and converters",
  icon: "🖼️",
  tools: [
    t("Code Beautify Image Tools", "https://codebeautify.org/image-converter-tools", "Image conversion and optimization tools.", "image-tools", ["image", "converter", "optimizer"], { badges: ["browser-based"] }),
    // External
    t("Squoosh", "https://squoosh.app", "Google's image optimizer.", "image-tools", ["image", "optimizer", "compression"], { license: "Apache-2.0", opensource: true, badges: ["browser-based", "open-source", "offline", "popular"] }),
    t("Photopea", "https://www.photopea.com", "Advanced online image editor.", "image-tools", ["image", "editor", "psd"], { badges: ["browser-based", "popular"] }),
    t("TinyPNG", "https://tinypng.com", "PNG and JPEG compression.", "image-tools", ["image", "compression", "png"], { badges: ["browser-based", "popular"] }),
    t("SVGOMG", "https://jakearchibald.github.io/svgomg", "SVG optimizer.", "image-tools", ["svg", "optimizer", "minifier"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
  ]
};

// ============================================================
// AI TOOLS
// ============================================================
data.categories["ai-tools"] = {
  name: "AI Tools",
  description: "AI-powered developer tools and prompt engineering",
  icon: "🤖",
  tools: [
    t("AI Prompt Generator", "https://langstop.com/ai-prompt-generator", "Create dynamic AI prompts with templates.", "ai-tools", ["ai", "prompt", "generator"], { features: ["Templates", "Variables", "Personas"], useCases: ["Prompt engineering", "AI interaction"], badges: ["browser-based", "ai-powered", "privacy-first"] }),
    t("AI Prompt Engineering Hub", "https://langstop.com/ai-prompt-engineering", "Prompt engineering guides and tools.", "ai-tools", ["ai", "prompt", "engineering"], { features: ["Techniques", "Generators", "Token counter"], useCases: ["Learning prompting"], badges: ["browser-based", "ai-powered"] }),
    t("LLM Token Counter", "https://langstop.com/text-utils/llm-token-counter", "Count tokens for GPT-4, Claude, Gemini.", "ai-tools", ["ai", "tokens", "llm", "counter"], { features: ["Multi-model", "Client-side"], useCases: ["Cost estimation", "Context optimization"], badges: ["browser-based", "privacy-first"] }),
    t("Code Generation Hub", "https://langstop.com/code-generation", "Generate code from JSON/XML/YAML for 22+ languages.", "ai-tools", ["ai", "code-gen", "generator"], { features: ["TypeScript/Go/Python/Rust/Java/C#", "Idiomatic output"], useCases: ["Model generation"], badges: ["browser-based", "ai-powered", "privacy-first"] }),
    // External
    t("Cursor", "https://cursor.sh", "AI-first code editor.", "ai-tools", ["ai", "code", "editor"], { badges: ["desktop", "ai-powered", "trending"] }),
    t("Claude", "https://claude.ai", "AI assistant for code.", "ai-tools", ["ai", "assistant", "code"], { badges: ["browser-based", "ai-powered"] }),
  ]
};

// ============================================================
// TEXT TOOLS
// ============================================================
data.categories["text-tools"] = {
  name: "Text Tools",
  description: "Text utilities, counters, and manipulators",
  icon: "✏️",
  tools: [
    t("Word Counter", "https://langstop.com/text-utils/word-counter", "Count words in your text.", "text-tools", ["text", "counter", "words"], { features: ["Real-time", "Character count"], useCases: ["Writing metrics"] }),
    t("Character Counter", "https://langstop.com/text-utils/character-counter", "Count characters in your text.", "text-tools", ["text", "counter", "characters"], { features: ["With/without spaces"], useCases: ["Length validation"] }),
    t("Line Counter", "https://langstop.com/text-utils/line-counter", "Count lines in your text.", "text-tools", ["text", "counter", "lines"], { features: ["Real-time counting"], useCases: ["File metrics"] }),
    t("Duplicate Counter", "https://langstop.com/text-utils/duplicate-counter", "Count duplicate lines in text.", "text-tools", ["text", "duplicates", "counter"], { features: ["Frequency counting"], useCases: ["Data analysis"] }),
    t("Sort Lines", "https://langstop.com/text-utils/sort-lines", "Sort lines alphabetically or numerically.", "text-tools", ["text", "sort", "lines"], { features: ["Alphabetical", "Numerical"], useCases: ["Text organization"] }),
    t("Sort Words", "https://langstop.com/text-utils/sort-words", "Sort words alphabetically.", "text-tools", ["text", "sort", "words"], { features: ["Alphabetical"], useCases: ["Word organization"] }),
    t("Remove Duplicates", "https://langstop.com/text-utils/remove-duplicates", "Remove duplicate lines from text.", "text-tools", ["text", "deduplicate", "unique"], { features: ["Instant dedup"], useCases: ["Data cleanup"] }),
    t("Spaces to Newlines", "https://langstop.com/text-utils/spaces-to-newlines", "Convert spaces to newlines and vice versa.", "text-tools", ["text", "spaces", "newlines"], { features: ["Bidirectional"], useCases: ["Format conversion"] }),
    t("String Case Converter", "https://langstop.com/text-utils/string-case-converter", "Convert between camelCase, snake_case, kebab-case, and more.", "text-tools", ["text", "case", "converter"], { features: ["Multiple formats"], useCases: ["Code naming"] }),
    t("Text Diff", "https://langstop.com/text-diff", "Compare text differences side by side.", "text-tools", ["text", "diff", "comparison"], { features: ["Side-by-side", "Highlighting"], useCases: ["Text comparison"] }),
    // External
    t("Diff Checker", "https://www.diffchecker.com", "Online text diff tool.", "text-tools", ["diff", "text", "comparison"], { badges: ["browser-based", "popular"] }),
    t("Convert Case", "https://convertcase.net", "Text case converter.", "text-tools", ["text", "case", "converter"], { badges: ["browser-based"] }),
    t("Text Mechanic", "https://textmechanic.com", "Text manipulation tools.", "text-tools", ["text", "manipulation", "tools"], { badges: ["browser-based"] }),
    t("Code Beautify Text Tools", "https://codebeautify.org/text-formatter", "Text formatting and manipulation tools.", "text-tools", ["text", "formatter", "cleaner"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// MARKDOWN
// ============================================================
data.categories["markdown"] = {
  name: "Markdown Tools",
  description: "Markdown editors and previewers",
  icon: "📝",
  tools: [
    t("Markdown Editor", "https://langstop.com/markdown-editor", "Write and preview Markdown with live rendering.", "markdown", ["markdown", "editor", "preview"], { features: ["Live preview", "Split view"], useCases: ["Writing docs", "Note-taking"] }),
    // External
    t("StackEdit", "https://stackedit.io", "In-browser Markdown editor.", "markdown", ["markdown", "editor", "preview"], { license: "Apache-2.0", opensource: true, badges: ["browser-based", "open-source"] }),
    t("Dillinger", "https://dillinger.io", "Cloud-enabled Markdown editor.", "markdown", ["markdown", "editor", "cloud"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
    t("Code Beautify Markdown Editor", "https://codebeautify.org/markdown-editor", "Markdown editor with live preview.", "markdown", ["markdown", "editor", "preview"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// HTML TOOLS
// ============================================================
data.categories["html-tools"] = {
  name: "HTML Tools",
  description: "HTML editors, formatters, and validators",
  icon: "🌐",
  tools: [
    t("HTML Formatter", "https://langstop.com/html-formatter", "Format and beautify HTML code.", "html-tools", ["html", "formatter", "beautifier"], { features: ["Indentation", "Minification"], useCases: ["HTML formatting"] }),
    t("HTML Entity Encoder", "https://langstop.com/html-entity-encoder", "Encode special characters to HTML entities.", "html-tools", ["html", "entities", "encoder"], { features: ["All entities", "XSS prevention"], useCases: ["HTML escaping"] }),
    t("HTML Entity Decoder", "https://langstop.com/html-entity-decoder", "Decode HTML entities back to text.", "html-tools", ["html", "entities", "decoder"], { features: ["All entities"], useCases: ["HTML unescaping"] }),
    // External
    t("CodePen", "https://codepen.io", "HTML/CSS/JS playground.", "html-tools", ["html", "css", "js", "playground"], { badges: ["browser-based", "popular"] }),
    t("JSFiddle", "https://jsfiddle.net", "Online code editor.", "html-tools", ["html", "css", "js", "editor"], { badges: ["browser-based"] }),
    t("Code Beautify HTML Tools", "https://codebeautify.org/html-tools", "HTML formatters, editors, and generators.", "html-tools", ["html", "formatter", "editor"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// CSS TOOLS
// ============================================================
data.categories["css-tools"] = {
  name: "CSS Tools",
  description: "CSS formatters, validators, and preprocessor tools",
  icon: "💅",
  tools: [
    t("CSS Formatter", "https://langstop.com/css-formatter", "Format and beautify CSS code.", "css-tools", ["css", "formatter", "beautifier"], { features: ["Indentation", "Minification"], useCases: ["CSS formatting"] }),
    t("CSS Minifier", "https://langstop.com/css-minifier", "Compress CSS with size statistics.", "css-tools", ["css", "minifier", "compress"], { features: ["Compression stats", "Byte savings"], useCases: ["Production optimization"] }),
    t("CSS Validator", "https://langstop.com/css-validator", "Validate CSS syntax with detailed reports.", "css-tools", ["css", "validator", "checker"], { features: ["Error detection", "Warnings"], useCases: ["CSS quality"] }),
    t("CSS Pretty Print", "https://langstop.com/css-pretty-print", "Pretty print CSS with customizable formatting.", "css-tools", ["css", "pretty-print", "beautifier"], { features: ["Custom formatting"], useCases: ["CSS readability"] }),
    t("CSS Specificity Calculator", "https://langstop.com/css-specificity", "Calculate CSS selector specificity.", "css-tools", ["css", "specificity", "selector"], { features: ["ID/Class/Element breakdown"], useCases: ["Selector debugging"] }),
    t("CSS Selector Tester", "https://langstop.com/css-selector-tester", "Test CSS selectors with scoring.", "css-tools", ["css", "selector", "tester"], { features: ["Real-time testing", "Scoring"], useCases: ["CSS development"] }),
    t("CSS Diff", "https://langstop.com/css-diff", "Compare two CSS blocks side by side.", "css-tools", ["css", "diff", "compare"], { features: ["Highlighted differences"], useCases: ["CSS comparison"] }),
    t("CSS Variable Explorer", "https://langstop.com/css-variables", "Discover and analyze CSS custom properties.", "css-tools", ["css", "variables", "explorer"], { features: ["Usage tracking"], useCases: ["Design tokens"] }),
    t("CSS Color Extractor", "https://langstop.com/css-colors", "Extract all colors from CSS.", "css-tools", ["css", "colors", "extractor"], { features: ["HEX/RGB/HSL"], useCases: ["Color auditing"] }),
    t("SCSS to CSS Compiler", "https://langstop.com/scss-to-css", "Compile SCSS to browser-ready CSS.", "css-tools", ["scss", "css", "compiler"], { features: ["Nested syntax", "Variables"], useCases: ["SCSS compilation"] }),
    t("LESS to CSS Converter", "https://langstop.com/less-to-css", "Compile LESS files to CSS.", "css-tools", ["less", "css", "compiler"], { features: ["LESS features"], useCases: ["LESS compilation"] }),
    t("SASS to CSS Converter", "https://langstop.com/sass-to-css", "Compile SASS to CSS.", "css-tools", ["sass", "css", "compiler"], { features: ["SASS features"], useCases: ["SASS compilation"] }),
    t("Stylus to CSS Converter", "https://langstop.com/stylus-to-css", "Compile Stylus to CSS.", "css-tools", ["stylus", "css", "compiler"], { features: ["Stylus syntax"], useCases: ["Stylus compilation"] }),
    t("CSS Preprocessor Converters", "https://langstop.com/css-to-scss", "Convert between CSS, SCSS, SASS, LESS, and Stylus.", "css-tools", ["css", "scss", "sass", "less", "stylus"], { features: ["Bidirectional conversion"], useCases: ["Preprocessor migration"] }),
    t("CSS Formatter", "https://langstop.com/css-formatter", "CSS beautifier and formatter.", "css-tools", ["css", "formatter", "beautifier"], { features: ["Custom indentation"], useCases: ["CSS cleanup"] }),
    t("LESS Formatter", "https://langstop.com/less-formatter", "Format and beautify LESS code.", "css-tools", ["less", "formatter", "beautifier"], { features: ["LESS syntax"], useCases: ["LESS formatting"] }),
    t("SCSS Formatter", "https://langstop.com/scss-formatter", "Format and beautify SCSS code.", "css-tools", ["scss", "formatter", "beautifier"], { features: ["SCSS syntax"], useCases: ["SCSS formatting"] }),
    t("CSS Tools Hub", "https://langstop.com/tools/css", "Browse all CSS tools.", "css-tools", ["css", "tools", "hub"], { features: ["Categorized"], useCases: ["Tool discovery"] }),
    // External
    t("CSS Gradient", "https://cssgradient.io", "CSS gradient generator.", "css-tools", ["css", "gradient", "generator"], { badges: ["browser-based"] }),
    t("Animista", "https://animista.net", "CSS animation library.", "css-tools", ["css", "animation", "library"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
    t("Code Beautify CSS Tools", "https://codebeautify.org/css-tools", "CSS formatters, generators, and validators.", "css-tools", ["css", "formatter", "generator"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// JAVASCRIPT TOOLS
// ============================================================
data.categories["javascript-tools"] = {
  name: "JavaScript Tools",
  description: "JavaScript playgrounds, formatters, and minifiers",
  icon: "⚡",
  tools: [
    t("JavaScript Minifier", "https://langstop.com/javascript-minifier", "Minify JavaScript by removing whitespace and comments.", "javascript-tools", ["javascript", "minifier", "compress"], { features: ["Whitespace removal", "Comment stripping"], useCases: ["Production optimization"] }),
    t("JSON to JavaScript", "https://langstop.com/json-to-javascript", "Convert JSON to JavaScript objects.", "javascript-tools", ["json", "javascript", "converter"], { features: ["Variable declaration"], useCases: ["JS config"] }),
    t("JSON to JavaScript PropTypes", "https://langstop.com/json-to-javascript-prop-types", "Generate PropTypes from JSON.", "javascript-tools", ["json", "javascript", "proptypes"], { features: ["Type inference"], useCases: ["React components"] }),
    t("Code Formatters Hub", "https://langstop.com/formatters/javascript-formatter", "Format JavaScript and many other languages.", "javascript-tools", ["javascript", "formatter", "beautifier"], { features: ["Multi-language"], useCases: ["Code formatting"] }),
    // External
    t("PlayCode", "https://playcode.io", "JavaScript playground.", "javascript-tools", ["javascript", "playground", "editor"], { badges: ["browser-based"] }),
    t("CodeSandbox", "https://codesandbox.io", "Online IDE for web apps.", "javascript-tools", ["javascript", "ide", "react"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source", "popular"] }),
    t("Prettier Playground", "https://prettier.io/playground", "Opinionated code formatter.", "javascript-tools", ["javascript", "formatter", "prettier"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
    t("Code Beautify JavaScript Tools", "https://codebeautify.org/javascript-tools", "JavaScript formatters, validators, and minifiers.", "javascript-tools", ["javascript", "formatter", "validator"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// TYPESCRIPT TOOLS
// ============================================================
data.categories["typescript-tools"] = {
  name: "TypeScript Tools",
  description: "TypeScript playgrounds and code generators",
  icon: "📘",
  tools: [
    t("JSON to TypeScript", "https://langstop.com/json-to-typescript", "Generate TypeScript interfaces from JSON.", "typescript-tools", ["typescript", "json", "interfaces"], { features: ["Interface generation", "Nested types"], useCases: ["Type definitions"] }),
    t("JSON to TypeScript Zod", "https://langstop.com/json-to-typescript-zod", "Generate Zod schemas from JSON.", "typescript-tools", ["typescript", "zod", "json"], { features: ["Zod schema", "Validation"], useCases: ["Runtime validation"] }),
    t("JSON to TypeScript Effect Schema", "https://langstop.com/json-to-typescript-effect-schema", "Generate Effect TS schemas from JSON.", "typescript-tools", ["typescript", "effect", "schema"], { features: ["Effect schema"], useCases: ["Type-safe validation"] }),
    t("TypeScript Formatter", "https://langstop.com/formatters/typescript-formatter", "Format TypeScript code.", "typescript-tools", ["typescript", "formatter", "beautifier"], { features: ["AST-based"], useCases: ["Code formatting"] }),
    // External
    t("TypeScript Playground", "https://www.typescriptlang.org/play", "Official TypeScript playground.", "typescript-tools", ["typescript", "playground", "compiler"], { license: "Apache-2.0", opensource: true, badges: ["browser-based", "open-source", "popular"] }),
    t("Total TypeScript Playground", "https://www.totaltypescript.com/playground", "TypeScript type challenges.", "typescript-tools", ["typescript", "playground", "types"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// GIT TOOLS
// ============================================================
data.categories["git-tools"] = {
  name: "Git Tools",
  description: "Git explorers, generators, and visualizers",
  icon: "🔀",
  tools: [
    // External
    t("gitignore.io", "https://www.toptal.com/developers/gitignore", ".gitignore file generator.", "git-tools", ["git", "gitignore", "generator"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source", "popular"] }),
    t("Learn Git Branching", "https://learngitbranching.js.org", "Interactive Git branching tutorial.", "git-tools", ["git", "learning", "branching"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source", "community-favorite"] }),
    t("Git Explorer", "https://gitexplorer.com", "Find the right Git commands.", "git-tools", ["git", "explorer", "commands"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
  ]
};

// ============================================================
// LINUX TOOLS
// ============================================================
data.categories["linux-tools"] = {
  name: "Linux Tools",
  description: "Linux command builders and references",
  icon: "🐧",
  tools: [
    t("Ls Command Builder", "https://langstop.com/linux-tools/ls-command-builder", "Build ls commands visually.", "linux-tools", ["linux", "ls", "builder"], { features: ["Visual flags", "Preview"], useCases: ["Linux learning"] }),
    t("Find Command Builder", "https://langstop.com/linux-tools/find-command-builder", "Build find commands visually.", "linux-tools", ["linux", "find", "builder"], { features: ["Expression builder"], useCases: ["File search"] }),
    t("Grep Command Builder", "https://langstop.com/linux-tools/grep-command-builder", "Build grep commands for text search.", "linux-tools", ["linux", "grep", "builder"], { features: ["Pattern builder"], useCases: ["Text search"] }),
    t("Sed Command Builder", "https://langstop.com/linux-tools/sed-command-builder", "Build sed commands for stream editing.", "linux-tools", ["linux", "sed", "builder"], { features: ["Substitution builder"], useCases: ["Text processing"] }),
    t("Awk Command Builder", "https://langstop.com/linux-tools/awk-command-builder", "Build awk commands for text processing.", "linux-tools", ["linux", "awk", "builder"], { features: ["Field processing"], useCases: ["Data extraction"] }),
    t("Tar Command Builder", "https://langstop.com/linux-tools/tar-command-builder", "Build tar archive commands.", "linux-tools", ["linux", "tar", "builder"], { features: ["Compression options"], useCases: ["Archive management"] }),
    t("Nmap Command Builder", "https://langstop.com/linux-tools/nmap-command-builder", "Build nmap network scanning commands.", "linux-tools", ["linux", "nmap", "builder"], { features: ["Scan types", "Port ranges"], useCases: ["Network scanning"] }),
    t("SSH Command Builder", "https://langstop.com/linux-tools/ssh-command-builder", "Build SSH connection commands.", "linux-tools", ["linux", "ssh", "builder"], { features: ["Port forwarding", "Jump hosts"], useCases: ["Remote access"] }),
    t("Ping Command Builder", "https://langstop.com/linux-tools/ping-command-builder", "Build ping test commands.", "linux-tools", ["linux", "ping", "builder"], { features: ["Count", "Interval"], useCases: ["Network testing"] }),
    t("SS Command Builder", "https://langstop.com/linux-tools/ss-command-builder", "Build ss socket statistics commands.", "linux-tools", ["linux", "ss", "builder"], { features: ["Socket filters"], useCases: ["Network monitoring"] }),
    t("PS Command Builder", "https://langstop.com/linux-tools/ps-command-builder", "Build ps process listing commands.", "linux-tools", ["linux", "ps", "builder"], { features: ["Process filters"], useCases: ["Process monitoring"] }),
    t("Curl Command Builder", "https://langstop.com/linux-tools/curl-command-builder", "Build curl HTTP request commands.", "linux-tools", ["linux", "curl", "builder"], { features: ["Methods", "Headers", "Auth"], useCases: ["API testing"] }),
    t("Sort Command Builder", "https://langstop.com/linux-tools/sort-command-builder", "Build sort commands.", "linux-tools", ["linux", "sort", "builder"], { features: ["Key selection"], useCases: ["Text sorting"] }),
    t("Cut Command Builder", "https://langstop.com/linux-tools/cut-command-builder", "Build cut field extraction commands.", "linux-tools", ["linux", "cut", "builder"], { features: ["Delimiter", "Fields"], useCases: ["Column extraction"] }),
    t("Locate Command Builder", "https://langstop.com/linux-tools/locate-command-builder", "Build locate file search commands.", "linux-tools", ["linux", "locate", "builder"], { features: ["Pattern search"], useCases: ["File finding"] }),
    t("Linux Tools Hub", "https://langstop.com/linux-tools", "All Linux command builders.", "linux-tools", ["linux", "tools", "hub"], { features: ["All commands"], useCases: ["Linux reference"] }),
    t("Cron Helper", "https://langstop.com/cron-helper", "Build and validate cron expressions visually.", "linux-tools", ["cron", "scheduler", "builder"], { features: ["Next run preview", "Validation", "Explain"], useCases: ["Cron scheduling", "Automation"], badges: ["browser-based", "privacy-first"] }),
    t("Common Cron Expressions", "https://langstop.com/cron-expressions", "Browse common cron schedule patterns.", "linux-tools", ["cron", "expressions", "reference"], { features: ["30+ patterns", "Explanations"], useCases: ["Cron reference"] }),
    // External
    t("TLDR Pages", "https://tldr.sh", "Simplified man pages with examples.", "linux-tools", ["linux", "command", "reference"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source", "popular"] }),
    t("ExplainShell", "https://explainshell.com", "Explain shell commands.", "linux-tools", ["shell", "command", "explainer"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
    t("Cheat.sh", "https://cheat.sh", "Community-driven cheatsheets.", "linux-tools", ["cheatsheet", "command", "reference"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source", "popular"] }),
  ]
};

// ============================================================
// ENCODING TOOLS
// ============================================================
data.categories["encoding-tools"] = {
  name: "Encoding Tools",
  description: "URL, HTML, and various encoding/decoding tools",
  icon: "🔤",
  tools: [
    t("URL Encoder", "https://langstop.com/url-encoder", "Encode URLs to URL-safe format.", "encoding-tools", ["url", "encoder", "encoding"], { features: ["Percent encoding"], useCases: ["URL preparation"] }),
    t("URL Decoder", "https://langstop.com/url-decoder", "Decode URL-encoded strings.", "encoding-tools", ["url", "decoder", "decoding"], { features: ["Percent decoding"], useCases: ["URL parsing"] }),
    t("JSON URL Encoder", "https://langstop.com/json-url-encoder", "Encode JSON to URL-safe strings.", "encoding-tools", ["json", "url", "encoder"], { features: ["Compact encoding"], useCases: ["URL parameters"] }),
    t("JSON URL Decoder", "https://langstop.com/json-url-decoder", "Decode URL-encoded JSON.", "encoding-tools", ["json", "url", "decoder"], { features: ["URL decoding"], useCases: ["Data extraction"] }),
    t("HTML Entity Encoder", "https://langstop.com/html-entity-encoder", "Encode HTML special characters.", "encoding-tools", ["html", "entities", "encoder"], { features: ["All entities"], useCases: ["XSS prevention"] }),
    t("HTML Entity Decoder", "https://langstop.com/html-entity-decoder", "Decode HTML entities to text.", "encoding-tools", ["html", "entities", "decoder"], { features: ["All entities"], useCases: ["HTML cleanup"] }),
    t("XML URL Encoder", "https://langstop.com/xml-url-encoder", "Encode XML to URL-safe strings.", "encoding-tools", ["xml", "url", "encoder"], { features: ["XML encoding"], useCases: ["URL embedding"] }),
    t("XML URL Decoder", "https://langstop.com/xml-url-decoder", "Decode URL-encoded XML.", "encoding-tools", ["xml", "url", "decoder"], { features: ["URL decoding"], useCases: ["XML extraction"] }),
    t("YAML URL Encoder", "https://langstop.com/yaml-url-encoder", "Encode YAML to URL-safe strings.", "encoding-tools", ["yaml", "url", "encoder"], { features: ["YAML encoding"], useCases: ["URL embedding"] }),
    t("YAML URL Decoder", "https://langstop.com/yaml-url-decoder", "Decode URL-encoded YAML.", "encoding-tools", ["yaml", "url", "decoder"], { features: ["URL decoding"], useCases: ["YAML extraction"] }),
    t("Base64 Encoder", "https://langstop.com/base64-encoder", "Encode text to Base64.", "encoding-tools", ["base64", "encoder"], { features: ["Text to Base64"], useCases: ["Data encoding"] }),
    t("Base64 Decoder", "https://langstop.com/base64-decoder", "Decode Base64 to text.", "encoding-tools", ["base64", "decoder"], { features: ["Base64 to text"], useCases: ["Data decoding"] }),
    // External
    t("Code Beautify Encoding Tools", "https://codebeautify.org/escape-unescape-tools", "Escape and unescape tools for various formats.", "encoding-tools", ["escape", "unescape", "encoding"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// COLOR TOOLS
// ============================================================
data.categories["color-tools"] = {
  name: "Color Tools",
  description: "Color pickers, palettes, and workbenches",
  icon: "🎨",
  tools: [
    t("Color Workbench", "https://langstop.com/color-workbench", "Interactive color palette and harmony workbench.", "color-tools", ["color", "palette", "harmony"], { features: ["Color harmonies", "Contrast checker", "Export"], useCases: ["UI design", "Accessibility"] }),
    // External
    t("Coolors", "https://coolors.co", "Color palette generator.", "color-tools", ["color", "palette", "generator"], { badges: ["browser-based", "popular"] }),
    t("Adobe Color", "https://color.adobe.com", "Color wheel and palette creator.", "color-tools", ["color", "wheel", "palette"], { badges: ["browser-based"] }),
    t("Code Beautify Color Tools", "https://codebeautify.org/color-tools", "Color converters and palette tools.", "color-tools", ["color", "converter", "palette"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// FORMATTERS
// ============================================================
data.categories["formatters"] = {
  name: "Formatters",
  description: "Multi-language code formatters and beautifiers",
  icon: "✨",
  tools: [
    t("JavaScript Formatter", "https://langstop.com/formatters/javascript-formatter", "Format JavaScript code.", "formatters", ["javascript", "formatter"], { features: ["AST-based"], useCases: ["Code formatting"] }),
    t("TypeScript Formatter", "https://langstop.com/formatters/typescript-formatter", "Format TypeScript code.", "formatters", ["typescript", "formatter"], { features: ["TypeScript support"], useCases: ["TS formatting"] }),
    t("Python Formatter", "https://langstop.com/formatters/python-formatter", "Format Python code.", "formatters", ["python", "formatter"], { features: ["Python syntax"], useCases: ["Python formatting"] }),
    t("Go Formatter", "https://langstop.com/formatters/go-formatter", "Format Go code.", "formatters", ["go", "formatter", "golang"], { features: ["Go syntax"], useCases: ["Go formatting"] }),
    t("Rust Formatter", "https://langstop.com/formatters/rust-formatter", "Format Rust code.", "formatters", ["rust", "formatter"], { features: ["Rust syntax"], useCases: ["Rust formatting"] }),
    t("Java Formatter", "https://langstop.com/formatters/java-formatter", "Format Java code.", "formatters", ["java", "formatter"], { features: ["Java syntax"], useCases: ["Java formatting"] }),
    t("C++ Formatter", "https://langstop.com/formatters/cpp-formatter", "Format C++ code.", "formatters", ["cpp", "formatter"], { features: ["C++ syntax"], useCases: ["C++ formatting"] }),
    t("C# Formatter", "https://langstop.com/formatters/csharp-formatter", "Format C# code.", "formatters", ["csharp", "formatter"], { features: ["C# syntax"], useCases: ["C# formatting"] }),
    t("PHP Formatter", "https://langstop.com/formatters/php-formatter", "Format PHP code.", "formatters", ["php", "formatter"], { features: ["PHP syntax"], useCases: ["PHP formatting"] }),
    t("Ruby Formatter", "https://langstop.com/formatters/ruby-formatter", "Format Ruby code.", "formatters", ["ruby", "formatter"], { features: ["Ruby syntax"], useCases: ["Ruby formatting"] }),
    t("Swift Formatter", "https://langstop.com/formatters/swift-formatter", "Format Swift code.", "formatters", ["swift", "formatter"], { features: ["Swift syntax"], useCases: ["Swift formatting"] }),
    t("Kotlin Formatter", "https://langstop.com/formatters/kotlin-formatter", "Format Kotlin code.", "formatters", ["kotlin", "formatter"], { features: ["Kotlin syntax"], useCases: ["Kotlin formatting"] }),
    t("Dart Formatter", "https://langstop.com/formatters/dart-formatter", "Format Dart code.", "formatters", ["dart", "formatter"], { features: ["Dart syntax"], useCases: ["Dart formatting"] }),
    t("Scala Formatter", "https://langstop.com/formatters/scala-formatter", "Format Scala code.", "formatters", ["scala", "formatter"], { features: ["Scala syntax"], useCases: ["Scala formatting"] }),
    t("Haskell Formatter", "https://langstop.com/formatters/haskell-formatter", "Format Haskell code.", "formatters", ["haskell", "formatter"], { features: ["Haskell syntax"], useCases: ["Haskell formatting"] }),
    t("Elm Formatter", "https://langstop.com/formatters/elm-formatter", "Format Elm code.", "formatters", ["elm", "formatter"], { features: ["Elm syntax"], useCases: ["Elm formatting"] }),
    t("Flow Formatter", "https://langstop.com/formatters/flow-formatter", "Format Flow code.", "formatters", ["flow", "formatter"], { features: ["Flow syntax"], useCases: ["Flow formatting"] }),
    t("Objective-C Formatter", "https://langstop.com/formatters/objective-c-formatter", "Format Objective-C code.", "formatters", ["objective-c", "formatter"], { features: ["ObjC syntax"], useCases: ["ObjC formatting"] }),
    t("Pike Formatter", "https://langstop.com/formatters/pike-formatter", "Format Pike code.", "formatters", ["pike", "formatter"], { features: ["Pike syntax"], useCases: ["Pike formatting"] }),
    // External
    t("FreeFormatter", "https://www.freeformatter.com", "Multi-language code formatter.", "formatters", ["formatter", "code", "beautifier"], { badges: ["browser-based"] }),
    t("Code Beautify", "https://codebeautify.org/formatters-and-beautifiers", "Code formatters and beautifiers.", "formatters", ["formatter", "beautifier"], { badges: ["browser-based"] }),
    t("JSON Formatter", "https://jsonformatter.org", "Multi-language online formatter and beautifier.", "formatters", ["formatter", "beautifier", "multi-language"], { license: "Proprietary", badges: ["browser-based", "popular"] }),
  ]
};

// ============================================================
// VALIDATORS
// ============================================================
data.categories["validators"] = {
  name: "Validators",
  description: "Code and data validators for multiple formats",
  icon: "✅",
  tools: [
    t("JSON Validator", "https://langstop.com/json-validator", "Validate JSON syntax in real-time.", "validators", ["json", "validator"], { badges: ["browser-based"] }),
    t("XML Validator", "https://langstop.com/xml-validator", "Validate XML well-formedness.", "validators", ["xml", "validator"], { badges: ["browser-based"] }),
    t("YAML Validator", "https://langstop.com/yaml-validator", "Validate YAML syntax.", "validators", ["yaml", "validator"], { badges: ["browser-based"] }),
    t("CSS Validator", "https://langstop.com/css-validator", "Validate CSS syntax.", "validators", ["css", "validator"], { badges: ["browser-based"] }),
    // External
    t("W3C Validator", "https://validator.w3.org", "Official W3C HTML validator.", "validators", ["html", "validator", "w3c"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source", "popular"] }),
    t("Code Beautify Validators", "https://codebeautify.org/validator-tools", "Code validation tools for multiple formats.", "validators", ["validator", "checker"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// CONVERTERS
// ============================================================
data.categories["converters"] = {
  name: "Converters",
  description: "Data format and code converters",
  icon: "🔄",
  tools: [
    t("JSON to YAML", "https://langstop.com/json-to-yaml", "Convert JSON to YAML.", "converters", ["json", "yaml", "converter"], { badges: ["browser-based"] }),
    t("JSON to XML", "https://langstop.com/json-to-xml", "Convert JSON to XML.", "converters", ["json", "xml", "converter"], { badges: ["browser-based"] }),
    t("JSON to CSV", "https://langstop.com/json-to-csv", "Convert JSON to CSV.", "converters", ["json", "csv", "converter"], { badges: ["browser-based"] }),
    t("JSON to TOML", "https://langstop.com/json-to-toml", "Convert JSON to TOML.", "converters", ["json", "toml", "converter"], { badges: ["browser-based"] }),
    t("YAML to JSON", "https://langstop.com/yaml-to-json", "Convert YAML to JSON.", "converters", ["yaml", "json", "converter"], { badges: ["browser-based"] }),
    t("YAML to XML", "https://langstop.com/yaml-to-xml", "Convert YAML to XML.", "converters", ["yaml", "xml", "converter"], { badges: ["browser-based"] }),
    t("XML to JSON", "https://langstop.com/xml-to-json", "Convert XML to JSON.", "converters", ["xml", "json", "converter"], { badges: ["browser-based"] }),
    t("XML to YAML", "https://langstop.com/xml-to-yaml", "Convert XML to YAML.", "converters", ["xml", "yaml", "converter"], { badges: ["browser-based"] }),
    t("CSV to JSON", "https://langstop.com/csv-to-json", "Convert CSV to JSON.", "converters", ["csv", "json", "converter"], { badges: ["browser-based"] }),
    t("CSV to YAML", "https://langstop.com/csv-to-yaml", "Convert CSV to YAML.", "converters", ["csv", "yaml", "converter"], { badges: ["browser-based"] }),
    t("TOML to JSON", "https://langstop.com/toml-to-json", "Convert TOML to JSON.", "converters", ["toml", "json", "converter"], { badges: ["browser-based"] }),
    t("TOML to YAML", "https://langstop.com/toml-to-yaml", "Convert TOML to YAML.", "converters", ["toml", "yaml", "converter"], { badges: ["browser-based"] }),
    t("TOML to XML", "https://langstop.com/toml-to-xml", "Convert TOML to XML.", "converters", ["toml", "xml", "converter"], { badges: ["browser-based"] }),
    t("JSON to Code", "https://langstop.com/json-to-code", "Convert JSON to code for 22+ languages.", "converters", ["json", "code-gen"], { badges: ["browser-based", "ai-powered"] }),
    t("XML to Code", "https://langstop.com/xml-to-code", "Convert XML to code for 22+ languages.", "converters", ["xml", "code-gen"], { badges: ["browser-based", "ai-powered"] }),
    t("YAML to Code", "https://langstop.com/yaml-to-code", "Convert YAML to code for 22+ languages.", "converters", ["yaml", "code-gen"], { badges: ["browser-based", "ai-powered"] }),
    t("JSON to .env", "https://langstop.com/json-to-env", "Convert JSON to .env format.", "converters", ["json", "env"], {}),
    t("JSON to Bash", "https://langstop.com/json-to-bash", "Convert JSON to Bash export statements.", "converters", ["json", "bash"], {}),
    t("JSON to Java Properties", "https://langstop.com/json-to-java-properties", "Convert JSON to Java .properties.", "converters", ["json", "java", "properties"], {}),
    t("JSON to Python Dict", "https://langstop.com/json-to-python-dict", "Convert JSON to Python dict.", "converters", ["json", "python", "dict"], {}),
    // External
    t("Transform", "https://transform.tools", "Code converter between languages.", "converters", ["converter", "code", "transpiler"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
    t("Compiler Explorer", "https://godbolt.org", "Compiler exploration tool.", "converters", ["compiler", "explorer", "assembly"], { license: "BSL-1.0", opensource: true, badges: ["browser-based", "open-source", "popular"] }),
  ]
};

// ============================================================
// DIFF TOOLS
// ============================================================
data.categories["diff-tools"] = {
  name: "Diff Tools",
  description: "Text, code, and data comparison tools",
  icon: "🔀",
  tools: [
    t("JSON Diff", "https://langstop.com/json-diff", "Compare two JSON objects structurally.", "diff-tools", ["json", "diff", "compare"], { badges: ["browser-based"] }),
    t("Text Diff", "https://langstop.com/text-diff", "Compare text documents.", "diff-tools", ["text", "diff", "comparison"], { badges: ["browser-based"] }),
    t("CSS Diff", "https://langstop.com/css-diff", "Compare CSS blocks.", "diff-tools", ["css", "diff", "compare"], { badges: ["browser-based"] }),
    t("OpenAPI Diff", "https://langstop.com/openapi-diff", "Compare OpenAPI specifications.", "diff-tools", ["openapi", "diff", "compare"], { badges: ["browser-based"] }),
    // External
    t("DiffNow", "https://www.diffnow.com", "Text and file comparison.", "diff-tools", ["diff", "comparison", "text"], { badges: ["browser-based"] }),
    t("Mergely", "https://mergely.com", "Online diff and merge editor.", "diff-tools", ["diff", "merge", "editor"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
    t("Code Beautify File Diff", "https://codebeautify.org/file-diff", "File and text comparison tool.", "diff-tools", ["diff", "file", "comparison"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// GENERATORS
// ============================================================
data.categories["generators"] = {
  name: "Generators",
  description: "Code, data, and content generators",
  icon: "⚙️",
  tools: [
    t("UUID/ULID Generator", "https://langstop.com/uuid-generator", "Generate UUIDs v1-v7, GUIDs, and ULIDs.", "generators", ["uuid", "ulid", "guid", "generator"], { badges: ["browser-based"] }),
    t("Password Generator", "https://langstop.com/password-generator", "Generate strong passwords.", "generators", ["password", "generator"], { badges: ["browser-based"] }),
    t("JSON Mock Data Generator", "https://langstop.com/json-mock-data-generator", "Generate realistic JSON test data.", "generators", ["json", "mock", "data"], { badges: ["browser-based"] }),
    t("CSV Mock Data Generator", "https://langstop.com/csv-mock-data-generator", "Generate CSV test data.", "generators", ["csv", "mock", "data"], { badges: ["browser-based"] }),
    t("XML Mock Data Generator", "https://langstop.com/xml-mock-data-generator", "Generate XML test data.", "generators", ["xml", "mock", "data"], { badges: ["browser-based"] }),
    t("AI Prompt Generator", "https://langstop.com/ai-prompt-generator", "Generate AI prompts from templates.", "generators", ["ai", "prompt", "generator"], { badges: ["browser-based", "ai-powered"] }),
    t("VS Code Snippet Generator", "https://langstop.com/vscode-snippet-generator", "Create VS Code snippets visually.", "generators", ["vscode", "snippet", "generator"], { features: ["Visual builder", "Variables", "Export"], useCases: ["VS Code snippets"] }),
    t("JSON Schema GUI Builder", "https://langstop.com/json-schema-gui-builder", "Build JSON Schema visually.", "generators", ["json", "schema", "builder"], { badges: ["browser-based"] }),
    // External
    t("Create New App", "https://creatnewapp.com", "Project scaffolding generator.", "generators", ["generator", "boilerplate", "scaffolding"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
    t("Code Beautify Random Tools", "https://codebeautify.org/random-tools", "Random generators for various data types.", "generators", ["random", "generator"], { badges: ["browser-based"] }),
    t("Code Beautify Password Generator", "https://codebeautify.org/password-generator", "Secure password and random string generator.", "generators", ["password", "generator", "random"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// TESTING TOOLS
// ============================================================
data.categories["testing-tools"] = {
  name: "Testing Tools",
  description: "Testing utilities, playgrounds, and auditing tools",
  icon: "🧪",
  tools: [
    t("REST API Client", "https://langstop.com/rest-api-client", "Test REST APIs from the browser.", "testing-tools", ["api", "testing", "rest"], { badges: ["browser-based"] }),
    t("WebSocket Client", "https://langstop.com/websocket-client", "Test WebSocket connections.", "testing-tools", ["websocket", "testing"], { badges: ["browser-based"] }),
    t("Regex Tester", "https://langstop.com/regex-tester", "Test and debug regular expressions.", "testing-tools", ["regex", "testing", "debugger"], { badges: ["browser-based"] }),
    t("JSON Validator", "https://langstop.com/json-validator", "Validate JSON documents.", "testing-tools", ["json", "validator"], { badges: ["browser-based"] }),
    // External
    t("Lighthouse", "https://developer.chrome.com/docs/lighthouse", "Web page auditing tool.", "testing-tools", ["testing", "performance", "seo"], { license: "Apache-2.0", opensource: true, badges: ["browser-based", "open-source", "popular"] }),
    t("PageSpeed Insights", "https://pagespeed.web.dev", "Page speed analysis.", "testing-tools", ["performance", "speed", "analysis"], { badges: ["browser-based", "popular"] }),
  ]
};

// ============================================================
// DATABASE TOOLS
// ============================================================
data.categories["database-tools"] = {
  name: "Database Tools",
  description: "Database schema designers, ER diagram tools, and connection builders",
  icon: "🗄️",
  tools: [
    t("ER Diagram Generator", "https://langstop.com/erd-generator", "Generate ER diagrams from SQL/DBML.", "database-tools", ["erd", "database", "diagram", "schema"], { features: ["SQL import", "DBML support", "SVG export", "Multi-tab"], useCases: ["Database design", "Schema visualization"], badges: ["browser-based", "privacy-first"] }),
    t("Connection String Builder", "https://langstop.com/connection-string-builder", "Build database connection strings for 14+ databases.", "database-tools", ["database", "connection-string", "url"], { features: ["14+ databases", "URI/JDBC/Prisma/Docker"], useCases: ["Database setup", "Config generation"] }),
    t("SchemaCode ER Diagram", "https://langstop.com/schemacode/erd-generator", "Generate ER diagrams from SchemaCode.", "database-tools", ["erd", "schemacode", "diagram"], { features: ["Code-based", "Export"], useCases: ["Schema design"] }),
    // External
    t("dbdiagram.io", "https://dbdiagram.io", "Database diagram designer.", "database-tools", ["database", "diagram", "schema"], { badges: ["browser-based", "popular"] }),
    t("DrawSQL", "https://drawsql.app", "Database schema visualizer.", "database-tools", ["database", "schema", "visualization"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// SYSTEM DESIGN
// ============================================================
data.categories["system-design"] = {
  name: "System Design Tools",
  description: "Architecture and system design diagram tools",
  icon: "📐",
  tools: [
    t("Mermaid Sequence Diagram Editor", "https://langstop.com/sequence-diagram", "Create sequence diagrams with Mermaid syntax.", "system-design", ["mermaid", "sequence", "diagram", "uml"], { features: ["Mermaid 11.x", "SVG export", "Live preview"], useCases: ["System design docs", "UML diagrams"], badges: ["browser-based", "privacy-first"] }),
    // External
    t("Excalidraw", "https://excalidraw.com", "Virtual whiteboard for diagrams.", "system-design", ["diagram", "whiteboard", "architecture"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source", "popular"] }),
    t("Mermaid Live Editor", "https://mermaid.live", "Generate diagrams from Markdown-like text.", "system-design", ["diagram", "mermaid", "markdown"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
    t("Draw.io", "https://app.diagrams.net", "Free diagram editor.", "system-design", ["diagram", "editor", "flowchart"], { license: "Apache-2.0", opensource: true, badges: ["browser-based", "open-source", "popular"] }),
  ]
};

// ============================================================
// PRODUCTIVITY
// ============================================================
data.categories["productivity"] = {
  name: "Developer Productivity",
  description: "Online IDEs, editors, and productivity tools",
  icon: "⚡",
  tools: [
    t("VS Code Snippet Generator", "https://langstop.com/vscode-snippet-generator", "Create VS Code snippets visually.", "productivity", ["vscode", "snippet", "productivity"], { features: ["Visual builder", "Collections", "Export"], useCases: ["Snippet management"] }),
    t("Markdown Editor", "https://langstop.com/markdown-editor", "Write Markdown with live preview.", "productivity", ["markdown", "editor", "writing"], { badges: ["browser-based"] }),
    t("Resume Builder", "https://langstop.com/resume-builder", "Build your developer resume online.", "productivity", ["resume", "builder", "career"], { features: ["Templates", "Export"], useCases: ["Job applications"] }),
    // External
    t("Gitpod", "https://www.gitpod.io", "Cloud development environment.", "productivity", ["ide", "cloud", "development"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source", "popular"] }),
    t("Replit", "https://replit.com", "Online IDE with collaboration.", "productivity", ["ide", "collaboration", "deployment"], { badges: ["browser-based", "popular"] }),
    t("StackBlitz", "https://stackblitz.com", "Online IDE for web apps.", "productivity", ["ide", "web", "angular", "react"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// MOCK DATA
// ============================================================
data.categories["mock-data"] = {
  name: "Mock Data Generators",
  description: "Fake data generators for development and testing",
  icon: "🎭",
  tools: [
    t("JSON Mock Data Generator", "https://langstop.com/json-mock-data-generator", "Generate realistic JSON test data.", "mock-data", ["json", "mock", "generator"], { badges: ["browser-based"] }),
    t("CSV Mock Data Generator", "https://langstop.com/csv-mock-data-generator", "Generate CSV test data.", "mock-data", ["csv", "mock", "generator"], { badges: ["browser-based"] }),
    t("XML Mock Data Generator", "https://langstop.com/xml-mock-data-generator", "Generate XML test data.", "mock-data", ["xml", "mock", "generator"], { badges: ["browser-based"] }),
    // External
    t("Mockaroo", "https://www.mockaroo.com", "Realistic data generator.", "mock-data", ["mock", "data", "generator"], { badges: ["browser-based", "popular"] }),
    t("JSON Generator", "https://www.json-generator.com", "Generate JSON from templates.", "mock-data", ["json", "generator", "mock"], { badges: ["browser-based"] }),
    t("Mockoon", "https://mockoon.com", "Mock API server.", "mock-data", ["mock", "api", "server"], { license: "MIT", opensource: true, badges: ["desktop", "open-source"] }),
  ]
};

// ============================================================
// DOCUMENTATION
// ============================================================
data.categories["documentation"] = {
  name: "Documentation Tools",
  description: "Documentation generators and hosting platforms",
  icon: "📚",
  tools: [
    // External
    t("Docusaurus", "https://docusaurus.io", "Documentation website builder.", "documentation", ["documentation", "website", "react"], { license: "MIT", opensource: true, badges: ["open-source", "popular"] }),
    t("MkDocs", "https://www.mkdocs.org", "Project documentation with Markdown.", "documentation", ["documentation", "markdown", "static-site"], { license: "BSD-2-Clause", opensource: true, badges: ["open-source", "popular"] }),
    t("Read the Docs", "https://readthedocs.org", "Documentation hosting.", "documentation", ["documentation", "hosting"], { license: "MIT", opensource: true, badges: ["open-source", "popular"] }),
  ]
};

// ============================================================
// GRAPHQL TOOLS
// ============================================================
data.categories["graphql-tools"] = {
  name: "GraphQL Tools",
  description: "GraphQL IDEs, explorers, and schema tools",
  icon: "◈",
  tools: [
    // External
    t("Apollo Studio", "https://studio.apollographql.com", "GraphQL management platform.", "graphql-tools", ["graphql", "explorer", "management"], { badges: ["browser-based", "popular"] }),
    t("Altair GraphQL", "https://altairgraphql.dev", "GraphQL client.", "graphql-tools", ["graphql", "client", "explorer"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
    t("GraphQL Voyager", "https://apis.guru/graphql-voyager", "GraphQL schema visualization.", "graphql-tools", ["graphql", "schema", "visualization"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
  ]
};

// ============================================================
// OPENAPI
// ============================================================
data.categories["openapi"] = {
  name: "OpenAPI Tools",
  description: "OpenAPI/Swagger specification editors and viewers",
  icon: "📖",
  tools: [
    t("OpenAPI Editor", "https://langstop.com/openapi-editor", "Design OpenAPI 3.x specs with live preview.", "openapi", ["openapi", "swagger", "editor"], { badges: ["browser-based", "privacy-first"] }),
    t("OpenAPI Diff", "https://langstop.com/openapi-diff", "Compare OpenAPI specifications.", "openapi", ["openapi", "diff", "compare"], { badges: ["browser-based"] }),
    // External
    t("Swagger Editor", "https://editor.swagger.io", "Official Swagger/OpenAPI editor.", "openapi", ["openapi", "swagger", "editor"], { license: "Apache-2.0", opensource: true, badges: ["browser-based", "open-source", "popular"] }),
    t("SwaggerHub", "https://swagger.io/tools/swaggerhub", "API design platform.", "openapi", ["openapi", "api", "design"], { badges: ["browser-based"] }),
    t("Redocly", "https://redocly.com/redoc", "OpenAPI documentation generator.", "openapi", ["openapi", "documentation", "redoc"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
  ]
};

// ============================================================
// DOCKER TOOLS
// ============================================================
data.categories["docker-tools"] = {
  name: "Docker Tools",
  description: "Docker compose builders and container tools",
  icon: "🐳",
  tools: [
    // External
    t("Composerize", "https://www.composerize.com", "Convert docker run to compose.", "docker-tools", ["docker", "compose", "converter"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source"] }),
  ]
};

// ============================================================
// KUBERNETES TOOLS
// ============================================================
data.categories["kubernetes-tools"] = {
  name: "Kubernetes Tools",
  description: "Kubernetes management and monitoring tools",
  icon: "☸️",
  tools: [
    // External
    t("Lens", "https://k8slens.dev", "Kubernetes IDE.", "kubernetes-tools", ["kubernetes", "ide", "management"], { license: "MIT", opensource: true, badges: ["desktop", "open-source", "popular"] }),
    t("K9s", "https://k9scli.io", "Terminal K8s manager.", "kubernetes-tools", ["kubernetes", "cli", "management"], { license: "Apache-2.0", opensource: true, badges: ["cli", "open-source", "popular"] }),
  ]
};

// ============================================================
// CLOUD TOOLS
// ============================================================
data.categories["cloud-tools"] = {
  name: "Cloud Tools",
  description: "Cloud provider tools, calculators, and platforms",
  icon: "☁️",
  tools: [
    // External
    t("AWS Calculator", "https://calculator.aws", "AWS pricing calculator.", "cloud-tools", ["aws", "calculator", "pricing"], { badges: ["browser-based"] }),
    t("Vercel", "https://vercel.com", "Frontend cloud platform.", "cloud-tools", ["cloud", "hosting", "serverless"], { badges: ["browser-based", "popular"] }),
    t("Netlify", "https://www.netlify.com", "Cloud hosting platform.", "cloud-tools", ["cloud", "hosting", "serverless"], { badges: ["browser-based", "popular"] }),
  ]
};

// ============================================================
// DEVOPS
// ============================================================
data.categories["devops"] = {
  name: "DevOps Tools",
  description: "Monitoring, incident management, and automation",
  icon: "🔄",
  tools: [
    // External
    t("Better Uptime", "https://betteruptime.com", "Uptime monitoring.", "devops", ["monitoring", "uptime", "incident"], { badges: ["browser-based"] }),
    t("Uptime Robot", "https://uptimerobot.com", "Free website monitoring.", "devops", ["monitoring", "uptime"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// CLI TOOLS
// ============================================================
data.categories["cli-tools"] = {
  name: "CLI Tools",
  description: "Online terminal emulators and command references",
  icon: "💻",
  tools: [
    t("Linux Command Builders", "https://langstop.com/linux-tools", "Visual builders for 25+ Linux commands.", "cli-tools", ["linux", "command", "builder"], { features: ["Interactive builders", "Copy-ready output"], useCases: ["Learning Linux", "Command generation"] }),
    // External
    t("JSLinux", "https://bellard.org/jslinux", "Linux emulator in browser.", "cli-tools", ["linux", "emulator", "terminal"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source", "offline"] }),
    t("tldr", "https://tldr.sh", "Simplified man pages.", "cli-tools", ["cheatsheet", "command", "reference"], { license: "MIT", opensource: true, badges: ["browser-based", "open-source", "popular"] }),
  ]
};

// ============================================================
// CI/CD TOOLS
// ============================================================
data.categories["cicd-tools"] = {
  name: "CI/CD Tools",
  description: "Continuous integration and deployment platforms",
  icon: "🔄",
  tools: [
    // External
    t("GitHub Actions", "https://github.com/features/actions", "GitHub CI/CD platform.", "cicd-tools", ["ci", "cd", "automation"], { badges: ["popular"] }),
    t("CircleCI", "https://circleci.com", "Cloud CI/CD platform.", "cicd-tools", ["ci", "cd", "testing"], { badges: ["popular"] }),
    t("Jenkins", "https://www.jenkins.io", "Open source automation server.", "cicd-tools", ["ci", "cd", "automation"], { license: "MIT", opensource: true, badges: ["open-source", "popular"] }),
  ]
};

// ============================================================
// TOML TOOLS
// ============================================================
data.categories["toml-tools"] = {
  name: "TOML Tools",
  description: "TOML parsers, converters, and validators",
  icon: "🔧",
  tools: [
    t("TOML to JSON", "https://langstop.com/toml-to-json", "Convert TOML to JSON.", "toml-tools", ["toml", "json", "converter"], { badges: ["browser-based"] }),
    t("TOML to YAML", "https://langstop.com/toml-to-yaml", "Convert TOML to YAML.", "toml-tools", ["toml", "yaml", "converter"], { badges: ["browser-based"] }),
    t("TOML to XML", "https://langstop.com/toml-to-xml", "Convert TOML to XML.", "toml-tools", ["toml", "xml", "converter"], { badges: ["browser-based"] }),
    t("JSON to TOML", "https://langstop.com/json-to-toml", "Convert JSON to TOML.", "toml-tools", ["json", "toml", "converter"], { badges: ["browser-based"] }),
    t("YAML to TOML", "https://langstop.com/yaml-to-toml", "Convert YAML to TOML.", "toml-tools", ["yaml", "toml", "converter"], { badges: ["browser-based"] }),
    t("XML to TOML", "https://langstop.com/xml-to-toml", "Convert XML to TOML.", "toml-tools", ["xml", "toml", "converter"], { badges: ["browser-based"] }),
    t("TOML Hub", "https://langstop.com/tools/toml", "All TOML tools.", "toml-tools", ["toml", "tools", "hub"], { badges: ["browser-based"] }),
    t("TOML Formatter", "https://jsonformatter.org/toml", "Online TOML formatter and validator.", "toml-tools", ["toml", "formatter", "validator"], { license: "Proprietary", badges: ["browser-based", "popular"] }),
  ]
};

// ============================================================
// TIME TOOLS
// ============================================================
data.categories["time-tools"] = {
  name: "Time & Date Tools",
  description: "Timestamp converters, cron helpers, and date utilities",
  icon: "⏰",
  tools: [
    t("Timestamp Converter", "https://langstop.com/epoch-timestamp-converter", "Convert UNIX timestamps to human-readable dates.", "time-tools", ["timestamp", "unix", "epoch", "converter"], { features: ["Bidirectional", "Millisecond support"], useCases: ["Timestamp conversion", "Debugging"] }),
    t("Cron Helper", "https://langstop.com/cron-helper", "Build and validate cron expressions visually.", "time-tools", ["cron", "scheduler", "builder"], { features: ["Next run preview", "Explain"], useCases: ["Cron scheduling"] }),
    t("Age Calculator", "https://langstop.com/age-calculator", "Calculate age in years, months, and days.", "time-tools", ["age", "calculator", "date"], { features: ["Precise calculation"], useCases: ["Age computation"] }),
    t("Common Cron Expressions", "https://langstop.com/cron-expressions", "Reference for common cron schedules.", "time-tools", ["cron", "expressions", "reference"], { features: ["30+ patterns"], useCases: ["Cron reference"] }),
    t("Time Hub", "https://langstop.com/tools/time", "All time and date tools.", "time-tools", ["time", "date", "tools"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// CONFIGURATION TOOLS
// ============================================================
data.categories["config-tools"] = {
  name: "Configuration Tools",
  description: "Config format converters between JSON, YAML, XML, TOML, .env, and more",
  icon: "⚙️",
  tools: [
    t("JSON to .env", "https://langstop.com/json-to-env", "Convert JSON to .env format.", "config-tools", ["json", "env", "dotenv"], { badges: ["browser-based"] }),
    t("JSON to Java Properties", "https://langstop.com/json-to-java-properties", "Convert JSON to Java .properties.", "config-tools", ["json", "java", "properties"], { badges: ["browser-based"] }),
    t("JSON to Python Dict", "https://langstop.com/json-to-python-dict", "Convert JSON to Python dict.", "config-tools", ["json", "python", "dict"], { badges: ["browser-based"] }),
    t("JSON to PHP Array", "https://langstop.com/json-to-php-array", "Convert JSON to PHP array.", "config-tools", ["json", "php", "array"], { badges: ["browser-based"] }),
    t("JSON to PHP INI", "https://langstop.com/json-to-php-ini", "Convert JSON to PHP INI.", "config-tools", ["json", "php", "ini"], { badges: ["browser-based"] }),
    t("JSON to INI (Python)", "https://langstop.com/json-to-ini", "Convert JSON to Python INI.", "config-tools", ["json", "ini", "configparser"], { badges: ["browser-based"] }),
    t("JSON to Bash", "https://langstop.com/json-to-bash", "Convert JSON to Bash exports.", "config-tools", ["json", "bash", "shell"], { badges: ["browser-based"] }),
    t("YAML to .env", "https://langstop.com/yaml-to-env", "Convert YAML to .env format.", "config-tools", ["yaml", "env", "dotenv"], { badges: ["browser-based"] }),
    t("YAML to Java Properties", "https://langstop.com/yaml-to-java-properties", "Convert YAML to Java .properties.", "config-tools", ["yaml", "java", "properties"], { badges: ["browser-based"] }),
    t("YAML to Python Dict", "https://langstop.com/yaml-to-python-dict", "Convert YAML to Python dict.", "config-tools", ["yaml", "python", "dict"], { badges: ["browser-based"] }),
    t("YAML to PHP Array", "https://langstop.com/yaml-to-php-array", "Convert YAML to PHP array.", "config-tools", ["yaml", "php", "array"], { badges: ["browser-based"] }),
    t("YAML to PHP INI", "https://langstop.com/yaml-to-php-ini", "Convert YAML to PHP INI.", "config-tools", ["yaml", "php", "ini"], { badges: ["browser-based"] }),
    t("YAML to INI (Python)", "https://langstop.com/yaml-to-ini", "Convert YAML to Python INI.", "config-tools", ["yaml", "ini", "configparser"], { badges: ["browser-based"] }),
    t("YAML to Bash", "https://langstop.com/yaml-to-bash", "Convert YAML to Bash exports.", "config-tools", ["yaml", "bash", "shell"], { badges: ["browser-based"] }),
    t("Bash Properties to JSON", "https://langstop.com/bash-properties-to-json", "Convert Bash exports to JSON.", "config-tools", ["bash", "json", "converter"], { badges: ["browser-based"] }),
    t("Bash Properties to YAML", "https://langstop.com/bash-properties-to-yaml", "Convert Bash exports to YAML.", "config-tools", ["bash", "yaml", "converter"], { badges: ["browser-based"] }),
    t("Java Properties to JSON", "https://langstop.com/java-properties-to-json", "Convert .properties to JSON.", "config-tools", ["java", "properties", "json"], { badges: ["browser-based"] }),
    t("Java Properties to YAML", "https://langstop.com/java-properties-to-yaml", "Convert .properties to YAML.", "config-tools", ["java", "properties", "yaml"], { badges: ["browser-based"] }),
    t("Python Dict to JSON", "https://langstop.com/python-dict-to-json", "Convert Python dict to JSON.", "config-tools", ["python", "dict", "json"], { badges: ["browser-based"] }),
    t("Python Dict to YAML", "https://langstop.com/python-dict-to-yaml", "Convert Python dict to YAML.", "config-tools", ["python", "dict", "yaml"], { badges: ["browser-based"] }),
    t("PHP Array to JSON", "https://langstop.com/php-array-to-json", "Convert PHP array to JSON.", "config-tools", ["php", "array", "json"], { badges: ["browser-based"] }),
    t("PHP Array to YAML", "https://langstop.com/php-array-to-yaml", "Convert PHP array to YAML.", "config-tools", ["php", "array", "yaml"], { badges: ["browser-based"] }),
    t("PHP INI to JSON", "https://langstop.com/php-ini-to-json", "Convert PHP INI to JSON.", "config-tools", ["php", "ini", "json"], { badges: ["browser-based"] }),
    t("PHP INI to YAML", "https://langstop.com/php-ini-to-yaml", "Convert PHP INI to YAML.", "config-tools", ["php", "ini", "yaml"], { badges: ["browser-based"] }),
    t("INI (Python) to JSON", "https://langstop.com/ini-to-json", "Convert INI to JSON.", "config-tools", ["ini", "json", "converter"], { badges: ["browser-based"] }),
    t("INI (Python) to YAML", "https://langstop.com/ini-to-yaml", "Convert INI to YAML.", "config-tools", ["ini", "yaml", "converter"], { badges: ["browser-based"] }),
    t("ENV to JSON", "https://langstop.com/env-to-json", "Convert .env to JSON.", "config-tools", ["env", "json", "converter"], { badges: ["browser-based"] }),
    t("ENV to YAML", "https://langstop.com/env-to-yaml", "Convert .env to YAML.", "config-tools", ["env", "yaml", "converter"], { badges: ["browser-based"] }),
    t("Connection String Builder", "https://langstop.com/connection-string-builder", "Build database connection strings.", "config-tools", ["database", "connection-string"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// MCP & WORKFLOW TOOLS
// ============================================================
data.categories["workflow-tools"] = {
  name: "Workflow & Pipeline Tools",
  description: "MCP config generators, data pipelines, and automation tools",
  icon: "🔧",
  tools: [
    t("MCP Config Generator", "https://langstop.com/mcp-generator", "Generate MCP server configuration files.", "workflow-tools", ["mcp", "config", "generator"], { features: ["Template-based", "Server config"], useCases: ["MCP setup"] }),
    t("JSON Pipeline Builder", "https://langstop.com/pipeline-builder", "Compose JSON processing pipelines.", "workflow-tools", ["json", "pipeline", "workflow"], { features: ["Multi-step", "Reusable"], useCases: ["Data processing"] }),
    t("Workflow Hub", "https://langstop.com/tools/workflow", "All workflow and pipeline tools.", "workflow-tools", ["workflow", "pipeline", "tools"], { badges: ["browser-based"] }),
  ]
};

// ============================================================
// UPDATE COUNTS
// ============================================================
let totalTools = 0;
const catCount = Object.keys(data.categories).length;
for (const cat of Object.values(data.categories)) {
  totalTools += (cat.tools || []).length;
}
data.meta.totalTools = totalTools;
data.meta.totalCategories = catCount;

// Write file
fs.writeFileSync(DEST, JSON.stringify(data, null, 2) + "\n", "utf-8");
console.log(`✅ Generated awesome-list.json with ${totalTools} tools across ${catCount} categories`);
