/**
 * Build script to convert markdown case studies to HTML
 * Usage: npm run build:content
 */

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const generateCaseStudyHTML = require('./layout-template');

// Configure marked
marked.setOptions({
  gfm: true, // GitHub Flavored Markdown
  breaks: false,
  headerIds: true,
  mangle: false
});

// Directories
const CASE_STUDIES_DIR = path.join(__dirname, '../case-studies');

/**
 * Parse YAML-style frontmatter from markdown
 * Supports format: ---\nkey: value\n---
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content: content };
  }
  
  const frontmatterText = match[1];
  const contentWithoutFrontmatter = content.substring(match[0].length);
  
  const frontmatter = {};
  const lines = frontmatterText.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      frontmatter[key] = value;
    }
  }
  
  return { frontmatter, content: contentWithoutFrontmatter };
}

/**
 * Extract metadata from markdown content
 * Looks for frontmatter first, then falls back to content extraction
 */
function extractMetadata(content) {
  const { frontmatter, content: markdownContent } = parseFrontmatter(content);
  
  const lines = markdownContent.split('\n');
  let title = frontmatter.title || 'Case Study';
  let description = frontmatter.description || '';
  let keywords = frontmatter.keywords || '';
  let ogImage = frontmatter.ogImage || '';
  
  // If no frontmatter title, extract from first H1
  if (!frontmatter.title) {
    for (const line of lines) {
      if (line.startsWith('# ')) {
        title = line.replace('# ', '').trim();
        break;
      }
    }
  }
  
  // If no frontmatter description, extract from content
  if (!description) {
    let foundChallenge = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Look for "Challenge:" line
      if (line.startsWith('**Challenge:**')) {
        description = line.replace('**Challenge:**', '').trim();
        // If description continues on next line, append it
        if (i + 1 < lines.length && lines[i + 1].trim() && !lines[i + 1].startsWith('**')) {
          description += ' ' + lines[i + 1].trim();
        }
        foundChallenge = true;
        break;
      }
    }
    
    // If no challenge found, use first substantial paragraph
    if (!foundChallenge) {
      for (const line of lines) {
        if (line.length > 50 && !line.startsWith('#') && !line.startsWith('**') && !line.startsWith('-')) {
          description = line.trim();
          break;
        }
      }
    }
  }
  
  // Truncate description if too long
  if (description.length > 160) {
    description = description.substring(0, 157) + '...';
  }
  
  return { 
    title, 
    description, 
    keywords, 
    ogImage,
    content: markdownContent 
  };
}

/**
 * Process a single markdown file
 */
function processMarkdownFile(filename) {
  const mdPath = path.join(CASE_STUDIES_DIR, filename);
  const htmlFilename = filename.replace('.md', '.html');
  const htmlPath = path.join(CASE_STUDIES_DIR, htmlFilename);
  
  console.log(`Processing: ${filename}`);
  
  try {
    // Read markdown file
    const markdown = fs.readFileSync(mdPath, 'utf8');
    
    // Extract metadata (with frontmatter support)
    const { title, description, keywords, ogImage, content } = extractMetadata(markdown);
    
    // Convert markdown to HTML
    const contentHtml = marked.parse(content);
    
    // Generate full HTML page
    const fullHtml = generateCaseStudyHTML({
      title,
      description,
      keywords,
      ogImage,
      content: contentHtml,
      filename: htmlFilename
    });
    
    // Write HTML file
    fs.writeFileSync(htmlPath, fullHtml, 'utf8');
    
    console.log(`  ✓ Generated: ${htmlFilename}`);
    console.log(`  Title: ${title}`);
    
  } catch (error) {
    console.error(`  ✗ Error processing ${filename}:`, error.message);
    throw error;
  }
}

/**
 * Main build function
 */
function buildContent() {
  console.log('Building case study HTML files...\n');
  
  try {
    // Check if case studies directory exists
    if (!fs.existsSync(CASE_STUDIES_DIR)) {
      throw new Error(`Case studies directory not found: ${CASE_STUDIES_DIR}`);
    }
    
    // Get all markdown files
    const files = fs.readdirSync(CASE_STUDIES_DIR)
      .filter(file => file.endsWith('.md'));
    
    if (files.length === 0) {
      console.log('No markdown files found in case-studies directory.');
      return;
    }
    
    console.log(`Found ${files.length} markdown file(s)\n`);
    
    // Process each file
    files.forEach(processMarkdownFile);
    
    console.log(`\n✓ Build complete! Generated ${files.length} HTML file(s).`);
    
  } catch (error) {
    console.error('\n✗ Build failed:', error.message);
    process.exit(1);
  }
}

// Run build
buildContent();

