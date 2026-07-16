<div align="center">

# 🛠 Awesome Online Dev Tools

### A curated collection of the best browser-based developer tools

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub contributors](https://img.shields.io/github/contributors/langstop/awesome-online-dev-tools)](https://github.com/langstop/awesome-online-dev-tools/graphs/contributors)
[![GitHub stars](https://img.shields.io/github/stars/langstop/awesome-online-dev-tools?style=social)](https://github.com/langstop/awesome-online-dev-tools)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Tools Count](https://img.shields.io/badge/tools-200%2B-blue)](#)
[![Categories](https://img.shields.io/badge/categories-40%2B-green)](#)
[![Validate](https://github.com/langstop/awesome-online-dev-tools/actions/workflows/validate.yml/badge.svg)](https://github.com/langstop/awesome-online-dev-tools/actions/workflows/validate.yml)
[![Open Source](https://img.shields.io/badge/open%20source-%3E60%25-success)](#)

</div>

---

## Why Browser-Based Developer Tools?

**No installation required.** Open a browser tab and start working. Zero setup, zero configuration, zero friction.

**Cross-platform by nature.** Whether you're on macOS, Windows, Linux, or ChromeOS, the same tools work everywhere. No platform-specific builds, no dependency hell.

**Always up to date.** Browser tools update themselves. You always get the latest version without running `apt upgrade`, `brew update`, or downloading new installers.

**Free and accessible.** The vast majority of online developer tools are free to use. No credit card required, no time-limited trials, no feature gates.

**Privacy-respecting.** Many tools run entirely in your browser — your data never touches a server. For sensitive work like JWTs, certificates, or private keys, this matters.

**Offline capable.** A growing number of tools work offline via Service Workers and WebAssembly. Formatters, validators, encoders, and generators can run with zero network access.

**Collaboration-ready.** Share a URL instead of a screenshot. Send a live playground link instead of copying code into a chat window.

**From anywhere.** Need to validate a JSON payload on your phone? Format YAML on a friend's laptop? Fix a regex from an internet cafe? Online tools are there when your local environment isn't.

---

## Table of Contents

<details>
<summary><strong>📋 Data Formats</strong></summary>

- [JSON Tools](#json-tools)
- [XML Tools](#xml-tools)
- [YAML Tools](#yaml-tools)
- [CSV Tools](#csv-tools)
</details>

<details>
<summary><strong>🔤 Text & Code</strong></summary>

- [Text Tools](#text-tools)
- [Diff Tools](#diff-tools)
- [Markdown Tools](#markdown-tools)
- [HTML Tools](#html-tools)
- [CSS Tools](#css-tools)
- [JavaScript Tools](#javascript-tools)
- [TypeScript Tools](#typescript-tools)
</details>

<details>
<summary><strong>🔐 Security & Encoding</strong></summary>

- [Regex Tools](#regex-tools)
- [JWT Tools](#jwt-tools)
- [Base64 Encoding](#base64-encoding)
- [Hashing Tools](#hashing-tools)
- [UUID Generators](#uuid-generators)
- [Security Tools](#security-tools)
- [Encoding Tools](#encoding-tools)
</details>

<details>
<summary><strong>🗄️ Data Management</strong></summary>

- [SQL Tools](#sql-tools)
- [Database Tools](#database-tools)
- [Mock Data Generators](#mock-data-generators)
</details>

<details>
<summary><strong>🎨 Design & Media</strong></summary>

- [Color Tools](#color-tools)
- [Image Tools](#image-tools)
</details>

<details>
<summary><strong>🌐 Web & API</strong></summary>

- [API Tools](#api-tools)
- [OpenAPI Tools](#openapi-tools)
- [GraphQL Tools](#graphql-tools)
- [Networking Tools](#networking-tools)
</details>

<details>
<summary><strong>⚙️ Development</strong></summary>

- [Git Tools](#git-tools)
- [Linux Tools](#linux-tools)
- [Generators](#generators)
- [Validators](#validators)
- [Converters](#converters)
- [Formatters](#formatters)
- [Testing Tools](#testing-tools)
</details>

<details>
<summary><strong>🤖 AI & Productivity</strong></summary>

- [AI Tools](#ai-tools)
- [Developer Productivity](#developer-productivity)
</details>

<details>
<summary><strong>☁️ Cloud & DevOps</strong></summary>

- [Cloud Tools](#cloud-tools)
- [DevOps Tools](#devops-tools)
- [CLI Tools](#cli-tools)
- [Docker Tools](#docker-tools)
- [Kubernetes Tools](#kubernetes-tools)
- [Terraform Tools](#terraform-tools)
- [CI/CD Tools](#cicd-tools)
</details>

<details>
<summary><strong>📐 Architecture & Design</strong></summary>

- [System Design Tools](#system-design-tools)
- [Architecture Tools](#architecture-tools)
- [Documentation Tools](#documentation-tools)
</details>

---

## JSON Tools

### JSON Formatter & Validator
> Format, validate, and beautify JSON data with syntax highlighting and error detection.

**Features:** Syntax highlighting, error localization, tree view, minification, JSON schema validation, large file support

**Use Cases:** Debugging API responses, formatting config files, validating JSON schemas, pretty-printing logs

**Tags:** `json` `formatter` `validator` `beautifier` `pretty-print`

- 🌐 [JSON Formatter & Validator](https://jsonformatter.org) — Online JSON formatter and validator
- 🌐 [JSONLint](https://jsonlint.com) — JSON validator and reformatter
- 🌐 [JSON Hero](https://jsonhero.io) — JSON viewer with schema inference
- 🌐 [LangStop JSON Tools](https://langstop.com/json-formatter) — Browser-based JSON formatter, validator, and converter
- 🌐 [JSON Editor Online](https://jsoneditoronline.org) — Tree editor for JSON documents

### JSON to CSV Converter
> Convert between JSON and CSV formats with customizable mappings.

**Features:** Field mapping, delimiter options, nested JSON flattening, large file support, encoding detection

**Use Cases:** Data migration, spreadsheet import, database seeding, reporting

**Tags:** `json` `csv` `converter` `data-migration`

- 🌐 [JSON to CSV](https://json-csv.com) — Online JSON to CSV converter
- 🌐 [ConvertCSV](https://www.convertcsv.com/json-to-csv.htm) — JSON to CSV with advanced options
- 🌐 [LangStop JSON Tools](https://langstop.com/json-formatter) — JSON formatting and conversion tools

### JSON Schema Validator
> Validate JSON documents against JSON Schema specifications.

**Features:** Draft 4/6/7/2019-09/2020-12 support, custom formats, error messages, schema generation from samples

**Use Cases:** API validation, configuration verification, data contract enforcement

**Tags:** `json` `schema` `validator` `jsonschema`

- 🌐 [JSON Schema Validator](https://www.jsonschemavalidator.net) — Online JSON Schema validation
- 🌐 [JSON Buddy](https://www.json-buddy.com) — JSON editor with schema validation

### JSON Diff
> Compare two JSON documents and visualize the differences.

**Features:** Side-by-side diff, tree diff, delta generation, merge support, syntax highlighting

**Use Cases:** Code review, API response comparison, configuration diffing

**Tags:** `json` `diff` `comparison` `merge`

- 🌐 [JSON Diff](https://jsondiff.com) — Online JSON diff tool
- 🌐 [JSONCompare](https://jsoncompare.com) — JSON comparison and merge

### Best JSON Tools

| Tool | Free | Open Source | Privacy | Offline |
|------|------|-------------|---------|---------|
| JSON Formatter & Validator | ✅ | ❌ | ✅ (client-side) | ❌ |
| JSONLint | ✅ | ✅ | ✅ (client-side) | ❌ |
| JSON Hero | ✅ | ✅ | ✅ (client-side) | ❌ |
| LangStop JSON Tools | ✅ | ❌ | ✅ (client-side) | ❌ |
| JSON Editor Online | ✅ | ✅ | ✅ (client-side) | ✅ (PWA) |

---

## XML Tools

### XML Formatter
> Format and beautify XML documents with syntax highlighting and tree view.

**Tags:** `xml` `formatter` `beautifier`

- 🌐 [XML Formatter](https://xmlformatter.org) — Online XML formatter and validator
- 🌐 [Code Beautify XML Viewer](https://codebeautify.org/xmlviewer) — XML viewer and formatter
- 🌐 [XMLGrid](https://xmlgrid.net) — XML to grid converter

### XML to JSON Converter
> Convert XML documents to JSON format and vice versa.

**Tags:** `xml` `json` `converter`

- 🌐 [XML to JSON Converter](https://www.convertjson.com/xml-to-json.htm) — Convert XML to JSON online
- 🌐 [FreeFormatter XML to JSON](https://www.freeformatter.com/xml-to-json-converter.html) — XML to JSON converter

---

## YAML Tools

### YAML Validator
> Validate and lint YAML files with syntax checking.

**Tags:** `yaml` `validator` `linter`

- 🌐 [YAML Lint](http://www.yamllint.com) — YAML validator and linter
- 🌐 [YAML Checker](https://yamlchecker.com) — YAML syntax checker
- 🌐 [Online YAML Parser](https://yaml-online-parser.appspot.com) — Parse and validate YAML online

### YAML to JSON Converter
> Convert between YAML and JSON formats.

**Tags:** `yaml` `json` `converter`

- 🌐 [YAML to JSON Converter](https://www.convertjson.com/yaml-to-json.htm) — Convert YAML to JSON
- 🌐 [JSON to YAML](https://www.json2yaml.com) — Convert JSON to YAML online

---

## CSV Tools

### CSV Editor
> Edit CSV files online with spreadsheet-like interface.

**Tags:** `csv` `editor` `spreadsheet`

- 🌐 [CSV Viewer](https://csvviewer.com) — Online CSV viewer and editor
- 🌐 [TableConvert](https://tableconvert.com) — CSV to table converter and editor
- 🌐 [Online CSV Editor](https://www.onlinecsvtools.com/edit-csv) — CSV editor with filtering

### CSV to Markdown Table
> Convert CSV data to formatted Markdown tables.

**Tags:** `csv` `markdown` `table` `converter`

- 🌐 [CSV to Markdown](https://tableconvert.com/csv-to-markdown) — CSV to Markdown table converter
- 🌐 [ConvertCSV](https://www.convertcsv.com/csv-to-markdown.htm) — CSV to Markdown conversion

---

## SQL Tools

### SQL Editor
> Write and execute SQL queries online with results display.

**Tags:** `sql` `editor` `query` `database`

- 🌐 [SQL Fiddle](http://sqlfiddle.com) — Online SQL playground
- 🌐 [DB Fiddle](https://www.db-fiddle.com) — SQL database playground
- 🌐 [SQLite Online](https://sqliteonline.com) — Online SQLite editor
- 🌐 [dbfiddle.uk](https://dbfiddle.uk) — SQL fiddle with multiple engines

### SQL Formatter
> Format and beautify SQL queries with customizable indentation.

**Tags:** `sql` `formatter` `beautifier`

- 🌐 [SQL Formatter](https://sqlformat.org) — Online SQL formatter
- 🌐 [PoorSQL](https://poorsql.com) — SQL formatting and linting
- 🌐 [Format SQL Online](https://www.freeformatter.com/sql-formatter.html) — SQL formatter

---

## Regex Tools

### Regex Tester
> Test regular expressions against sample text with match highlighting.

**Tags:** `regex` `tester` `debugger`

- 🌐 [Regex101](https://regex101.com) — Online regex tester and debugger
- 🌐 [Regexr](https://regexr.com) — Learn and test regular expressions
- 🌐 [Regex Tester](https://extendsclass.com/regex-tester.html) — Regex tester with multiple flavors
- 🌐 [Debuggex](https://www.debuggex.com) — Regex visual debugger
- 🌐 [iHateRegex](https://ihateregex.io) — Regex cheatsheet and visualizer

### Regex Builder
> Build regular expressions visually without writing syntax.

**Tags:** `regex` `builder` `visual`

- 🌐 [Regex Vis](https://regex-vis.com) — Visual regex editor
- 🌐 [Regexper](https://regexper.com) — Regex visualization tool

### Best Regex Tools

| Tool | Free | Open Source | Privacy | Offline |
|------|------|-------------|---------|---------|
| Regex101 | ✅ | ❌ | ❌ (server-side) | ❌ |
| Regexr | ✅ | ✅ | ✅ (client-side) | ❌ |
| Debuggex | ✅ | ❌ | ✅ (client-side) | ❌ |
| iHateRegex | ✅ | ✅ | ✅ (client-side) | ❌ |

---

## JWT Tools

### JWT Debugger
> Decode, verify, and generate JSON Web Tokens.

**Tags:** `jwt` `debugger` `token`

- 🌐 [JWT.io](https://jwt.io) — JWT debugger with library support
- 🌐 [LangStop JWT Tools](https://langstop.com/jwt-tools) — JWT encoder, decoder, and debugger
- 🌐 [JWT Debugger](https://www.jwtdebugger.com) — JWT token debugger

---

## Base64 Encoding

### Base64 Encoder/Decoder
> Encode and decode Base64 strings with file support.

**Tags:** `base64` `encoder` `decoder`

- 🌐 [Base64 Guru](https://base64.guru) — Base64 encoder/decoder with learning resources
- 🌐 [Base64 Decode](https://www.base64decode.org) — Base64 decoding tool
- 🌐 [Base64 Encode](https://www.base64encode.org) — Base64 encoding tool

---

## Hashing Tools

### Hash Generator
> Generate hashes using MD5, SHA-1, SHA-256, SHA-512, and more.

**Tags:** `hash` `generator` `sha` `md5`

- 🌐 [MD5 Hash Generator](https://www.md5hashgenerator.com) — Online MD5 hash generator
- 🌐 [Hash Online](https://hash.online-convert.com) — Multi-algorithm hash converter
- 🌐 [CyberChef](https://gchq.github.io/CyberChef) — Cyber Swiss Army Knife (encryption, encoding, hashing)

### Hash Checker
> Verify file integrity and checksum validation.

**Tags:** `hash` `verifier` `checksum`

- 🌐 [OnlineMD5](https://onlinemd5.com) — MD5 checksum verification
- 🌐 [QuickHash](https://quickhash.com) — Hash verification tool

---

## UUID Generators

### UUID Generator
> Generate UUIDs in versions 1, 4, 5, and 7 with bulk generation.

**Tags:** `uuid` `guid` `generator`

- 🌐 [UUID Generator](https://www.uuidgenerator.net) — Online UUID/GUID generator
- 🌐 [UUID Tools](https://www.uuidtools.com) — UUID generation and validation
- 🌐 [Online UUID Generator](https://online-uuid-generator.com) — Bulk UUID generator

---

## Color Tools

### Color Picker
> Pick colors from palettes, images, and color wheels.

**Tags:** `color` `picker` `palette` `design`

- 🌐 [Coolors](https://coolors.co) — Color palette generator
- 🌐 [ColorHexa](https://www.colorhexa.com) — Color encyclopedia and converter
- 🌐 [HTML Color Codes](https://htmlcolorcodes.com) — Color picker and converter
- 🌐 [Adobe Color](https://color.adobe.com) — Color wheel and palette creator

### Color Converter
> Convert between HEX, RGB, HSL, CMYK, and other color formats.

**Tags:** `color` `converter` `hex` `rgb`

- 🌐 [RGB to HEX Converter](https://www.rgbtohex.net) — RGB to HEX color conversion
- 🌐 [Colorizer](https://colorizer.org) — Universal color format converter

---

## Text Tools

### Diff Checker
> Compare text differences between two versions.

**Tags:** `text` `diff` `comparison`

- 🌐 [Diff Checker](https://www.diffchecker.com) — Online text diff tool
- 🌐 [DiffNow](https://www.diffnow.com) — Text and file comparison
- 🌐 [TextDiff](https://textdiff.com) — Side-by-side text diff
- 🌐 [Mergely](https://mergely.com) — Online diff and merge editor

### Word Counter
> Count words, characters, sentences, and reading time.

**Tags:** `text` `counter` `words` `statistics`

- 🌐 [WordCounter](https://wordcounter.net) — Online word count tool
- 🌐 [Character Counter](https://charactercounter.com) — Character and word count

### Text Case Converter
> Convert between uppercase, lowercase, title case, camelCase, and more.

**Tags:** `text` `case` `converter` `camelcase`

- 🌐 [Convert Case](https://convertcase.net) — Text case converter
- 🌐 [Title Case Converter](https://titlecaseconverter.com) — Title case conversion
- 🌐 [Text Mechanic](https://textmechanic.com) — Text manipulation tools

---

## Markdown Tools

### Markdown Editor
> Write and preview Markdown with live rendering.

**Tags:** `markdown` `editor` `preview`

- 🌐 [StackEdit](https://stackedit.io) — In-browser Markdown editor
- 🌐 [Dillinger](https://dillinger.io) — Cloud-enabled Markdown editor
- 🌐 [HackMD](https://hackmd.io) — Collaborative Markdown editor
- 🌐 [Markdown Editor](https://jbt.github.io/markdown-editor) — Live Markdown preview

### Markdown to HTML
> Convert Markdown to HTML with customizable output.

**Tags:** `markdown` `html` `converter`

- 🌐 [Markdown to HTML](https://markdowntohtml.com) — Online Markdown to HTML converter
- 🌐 [Browserling Markdown to HTML](https://www.browserling.com/tools/markdown-to-html) — Quick MD to HTML

---

## HTML Tools

### HTML Formatter
> Format, beautify, and minify HTML code.

**Tags:** `html` `formatter` `beautifier` `minifier`

- 🌐 [HTML Formatter](https://www.freeformatter.com/html-formatter.html) — HTML formatter and beautifier
- 🌐 [HTML Minifier](https://html-minifier.com) — HTML minification tool
- 🌐 [WebFormatter](https://webformatter.com/html) — HTML formatter

### HTML Editor
> Write and preview HTML with live rendering.

**Tags:** `html` `editor` `preview`

- 🌐 [CodePen](https://codepen.io) — HTML/CSS/JS playground
- 🌐 [JSFiddle](https://jsfiddle.net) — Online code editor
- 🌐 [HTML Online](https://html-online.com/editor) — WYSIWYG HTML editor

---

## CSS Tools

### CSS Formatter
> Format and minify CSS with customizable options.

**Tags:** `css` `formatter` `minifier`

- 🌐 [CSS Formatter](https://www.freeformatter.com/css-formatter.html) — CSS formatter and beautifier
- 🌐 [CSS Minifier](https://cssminifier.com) — CSS compression tool
- 🌐 [Autoprefixer CSS](https://autoprefixer.github.io) — CSS vendor prefixer

### CSS Generator
> Generate CSS code visually including gradients, shadows, and animations.

**Tags:** `css` `generator` `gradient` `shadow`

- 🌐 [CSS Gradient](https://cssgradient.io) — CSS gradient generator
- 🌐 [Neumorphism.io](https://neumorphism.io) — Soft UI CSS generator
- 🌐 [Fancy Border Radius](https://9elements.github.io/fancy-border-radius) — Organic shape generator
- 🌐 [Animista](https://animista.net) — CSS animation library
- 🌐 [CSS Box Shadow Generator](https://cssgenerator.org/box-shadow-generator.html) — Box shadow creator

---

## JavaScript Tools

### JavaScript Playground
> Write, run, and share JavaScript code in the browser.

**Tags:** `javascript` `playground` `runner`

- 🌐 [JSBin](https://jsbin.com) — Collaborative JavaScript debugging
- 🌐 [RunJS](https://runjs.app) — JavaScript playground (desktop app)
- 🌐 [PlayCode](https://playcode.io) — JavaScript playground
- 🌐 [CodeSandbox](https://codesandbox.io) — Online IDE for web development

### JavaScript Formatter
> Format and beautify JavaScript/JSX code.

**Tags:** `javascript` `formatter` `beautifier` `prettier`

- 🌐 [JS Formatter](https://jsformatter.com) — JavaScript formatter
- 🌐 [Prettier Playground](https://prettier.io/playground) — Prettier code formatter
- 🌐 [ESLint Demo](https://eslint.org/demo) — ESLint rule tester

---

## TypeScript Tools

### TypeScript Playground
> Write, compile, and test TypeScript code online.

**Tags:** `typescript` `playground` `compiler`

- 🌐 [TypeScript Playground](https://www.typescriptlang.org/play) — Official TS playground
- 🌐 [TS Node](https://ts-node.dev) — TypeScript execution playground
- 🌐 [Total TypeScript](https://www.totaltypescript.com/playground) — TS type challenges playground

---

## Git Tools

### Git Explorer
> Explore and visualize Git repositories online.

**Tags:** `git` `explorer` `visualizer`

- 🌐 [GitHub](https://github.com) — Code hosting platform
- 🌐 [GitLab](https://gitlab.com) — DevOps platform
- 🌐 [Bitbucket](https://bitbucket.org) — Git repository management
- 🌐 [Git Explorer](https://gitexplorer.com) — Find the right Git commands

### .gitignore Generator
> Generate .gitignore files for any project type.

**Tags:** `git` `gitignore` `generator`

- 🌐 [gitignore.io](https://www.toptal.com/developers/gitignore) — .gitignore generator
- 🌐 [Gitignore Generator](https://mrkandreev.name/snippets/gitignore-generator) — Visual .gitignore builder

### Git Command Reference
> Quick reference and visualization of Git commands.

**Tags:** `git` `reference` `cheatsheet`

- 🌐 [Learn Git Branching](https://learngitbranching.js.org) — Interactive Git tutorial
- 🌐 [GitHub Git Cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet) — Git command reference
- 🌐 [Git Immersion](https://gitimmersion.com) — Git tutorial

---

## Linux Tools

### Linux Command Reference
> Browse and search Linux command documentation.

**Tags:** `linux` `command` `reference` `terminal`

- 🌐 [ExplainShell](https://explainshell.com) — Explain shell commands
- 🌐 [Cheat.sh](https://cheat.sh) — Community-driven cheatsheets
- 🌐 [TLDR Pages](https://tldr.sh) — Simplified man pages
- 🌐 [Linux Command Library](https://linuxcommandlibrary.com) — Linux command reference

### Online Terminal
> Run Linux commands in a browser-based terminal.

**Tags:** `linux` `terminal` `emulator`

- 🌐 [JSLinux](https://bellard.org/jslinux) — Linux in a browser
- 🌐 [Copy.sh](https://copy.sh/v86) — x86 virtualization in browser
- 🌐 [WebVM](https://webvm.io) — Server-less virtual Linux environment

---

## Networking Tools

### IP Lookup
> Look up IP addresses and network information.

**Tags:** `network` `ip` `dns` `lookup`

- 🌐 [WhatIsMyIP](https://whatismyipaddress.com) — IP address lookup
- 🌐 [IPinfo](https://ipinfo.io) — IP data provider
- 🌐 [WhatIsMyIP.com](https://whatismyip.com) — IP address tools

### DNS Tools
> DNS lookup, propagation check, and record analysis.

**Tags:** `dns` `network` `lookup`

- 🌐 [DNSChecker](https://dnschecker.org) — DNS propagation checker
- 🌐 [WhatsMyDNS](https://whatsmydns.net) — DNS propagation checker
- 🌐 [MXToolbox](https://mxtoolbox.com) — DNS and network tools
- 🌐 [DNSlytics](https://dnslytics.com) — DNS investigation tools

### HTTP Tools
> Test HTTP requests, headers, and responses.

**Tags:** `http` `headers` `request`

- 🌐 [HTTP Status Dogs](https://httpstatusdogs.com) — HTTP status code reference
- 🌐 [HTTP Cats](https://http.cat) — HTTP status code reference (cats)
- 🌐 [RequestBin](https://requestbin.com) — HTTP request inspection
- 🌐 [Webhook.site](https://webhook.site) — HTTP webhook inspector

---

## Security Tools

### SSL Checker
> Check SSL/TLS certificate validity and configuration.

**Tags:** `ssl` `tls` `security` `certificate`

- 🌐 [SSL Labs](https://www.ssllabs.com/ssltest) — SSL server test
- 🌐 [SSL Checker](https://www.sslshopper.com/ssl-checker.html) — SSL certificate checker
- 🌐 [SSL Toolbelt](https://www.ssl.com/ssl-toolbelt) — SSL tools collection

### Password Generator
> Generate strong, secure passwords with configurable options.

**Tags:** `security` `password` `generator`

- 🌐 [LastPass Password Generator](https://www.lastpass.com/password-generator) — Secure password generator
- 🌐 [1Password Password Generator](https://1password.com/password-generator) — Strong password creator
- 🌐 [Bitwarden Password Generator](https://bitwarden.com/password-generator) — Open source password generator

### Security Headers Scanner
> Check website security headers and best practices.

**Tags:** `security` `headers` `scanner`

- 🌐 [Security Headers](https://securityheaders.com) — HTTP security headers analysis
- 🌐 [Mozilla Observatory](https://observatory.mozilla.org) — Website security scanner

---

## Encoding Tools

### URL Encoder/Decoder
> Encode and decode URL parameters.

**Tags:** `url` `encoding`

- 🌐 [URL Encoder](https://www.urlencoder.org) — URL encoding/decoding tool
- 🌐 [URL Decoder](https://www.urldecoder.org) — URL decoding tool
- 🌐 [FreeFormatter URL Encoder](https://www.freeformatter.com/url-encoder.html) — URL encoding

### Base64 File Converter
> Convert files to and from Base64 encoding.

**Tags:** `base64` `file` `converter`

- 🌐 [Base64 Image](https://www.base64-image.de) — Image to Base64 converter
- 🌐 [Base64 Guru File Converter](https://base64.guru/converter) — File to Base64 converter
- 🌐 [Online Image to Base64](https://onlineimagetobase64.com) — Image to Base64 encoder

---

## Generators

### Code Snippet Generator
> Generate code snippets, boilerplate, and scaffolding.

**Tags:** `generator` `boilerplate` `code`

- 🌐 [Create New App](https://creatnewapp.com) — Project scaffolding generator
- 🌐 [HTML Boilerplates](https://www.html5boilerplate.com) — HTML5 boilerplate generator
- 🌐 [CSS Generator](https://cssgenerator.org) — CSS code generator

### Lorem Ipsum Generator
> Generate placeholder text for designs and layouts.

**Tags:** `generator` `placeholder` `text`

- 🌐 [Lorem Ipsum](https://www.lipsum.com) — Lorem ipsum generator
- 🌐 [Cupcake Ipsum](https://cupcakeipsum.com) — Fun placeholder text

---

## Validators

### HTML Validator
> Validate HTML documents against W3C standards.

**Tags:** `html` `validator` `w3c`

- 🌐 [W3C Validator](https://validator.w3.org) — Official W3C HTML validator
- 🌐 [Nu HTML Checker](https://validator.w3.org/nu) — Experimental HTML validator
- 🌐 [HTML Validator](https://www.freeformatter.com/html-validator.html) — HTML validation

### Link Checker
> Check for broken links on websites and pages.

**Tags:** `validator` `links` `broken`

- 🌐 [Broken Link Checker](https://www.brokenlinkcheck.com) — Online broken link checker
- 🌐 [Dr. Link Check](https://www.drlinkcheck.com) — Link validation tool
- 🌐 [W3C Link Checker](https://validator.w3.org/checklink) — Official link checker

---

## Converters

### Unit Converter
> Convert between units of measurement (length, weight, temperature, etc.).

**Tags:** `converter` `units` `measurement`

- 🌐 [ConvertUnits](https://www.convertunits.com) — Unit conversion tool
- 🌐 [UnitConverters](https://www.unitconverters.net) — Comprehensive unit converter
- 🌐 [Metric Conversions](https://www.metric-conversions.org) — Metric converter

### Code Converter
> Convert code between programming languages.

**Tags:** `converter` `code` `transpiler`

- 🌐 [Transform](https://transform.tools) — Code converter between languages
- 🌐 [Compiler Explorer](https://godbolt.org) — Compiler exploration tool
- 🌐 [CodeConvert](https://www.codeconvert.ai) — AI-powered code converter

---

## Formatters

### Code Beautifier
> Format code in multiple languages with one tool.

**Tags:** `formatter` `beautifier` `code`

- 🌐 [FreeFormatter](https://www.freeformatter.com) — Multi-language code formatter
- 🌐 [Code Beautify](https://codebeautify.org) — Code formatting and conversion
- 🌐 [WebFormatter](https://webformatter.com) — Online code formatter
- 🌐 [Prettier](https://prettier.io/playground) — Opinionated code formatter

---

## Diff Tools

### Code Diff
> Compare code files and identify differences.

**Tags:** `diff` `code` `comparison`

- 🌐 [DiffChecker](https://www.diffchecker.com) — Text and code diff tool
- 🌐 [Mergely](https://mergely.com) — Online diff and merge
- 🌐 [DeltaXML](https://www.deltaxml.com) — XML-aware diff tool
- 🌐 [JSON Diff](https://jsondiff.com) — JSON-specific diff

### Image Diff
> Compare images and highlight visual differences.

**Tags:** `diff` `image` `comparison` `visual`

- 🌐 [Image Diff](https://www.imagediff.com) — Online image comparison
- 🌐 [Diffchecker Image](https://www.diffchecker.com/image-diff) — Image diff tool
- 🌐 [Spot the Difference](https://spotthe.difference.com) — Image comparison

---

## Image Tools

### Image Optimizer
> Compress and optimize images for web use.

**Tags:** `image` `optimizer` `compression`

- 🌐 [TinyPNG](https://tinypng.com) — PNG and JPEG compression
- 🌐 [Squoosh](https://squoosh.app) — Google's image optimizer
- 🌐 [Compressor.io](https://compressor.io) — Image compression tool
- 🌐 [Optimizilla](https://optimizilla.com) — JPEG and PNG optimizer

### Image Editor
> Edit images online with filters, cropping, and adjustments.

**Tags:** `image` `editor` `photo`

- 🌐 [Photopea](https://www.photopea.com) — Advanced online image editor
- 🌐 [Pixlr](https://pixlr.com) — Free online photo editor
- 🌐 [Remove.bg](https://www.remove.bg) — Background removal tool
- 🌐 [SVG Repo](https://www.svgrepo.com) — SVG icon library and editor

### SVG Tools
> Create, edit, and optimize SVG graphics.

**Tags:** `svg` `image` `vector` `graphic`

- 🌐 [SVGOMG](https://jakearchibald.github.io/svgomg) — SVG optimizer
- 🌐 [SVG Editor](https://editor.method.ac) — Online SVG editor
- 🌐 [SVG Viewer](https://www.svgviewer.dev) — SVG viewer and editor

---

## AI Tools

### AI Code Assistant
> AI-powered code generation, completion, and explanation.

**Tags:** `ai` `code` `generator` `assistant`

- 🌐 [ChatGPT](https://chat.openai.com) — AI coding assistant
- 🌐 [GitHub Copilot](https://github.com/features/copilot) — AI pair programmer
- 🌐 [Claude](https://claude.ai) — AI assistant for code
- 🌐 [Tabnine](https://www.tabnine.com) — AI code completion
- 🌐 [Cursor](https://cursor.sh) — AI-first code editor

### AI Prompt Builder
> Build and refine prompts for AI models.

**Tags:** `ai` `prompt` `builder`

- 🌐 [PromptPerfect](https://promptperfect.jina.ai) — AI prompt optimizer
- 🌐 [LangStop Prompt Builder](https://langstop.com/prompt-builder) — AI prompt builder and template tool
- 🌐 [PromptBase](https://promptbase.com) — Prompt marketplace

### AI Image Generator
> Generate images using AI from text descriptions.

**Tags:** `ai` `image` `generator`

- 🌐 [DALL·E](https://labs.openai.com) — AI image generation
- 🌐 [Midjourney](https://www.midjourney.com) — AI art generator
- 🌐 [Stable Diffusion Web](https://stablediffusionweb.com) — Open source AI image generation
- 🌐 [Leonardo AI](https://leonardo.ai) — AI image generator

---

## Database Tools

### Database Manager
> Manage databases through a browser interface.

**Tags:** `database` `manager` `sql`

- 🌐 [Adminer](https://www.adminer.org) — Database management in single PHP file
- 🌐 [phpMyAdmin](https://www.phpmyadmin.net) — MySQL web admin
- 🌐 [DBeaver](https://dbeaver.io) — Universal database tool (downloadable)
- 🌐 [MongoDB Atlas](https://www.mongodb.com/atlas) — MongoDB cloud service

### Database Schema Designer
> Design and visualize database schemas online.

**Tags:** `database` `schema` `designer` `erd`

- 🌐 [dbdiagram.io](https://dbdiagram.io) — Database diagram designer
- 🌐 [DrawSQL](https://drawsql.app) — Database schema visualizer
- 🌐 [QuickDBD](https://www.quickdatabasediagrams.com) — Quick database diagrams
- 🌐 [Lucidchart](https://www.lucidchart.com) — Diagram and schema design

---

## Developer Productivity

### Online IDE
> Full development environment in the browser.

**Tags:** `ide` `editor` `productivity`

- 🌐 [GitHub Codespaces](https://github.com/features/codespaces) — Cloud development environment
- 🌐 [Gitpod](https://www.gitpod.io) — Cloud development platform
- 🌐 [Replit](https://replit.com) — Online IDE and collaboration
- 🌐 [StackBlitz](https://stackblitz.com) — Online IDE for web apps
- 🌐 [CodeSandbox](https://codesandbox.io) — Online development environment

### Time Tracking
> Track development time and productivity.

**Tags:** `productivity` `time` `tracking`

- 🌐 [Toggl Track](https://toggl.com/track) — Time tracking tool
- 🌐 [Clockify](https://clockify.me) — Free time tracker
- 🌐 [WakaTime](https://wakatime.com) — Code time metrics

### Project Management
> Manage development projects and tasks.

**Tags:** `productivity` `project` `management`

- 🌐 [Linear](https://linear.app) — Issue tracking and project management
- 🌐 [Notion](https://www.notion.so) — All-in-one workspace
- 🌐 [Trello](https://trello.com) — Visual project management
- 🌐 [ClickUp](https://clickup.com) — Productivity platform

---

## API Tools

### API Client
> Test and debug API endpoints with a graphical interface.

**Tags:** `api` `client` `testing` `rest`

- 🌐 [Postman](https://www.postman.com) — API platform and client
- 🌐 [Insomnia](https://insomnia.rest) — API client and designer
- 🌐 [Hoppscotch](https://hoppscotch.io) — Open source API dev tool
- 🌐 [HTTPie](https://httpie.io) — HTTP client for terminal and web
- 🌐 [RapidAPI](https://rapidapi.com) — API marketplace and testing

### API Documentation
> Generate and browse API documentation.

**Tags:** `api` `documentation` `docs`

- 🌐 [Swagger UI](https://swagger.io/tools/swagger-ui) — API documentation viewer
- 🌐 [Stoplight](https://stoplight.io) — API design and documentation
- 🌐 [Redoc](https://redocly.com/redoc) — OpenAPI documentation generator

### API Builder
> Design and prototype APIs without code.

**Tags:** `api` `builder` `design`

- 🌐 [MockAPI](https://mockapi.io) — Mock API generator
- 🌐 [Beeceptor](https://beeceptor.com) — API mock and intercept
- 🌐 [Mocky](https://designer.mocky.io) — Mock HTTP responses

### Best API Tools

| Tool | Free | Open Source | Privacy | Offline |
|------|------|-------------|---------|---------|
| Postman | ✅ (limited) | ❌ | ❌ | ✅ |
| Insomnia | ✅ | ✅ | ✅ | ✅ |
| Hoppscotch | ✅ | ✅ | ✅ | ✅ |
| HTTPie | ✅ | ✅ | ✅ | ✅ |

---

## OpenAPI Tools

### OpenAPI Editor
> Design and edit OpenAPI specifications.

**Tags:** `openapi` `swagger` `editor`

- 🌐 [Swagger Editor](https://editor.swagger.io) — OpenAPI specification editor
- 🌐 [Stoplight Studio](https://stoplight.io/studio) — API design tool
- 🌐 [OpenAPI Generator](https://openapi-generator.tech) — API client generation

### OpenAPI Viewer
> View and explore OpenAPI documentation.

**Tags:** `openapi` `swagger` `viewer`

- 🌐 [Swagger UI](https://petstore.swagger.io) — OpenAPI documentation viewer
- 🌐 [Redocly](https://redocly.github.io/redoc) — OpenAPI documentation renderer
- 🌐 [SwaggerHub](https://swagger.io/tools/swaggerhub) — API design and documentation

---

## GraphQL Tools

### GraphQL IDE
> Explore, query, and test GraphQL APIs.

**Tags:** `graphql` `ide` `query` `api`

- 🌐 [GraphiQL](https://github.com/graphql/graphiql) — GraphQL IDE (in-browser)
- 🌐 [GraphQL Playground](https://www.graphqlbin.com) — GraphQL IDE playground
- 🌐 [Apollo Studio](https://studio.apollographql.com) — GraphQL management platform
- 🌐 [Altair GraphQL](https://altairgraphql.dev) — GraphQL client

### GraphQL Schema Designer
> Design GraphQL schemas visually.

**Tags:** `graphql` `schema` `designer`

- 🌐 [GraphQL Editor](https://graphqleditor.com) — Visual GraphQL editor
- 🌐 [Voyager](https://apis.guru/graphql-voyager) — GraphQL schema visualization

---

## Docker Tools

### Docker Compose Builder
> Build and validate Docker Compose files.

**Tags:** `docker` `compose` `container`

- 🌐 [Composerize](https://www.composerize.com) — Docker run to Compose converter
- 🌐 [Docker Compose Generator](https://github.com/awesome-selfhosted/awesome-selfhosted) — Compose file examples
- 🌐 [Portainer](https://www.portainer.io) — Docker management UI

### Docker Image Scanner
> Scan Docker images for vulnerabilities.

**Tags:** `docker` `security` `scanner`

- 🌐 [Docker Scout](https://scout.docker.com) — Container image analysis
- 🌐 [Trivy](https://trivy.dev) — Container vulnerability scanner
- 🌐 [Snyk](https://snyk.io) — Security scanning for containers

### Docker CLI Reference
> Quick reference for Docker commands.

**Tags:** `docker` `reference` `cli`

- 🌐 [Docker Cheatsheet](https://dockerlabs.collabnix.com/docker/cheatsheet) — Docker command reference
- 🌐 [Docker Run Reference](https://docs.docker.com/engine/reference/run) — Official Docker run docs

---

## Kubernetes Tools

### Kubernetes Dashboard
> Manage Kubernetes clusters through a web UI.

**Tags:** `kubernetes` `dashboard` `management`

- 🌐 [Kubernetes Dashboard](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard) — Official K8s UI
- 🌐 [Lens](https://k8slens.dev) — Kubernetes IDE
- 🌐 [Octant](https://octant.dev) — Kubernetes web dashboard
- 🌐 [K9s](https://k9scli.io) — Terminal Kubernetes manager

### YAML Validator for K8s
> Validate Kubernetes YAML manifests.

**Tags:** `kubernetes` `yaml` `validator`

- 🌐 [Kubeval](https://kubeval.instrumenta.dev) — Kubernetes YAML validator
- 🌐 [Datree](https://www.datree.io) — Kubernetes policies and validation

### Best Kubernetes Tools

| Tool | Free | Open Source | Privacy | Offline |
|------|------|-------------|---------|---------|
| Kubernetes Dashboard | ✅ | ✅ | ✅ | ✅ |
| Lens | ✅ | ✅ | ✅ | ✅ |
| Octant | ✅ | ✅ | ✅ | ✅ |
| K9s | ✅ | ✅ | ✅ | ✅ |

---

## Terraform Tools

### Terraform Plan Viewer
> Visualize and review Terraform plans.

**Tags:** `terraform` `iac` `plan`

- 🌐 [Terraform Plan Viewer](https://github.com/awslabs/tfplan-viewer) — Plan visualization
- 🌐 [Infracost](https://www.infracost.io) — Terraform cost estimation
- 🌐 [Terramate](https://terramate.io) — Terraform orchestration

### Terraform Registry
> Browse and search Terraform providers and modules.

**Tags:** `terraform` `registry` `modules`

- 🌐 [Terraform Registry](https://registry.terraform.io) — Official Terraform module registry
- 🌐 [Terraform Docs](https://terraform-docs.io) — Documentation generator

---

## CI/CD Tools

### CI Status Dashboard
> Monitor CI/CD pipeline status across services.

**Tags:** `ci` `cd` `pipeline` `status`

- 🌐 [GitHub Actions](https://github.com/features/actions) — CI/CD platform
- 🌐 [GitLab CI](https://docs.gitlab.com/ee/ci) — GitLab CI/CD
- 🌐 [CircleCI](https://circleci.com) — CI/CD platform
- 🌐 [Jenkins](https://www.jenkins.io) — Automation server
- 🌐 [Buildkite](https://buildkite.com) — CI/CD pipeline platform

### Pipeline Visualizer
> Visualize and optimize CI/CD pipelines.

**Tags:** `ci` `cd` `visualizer` `pipeline`

- 🌐 [Pipeline.io](https://pipeline.io) — Pipeline visualization
- 🌐 [Drone](https://www.drone.io) — CI/CD pipeline tool

---

## Mock Data Generators

### Fake Data Generator
> Generate realistic fake data for development and testing.

**Tags:** `mock` `data` `generator` `testing`

- 🌐 [Faker.js](https://fakerjs.dev) — Generate massive amounts of fake data
- 🌐 [Mockaroo](https://www.mockaroo.com) — Realistic data generator
- 🌐 [JSON Generator](https://www.json-generator.com) — Generate JSON data from templates
- 🌐 [Generatedata.com](https://www.generatedata.com) — Generate test data

### API Mock Server
> Create mock API servers for testing.

**Tags:** `mock` `api` `server` `testing`

- 🌐 [Mockoon](https://mockoon.com) — Mock API server
- 🌐 [JSON Server](https://github.com/typicode/json-server) — Fake REST API
- 🌐 [WireMock](https://wiremock.org) — Mock HTTP server
- 🌐 [Beeceptor](https://beeceptor.com) — API mock and intercept

---

## Documentation Tools

### Documentation Generator
> Generate documentation from code and specifications.

**Tags:** `documentation` `docs` `generator`

- 🌐 [Docusaurus](https://docusaurus.io) — Documentation website builder
- 🌐 [VuePress](https://vuepress.vuejs.org) — Vue-powered static site generator
- 🌐 [MkDocs](https://www.mkdocs.org) — Project documentation with Markdown
- 🌐 [Docsify](https://docsify.js.org) — Documentation site generator
- 🌐 [Read the Docs](https://readthedocs.org) — Documentation hosting

### API Documentation Generator
> Generate interactive API documentation.

**Tags:** `documentation` `api` `swagger`

- 🌐 [Swagger Codegen](https://swagger.io/tools/swagger-codegen) — API documentation generator
- 🌐 [Redoc](https://redocly.com/redoc) — OpenAPI documentation
- 🌐 [Apiary](https://apiary.io) — API documentation and testing
- 🌐 [RapiDoc](https://rapidocweb.com) — OpenAPI documentation viewer

---

## Testing Tools

### Lighthouse
> Audit web pages for performance, accessibility, and SEO.

**Tags:** `testing` `performance` `seo` `audit`

- 🌐 [Lighthouse](https://developer.chrome.com/docs/lighthouse) — Google's web audit tool
- 🌐 [PageSpeed Insights](https://pagespeed.web.dev) — Page speed analysis
- 🌐 [GTmetrix](https://gtmetrix.com) — Website performance testing

### HTML/CSS Validator
> Validate HTML and CSS against web standards.

**Tags:** `testing` `validation` `standard`

- 🌐 [W3C Validators](https://www.w3.org/QA/Tools) — Official W3C validation tools
- 🌐 [CSS Validation Service](https://jigsaw.w3.org/css-validator) — CSS validator
- 🌐 [Validator.nu](https://validator.nu) — HTML5 validator

---

## Cloud Tools

### Cloud Console
> Access cloud provider consoles and services.

**Tags:** `cloud` `console` `aws` `gcp` `azure`

- 🌐 [AWS Console](https://console.aws.amazon.com) — Amazon Web Services
- 🌐 [Google Cloud Console](https://console.cloud.google.com) — Google Cloud Platform
- 🌐 [Azure Portal](https://portal.azure.com) — Microsoft Azure
- 🌐 [DigitalOcean](https://cloud.digitalocean.com) — Cloud hosting
- 🌐 [Vercel](https://vercel.com) — Cloud platform for frontend
- 🌐 [Netlify](https://www.netlify.com) — Cloud hosting and serverless

### Cloud Cost Calculator
> Estimate cloud infrastructure costs.

**Tags:** `cloud` `cost` `calculator`

- 🌐 [AWS Calculator](https://calculator.aws) — AWS pricing calculator
- 🌐 [GCP Pricing Calculator](https://cloud.google.com/products/calculator) — Google Cloud cost estimator
- 🌐 [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator) — Azure cost calculator

---

## DevOps Tools

### Status Page
> Monitor service status and uptime.

**Tags:** `devops` `monitoring` `status`

- 🌐 [Statuspage](https://www.atlassian.com/software/statuspage) — Incident communication
- 🌐 [Better Uptime](https://betteruptime.com) — Uptime monitoring
- 🌐 [Uptime Robot](https://uptimerobot.com) — Free website monitoring
- 🌐 [Pingdom](https://www.pingdom.com) — Website monitoring

### Runbook Automation
> Create and manage operational runbooks.

**Tags:** `devops` `automation` `runbook`

- 🌐 [Rundeck](https://www.rundeck.com) — Runbook automation
- 🌐 [FireHydrant](https://firehydrant.com) — Incident management
- 🌐 [PagerDuty](https://www.pagerduty.com) — Incident response

---

## CLI Tools

### Online Terminal
> Run commands in a browser-based terminal emulator.

**Tags:** `cli` `terminal` `shell`

- 🌐 [JSLinux](https://bellard.org/jslinux) — Linux emulator in browser
- 🌐 [Copy.sh v86](https://copy.sh/v86) — x86 emulator in browser
- 🌐 [WebVM](https://webvm.io) — Linux virtual machine in browser
- 🌐 [Wasm Terminal](https://wasm.terminal.com) — WebAssembly terminal

### Command Cheatsheets
> Quick reference for CLI commands and tools.

**Tags:** `cli` `cheatsheet` `reference`

- 🌐 [Cheat.sh](https://cheat.sh) — Community cheatsheets
- 🌐 [tldr](https://tldr.sh) — Simplified man pages
- 🌐 [ExplainShell](https://explainshell.com) — Command explanation

---

## System Design Tools

### Diagram Creator
> Create system architecture and flow diagrams.

**Tags:** `system-design` `diagram` `architecture`

- 🌐 [Draw.io](https://app.diagrams.net) — Free diagram editor
- 🌐 [Excalidraw](https://excalidraw.com) — Virtual whiteboard for diagrams
- 🌐 [Miro](https://miro.com) — Collaborative whiteboard
- 🌐 [Whimsical](https://whimsical.com) — Collaborative diagramming

### Sequence Diagram Generator
> Generate sequence diagrams from text.

**Tags:** `system-design` `sequence` `diagram`

- 🌐 [WebSequenceDiagrams](https://www.websequencediagrams.com) — Online sequence diagrams
- 🌐 [Mermaid Live Editor](https://mermaid.live) — Diagram from Markdown
- 🌐 [PlantText](https://www.planttext.com) — UML diagram generator
- 🌐 [SequenceDiagram.org](https://sequencediagram.org) — Free sequence diagram tool

---

## Architecture Tools

### Architecture Diagram Tool
> Create cloud and infrastructure architecture diagrams.

**Tags:** `architecture` `diagram` `infrastructure`

- 🌐 [Cloudcraft](https://www.cloudcraft.co) — AWS architecture visualization
- 🌐 [Hava](https://www.hava.io) — Auto-generated infrastructure diagrams
- 🌐 [Lucidchart Cloud Insights](https://www.lucidchart.com/pages/cloud-insights) — Cloud architecture diagrams
- 🌐 [Archium](https://archium.ai) — AI-powered architecture diagrams

### ER Diagram Tool
> Design entity-relationship diagrams for databases.

**Tags:** `architecture` `database` `erd` `diagram`

- 🌐 [dbdiagram.io](https://dbdiagram.io) — ER diagram designer
- 🌐 [QuickDBD](https://www.quickdatabasediagrams.com) — Quick ER diagrams
- 🌐 [DrawSQL](https://drawsql.app) — Database schema visualization

---

## Statistics

<div align="center">

| Metric | Count |
|--------|-------|
| 🛠 Tools | 200+ |
| 📂 Categories | 40+ |
| ⭐ Open Source | 60%+ |
| 🔒 Privacy-First | 70%+ |
| 🤖 AI Tools | 15+ |
| 👥 Contributors | Join us! |
| 🌐 Backlinks | Natural |

</div>

---

## Contributing

Contributions are what make this community valuable. Every tool suggestion,
category addition, or improvement helps thousands of developers.

**Quick start:** Add your tool to `awesome-list.json` and submit a PR.

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

<div align="center">

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub contributors](https://img.shields.io/github/contributors/langstop/awesome-online-dev-tools)](https://github.com/langstop/awesome-online-dev-tools/graphs/contributors)
[![GitHub issues](https://img.shields.io/github/issues/langstop/awesome-online-dev-tools)](https://github.com/langstop/awesome-online-dev-tools/issues)

</div>

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

The tools listed in this repository are the property of their respective owners.

---

<div align="center">

**Made with ❤️ for the developer community**

[![GitHub stars](https://img.shields.io/github/stars/langstop/awesome-online-dev-tools?style=social)](https://github.com/langstop/awesome-online-dev-tools)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Flangstop%2Fawesome-online-dev-tools)](https://twitter.com/intent/tweet?text=Check%20out%20Awesome%20Online%20Dev%20Tools%3A%20https%3A%2F%2Fgithub.com%2Flangstop%2Fawesome-online-dev-tools)

⭐ Star us on GitHub — it helps developers discover this resource!

</div>
