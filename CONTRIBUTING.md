# Contributing to Awesome Online Dev Tools

First off, thank you for considering contributing! Every addition makes
this resource more valuable for developers worldwide.

## Quick Start

Adding a tool is as simple as adding one JSON object.

### Adding a New Tool

1. Fork the repository
2. Add your tool to `awesome-list.json`
3. Run `npm run validate` to check your entry
4. Submit a pull request

### JSON Entry Format

```json
{
  "name": "Tool Name",
  "url": "https://example.com",
  "description": "A clear, concise description of what the tool does.",
  "category": "json-tools",
  "tags": ["json", "formatter", "validator"],
  "license": "MIT",
  "pricing": "free",
  "opensource": true,
  "github": "https://github.com/user/repo",
  "language": "JavaScript",
  "features": ["Feature 1", "Feature 2"],
  "useCases": ["Use case 1", "Use case 2"],
  "screenshot": "images/screenshots/tool-name.png",
  "lastUpdated": "2024-01-01"
}
```

### JSON Schema

Refer to [SCHEMA.md](SCHEMA.md) for the full schema specification.

## Guidelines

### Do

- ✅ Test the tool before submitting
- ✅ Verify the URL is correct and working
- ✅ Write a clear, unique description
- ✅ Categorize correctly
- ✅ Check for duplicates before adding
- ✅ Use HTTPS URLs where available

### Don't

- ❌ Submit tools you haven't used
- ❌ Add paid-only tools (freemium is OK)
- ❌ Submit affiliate links
- ❌ Add tools requiring phone verification
- ❌ Submit malicious or deceptive tools
- ❌ Add the same tool in multiple categories

## Categories

Tools should match their primary category. If a tool spans multiple
categories, add it to the most relevant one and use tags for the rest.

### Current Categories

| Category | Description |
|----------|-------------|
| json-tools | JSON formatters, validators, converters |
| xml-tools | XML editors, formatters, validators |
| yaml-tools | YAML parsers, validators, converters |
| csv-tools | CSV editors, converters, viewers |
| sql-tools | SQL editors, formatters, generators |
| regex | Regex testers, builders, explainers |
| jwt-tools | JWT decoders, debuggers, generators |
| base64-encoding | Base64 encoders, decoders |
| hashing | Hash generators, checkers |
| uuid-generators | UUID generators |
| color-tools | Color pickers, palette generators |
| text-tools | Text utilities, counters, diff |
| markdown | Markdown editors, previewers |
| html-tools | HTML formatters, validators |
| css-tools | CSS formatters, minifiers |
| javascript-tools | JS playgrounds, transpilers |
| typescript-tools | TS playgrounds, compilers |
| git-tools | Git explorers, generators |
| linux-tools | Linux command references |
| networking | Network tools, DNS, IP |
| security | Security scanners, checkers |
| api-tools | API clients, testers |
| encoding-tools | Various encoders/decoders |
| generators | Code generators, scaffolding |
| validators | Form validators, checkers |
| converters | Unit converters, file converters |
| formatters | Code formatters, beautifiers |
| diff-tools | Text and code comparison |
| image-tools | Image editors, optimizers |
| ai-tools | AI-powered developer tools |
| database-tools | Online database managers |
| productivity | Developer productivity tools |
| cloud-tools | Cloud console tools |
| devops | DevOps utilities |
| cli-tools | Online terminal emulators |
| testing-tools | Test runners, playgrounds |
| mock-data | Mock data generators |
| documentation | Documentation generators |
| openapi | OpenAPI/Swagger tools |
| graphql-tools | GraphQL IDEs, explorers |
| docker-tools | Docker helpers |
| kubernetes-tools | K8s utilities |
| terraform-tools | Terraform helpers |
| cicd-tools | CI/CD utilities |
| system-design | System design tools |
| architecture | Architecture diagram tools |

## Pull Request Process

1. Update `awesome-list.json` with your entry
2. Ensure alphabetical order within the category
3. Run `npm run validate`
4. Run `npm run sort` to sort entries
5. Update `README.md` if adding a new category
6. Add screenshots if available (optimized, max 500KB)

Your PR will be reviewed within 48 hours.

## Code Style

- 2-space indentation for JSON
- Alphabetical sorting within categories
- Lowercase category names (kebab-case)
- Descriptive but concise tool names
- HTTPS URLs only
- Consistent tag format (kebab-case)

## Getting Help

Open a [discussion](https://github.com/langstop/awesome-online-dev-tools/discussions)
if you have questions.

## Recognition

Significant contributors will be added to the README and may become
maintainers over time.

Thank you for making this project better!
