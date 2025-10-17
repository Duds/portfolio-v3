---
name: Build and Preview
description: Build the site with markdown processing and preview locally with automatic browser opening and hot reload
version: 1.0.0
category: action
last_updated: 16/10/2025
triggers: ["build", "preview", "local-preview"]
---

# Build and Preview

This command builds the portfolio site with markdown content processing and launches a local preview server for development and testing.

## Workflow

### Step 1: Check Environment

1. **Verify Node.js and npm installed**
   - Run: `node --version`
   - Run: `npm --version`
   - Ensure Node.js v16+ is installed

2. **Check for required dependencies**
   - Run: `npm list marked`
   - If not installed, run: `npm install`

3. **Verify file structure**
   - Ensure `scripts/build-content.js` exists
   - Ensure `case-studies/` directory exists
   - Ensure `index.html` and `portfolio.html` exist

### Step 2: Build Content

1. **Run the build script**
   - Execute: `node scripts/build-content.js`
   - This processes markdown case studies
   - Builds HTML content from markdown files
   - Injects content into templates

2. **Verify build output**
   - Check console for build success messages
   - Verify no errors in markdown parsing
   - Confirm all case studies processed

3. **Build artifacts**
   - Updated HTML files with processed content
   - Generated case study cards
   - Processed markdown to HTML

### Step 3: Start Local Server

1. **Launch HTTP server**
   - If Python 3 available: `python3 -m http.server 8000`
   - If Python 2 available: `python -m SimpleHTTPServer 8000`
   - If Node.js http-server installed: `npx http-server -p 8000`
   - Default port: 8000

2. **Server configuration**
   - Serve from project root
   - Enable directory listing (for debugging)
   - Set CORS headers if needed
   - Enable hot reload if using live-server

3. **Alternative: Use live-server for hot reload**
   - Install: `npm install -g live-server`
   - Run: `live-server --port=8000 --open=/`
   - Benefits: Auto-refresh on file changes

### Step 4: Open Browser

1. **Launch default browser**
   - Open: `http://localhost:8000`
   - Alternatively: `http://127.0.0.1:8000`

2. **Test pages to verify**
   - Homepage: `/index.html`
   - Portfolio: `/portfolio.html`
   - Individual case studies (check links)

3. **Verify all assets load**
   - CSS files load correctly
   - JavaScript executes without errors
   - Images display properly
   - Fonts load correctly

### Step 5: Development Workflow

1. **Make changes to source files**
   - Edit HTML, CSS, or JavaScript
   - Edit case study markdown files
   - Modify build scripts

2. **Rebuild if markdown changed**
   - Run: `node scripts/build-content.js`
   - Refresh browser
   - Verify changes applied

3. **Auto-reload setup (optional)**
   - Use `live-server` for automatic refresh
   - Or use browser extension like LiveReload
   - Or set up nodemon watch: `nodemon --watch case-studies --watch scripts --exec "node scripts/build-content.js"`

## Command Variants

### Quick Build and Open

```bash
node scripts/build-content.js && python3 -m http.server 8000
```

### Build with Watch Mode

```bash
# Terminal 1: Watch and rebuild
nodemon --watch case-studies --watch scripts --exec "node scripts/build-content.js"

# Terminal 2: Serve
live-server --port=8000 --open=/
```

### Build Only (no server)

```bash
node scripts/build-content.js
```

### Preview Only (no rebuild)

```bash
python3 -m http.server 8000
```

## Port Configuration

If port 8000 is in use, try alternative ports:

- `python3 -m http.server 8080`
- `python3 -m http.server 3000`
- `python3 -m http.server 5000`

Check what's using a port:
```bash
# macOS/Linux
lsof -i :8000

# Kill process on port
kill -9 <PID>
```

## Troubleshooting

### Build Script Fails

**Problem:** `node scripts/build-content.js` returns errors

**Solutions:**
1. Check Node.js version: `node --version` (need 16+)
2. Install dependencies: `npm install`
3. Check for missing markdown files
4. Review error messages for specific issues
5. Verify `marked` package installed: `npm list marked`

### Server Won't Start

**Problem:** Port already in use or server fails to start

**Solutions:**
1. Check if port is in use: `lsof -i :8000`
2. Try alternative port: `python3 -m http.server 8080`
3. Kill existing process on port
4. Verify Python/Node.js installed

### Browser Won't Open

**Problem:** Browser doesn't open automatically

**Solutions:**
1. Manually open browser to `http://localhost:8000`
2. Check server is actually running (look for "Serving HTTP" message)
3. Try `http://127.0.0.1:8000` instead
4. Check firewall settings

### Assets Not Loading

**Problem:** CSS, JS, or images don't load

**Solutions:**
1. Check browser console for 404 errors
2. Verify file paths are relative to project root
3. Check file permissions
4. Clear browser cache
5. Verify server is serving from correct directory

### Markdown Not Rendering

**Problem:** Case studies show raw markdown or don't display

**Solutions:**
1. Ensure build script ran successfully
2. Check case study markdown file names
3. Verify markdown format is correct
4. Check `marked` package version
5. Review build script console output

## Testing Checklist

Before considering preview ready:

- [ ] Homepage loads without errors
- [ ] Portfolio page loads and displays all case studies
- [ ] All CSS styles apply correctly
- [ ] JavaScript executes without console errors
- [ ] All images load properly
- [ ] All internal links work
- [ ] Navigation functions correctly
- [ ] Mobile view responsive (test in DevTools)
- [ ] No 404 errors in Network tab
- [ ] Fonts load correctly

## Development Best Practices

1. **Always rebuild after markdown changes**
   - Case study edits require rebuild
   - HTML/CSS/JS changes don't need rebuild

2. **Use browser DevTools**
   - Check Console for errors
   - Use Network tab to debug loading issues
   - Test responsive design in Device Mode

3. **Test cross-browser**
   - Chrome (primary)
   - Firefox
   - Safari
   - Edge

4. **Watch for console warnings**
   - Address linting warnings
   - Fix accessibility issues
   - Resolve deprecated API warnings

## Integration with Other Commands

**After building and previewing:**
- Run `@accessibility-audit` to check WCAG compliance
- Run `@ux-audit` to verify user experience
- Run `@seo-audit` to check search optimisation
- Run `@security-audit` to verify security headers

**Before deploying:**
- Run `@pre-flight` for comprehensive checks
- Run `@cpp` to commit and push changes
- Run `@deploy` for production deployment

## Environment Setup (First Time)

If this is your first time running the preview:

1. **Install Node.js**
   - Download from: https://nodejs.org/
   - Install LTS version (v18+)
   - Verify: `node --version`

2. **Install project dependencies**
   - Run: `npm install`
   - This installs `marked` and other dependencies

3. **Verify Python (optional but helpful)**
   - Check: `python3 --version`
   - macOS/Linux: Usually pre-installed
   - Windows: Install from python.org

4. **Install live-server (optional)**
   - Run: `npm install -g live-server`
   - Provides auto-refresh on file changes

## Quick Reference

| Command | Purpose |
|---------|---------|
| `node scripts/build-content.js` | Build markdown content |
| `python3 -m http.server 8000` | Start simple server |
| `live-server --port=8000` | Start server with auto-reload |
| `npm install` | Install dependencies |
| `lsof -i :8000` | Check what's using port 8000 |

## Related Commands

- **@build**: Alias for this command
- **@preview**: Alias for this command
- **@deploy**: Deploy to production after preview
- **@pre-flight**: Pre-deployment checks

---

*Last Updated: 16/10/2025*

