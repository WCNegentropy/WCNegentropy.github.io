# WCNegentropy.github.io

**Professional Digital Solutions for New Jersey Local Businesses**

This is the business website for WCNegentropy, providing comprehensive web development, e-commerce setup, and automation services exclusively to New Jersey local businesses.

## 🏠 About Us

WCNegentropy serves New Jersey businesses with:
- **In-person setup and training** at your location
- **Competitive pricing** - 50% below market average
- **Local support** - Fast response times for NJ businesses
- **Comprehensive services** - Web development, e-commerce, automation, and more

## 🎯 Services

We specialize in helping NJ businesses establish and grow their digital presence:
- Website Development (responsive, mobile-optimized)
- E-commerce Setup (Shopify, Wix, custom solutions)
- Digital Marketing & Automation
- Google Workspace & Professional Email
- Domain Management & Hosting
- Business Intelligence & Analytics

## 📍 Service Area

**New Jersey businesses only** - We focus exclusively on serving local NJ businesses with hands-on, in-person support.

## 💰 Competitive Pricing

All service packages priced 50% below market average, starting at:
- Small Business Essentials: $1,250 setup / $250/month
- E-commerce Stores: From $1,750 setup / $325/month
- Enterprise Solutions: From $7,500 setup / $1,750/month

## 📞 Contact

**Email**: contact@wcnegentropy.com  
**Location**: Serving all of New Jersey

Visit our website at [wcnegentropy.com](https://wcnegentropy.com) for complete service details and to get a quote.

## 🛠 Technical Details

### Modern Stack (2025)

**Frontend:**
- Jekyll 4.3.x (Static Site Generator)
- Tailwind CSS 3.4.x (JIT Compilation)
- Alpine.js 3.14.x (Lightweight JavaScript Framework)
- Inter & JetBrains Mono Fonts

**Build Pipeline:**
- GitHub Actions with SHA-pinned actions for security
- Node.js 20 for Tailwind CSS compilation
- Ruby 3.1 for Jekyll build
- NPM & Bundler caching for fast builds (1-2 min)

**Features:**
- ⌘K Command Palette for quick navigation
- Bento Grid layout for modern aesthetics
- Dark mode with system preference detection
- Optimized CSS (22KB minified)
- Resource preloading for performance
- SEO optimized with jekyll-seo-tag

### Development

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

# Watch Tailwind for changes (separate terminal)
npm run watch:css
```

### Security

- ✅ All GitHub Actions pinned to SHA hashes
- ✅ Least-privilege permissions (contents: read, pages: write)
- ✅ No external API dependencies in production
- ✅ Security headers (X-Content-Type-Options, X-Frame-Options, CSP)
- ✅ HTTPS enforced via GitHub Pages

### Performance

- ⚡ ~22KB minified CSS (tree-shaken with Tailwind JIT)
- ⚡ DNS prefetching for CDN resources
- ⚡ Font preloading for critical resources
- ⚡ Build time: 1-2 minutes with caching
- ⚡ Lighthouse score: 95+ (Performance, Accessibility, SEO)

### Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Comprehensive technical documentation
- **[.github/workflows/README.md](./.github/workflows/README.md)** - CI/CD pipeline details
- **[JEKYLL_MIGRATION.md](./JEKYLL_MIGRATION.md)** - Jekyll migration notes (if exists)

---

Built with ❤️ for New Jersey local businesses
