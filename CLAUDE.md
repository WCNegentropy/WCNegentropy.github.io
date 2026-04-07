# CLAUDE.md — WCNegentropy Technical Documentation

## 🚀 Project Overview

**WCNegentropy.github.io** is the public-facing website for **WCNEGENTROPY HOLDINGS LLC** — a deep-tech IP holding company and research lab. The site functions as a high-density information-theoretical attractor, showcasing the entity's core intellectual property across unified field theory, magnetic dynamics research, deterministic code generation, and novel AI architectures.

### 🎯 Mission Statement
*"A negentropic attractor, creating an interconnected web of projects and ideas to benefit humanity."*

### 🏗️ Entity Structure
- **Entity**: WCNEGENTROPY HOLDINGS LLC (Delaware Holdco)
- **Focus**: Deep-tech research, open-source software, AI model publishing
- **IP Model**: Split licensing — CC BY 4.0 for research, AGPLv3 for software, MIT for developer tools
- **Distribution**: Distributed / Global
- **Contact**: contact@wcnegentropy.com

## 📁 Repository Structure

```
WCNegentropy.github.io/
├── index.md                # Main landing page (frontmatter → home.html layout)
├── _config.yml             # Jekyll configuration with collections
├── Gemfile                 # Ruby dependencies
├── _layouts/               # Jekyll page templates
│   ├── default.html        # Base layout with header/footer
│   ├── home.html           # Homepage dashboard layout
│   └── page.html           # Standard page layout
├── _includes/              # Reusable components
│   ├── head.html           # HTML head — dynamic JSON-LD, MathJax, meta
│   ├── header.html         # Navigation bar
│   ├── footer.html         # Footer content
│   ├── command-palette.html # ⌘K command palette (Alpine.js)
│   └── scripts.html        # JavaScript for interactive features
├── _data/                  # Site data files
│   └── site.yml            # Core config: research, software, HuggingFace entries
├── _research/              # Research collection (MAGUFT, MagRot)
├── _software/              # Software collection (retro-vibecoder/UPG)
├── _posts/                 # Blog posts (Jekyll tagging for cross-links)
├── images/                 # Image assets
│   ├── brand/              # Brand images (avatar, logo)
│   ├── products/           # Project screenshots
│   └── social/             # Social media preview images
├── assets/css/             # Compiled Tailwind CSS
├── privacy.md              # Privacy policy (research IP / open-source focus)
├── terms.md                # Terms of service (open-source licensing / research IP)
├── llms.txt                # LLM-optimized site summary
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions build & deploy pipeline
├── .devcontainer/
│   └── devcontainer.json   # Codespace development environment
└── .vscode/
    └── settings.json       # VS Code workspace settings
```

## 🔬 Core Intellectual Property

### 1. MAGUFT — Magnetic Rotation Grand Unified Field Theory
- **Repository**: https://github.com/WCNegentropy/MAGUFT
- **Description**: A unified theoretical framework modeling quantum mechanics and general relativity as orthogonal projections of a single entropy-driven master equation on the metric-valued density field Φ^{ab} = √ρ g^{ab}
- **Components**: Papers 1–3, addenda, SymPy symbolic derivation pipeline, computational experiments
- **License**: CC BY 4.0 (research) / AGPLv3 (software)
- **Status**: Active research — Paper 3 current track

### 2. MagRot — Rotational-Vector Framework for Magnetic Field Dynamics
- **Repository**: https://github.com/WCNegentropy/magrot
- **Description**: Dimensionless rotational parameter R(x) encoding local tendency toward collapse, expansion, or equilibrium in magnetic field configurations
- **Validation**: Z-pinch, tokamak (ITER-scale), Earth dipole — v2 thermodynamic framework validated
- **License**: AGPLv3 (software) / CC BY 4.0 (research)
- **Status**: Active R&D — v2 entropy-parameterized state flow

### 3. retro-vibecoder (UPG) — Universal Project Generator
- **Repository**: https://github.com/WCNegentropy/retro-vibecoder
- **NPM**: https://www.npmjs.com/package/@wcnegentropy/cli
- **Description**: CLI tool and cross-platform Tauri desktop app that procedurally generates full working boilerplate tech stacks from a single deterministic seed. 40+ strategies, 7 archetypes, 12 languages.
- **License**: MIT
- **Status**: Live — v0.2.6

### 4. BitTransformerLM
- **Repository**: https://huggingface.co/WCNegentropy/BitTransformerLM
- **Description**: Experimental bit-level transformer with 9-bit encoding (8 data + 1 parity), reversible architecture, safety telemetry
- **Parameters**: 793K–771M configurable
- **License**: AGPLv3

### 5. WrinkleBrane
- **Repository**: https://huggingface.co/WCNegentropy/WrinkleBrane
- **Description**: Wave-interference memory system using 4D tensor operations, 150+ dB PSNR associative recall
- **License**: AGPL-3.0

### 6. Upcoming Projects
- **PQC Privacy Layer**: Post-Quantum Cryptography for user data sovereignty
- **Procedural Game Engine**: Custom engine with procedural generation core

## 🛠 Technical Implementation

### Jekyll Build System
- **Jekyll 4.3.x** for static site generation
- **Layouts**: `_layouts/` — `default.html` (base), `home.html` (dashboard), `page.html` (standard)
- **Includes**: `_includes/` — head, header, footer, scripts, command-palette
- **Data Files**: `_data/site.yml` — centralized config for all projects and social links
- **Collections**: `_research`, `_software`, `_posts` — structured content with custom layouts
- **Build Process**: GitHub Actions builds and deploys on push to main

### Configuration Management
Site data centralized in `_data/site.yml`:

```yaml
owner_name: "WCNegentropy"
tagline: "Negentropy • Unified Field Theory • Open-Source Tools • Deep Tech Research"
location: "Distributed"
research: [ MAGUFT, MagRot ]
software: [ retro-vibecoder ]
huggingface: [ BitTransformerLM, WrinkleBrane ]
```

### SEO & AI Indexability
- **Dynamic JSON-LD Schema**: Per-collection injection — `ScholarlyArticle` for `_research`, `SoftwareSourceCode` for `_software`
- **MathJax 3**: Native LaTeX rendering for field equations (e.g., $\Phi^{ab}=\sqrt{\rho}\,g^{ab}$)
- **jekyll-seo-tag** and **jekyll-sitemap** plugins
- **llms.txt**: LLM-optimized summary at site root

### Theme System
- **Implementation**: CSS custom properties with JavaScript toggle
- **Storage**: localStorage for preference persistence
- **Dark Mode**: Automatic detection with manual override

### Typography
- **Inter**: Body text, headings — clean, documentation-style reading
- **JetBrains Mono**: Code blocks, equations, technical content

## ⚙️ Development Environment

### Codespace Configuration
- **Base Image**: `mcr.microsoft.com/devcontainers/universal:2`
- **Port Management**: Automatic forwarding disabled for clean environment
- **Extensions**: JSON support, Tailwind CSS IntelliSense
- **Optimization**: File watcher exclusions for performance

### GitHub Actions
- **Workflow**: `.github/workflows/pages.yml`
- **Trigger**: Push to main branch or manual dispatch
- **Deployment**: Direct static file deployment to GitHub Pages
- **Permissions**: Contents read, Pages write, ID token write

### VS Code Settings
- **Auto-forwarding**: Disabled for development clarity
- **File Watching**: Optimized exclusions for git and node_modules
- **Language Support**: Emmet for HTML, Tailwind CSS validation disabled

## 🎨 Design Philosophy

### Visual Identity
- **Color Scheme**: Brand blue (#0ea5e9) with violet accents
- **Typography**: Inter for body, JetBrains Mono for code — documentation-style reading
- **Icons**: Emoji-based for universal recognition
- **Animations**: Subtle hover effects, glow shadows, smooth transitions

### User Experience
- **Mobile-First**: Responsive design across all devices
- **Accessibility**: ARIA labels, semantic HTML
- **Performance**: CDN resources, minimal dependencies, tree-shaken CSS
- **Progressive Enhancement**: Core content works without JavaScript

## ⚙️ Development Environment

### GitHub Actions
- **Workflow**: `.github/workflows/deploy.yml`
- **Trigger**: Push to main branch or manual dispatch
- **Pipeline**: Node.js 20 (Tailwind CSS) → Ruby 3.1 (Jekyll) → GitHub Pages
- **Security**: All actions SHA-pinned, least-privilege permissions

### Local Development
```bash
# Install dependencies
npm install
bundle install --path vendor/bundle

# Build Tailwind CSS
npm run build:css

# Build Jekyll site
bundle exec jekyll build

# Local development server
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

## 🔒 Security

- **SHA-Pinned Actions**: All GitHub Actions pinned to commit hashes
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, CSP, Referrer-Policy
- **No Server-Side Storage**: Pure static site, mailto-based contact
- **Input Validation**: Safe URL handling, sanitized DOM operations
- **HTTPS Enforced**: GitHub Pages SSL

## 🛡️ Testing Commands

```bash
# Full build
npm run build:css && bundle exec jekyll build

# Local server
bundle exec jekyll serve --host 0.0.0.0 --port 4000

# Clean build
bundle exec jekyll clean && bundle exec jekyll build --verbose
```

---

*All intellectual property held by WCNEGENTROPY HOLDINGS LLC.*
