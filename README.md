# WCNegentropy.github.io

**A negentropic attractor — creating an interconnected web of projects and ideas to benefit humanity.**

WCNegentropy is a deep-tech IP holding company and software lab. We build developer tools, experimental AI systems, and emerging infrastructure — all published under project-specific open licenses.

## 🔬 Core IP

### Software

| Project | Description | License |
|---------|-------------|---------|
| **[retro-vibecoder (UPG)](https://github.com/WCNegentropy/retro-vibecoder)** | Universal Project Generator — deterministic seed-based CLI + Tauri desktop app. 40+ strategies, 7 archetypes, 12 languages | MIT |

### AI Models (HuggingFace)

| Model | Description | License |
|-------|-------------|---------|
| **[BitTransformerLM](https://huggingface.co/WCNegentropy/BitTransformerLM)** | Bit-level transformer with 9-bit encoding, reversible architecture, safety telemetry (793K–771M params) | AGPLv3 |
| **[WrinkleBrane](https://huggingface.co/WCNegentropy/WrinkleBrane)** | Wave-interference memory system — 4D tensor ops, 150+ dB PSNR associative recall | AGPL-3.0 |

### Upcoming

- **PQC Privacy Layer** — Post-Quantum Cryptography for user data sovereignty
- **Procedural Game Engine** — Custom engine with procedural generation at its core

## 🛠 Site Technical Stack

- **Jekyll 4.3.x** static site generator with Tailwind CSS 3.4.x (JIT) and Alpine.js 3.14.x
- **GitHub Actions** CI/CD — SHA-pinned, least-privilege permissions
- **MathJax 3** for native LaTeX rendering of technical notation
- **Dynamic JSON-LD** schema injection per collection (`ScholarlyArticle`, `SoftwareSourceCode`)
- **Collections**: `_software`, `_posts` for structured content

### Development

```bash
npm install && bundle install --path vendor/bundle
npm run build:css
bundle exec jekyll build
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

## 📬 Contact

**Email**: contact@wcnegentropy.com
**Web**: [wcnegentropy.com](https://wcnegentropy.com)

## 📄 Documentation

- **[CLAUDE.md](./CLAUDE.md)** — Technical documentation and AI context
- **[.github/workflows/README.md](./.github/workflows/README.md)** — CI/CD pipeline details

---

*All intellectual property held by WCNEGENTROPY HOLDINGS LLC.*
