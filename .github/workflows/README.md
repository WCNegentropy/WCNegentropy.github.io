# GitHub Actions Workflows

This directory contains the GitHub Actions workflows for building and deploying the WCNegentropy website to GitHub Pages.

## Active Workflows

### `deploy.yml` - Modern Build & Deploy Pipeline ✅

**Purpose**: Production deployment workflow using modern GitHub Actions v4 with hybrid Node.js + Jekyll build.

**Features**:
- ✅ SHA-pinned actions for enhanced security
- ✅ Least-privilege permissions (contents: read, pages: write)
- ✅ Node.js build step for Tailwind CSS JIT compilation
- ✅ Ruby/Jekyll build with bundler caching
- ✅ NPM caching for faster builds
- ✅ Direct deployment to GitHub Pages

**Triggers**:
- Push to `main` branch
- Manual workflow dispatch

**Security**:
- All actions pinned to specific SHA hashes to prevent supply chain attacks
- Minimal permissions (no write access to repository, only to Pages)
- No external secrets required (all dependencies managed in repo)

**Build Steps**:
1. Checkout code
2. Setup Node.js 20 with npm cache
3. Install Node dependencies (Tailwind CSS)
4. Build Tailwind CSS (JIT compilation with purging)
5. Setup Ruby 3.1 with bundler cache
6. Setup GitHub Pages
7. Build Jekyll site
8. Upload Pages artifact
9. Deploy to GitHub Pages

**Performance**:
- Estimated build time: 1-2 minutes
- NPM cache reduces dependency install time by ~80%
- Bundler cache reduces gem install time by ~90%
- Total bandwidth: <50MB per build

## Disabled Workflows

### `jekyll.yml.disabled` - Legacy Jekyll Workflow

**Reason for Disabling**: Replaced by modern `deploy.yml` with enhanced security (SHA pinning) and performance (caching).

### `pages.yml.disabled` - Previous Deployment Workflow

**Reason for Disabling**: Consolidated into `deploy.yml` which includes both Tailwind CSS build and Jekyll build in a single workflow.

### `ci.yml.disabled` - Old CI Pipeline

**Reason for Disabling**: Superseded by modern deployment workflow.

## Local Development

To build the site locally:

```bash
# Install dependencies
npm install
bundle install --path vendor/bundle

# Build Tailwind CSS
npm run build:css

# Build Jekyll site
bundle exec jekyll build

# Serve locally (with live reload)
bundle exec jekyll serve --host 0.0.0.0 --port 4000

# Watch Tailwind CSS for changes (in separate terminal)
npm run watch:css
```

## Maintenance

### Updating Action Versions

When updating GitHub Actions, always pin to the full SHA hash for security:

1. Find the latest release tag (e.g., `v4.2.0`)
2. Get the commit SHA for that tag
3. Update the workflow to use the SHA: `uses: actions/checkout@<SHA>`
4. Add a comment with the version: `# actions/checkout@v4.2.0`

Example:
```yaml
# Using SHA for security (actions/checkout@v4.2.2)
- name: Checkout repository
  uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683
```

### Monitoring Build Performance

- Check Actions tab in GitHub for build times
- Review caching efficiency (should see "Cache hit" in logs)
- Monitor CSS file size (should be <30KB minified)
- Ensure no security warnings in dependency scans

## Troubleshooting

### Build Fails on Tailwind CSS Step

- Check that `package.json` and `tailwind.config.js` are present
- Verify `_includes/input.css` exists
- Ensure `assets/css/` directory is created

### Jekyll Build Warnings

- Review Jekyll version in `Gemfile` (should be ~> 4.3.0)
- Check that all required plugins are in `Gemfile`
- Verify `_config.yml` excludes node_modules and build artifacts

### Deployment Issues

- Ensure GitHub Pages is enabled in repository settings
- Verify source is set to "GitHub Actions" (not branch)
- Check that Pages permissions are granted in workflow

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Security: Pinning Actions](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
