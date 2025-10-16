# SEO Specialist Audit

## Purpose
Optimises the portfolio website for traditional search engines, AI-powered search platforms, and large language model retrieval. This audit encompasses technical SEO, AI-SEO adaptation, semantic markup, content intelligence, and knowledge graph optimisation to ensure discoverability across both conventional search engines and generative AI platforms.

## Pre-Audit Setup

- [ ] Install SEO analysis tools:
  - Google Search Console
  - Lighthouse (Chrome DevTools)
  - Screaming Frog SEO Spider
  - Ahrefs or SEMrush browser extensions
- [ ] Set up structured data testing:
  - Google Rich Results Test
  - Schema.org Validator
  - JSON-LD Playground
- [ ] Configure AI-SEO tools:
  - OpenAI API access (for content analysis)
  - Anthropic Claude API (for semantic analysis)
  - Vector database tools (Pinecone/Weaviate)
- [ ] Review existing documentation:
  - `.docs/design/styling-guide.md`
  - `.docs/deployment/*` deployment guides
  - Current sitemap and robots.txt

---

## 1. Technical SEO Foundation

### Meta Information
- [ ] `<title>` tag present on every page (50-60 characters optimal)
- [ ] Title tags unique and descriptive for each page
- [ ] Title structure: Primary Keyword | Brand Name
- [ ] Meta description present (150-160 characters optimal)
- [ ] Meta descriptions compelling and action-oriented
- [ ] Meta descriptions unique per page
- [ ] Meta charset UTF-8 declared
- [ ] Viewport meta tag configured correctly
- [ ] Canonical URLs defined to prevent duplicate content
- [ ] Open Graph tags for social sharing:
  - `og:title`
  - `og:description`
  - `og:image` (1200x630px recommended)
  - `og:url`
  - `og:type`
- [ ] Twitter Card meta tags configured
- [ ] Language attribute set: `<html lang="en-AU">`
- [ ] hreflang tags if multilingual (not applicable for AU-only)

### URL Structure
- [ ] URLs descriptive and human-readable
- [ ] URLs use hyphens (not underscores) as separators
- [ ] URLs lowercase consistently
- [ ] URL hierarchy logical and semantic
- [ ] No dynamic parameters in URLs (unless necessary)
- [ ] URLs contain target keywords where natural
- [ ] URL length reasonable (< 100 characters preferred)
- [ ] No duplicate content via URL variations

### HTML Semantic Structure
- [ ] Single `<h1>` per page containing primary keyword
- [ ] Heading hierarchy logical (h1 → h2 → h3, no skips)
- [ ] Headings contain semantic keywords
- [ ] Semantic HTML5 elements used:
  - `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- [ ] `<main>` landmark contains primary content
- [ ] Proper use of `<article>` for self-contained content
- [ ] Lists use `<ul>`, `<ol>`, `<li>` appropriately
- [ ] Tables use `<table>` with proper `<th>` headers

### Internal Linking
- [ ] All pages accessible within 3 clicks from homepage
- [ ] Descriptive anchor text (no "click here")
- [ ] Strategic internal links to key pages
- [ ] Related content cross-linked
- [ ] Breadcrumb navigation implemented (if applicable)
- [ ] Link equity distributed appropriately
- [ ] No broken internal links
- [ ] Footer links to important pages

---

## 2. Core Web Vitals and Performance

### Largest Contentful Paint (LCP)
- [ ] LCP < 2.5 seconds (good)
- [ ] Above-the-fold images optimised
- [ ] Critical CSS inlined
- [ ] Font loading optimised (font-display: swap)
- [ ] Server response time < 600ms
- [ ] Resource hints used (preload, preconnect)

### First Input Delay (FID)
- [ ] FID < 100ms (good)
- [ ] JavaScript execution optimised
- [ ] Long tasks broken up (< 50ms)
- [ ] Third-party scripts deferred
- [ ] Event handlers optimised

### Cumulative Layout Shift (CLS)
- [ ] CLS < 0.1 (good)
- [ ] Image dimensions specified (width/height)
- [ ] Font loading doesn't cause layout shift
- [ ] No injected content above existing content
- [ ] Ad spaces sized appropriately (if applicable)

### Additional Performance Metrics
- [ ] Time to First Byte (TTFB) < 800ms
- [ ] Speed Index < 3.4 seconds
- [ ] Total page size < 1MB (compressed)
- [ ] Number of HTTP requests minimised
- [ ] Images lazy-loaded below fold
- [ ] Lighthouse Performance score 90+

---

## 3. Mobile SEO

### Mobile Optimisation
- [ ] Fully responsive design
- [ ] Mobile-first indexing ready
- [ ] No horizontal scrolling on mobile
- [ ] Touch targets minimum 44x44px
- [ ] Font size readable without zoom (16px+ body text)
- [ ] Viewport configured: `width=device-width, initial-scale=1`
- [ ] No mobile interstitials blocking content
- [ ] Mobile page speed < 3 seconds

### Mobile Usability
- [ ] Google Mobile-Friendly Test passes
- [ ] Text readable without zooming
- [ ] Content fits screen width
- [ ] Links and buttons easily tappable
- [ ] Navigation accessible on mobile
- [ ] Forms usable on mobile devices

---

## 4. Content Optimisation

### Keyword Strategy
- [ ] Primary keyword identified per page
- [ ] Secondary keywords mapped
- [ ] Long-tail keyword variations included
- [ ] Keyword research conducted:
  - Search volume analysis
  - Keyword difficulty assessment
  - Competitor keyword analysis
  - Intent-based keyword grouping
- [ ] Keywords naturally integrated (no keyword stuffing)
- [ ] Keyword density appropriate (1-2% for primary)
- [ ] LSI (Latent Semantic Indexing) keywords included
- [ ] Keywords in strategic locations:
  - Title tag
  - H1
  - First 100 words
  - Subheadings (H2, H3)
  - Image alt text
  - Meta description
  - URL

### Content Quality
- [ ] Content original and unique
- [ ] Content comprehensive and in-depth
- [ ] Content answers user search intent
- [ ] Content E-E-A-T signals strong:
  - **Experience**: Demonstrates first-hand experience
  - **Expertise**: Shows subject matter expertise
  - **Authoritativeness**: Establishes authority
  - **Trustworthiness**: Builds credibility and trust
- [ ] Content regularly updated
- [ ] Content length appropriate for topic (1000+ words for key pages)
- [ ] Thin content addressed or removed
- [ ] Duplicate content eliminated
- [ ] Content structured with clear hierarchy
- [ ] Content scannable (short paragraphs, lists, headings)

### Content Freshness
- [ ] Date published visible (if applicable)
- [ ] Date updated shown for revised content
- [ ] News/blog section regularly updated
- [ ] Case studies current and relevant
- [ ] Portfolio work showcased with recency

---

## 5. Image and Media SEO

### Image Optimisation
- [ ] All images have descriptive alt text
- [ ] Alt text includes target keywords naturally
- [ ] Alt text concise (125 characters or fewer)
- [ ] Decorative images use empty alt (`alt=""`)
- [ ] Image file names descriptive (not IMG_1234.jpg)
- [ ] Image formats optimised:
  - WebP with fallbacks
  - JPEG for photos
  - SVG for logos/icons
  - PNG for transparency (when needed)
- [ ] Images compressed (TinyPNG, ImageOptim)
- [ ] Images appropriately sized (no oversized images)
- [ ] Responsive images with srcset
- [ ] Lazy loading implemented for below-fold images
- [ ] Image dimensions specified in HTML

### Media Files
- [ ] Video files hosted efficiently (YouTube/Vimeo)
- [ ] Video thumbnails optimised
- [ ] Video transcripts provided
- [ ] Audio files have transcripts
- [ ] PDFs text-selectable and optimised

---

## 6. Schema Markup and Structured Data

### Core Schema Types
- [ ] Schema.org markup implemented
- [ ] JSON-LD format used (preferred by Google)
- [ ] `Organization` schema on homepage:
  - Name
  - Logo
  - URL
  - Social media profiles
  - Contact information
- [ ] `Person` schema for personal portfolio:
  - Name
  - Job title
  - Description
  - Image
  - Same As (social profiles)
  - URL
- [ ] `WebSite` schema:
  - Name
  - URL
  - Potential action (search)
- [ ] `WebPage` schema on all pages:
  - Name
  - Description
  - URL
  - Breadcrumb

### Content-Specific Schema
- [ ] `Article` or `BlogPosting` schema for blog posts:
  - Headline
  - Author
  - Date published
  - Date modified
  - Image
  - Publisher
- [ ] `Service` schema for services offered:
  - Service type
  - Provider
  - Area served
  - Description
- [ ] `Review` schema for testimonials (if applicable):
  - Review rating
  - Review body
  - Author
  - Date published
- [ ] `FAQ` schema for FAQ sections
- [ ] `HowTo` schema for tutorial content (if applicable)
- [ ] `BreadcrumbList` schema for navigation
- [ ] `ContactPoint` schema for contact information

### Schema Validation
- [ ] All schema markup validated with Google Rich Results Test
- [ ] No schema errors reported
- [ ] Schema warnings addressed
- [ ] Schema markup tested in Search Console
- [ ] Rich results eligible where applicable

---

## 7. AI-SEO and Semantic Optimisation

### Semantic Search Optimisation
- [ ] Content optimised for entity-based search
- [ ] Topic clustering strategy implemented
- [ ] Content demonstrates semantic relationships
- [ ] Related concepts and entities mentioned
- [ ] Co-occurrence of semantically related terms
- [ ] Topic authority established through comprehensive coverage
- [ ] Internal content hub structure (pillar pages + cluster content)
- [ ] Entity salience optimised (key entities mentioned early and often)

### Knowledge Graph Optimisation
- [ ] Business/person entities clearly defined
- [ ] Entity relationships explicit in content and markup
- [ ] Structured data reinforces entity information
- [ ] Citations and references to authoritative sources
- [ ] Social profiles linked (establishes entity identity)
- [ ] Consistent NAP (Name, Address, Phone) across web
- [ ] Wikipedia-style entity descriptions in content
- [ ] Disambiguating information provided (unique identifiers)

### Content Vectorisation Readiness
- [ ] Content chunked logically (paragraphs, sections)
- [ ] Each section addresses specific sub-topic
- [ ] Headers clearly describe content that follows
- [ ] Context provided within each section (not too dependent on prior sections)
- [ ] Key concepts defined inline
- [ ] Content structure supports vector embedding
- [ ] Fact density optimised (substantive content, minimal fluff)
- [ ] Clear topic boundaries between sections

### LLM-Friendly Content Structure
- [ ] Concise, factual statements at start of content
- [ ] Key information front-loaded
- [ ] FAQ sections answer specific questions
- [ ] Clear problem → solution structure
- [ ] Bullet points and lists for key facts
- [ ] Definitions provided for technical terms
- [ ] Statistics and data cited with sources
- [ ] Cause-and-effect relationships clearly stated
- [ ] Comparisons structured clearly
- [ ] Step-by-step processes numbered and ordered

---

## 8. AI-Powered Search Preparation

### Generative AI Optimisation
- [ ] Content written in clear, authoritative voice
- [ ] Direct answers to common questions provided
- [ ] Content quotable and excerpt-friendly
- [ ] Key facts stated declaratively
- [ ] Sources and citations included
- [ ] Original insights and perspectives offered
- [ ] Content demonstrates expertise and experience
- [ ] Multi-perspective coverage of topics
- [ ] Content up-to-date with latest information

### Voice Search Optimisation
- [ ] Conversational question phrases included
- [ ] Natural language used
- [ ] "Who, what, where, when, why, how" questions answered
- [ ] Featured snippet optimisation:
  - Concise answers (40-60 words)
  - Question as subheading
  - Direct answer in paragraph or list
- [ ] Local intent addressed (Australian context)
- [ ] Long-tail conversational queries targeted

### Zero-Click Search Optimisation
- [ ] Structured data provides rich results
- [ ] Content formatted for featured snippets
- [ ] Lists and tables used strategically
- [ ] Key information in page meta descriptions
- [ ] Q&A format used where appropriate
- [ ] Statistics and data clearly presented
- [ ] Definitions provided for key terms

---

## 9. Content Intelligence and Analytics

### Semantic Content Analysis
- [ ] Topic modelling performed on existing content
- [ ] Content gaps identified
- [ ] Semantic keyword clusters mapped
- [ ] Content overlap and cannibalisation identified
- [ ] Content pruning opportunities identified
- [ ] Content consolidation opportunities identified
- [ ] Content expansion opportunities identified

### Search Intent Analysis
- [ ] User search intent categorised:
  - Informational
  - Navigational
  - Commercial investigation
  - Transactional
- [ ] Content aligned with user intent
- [ ] Intent-based content strategy developed
- [ ] Query variations mapped to content
- [ ] User journey mapped to content

### Natural Language Processing (NLP) Insights
- [ ] Named entity recognition applied
- [ ] Sentiment analysis conducted
- [ ] Readability analysis performed:
  - Flesch Reading Ease score 60+ (standard)
  - Grade level appropriate for audience
- [ ] Tone consistency verified
- [ ] Topic extraction performed
- [ ] Content relevance scored
- [ ] Semantic similarity analysis done

### Audience Insights
- [ ] Search behaviour analysis conducted
- [ ] User personas mapped to content
- [ ] Content performance by segment analysed
- [ ] Search trends monitored
- [ ] Emerging topics identified
- [ ] Content gap analysis performed
- [ ] Competitor content analysed

---

## 10. Crawlability and Indexation

### Robots.txt Configuration
- [ ] `robots.txt` file present at root
- [ ] Crawler access to public content allowed
- [ ] Disallow rules appropriate (admin, private sections)
- [ ] Sitemap location declared in robots.txt
- [ ] No blocking of CSS/JS files
- [ ] Crawl budget optimised (no wasted crawls)
- [ ] User-agent directives correct

### XML Sitemap
- [ ] XML sitemap generated
- [ ] Sitemap submitted to Google Search Console
- [ ] Sitemap submitted to Bing Webmaster Tools
- [ ] Sitemap includes all public pages
- [ ] Sitemap excludes noindex pages
- [ ] Sitemap includes lastmod dates
- [ ] Sitemap includes priority values (if applicable)
- [ ] Sitemap size < 50MB, < 50,000 URLs
- [ ] Multiple sitemaps if needed (image sitemap, etc.)
- [ ] Sitemap accessible at `/sitemap.xml`

### Crawl Optimisation
- [ ] Site architecture flat (max 3 clicks to any page)
- [ ] No orphaned pages (pages with no internal links)
- [ ] Pagination properly implemented (rel="prev/next" or ViewAll)
- [ ] Infinite scroll supplemented with pagination
- [ ] Faceted navigation doesn't create duplicate content
- [ ] Parameter handling configured in Search Console
- [ ] Crawl rate appropriate (monitor in Search Console)
- [ ] Server response time < 200ms

### Indexation Control
- [ ] Important pages indexable (no noindex)
- [ ] Thin/duplicate pages blocked with noindex
- [ ] Canonical tags prevent duplicate indexation
- [ ] Google Search Console coverage report clean
- [ ] No indexation bloat (unnecessary pages indexed)
- [ ] Meta robots tags used appropriately
- [ ] X-Robots-Tag HTTP headers if needed

---

## 11. Link Building and Authority

### Internal Link Strategy
- [ ] Hub-and-spoke content model implemented
- [ ] Pillar pages linked from relevant content
- [ ] Related content interlinked
- [ ] Important pages prioritised in internal linking
- [ ] Anchor text varied and descriptive
- [ ] Deep links created (not just homepage links)
- [ ] Link equity flows logically

### External Link Profile
- [ ] Links to authoritative external sources
- [ ] External links relevant and valuable
- [ ] External links use rel="nofollow" for untrusted sources
- [ ] External links open in new tab (with indication)
- [ ] Broken external links fixed or removed

### Backlink Analysis
- [ ] Current backlink profile reviewed
- [ ] Toxic backlinks identified and disavowed
- [ ] Link building opportunities identified
- [ ] Competitor backlink analysis performed
- [ ] Brand mentions tracked
- [ ] Unlinked brand mentions identified (reclamation opportunity)

---

## 12. Local and Regional SEO (Australian Context)

### Australian Localisation
- [ ] Language set to en-AU
- [ ] Australian English spelling used throughout
- [ ] Local currency format ($AUD)
- [ ] Local date format (DD/MM/YYYY)
- [ ] Australian phone number format
- [ ] Australian address format
- [ ] Time zones considered (AEST/AEDT)
- [ ] Australian holidays and business hours

### Local SEO (if applicable)
- [ ] Google Business Profile claimed and optimised
- [ ] NAP (Name, Address, Phone) consistent across web
- [ ] Local business schema markup implemented
- [ ] Location pages created (if multiple locations)
- [ ] Local keywords targeted
- [ ] Local citations built (directories)
- [ ] Reviews encouraged and responded to
- [ ] Local content created

---

## 13. Security and Trust Signals

### HTTPS and Security
- [ ] HTTPS implemented site-wide
- [ ] SSL certificate valid and trusted
- [ ] Mixed content issues resolved
- [ ] HSTS header implemented
- [ ] Secure cookies used (if applicable)
- [ ] Content Security Policy configured

### Trust Signals
- [ ] Contact information easily accessible
- [ ] About page comprehensive
- [ ] Privacy policy present and linked
- [ ] Terms of service available (if applicable)
- [ ] Professional email address (not free email)
- [ ] Social proof displayed (testimonials, case studies)
- [ ] Credentials and certifications highlighted
- [ ] Client logos displayed (with permission)
- [ ] Professional photography and design

---

## 14. Content Clustering and Topic Authority

### Pillar Content Strategy
- [ ] Core pillar pages identified
- [ ] Pillar pages comprehensive (2000+ words)
- [ ] Pillar pages target broad topic keywords
- [ ] Cluster content mapped to pillars
- [ ] Internal linking from clusters to pillars
- [ ] Topic authority demonstrated through depth

### Topic Clusters
- [ ] Related subtopics identified
- [ ] Cluster content created for each subtopic
- [ ] Semantic relationships reinforced
- [ ] Content silos logical and organized
- [ ] Cross-linking within clusters
- [ ] Cluster performance tracked

### Semantic Content Relationships
- [ ] Related entities connected
- [ ] Co-occurring concepts mentioned
- [ ] Contextual relevance maintained
- [ ] Comprehensive topic coverage
- [ ] Multi-angle topic exploration
- [ ] Synonyms and variations included

---

## 15. AI-Assisted Content Analysis

### GPT/LLM Content Evaluation
- [ ] Content tested against AI search queries
- [ ] Content appears in AI-generated summaries
- [ ] Content cited as authoritative source
- [ ] Content quotable and referenceable
- [ ] Key facts extractable by AI
- [ ] Content structure AI-readable

### Vector Similarity Analysis
- [ ] Content embedded using sentence transformers
- [ ] Semantic similarity to top-ranking content measured
- [ ] Content uniqueness verified (not too similar)
- [ ] Topic coverage compared to competitors
- [ ] Semantic gaps identified
- [ ] Content positioning optimised

### Natural Language Generation (NLG) Quality
- [ ] Content readability high
- [ ] Content coherence strong
- [ ] Content fluency natural
- [ ] Transition between sections smooth
- [ ] Logical flow maintained
- [ ] Content engaging and compelling

---

## 16. Monitoring and Analytics

### Google Search Console
- [ ] Search Console property verified
- [ ] All site versions added (www and non-www)
- [ ] Sitemaps submitted
- [ ] Coverage report monitored
- [ ] Performance report reviewed regularly
- [ ] Core Web Vitals monitored
- [ ] Mobile usability issues tracked
- [ ] Manual actions checked (should be none)
- [ ] Security issues monitored

### Google Analytics (or alternative)
- [ ] Analytics tracking installed
- [ ] Goals configured
- [ ] Conversion tracking set up
- [ ] User flow analysed
- [ ] Bounce rate monitored
- [ ] Average session duration tracked
- [ ] Top landing pages identified
- [ ] Exit pages analysed

### Rank Tracking
- [ ] Target keywords tracked
- [ ] Ranking positions monitored weekly/monthly
- [ ] Ranking changes analysed
- [ ] Competitor rankings tracked
- [ ] SERP features tracked (featured snippets, etc.)
- [ ] Local rankings monitored (if applicable)

### Performance Metrics
- [ ] Organic traffic trends monitored
- [ ] Click-through rate (CTR) from search analysed
- [ ] Impressions vs. clicks reviewed
- [ ] Conversion rate from organic traffic tracked
- [ ] Page speed monitored continuously
- [ ] Core Web Vitals tracked over time

---

## 17. Competition and Gap Analysis

### Competitor SEO Analysis
- [ ] Top competitors identified
- [ ] Competitor keyword strategy analysed
- [ ] Competitor content strategy reviewed
- [ ] Competitor backlink profiles examined
- [ ] Competitor site structure studied
- [ ] Competitor schema markup reviewed
- [ ] Competitor strengths identified
- [ ] Competitor weaknesses identified

### Content Gap Analysis
- [ ] Keywords competitors rank for (but you don't)
- [ ] Content types competitors produce
- [ ] Topic areas competitors cover
- [ ] Missing content opportunities identified
- [ ] Content quality comparison performed
- [ ] Content freshness comparison
- [ ] Content depth comparison

### SERP Feature Opportunities
- [ ] Featured snippet opportunities identified
- [ ] People Also Ask opportunities found
- [ ] Image pack opportunities discovered
- [ ] Video results opportunities identified
- [ ] Local pack opportunities (if applicable)
- [ ] Site links opportunities
- [ ] Review stars opportunities (schema markup)

---

## 18. Advanced Technical SEO

### JavaScript and SPA Considerations
- [ ] Content rendered server-side or statically (if applicable)
- [ ] Critical content not dependent on JavaScript
- [ ] Dynamic rendering for crawlers (if SPA)
- [ ] History API used correctly (if SPA)
- [ ] Prerendering implemented (if needed)
- [ ] JavaScript errors don't break critical content

### Pagination and Navigation
- [ ] Pagination implemented with rel="prev/next" or structured data
- [ ] Canonical tags on paginated pages point appropriately
- [ ] View All page provided (if appropriate)
- [ ] Infinite scroll includes fallback pagination
- [ ] Load more buttons don't hide content from crawlers

### Internationalization (if applicable)
- [ ] Hreflang tags implemented (if multilingual)
- [ ] Language versions properly linked
- [ ] Regional targeting set in Search Console
- [ ] No automatic redirects based on location
- [ ] Currency and formatting localised

### Duplicate Content Handling
- [ ] Canonical tags implemented correctly
- [ ] Parameter handling configured
- [ ] URL normalisation (www vs. non-www, https)
- [ ] 301 redirects for moved pages
- [ ] No scraped or copied content
- [ ] Syndicated content properly attributed

---

## 19. Emerging AI Search Platforms

### ChatGPT Search Optimisation
- [ ] Content structured for conversational queries
- [ ] Authoritative, factual content emphasized
- [ ] Clear attribution and sourcing
- [ ] Professional expertise demonstrated
- [ ] Content quotable and concise
- [ ] Key facts prominently placed

### Google SGE (Search Generative Experience)
- [ ] Content optimised for AI-generated summaries
- [ ] Structured data comprehensive
- [ ] Content depth demonstrates expertise
- [ ] Multiple perspectives provided
- [ ] Sources and citations included
- [ ] Visual content supporting text

### Perplexity and AI Answer Engines
- [ ] Direct answers to questions provided
- [ ] Factual statements clearly presented
- [ ] Content demonstrably accurate
- [ ] Citations to authoritative sources
- [ ] Up-to-date information
- [ ] Content structured for extraction

---

## 20. Prompt Engineering for Discoverability

### Prompt-Based Findability
- [ ] Content answers natural language questions
- [ ] "How to" content structured clearly
- [ ] Problem-solution format used
- [ ] Step-by-step instructions numbered
- [ ] Use cases and examples provided
- [ ] Context-rich content (5 W's answered)

### LLM Context Optimisation
- [ ] Key context provided early in content
- [ ] Self-contained sections (minimal dependency on prior reading)
- [ ] Definitions and explanations inline
- [ ] Acronyms spelled out at first use
- [ ] Background information included
- [ ] Assumptions stated explicitly

---

## Documentation and Reporting

### SEO Audit Report Sections
1. **Executive Summary**
   - Overall SEO health score
   - Critical issues found
   - Priority recommendations
   - Estimated impact of fixes

2. **Technical SEO Assessment**
   - Crawlability and indexation status
   - Site architecture evaluation
   - Core Web Vitals performance
   - Mobile optimisation status
   - Security and trust signals

3. **On-Page SEO Evaluation**
   - Content quality assessment
   - Keyword optimisation analysis
   - Meta information review
   - Heading structure analysis
   - Internal linking evaluation

4. **Structured Data and Schema**
   - Current schema implementation
   - Rich results eligibility
   - Schema errors and warnings
   - Recommended schema additions

5. **AI-SEO and Semantic Optimisation**
   - Entity recognition and salience
   - Topic clustering assessment
   - Semantic keyword analysis
   - LLM-readiness evaluation
   - Knowledge graph optimisation status

6. **Content Intelligence Insights**
   - Content gap analysis
   - Search intent alignment
   - Topic authority assessment
   - Content freshness evaluation
   - Competitive content comparison

7. **Performance Metrics**
   - Current rankings
   - Organic traffic trends
   - Click-through rates
   - Core Web Vitals scores
   - Indexation status

8. **Competitor Analysis**
   - Competitor keyword gaps
   - Competitor content strategy
   - Backlink profile comparison
   - SERP feature opportunities

9. **Recommendations Roadmap**
   - Quick wins (< 1 week effort)
   - Medium-term improvements (1-4 weeks)
   - Long-term strategic initiatives (> 1 month)
   - Estimated impact for each recommendation
   - Priority ranking (P0, P1, P2)

### Update Documentation
- [ ] Update `.docs/deployment/seo-optimization.md` with findings
- [ ] Document keyword strategy and mappings
- [ ] Create schema markup documentation
- [ ] Document AI-SEO optimisation techniques
- [ ] Create issue tickets for each finding
- [ ] Provide before/after examples
- [ ] Include screenshots from SEO tools
- [ ] Set up tracking for improvements

---

## Testing Checklist Summary

**Quick Pass Criteria:**
- ✅ All pages have unique, optimised title tags (50-60 characters)
- ✅ All pages have unique, compelling meta descriptions (150-160 characters)
- ✅ Single H1 per page containing primary keyword
- ✅ Logical heading hierarchy (H1 → H2 → H3)
- ✅ All images have descriptive alt text
- ✅ Structured data (Schema.org JSON-LD) implemented
- ✅ XML sitemap generated and submitted
- ✅ Robots.txt configured correctly
- ✅ HTTPS implemented site-wide
- ✅ Mobile-friendly (responsive design)
- ✅ Core Web Vitals pass (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- ✅ Lighthouse SEO score 100
- ✅ Canonical URLs specified
- ✅ Descriptive, keyword-rich URLs
- ✅ Internal linking strategy implemented
- ✅ No broken links (404 errors)
- ✅ Page speed < 3 seconds
- ✅ Google Search Console verified
- ✅ Content demonstrates E-E-A-T
- ✅ Semantic keyword clustering implemented
- ✅ Entity-based content optimisation
- ✅ LLM-friendly content structure
- ✅ Featured snippet optimisation
- ✅ Voice search optimisation
- ✅ Australian English and localisation

---

## Resources

### SEO Tools
- [Google Search Console](https://search.google.com/search-console/) - Search performance monitoring
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Performance and Core Web Vitals
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/) - Technical SEO auditing
- [Ahrefs](https://ahrefs.com/) - Backlink analysis and keyword research
- [SEMrush](https://www.semrush.com/) - Comprehensive SEO toolkit
- [Moz](https://moz.com/) - SEO software and community
- [Google Rich Results Test](https://search.google.com/test/rich-results) - Structured data testing
- [Schema.org](https://schema.org/) - Structured data vocabulary
- [XML Sitemap Generator](https://www.xml-sitemaps.com/) - Sitemap creation

### AI-SEO Tools
- [OpenAI API](https://platform.openai.com/) - Content analysis and generation
- [Anthropic Claude](https://www.anthropic.com/) - Semantic content analysis
- [Sentence Transformers](https://www.sbert.net/) - Semantic similarity analysis
- [Perplexity AI](https://www.perplexity.ai/) - AI answer engine testing

### Content Intelligence Tools
- [Clearscope](https://www.clearscope.io/) - Content optimisation
- [MarketMuse](https://www.marketmuse.com/) - Content intelligence platform
- [Surfer SEO](https://surferseo.com/) - On-page optimisation
- [Frase](https://www.frase.io/) - AI content optimisation

### Technical Resources
- [Google Search Central](https://developers.google.com/search) - Google's SEO documentation
- [Schema.org Markup Generator](https://technicalseo.com/tools/schema-markup-generator/) - Schema creation
- [Google's Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) - Mobile testing
- [WebPageTest](https://www.webpagetest.org/) - Performance testing

### SEO Guidelines
- [Google Search Quality Guidelines](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf) - Google's quality standards
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo) - SEO fundamentals
- [Search Engine Land](https://searchengineland.com/) - SEO news and insights
- [Google Webmaster Blog](https://developers.google.com/search/blog) - Official Google updates

### Internal Documentation
- `.docs/deployment/seo-optimization.md` - SEO implementation guide
- `.docs/design/styling-guide.md` - Design system specifications
- `.docs/architecture/site-structure.md` - Site architecture documentation

---

**Last Updated:** 15 October 2025  
**Version:** 1.0  
**Related:** Accessibility Specialist Audit, Content Designer Audit, UX/UI Design Audit


