# Site Architecture & Technical Reference

## Overview

**WCNegentropy.github.io** is the public website for WCNEGENTROPY HOLDINGS LLC — a deep-tech IP holding company and research lab. This document describes the current technical architecture, design system, and development workflow.

---

## Architecture

### Stack

| Layer | Technology |
|---|---|
| Static site generator | Jekyll 4.3.x |
| CSS framework | Tailwind CSS (JIT, via `npm run build:css`) |
| JavaScript | Alpine.js 3.14.x (CDN) |
| Font rendering | MathJax 3 for LaTeX equations |
| Deployment | GitHub Actions → GitHub Pages |

### Repository Layout

```
WCNegentropy.github.io/
├── index.md                 # Homepage (layout: home)
├── models.md                # AI Models page (layout: models, permalink: /models/)
├── contact.md               # Contact page (layout: contact, permalink: /contact/)
├── _config.yml              # Jekyll config with collection defaults
├── _data/site.yml           # Centralized site data (owner, projects, social)
├── _layouts/
│   ├── default.html         # Base HTML shell
│   ├── home.html            # Homepage atlas layout (with teaser sections)
│   ├── page.html            # Generic content page
│   ├── research.html        # Research collection layout (publication-style)
│   ├── software.html        # Software collection layout (artifact-style)
│   ├── models.html          # AI Models page layout (violet accent, HuggingFace)
│   └── contact.html         # Contact page layout (form + profiles)
├── _includes/
│   ├── head.html            # <head> — JSON-LD, MathJax, SEO, fonts
│   ├── header.html          # Sticky nav with active-page highlighting
│   ├── footer.html          # Footer with structured navigation
│   ├── command-palette.html # ⌘K command palette (Alpine.js)
│   ├── scripts.html         # Lightweight JS (mobile menu, contact form)
│   └── input.css            # Tailwind source + design token CSS
├── _research/               # Research collection
│   ├── maguft.md            # MAGUFT — Grand Unified Field Theory
│   └── magrot.md            # MagRot — Magnetic Field Dynamics
├── _software/               # Software collection
│   └── retro-vibecoder.md   # retro-vibecoder / UPG
├── assets/css/main.css      # Built Tailwind output (committed)
└── .github/workflows/
    └── deploy.yml           # Build pipeline: Node.js → Jekyll → Pages
```

---

## Design System

The design system lives in `_includes/input.css`. It uses CSS custom properties (design tokens) with a Tailwind CSS component/utility layer.

### Design Tokens

```css
/* Surfaces */
--canvas, --surface-1, --surface-2, --surface-3
--border, --border-sub

/* Text hierarchy */
--text-primary, --text-secondary, --text-tertiary

/* Accent (green — research) */
--accent, --accent-hover, --accent-dim

/* Amber (live software / status) */
--amber, --amber-dim

/* Violet (AI models) */
--violet, --violet-dim

/* Code */
--code-bg, --code-text

/* Motion */
--ease-out, --ease-in, --ease-inout
--duration-fast, --duration-base, --duration-slow
```

### Reusable Components

| Class | Description |
|---|---|
| `.panel` | Primary container — surface-1, border, hover glow |
| `.badge` | Mono chip — status/type indicator |
| `.badge-research` | Green accent badge (active research) |
| `.badge-live` | Amber badge (live software) |
| `.badge-dev` | Muted badge (development / license) |
| `.meta-label` | JetBrains Mono, uppercase, tracked |
| `.btn-primary` | Solid accent CTA button |
| `.btn-ghost` | Bordered ghost button |
| `.link-accent` | Inline accent link with underline hover |
| `.code-block` | Mono code display (dark bg, green text) |
| `.section-rule` | Fading horizontal divider |
| `.bg-grid` | Technical grid overlay (48px, masked edges) |
| `.page-hero` | Collection page header block (border-bottom) |
| `.section-heading` | Content section h2 — Space Grotesk, semibold |
| `.action-row` | Flex row for CTA buttons |
| `.callout` | Left-bordered highlighted note block |
| `.fact-item` | Stat/capability card (value + label) |
| `.fact-item-value` | Large accent numeric value |
| `.fact-item-label` | Mono label below value |

---

## Collection Architecture

Collections are defined in `_config.yml` with automatic layout assignment via `defaults`.

### Research Collection (`_research/`)
- **Layout**: `research.html` — publication-style
- **URL pattern**: `/research/:slug/`
- **JSON-LD schema**: `ScholarlyArticle`
- **Visual language**: green accent rule, formal metadata strip, abstract block

### Software Collection (`_software/`)
- **Layout**: `software.html` — artifact/product-style
- **URL pattern**: `/software/:slug/`
- **JSON-LD schema**: `SoftwareSourceCode`
- **Visual language**: amber accent rule, comprehensive fact rail (status, version, license, repo, npm)

### Frontmatter Fields (Research)

```yaml
title: "SHORT_NAME — Full Title"      # Split on "—" for hero rendering
description: "Abstract/lead text"     # Rendered in page hero
schema_type: "ScholarlyArticle"
status: "Active Research"
license: "CC BY 4.0 (Research) / AGPLv3 (Software)"
repo_url: "https://github.com/..."
tags: [tag1, tag2]
```

### Frontmatter Fields (Software)

```yaml
title: "SHORT_NAME — Full Title"
description: "Lead description"
schema_type: "SoftwareSourceCode"
status: "Live — v0.2.2"
license: "MIT"
repo_url: "https://github.com/..."
npm_url: "https://www.npmjs.com/package/..."  # optional
tags: [tag1, tag2]
```

---

## Content Pages

| Page | URL | Layout |
|---|---|---|
| Homepage | `/` | `home` |
| MAGUFT | `/research/maguft/` | `research` |
| MagRot | `/research/magrot/` | `research` |
| retro-vibecoder | `/software/retro-vibecoder/` | `software` |
| AI Models | `/models/` | `models` |
| Contact | `/contact/` | `contact` |
| Privacy | `/privacy/` | `page` |
| Terms | `/terms/` | `page` |

---

## Navigation

The header (`_includes/header.html`) provides direct links to all major site destinations:

| Nav Item | Destination | Active-state logic |
|---|---|---|
| MAGUFT | `/research/maguft/` | `page.url contains 'maguft'` |
| MagRot | `/research/magrot/` | `page.url contains 'magrot'` |
| retro-vibecoder | `/software/retro-vibecoder/` | `page.url contains 'retro-vibecoder'` |
| Models | `/models/` | `page.url contains 'models'` |
| Contact | `/contact/` | `page.url contains 'contact'` |

Active pages receive `aria-current="page"`, the accent color, and a surface-2 background.
Both desktop and mobile nav are kept in sync.

### Homepage teaser sections

The homepage (`_layouts/home.html`) includes concise teaser/preview sections for Models and Contact
that link through to their dedicated pages — the full content lives at `/models/` and `/contact/`.

---

## Build Pipeline

### Local Development

```bash
# Install dependencies (first time)
npm install
bundle install --path vendor/bundle

# Build Tailwind CSS
npm run build:css

# Build Jekyll site
bundle exec jekyll build

# Local development server
bundle exec jekyll serve --host 0.0.0.0 --port 4000

# Watch Tailwind for changes (separate terminal)
npm run watch:css
```

### Production Deployment

Push to `main` → GitHub Actions automatically:
1. Installs Node.js 20 and Ruby 3.1
2. Installs dependencies (with caching)
3. Builds Tailwind CSS
4. Builds Jekyll
5. Deploys to GitHub Pages

**Build time:** ~1–2 minutes with caching.

### Updating CSS

1. Edit `_includes/input.css` (design tokens, components, utilities)
2. Run `npm run build:css` to rebuild `assets/css/main.css`
3. Commit both files

---

## Security

- All GitHub Actions pinned to commit SHAs with version comments
- Least-privilege workflow permissions (`contents: read`, `pages: write`)
- XSS-safe URL handling in Command Palette (Alpine.js)
- No server-side logic — pure static site
- HTTPS enforced via GitHub Pages

---

## Troubleshooting

**CSS changes not appearing:**
```bash
npm run build:css
bundle exec jekyll clean && bundle exec jekyll build
```

**Jekyll build errors:**
```bash
bundle exec jekyll build --verbose
```

**Command Palette not opening:**
Check that Alpine.js is loaded: view page source, search for `alpinejs`. Verify `command-palette.html` is included in `default.html`.

---

*WCNEGENTROPY HOLDINGS LLC — contact@wcnegentropy.com*

