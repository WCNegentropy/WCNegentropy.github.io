# WCNegentropy Images Directory

## 📁 Directory Structure

```
images/
├── products/           # Product showcase images
│   ├── bit-transformer.jpg    # BitTransformerLM showcase
│   ├── wrinkle-brane.jpg      # WrinkleBrane showcase  
│   └── custom-research.jpg    # Custom R&D projects
├── social/            # Social media & preview images
│   ├── og-image.png          # Open Graph preview (1200x630)
│   ├── twitter-card.png      # Twitter card image (1200x628)
│   └── favicon.ico           # Site favicon
└── brand/             # Brand & identity images
    ├── avatar.png            # Profile/avatar image (400x400)
    ├── logo.svg              # Site logo (vector)
    └── hero-bg.jpg           # Hero background (optional)
```

## 🖼️ Image Specifications

### Product Images (16:9 aspect ratio)
- **Dimensions**: 1200x675px minimum
- **Format**: WebP preferred, JPEG fallback
- **Quality**: 85% for JPEG, 80% for WebP
- **Max file size**: 200KB

### Social Media Images
- **Open Graph**: 1200x630px (exactly)
- **Twitter Card**: 1200x628px (exactly)
- **Format**: PNG or JPEG
- **Max file size**: 1MB

### Brand Images
- **Avatar**: 400x400px (square, PNG with transparency)
- **Logo**: SVG preferred for scalability
- **Favicon**: 32x32px ICO format

## 📊 Optimization Guidelines

1. **Compression**: Use tools like TinyPNG, ImageOptim, or squoosh.app
2. **Modern Formats**: WebP with JPEG fallbacks
3. **Responsive**: Serve appropriate sizes for different devices
4. **Alt Text**: Always include descriptive alt attributes
5. **Lazy Loading**: Consider for below-fold images

## 🚀 Deployment Notes

- All images are served directly from GitHub Pages
- No build process required - static file serving
- Use relative paths: `/images/products/example.jpg`
- Ensure images are committed to repository