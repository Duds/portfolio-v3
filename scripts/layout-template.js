/**
 * Layout template for case study pages
 * Generates consistent HTML structure with header, footer, and navigation
 */

module.exports = function generateCaseStudyHTML({ title, description, keywords = '', ogImage = '', content, filename }) {
  // Escape HTML in meta tags to prevent injection
  const escapeHtml = (str) => {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  const safeDescription = escapeHtml(description);
  const safeTitle = escapeHtml(title);
  const safeKeywords = keywords ? escapeHtml(keywords) : '';
  const safeOgImage = ogImage || 'https://dalerogers.com.au/assets/images/og-image.jpg';

  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${safeDescription}">
    <meta name="author" content="Dale Rogers">
    ${safeKeywords ? `<meta name="keywords" content="${safeKeywords}">` : ''}
    <title>${safeTitle} | Dale Rogers</title>
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://dalerogers.com.au/case-studies/${filename}">
    <meta property="og:title" content="${safeTitle} | Dale Rogers">
    <meta property="og:description" content="${safeDescription}">
    <meta property="og:image" content="${safeOgImage}">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://dalerogers.com.au/case-studies/${filename}">
    <meta property="twitter:title" content="${safeTitle} | Dale Rogers">
    <meta property="twitter:description" content="${safeDescription}">
    <meta property="twitter:image" content="${safeOgImage}">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://dalerogers.com.au/case-studies/${filename}">
    
    <!-- Google Fonts - Work Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Stylesheet -->
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <!-- Skip Navigation Link -->
    <a href="#main" class="skip-link">Skip to main content</a>

    <!-- Header Section -->
    <header class="header">
        <nav class="nav container" role="navigation" aria-label="Main navigation">
            <a href="../index.html" class="logo" aria-label="Home">Hello <span class="logo-hand">👋</span></a>
            <button class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-menu" role="list">
                <li><a href="../index.html#services" class="nav-link">Services</a></li>
                <li><a href="../portfolio.html" class="nav-link">Work</a></li>
                <li><a href="../index.html#approach" class="nav-link">Approach</a></li>
                <li><a href="../index.html#resources" class="nav-link">Resources</a></li>
                <li><a href="../index.html#about" class="nav-link">About</a></li>
                <li><a href="../index.html#contact" class="nav-link">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content -->
    <main id="main" role="main">
        <!-- Breadcrumb Navigation -->
        <section class="section" style="padding-top: var(--space-2xl); padding-bottom: var(--space-md);">
            <div class="container">
                <nav aria-label="Breadcrumb" style="margin-bottom: var(--space-md);">
                    <p class="text-sm text-muted">
                        <a href="../index.html" class="text-primary">Home</a> / 
                        <a href="../portfolio.html" class="text-primary">Work</a> / 
                        <span>${safeTitle}</span>
                    </p>
                </nav>
                <a href="../portfolio.html" class="btn btn-secondary">← Back to Work</a>
            </div>
        </section>
        
        <!-- Case Study Content -->
        <article class="section" style="padding-top: var(--space-md);">
            <div class="container content-medium">
                ${content}
            </div>
        </article>

        <!-- Back to Work CTA -->
        <section class="section" style="padding-top: var(--space-md); padding-bottom: var(--space-2xl);">
            <div class="container text-center">
                <a href="../portfolio.html" class="btn btn-primary btn-large">← Back to Work</a>
                <p class="text-muted mt-lg">Or <a href="../index.html#contact" class="text-primary">get in touch</a> to discuss your project</p>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer" role="contentinfo">
        <div class="container">
            <p>&copy; 2025 Dale Rogers. All rights reserved.</p>
            <p class="text-sm mt-sm">Service Design | Government & Regulatory | Canberra, Australia</p>
        </div>
    </footer>

    <script src="../js/generative-art.js"></script>
    <script src="../js/main.js"></script>
</body>
</html>`;
};

