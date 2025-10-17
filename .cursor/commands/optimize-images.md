---
name: Optimize Images
description: Compress and optimize images for web performance with format conversion, size reduction, and responsive variant generation
version: 1.0.0
category: action
last_updated: 16/10/2025
triggers: ["optimize-images", "compress-images", "img-optimize"]
---

# Optimize Images

Compress and optimize images for web performance while maintaining visual quality.

## Image Optimization Goals

- Reduce file sizes by 50-80%
- Maintain visual quality
- Use modern formats (WebP)
- Generate responsive variants
- Improve page load time

## Manual Optimization

### Online Tools

**TinyPNG** - https://tinypng.com/
- Upload PNG/JPEG
- Automatic compression
- Download optimised version

**Squoosh** - https://squoosh.app/
- Advanced options
- Visual comparison
- Multiple formats

**ImageOptim** - https://imageoptim.com/ (macOS)
- Drag and drop
- Batch processing
- Lossless compression

### Optimization Targets

- **Hero images:** < 200KB
- **Case study images:** < 100KB
- **Icons/logos:** < 50KB
- **Thumbnails:** < 30KB

## Automated Optimization

### Using Sharp (Node.js)

```javascript
// optimize-images.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = './assets/images/original';
const outputDir = './assets/images/optimized';

const optimizeImage = async (file) => {
  const input = path.join(inputDir, file);
  const output = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
  
  await sharp(input)
    .resize(1920, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(output);
  
  console.log(`✅ Optimized: ${file}`);
};

// Process all images
fs.readdirSync(inputDir)
  .filter(f => /\.(jpg|jpeg|png)$/i.test(f))
  .forEach(optimizeImage);
```

Install: `npm install sharp`
Run: `node optimize-images.js`

### Responsive Images

Generate multiple sizes:

```javascript
const sizes = [320, 640, 960, 1280, 1920];

sizes.forEach(async (width) => {
  await sharp(input)
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`${output}-${width}w.webp`);
});
```

## Image Formats

### Format Guidelines

**WebP** - Modern format, excellent compression
- Use for photos and graphics
- Provide JPEG/PNG fallback
- 25-35% smaller than JPEG

**JPEG** - Traditional photos
- Use for photography
- Quality 85% is good balance
- Progressive encoding

**PNG** - Transparency needed
- Use for logos with transparency
- Compress with TinyPNG
- Consider SVG alternative

**SVG** - Vector graphics
- Use for logos, icons, illustrations
- Scalable, smallest file size
- Minify with SVGO

### Format Selection

```
Photograph → WebP (with JPEG fallback)
Logo/Icon → SVG or optimized PNG
Screenshot → WebP or PNG
Illustration → SVG preferred
```

## Image Implementation

### HTML with WebP Fallback

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" width="800" height="600">
</picture>
```

### Responsive Images

```html
<img 
  src="image-640.webp" 
  srcset="
    image-320.webp 320w,
    image-640.webp 640w,
    image-960.webp 960w,
    image-1280.webp 1280w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Description"
  loading="lazy"
  width="1280"
  height="720"
>
```

## Optimization Checklist

### Before Upload
- [ ] Resize to appropriate dimensions
- [ ] Compress to target file size
- [ ] Convert to WebP (if appropriate)
- [ ] Generate responsive variants (if needed)

### File Naming
- [ ] Descriptive filenames
- [ ] Lowercase
- [ ] Hyphens not spaces
- [ ] Include dimensions in filename (optional)

Example: `hero-technology-services-1920x1080.webp`

### After Upload
- [ ] Verify images display correctly
- [ ] Check file sizes acceptable
- [ ] Test on slow connection
- [ ] Verify lazy loading works

## Batch Optimization

For all images in a directory:

```bash
# Using ImageMagick
for file in *.jpg; do
  convert "$file" -quality 85 -sampling-factor 4:2:0 "optimized-$file"
done

# Using cwebp (WebP encoder)
for file in *.{jpg,png}; do
  cwebp -q 85 "$file" -o "${file%.*}.webp"
done
```

## Performance Impact

### Before Optimization
- Page size: 5MB
- Load time: 8 seconds
- Lighthouse Performance: 60

### After Optimization
- Page size: 1MB (80% reduction)
- Load time: 2 seconds (75% faster)
- Lighthouse Performance: 95

## Image Optimization Tools

### Command Line
- **Sharp** (Node.js) - Most versatile
- **ImageMagick** - Powerful, complex
- **cwebp** - WebP conversion
- **pngquant** - PNG compression
- **jpegoptim** - JPEG optimization

### GUI Applications
- **ImageOptim** (macOS)
- **FileOptimizer** (Windows)
- **Squoosh** (Web-based)
- **RIOT** (Windows)

### Online Services
- **TinyPNG/TinyJPG**
- **Compressor.io**
- **Optimizilla**
- **Kraken.io**

## Best Practices

1. **Always keep originals** - Don't overwrite source files
2. **Optimize before upload** - Don't rely on CDN alone
3. **Use appropriate formats** - WebP for web, PNG for transparency
4. **Size appropriately** - Don't serve 4K images for thumbnails
5. **Lazy load** - Load below-fold images on demand
6. **Specify dimensions** - Prevent layout shift
7. **Use CDN** - Serve from edge locations
8. **Monitor file sizes** - Keep images < 200KB

## Related Commands
- **@performance-audit**: Check page load performance
- **@build**: Build and preview site
- **@deploy**: Deploy optimized assets

---

*Last Updated: 16/10/2025*

