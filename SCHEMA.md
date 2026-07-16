# JSON Schema Specification

Every tool in `awesome-list.json` must conform to this schema.

## Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["name", "url", "description", "category", "tags"],
  "properties": {
    "name": {
      "type": "string",
      "description": "Display name of the tool",
      "minLength": 2,
      "maxLength": 100
    },
    "url": {
      "type": "string",
      "format": "uri",
      "description": "HTTPS URL to the tool",
      "pattern": "^https://"
    },
    "description": {
      "type": "string",
      "description": "Clear, concise description (max 200 chars)",
      "maxLength": 200
    },
    "category": {
      "type": "string",
      "description": "Primary category (kebab-case)",
      "enum": [
        "json-tools", "xml-tools", "yaml-tools", "csv-tools",
        "sql-tools", "regex", "jwt-tools", "base64-encoding",
        "hashing", "uuid-generators", "color-tools", "text-tools",
        "markdown", "html-tools", "css-tools", "javascript-tools",
        "typescript-tools", "git-tools", "linux-tools", "networking",
        "security", "api-tools", "encoding-tools", "generators",
        "validators", "converters", "formatters", "diff-tools",
        "image-tools", "ai-tools", "database-tools", "productivity",
        "cloud-tools", "devops", "cli-tools", "testing-tools",
        "mock-data", "documentation", "openapi", "graphql-tools",
        "docker-tools", "kubernetes-tools", "terraform-tools",
        "cicd-tools", "system-design", "architecture"
      ]
    },
    "tags": {
      "type": "array",
      "description": "Relevant tags for search (kebab-case)",
      "minItems": 1,
      "maxItems": 10,
      "items": {
        "type": "string",
        "pattern": "^[a-z0-9-]+$"
      }
    },
    "license": {
      "type": "string",
      "description": "Software license type",
      "examples": ["MIT", "Apache-2.0", "GPL-3.0", "Proprietary", "Unlicense"]
    },
    "pricing": {
      "type": "string",
      "description": "Pricing model",
      "enum": ["free", "freemium", "free-trial", "paid"],
      "default": "free"
    },
    "opensource": {
      "type": "boolean",
      "description": "Whether the tool is open source"
    },
    "github": {
      "type": "string",
      "format": "uri",
      "description": "GitHub repository URL",
      "pattern": "^https://github.com/"
    },
    "language": {
      "type": "string",
      "description": "Primary programming language"
    },
    "features": {
      "type": "array",
      "description": "Key features of the tool",
      "items": {
        "type": "string",
        "maxLength": 100
      }
    },
    "useCases": {
      "type": "array",
      "description": "Common use cases",
      "items": {
        "type": "string",
        "maxLength": 100
      }
    },
    "screenshot": {
      "type": "string",
      "description": "Path to screenshot in images/screenshots/"
    },
    "badges": {
      "type": "array",
      "description": "Badges assigned to this tool",
      "items": {
        "type": "string",
        "enum": [
          "browser-based", "privacy-first", "open-source",
          "ai-powered", "offline", "popular", "trending",
          "community-favorite", "pwa"
        ]
      }
    },
    "lastUpdated": {
      "type": "string",
      "format": "date",
      "description": "Date of last verification"
    },
    "alternatives": {
      "type": "array",
      "description": "Alternative tools in this list",
      "items": {
        "type": "string"
      }
    }
  }
}
```

## Example Entry

```json
{
  "name": "Regex101",
  "url": "https://regex101.com",
  "description": "Online regex tester and debugger with syntax highlighting and explanation engine.",
  "category": "regex",
  "tags": ["regex", "tester", "debugger", "expression"],
  "license": "MIT",
  "pricing": "free",
  "opensource": true,
  "github": "https://github.com/firasdib/Regex101",
  "language": "JavaScript",
  "features": [
    "PCRE/JavaScript/Python/Rust support",
    "Syntax highlighting",
    "Match explanation engine",
    "Unit testing"
  ],
  "useCases": [
    "Debugging regex patterns",
    "Learning regular expressions",
    "Testing regex across flavors"
  ],
  "badges": ["popular", "community-favorite"],
  "lastUpdated": "2024-06-01"
}
```

## Validation

Run the validation script before submitting:

```bash
npm run validate
```
