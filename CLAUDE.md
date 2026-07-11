# CLAUDE.md — DynamiaTools Website

## Project Overview

This is the official documentation website for **Dynamia Platform** (https://dynamia.tools), the next generation of DynamiaTools. It's a cutting-edge full-stack Java 25 framework for building enterprise web applications powered by Spring Boot 4 and ZK 10.

**Current Version**: 26.2.0 (CalVer: YY.MM.MINOR - February 2026)

The website is built using:
- **Astro** (v5.17.2+) - Static site generator
- **Starlight** (v0.37.6+) - Documentation theme for Astro
- **TypeScript** (v5.5.4+)
- **MDX** - For content with React components

## Claude Code / IntelliJ MCP Integration

- Prefer the `idea` MCP server tools over generic file/shell exploration when working inside this repo:
  - **Navigating files** — use `mcp__idea__find_files_by_name_keyword`, `mcp__idea__find_files_by_glob`, `mcp__idea__list_directory_tree` before falling back to `find`/`ls`.
  - **Searching content** — use `mcp__idea__search_text` / `mcp__idea__search_in_files_by_text` / `mcp__idea__search_in_files_by_regex` instead of ad-hoc grep for MDX/TS content.
  - **Diagnostics/problems** — use `mcp__idea__get_file_problems` / `mcp__idea__get_inspections` to check TypeScript/Astro errors instead of only relying on `astro check` output.
  - **Editing** — use `mcp__idea__replace_text_in_file` / `mcp__idea__apply_patch` so changes go through the IDE and stay in sync with its indices.
- **Never excavate `.jar` or npm package internals** (unzipping, digging through `node_modules/.pnpm` or `~/.m2` caches) to inspect an API. Resolve TypeScript/Astro/Starlight APIs through the IDE index (`mcp__idea__get_symbol_info`, `mcp__idea__search_symbol`) or their published `.d.ts`/docs first.
- The IDE's semantic understanding is far more accurate than text-based search — treat grep/ripgrep/manual file scanning as a last resort.

## Project Structure

```
website/
├── src/
│   ├── content/
│   │   ├── docs/           # English documentation
│   │   │   ├── index.mdx   # Homepage
│   │   │   ├── getting-started.mdx
│   │   │   ├── key-concepts.mdx
│   │   │   ├── custom-setup.mdx
│   │   │   ├── history.mdx
│   │   │   ├── guides/     # Tutorial guides
│   │   │   └── es/         # Spanish translations
│   │   └── config.ts       # Content collections config
│   ├── assets/             # Images and static assets
│   └── styles/
│       └── custom.css      # Custom theme styles
├── public/                 # Static files (favicon, CNAME, etc.)
├── astro.config.mjs        # Astro & Starlight configuration
├── package.json
└── tsconfig.json
```

## Key Configuration

### Framework Version
- Current Dynamia Platform version: **26.2.0** (CalVer format: YY.MM.MINOR)
- Version is defined in `astro.config.mjs` as `dynamiaToolsVersion`
- CalVer means: Year 26 (2026), Month 02 (February), Release 0
- All Dynamia Platform modules share the same version (unified versioning)
- When updating framework version, update this constant

### Site Configuration
- Production URL: `https://dynamia.tools`
- Local dev server: `http://localhost:4321`

### Internationalization
- Primary language: English (root)
- Supported translations: Spanish (es)
- Add new translations by creating corresponding folders in `src/content/docs/`

## Content Guidelines

### Documentation Files
All documentation files should:
1. Be written in **MDX format** (`.mdx` extension)
2. Include frontmatter with `title` and `description`
3. Use Starlight components for enhanced UI:
   - `Card` and `CardGrid` for feature highlights
   - `Aside` for callouts and notes
   - `LinkButton` for prominent links
   - `Code` for syntax highlighting

### Code Examples
When writing code examples for Dynamia Platform:
- Use **Java 25** syntax and features
- Include relevant **Spring Boot 4** annotations
- Show **JPA/Jakarta Persistence** annotations (not javax.*)
- Reference **ZK 10** components when applicable
- Include package declarations and imports
- Add comments to explain key concepts
- When mentioning versions, use CalVer format (e.g., 26.2.0)

### TypeScript SDK + Vue Examples

For frontend examples, use the current APIs from the framework packages:

- @dynamia-tools/sdk for TypeScript client examples
- @dynamia-tools/vue for Vue component examples

Rules:

- Use `DynamiaClient` from `@dynamia-tools/sdk`.
- Prefer `baseUrl` as app origin (`https://app.example.com`) because SDK calls already include `/api/...` paths.
- Navigation examples must use `NavigationTree.navigation` and `NavigationNode` (`children`, `internalPath`).
- CRUD examples must use `CrudListResult` fields: `content`, `total`, `page`, `pageSize`, `totalPages`.
- Vue examples should show `app.use(DynamiaVue)` and real components/composables (`DynamiaViewer`, `DynamiaCrudPage`, `useNavigation`, `useCrudPage`).
- For navigation node type `CrudPage`, show rendering with `<DynamiaCrudPage :node="node" :client="client" />`.

Example format:
```java
//Contact.java
package demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;

@Entity
public class Contact {
    @Id
    private Long id;
    
    @NotEmpty
    private String name;
}
```

### View Descriptors
When documenting view descriptors:
- Use YAML format
- Include file path comments
- Show minimal and extended examples
- Explain required vs optional fields

Example:
```yaml
# /resources/META-INF/descriptors/ContactForm.yml
view: form
beanClass: demo.Contact
autofields: true
```

### Framework Concepts to Document
Key Dynamia Platform concepts to explain clearly:
- **CalVer Versioning** - Calendar-based versioning (YY.MM.MINOR)
- **Unified Repository** - Core + Extensions in one place
- **Modules** and ModuleProvider
- **Pages** and PageGroups
- **Navigation** system
- **Entities** (JPA)
- **CRUD operations** with CrudService
- **View Descriptors** (forms, tables)
- **Actions** and ActionEvent
- **Templates** and themes
- **Enterprise Extensions** - SaaS, reporting, dashboard, security, email/SMS, file management
- **@EnableDynamiaTools** annotation

## Styling

### Custom Theme
- Primary accent color: `hsl(150, 76%, 34%)` (green)
- Custom styles in `src/styles/custom.css`
- Use CSS variables from Starlight theme
- Support both light and dark modes

### Component Usage
Prefer using Starlight's built-in components:
```jsx
import {Card, CardGrid, Aside, LinkButton} from '@astrojs/starlight/components';
```

## Translation Guidelines

When adding or updating translations:
1. Create corresponding folder structure in `src/content/docs/[lang]/`
2. Mirror the English structure
3. Update sidebar translations in `astro.config.mjs`
4. Keep frontmatter structure consistent
5. Translate all text content but keep code examples readable

Spanish translation example in sidebar:
```javascript
{
    label: 'Start Here',
    translations: {
        'es': 'Comienza Aquí'
    },
    items: [...]
}
```

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build production site
npm run preview      # Preview production build
npm run astro check  # Type check
```

## Common Tasks

### Adding a New Guide
1. Create new `.mdx` file in `src/content/docs/guides/`
2. Add frontmatter with title and description
3. Content will auto-generate in sidebar under "Guides"

### Adding a New Top-Level Page
1. Create `.mdx` file in `src/content/docs/`
2. Manually add to sidebar in `astro.config.mjs` if needed
3. Follow existing patterns for structure

### Updating Framework Version
1. Update `dynamiaToolsVersion` in `astro.config.mjs` (e.g., from 26.2.0 to 26.3.0)
2. Update any version references in documentation
3. Update code examples if API changed
4. Remember: All Dynamia Platform modules share the same CalVer version

### Adding Images
1. Place images in `src/assets/` for optimized processing
2. Reference with relative paths: `../../assets/image.png`
3. Alt text is required for accessibility

### Linking
- Internal links: `/getting-started` (no file extension)
- External links: Full URL with `https://`
- GitHub links should point to `dynamiatools` organization

## Best Practices

1. **Keep it Simple**: Documentation should be clear and concise
2. **Show, Don't Just Tell**: Include working code examples
3. **Be Consistent**: Follow existing patterns and structure
4. **Mobile Friendly**: Starlight handles this, but test complex layouts
5. **Accessibility**: Use semantic HTML and proper alt text
6. **SEO**: Write descriptive titles and descriptions
7. **Version Awareness**: Specify which Dynamia Platform version features require (use CalVer format)
8. **Cross-reference**: Link related concepts together
9. **Update Both Languages**: When adding English content, plan for Spanish translation
10. **Test Locally**: Always run `npm run dev` to preview changes
11. **CalVer Consistency**: When mentioning versions, always use YY.MM.MINOR format (e.g., 26.2.0)

## External Resources

- Starlight Docs: https://starlight.astro.build/
- Astro Docs: https://docs.astro.build/
- DynamiaTools Framework: https://github.com/dynamiatools/framework
- DynamiaTools Main Site: https://dynamia.tools

## Technical Notes

- Astro uses **file-based routing** - file structure determines URLs
- MDX allows mixing **Markdown with JSX components**
- Build process includes type checking via `astro check`
- Sharp library used for image optimization
- Site uses **static site generation** (SSG) for best performance
- CNAME file ensures proper GitHub Pages domain routing

## Content Review Checklist

Before committing documentation changes:
- [ ] Frontmatter is complete and accurate
- [ ] Code examples are tested and working
- [ ] Links are valid and not broken
- [ ] Images have alt text
- [ ] Spelling and grammar checked
- [ ] Consistent with existing style
- [ ] Mobile-friendly layout
- [ ] Accessible to screen readers
- [ ] Spanish translation planned/added (if applicable)
- [ ] Framework version requirements noted using CalVer format (if applicable)
- [ ] References to "DynamiaTools" updated to "Dynamia Platform" where appropriate
- [ ] Java 25 and Spring Boot 4 mentioned correctly
