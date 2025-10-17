---
name: Create Case Study
description: Scaffold a new case study with proper structure, metadata, and template sections following the portfolio case study format and voice guidelines
version: 1.0.0
category: action
last_updated: 16/10/2025
triggers: ["new-case-study", "case-study", "create-study"]
---

# Create Case Study

This command scaffolds a new case study file with proper structure, metadata, and content sections following the Dale Rogers portfolio format and voice guidelines.

## Workflow

### Step 1: Gather Case Study Information

Before creating the file, collect the following information:

1. **Project Name**
   - Official client project name
   - Should be descriptive and concise
   - Example: "Antarctic Doctrine Application"

2. **Client/Organisation**
   - Client name (if approved for public use)
   - Or generic descriptor: "Federal Government Agency", "Global Mining Company"

3. **Industry/Sector**
   - Government, Education, Enterprise
   - Specific sub-sector if relevant

4. **Project Duration**
   - Start and end dates
   - Or total duration: "18 months", "6-week sprint"

5. **Technologies Used**
   - Specific platforms: Dynamics 365, PowerApps, Azure
   - Architecture: Offline-first PWA, mesh networking
   - Languages/frameworks: JavaScript, React, Python

6. **Key Outcomes**
   - Measurable results with numbers
   - Example: "Reduced processing time by 45%"
   - Example: "100% uptime during 6-month isolation"

7. **Problem Statement**
   - Clear description of the challenge
   - Quantified if possible
   - User pain points

8. **Solution Approach**
   - How you solved the problem
   - Technical decisions made
   - Why this approach was chosen

### Step 2: Create Filename

1. **Filename format**
   - Use kebab-case (lowercase with hyphens)
   - Be descriptive but concise
   - Include key identifying terms
   - Example: `antarctic-doctrine-application.md`
   - Example: `border-security-digital-verification.md`

2. **Avoid generic names**
   - ❌ `project-1.md`
   - ❌ `client-work.md`
   - ✅ `university-canberra-travel-management.md`

3. **Create in correct directory**
   - Location: `/case-studies/`
   - Full path: `/case-studies/[filename].md`

### Step 3: Create File with Template

Create the new markdown file with this structure:

```markdown
---
title: [Project Name]
client: [Client/Organisation Name]
industry: [Industry/Sector]
duration: [Project Duration]
technologies: [Tech Stack - comma separated]
featured: [true/false]
order: [Display order number]
---

# [Project Name]

## Challenge

[2-3 paragraphs describing the problem]

**Key challenges:**
- [Challenge 1 with specific details]
- [Challenge 2 with specific details]
- [Challenge 3 with specific details]

**Context:**
- [Organisational context]
- [User/stakeholder needs]
- [Technical constraints]
- [Regulatory/compliance requirements if applicable]

## Solution

[2-3 paragraphs describing your approach]

**Technical approach:**
- [Architecture pattern used]
- [Key technologies implemented]
- [Integration points]
- [Security/compliance measures]

**Key features:**
- [Feature 1 with user value]
- [Feature 2 with user value]
- [Feature 3 with user value]

**Implementation:**
- [Development approach - agile, iterative, etc.]
- [Timeframe and milestones]
- [Team structure if relevant]

## Results

[2-3 paragraphs describing outcomes and impact]

**Measurable outcomes:**
- [Outcome 1 with specific numbers/percentages]
- [Outcome 2 with specific numbers/percentages]
- [Outcome 3 with specific numbers/percentages]

**Strategic impact:**
- [Business value delivered]
- [User experience improvements]
- [Process optimisations]
- [Cost savings or efficiency gains]

**User feedback:**
> "[Quote from client or user if available]"

## Technologies

- **Platform:** [e.g., Microsoft Dynamics 365]
- **Frontend:** [e.g., PowerApps, React PWA]
- **Backend:** [e.g., Azure Functions, Node.js]
- **Database:** [e.g., Dataverse, PostgreSQL]
- **Infrastructure:** [e.g., Azure App Service, Docker]
- **Architecture:** [e.g., Offline-first PWA, Mesh networking]
- **Integration:** [e.g., REST APIs, Microsoft Graph]

## Key Learnings

[Optional section - include if there are valuable insights]

- [Learning 1]
- [Learning 2]
- [Learning 3]

---

**Project Type:** [Strategy & Discovery / Platform Build / Digital Transformation]  
**Year:** [YYYY]  
**Location:** [City, State/Country if relevant]
```

### Step 4: Write Content Following Voice Guidelines

Refer to `@voice-audit` guidelines while writing:

1. **Use specific, not vague language**
   - ✅ "Built offline-first PWA with Dynamics 365"
   - ❌ "Developed innovative cloud solution"

2. **Include measurable results**
   - ✅ "Reduced processing time by 45% over 8 weeks"
   - ❌ "Significantly improved efficiency"

3. **Name technologies specifically**
   - ✅ "PowerApps with Azure Functions backend"
   - ❌ "Low-code platform with cloud services"

4. **Avoid banned buzzwords**
   - ❌ "Synergy", "leverage", "paradigm shift"
   - ❌ "Holistic", "seamless", "cutting-edge"
   - ❌ "Transformative", "empower", "innovative"

5. **Use Australian English spelling**
   - Organisation (not organization)
   - Centre (not center)
   - Optimise (not optimize)

6. **Keep it matter-of-fact**
   - Confident but not boastful
   - Evidence-based claims only
   - Direct and pragmatic tone

### Step 5: Add Front Matter Metadata

Ensure YAML front matter is complete:

```yaml
---
title: Antarctic Doctrine Application
client: Australian Antarctic Division
industry: Government - Scientific Research
duration: 10 months
technologies: Dynamics 365, PowerApps, Mesh Networking, Offline-first PWA
featured: true
order: 1
---
```

**Front Matter Fields:**

- **title**: Project name (sentence case)
- **client**: Client name or generic descriptor
- **industry**: Sector and sub-sector
- **duration**: Project length
- **technologies**: Comma-separated tech stack
- **featured**: `true` for homepage showcase, `false` otherwise
- **order**: Display order (lower number = higher priority)

### Step 6: Build and Preview

1. **Run build script**
   - Execute: `node scripts/build-content.js`
   - This processes the new markdown file
   - Generates HTML for the case study

2. **Preview locally**
   - Run: `@build` to start local server
   - Navigate to `/portfolio.html`
   - Verify new case study appears
   - Check case study detail page

3. **Verify content**
   - All sections render correctly
   - Links work properly
   - Images display (if any)
   - Formatting looks good

### Step 7: Run Quality Checks

Run these audits on the new case study:

1. **Voice and Tone Audit**
   - Run: `@voice-audit`
   - Check for banned words
   - Verify measurable results
   - Ensure technical specificity

2. **Content Quality**
   - Run: `@content-audit`
   - Check readability
   - Verify Plain English
   - Ensure proper structure

3. **SEO Optimisation**
   - Run: `@seo-audit` on portfolio page
   - Verify metadata present
   - Check for appropriate keywords

## Case Study Structure Guidelines

### Challenge Section

**Purpose:** Establish context and problem scope

**What to include:**
- Specific problem being solved
- User pain points
- Business context
- Quantified challenges if possible
- Technical or regulatory constraints

**What to avoid:**
- Vague problem statements
- Generic industry challenges
- Unnecessary background
- Client confidential information

### Solution Section

**Purpose:** Describe your technical and strategic approach

**What to include:**
- Specific technologies used
- Architecture patterns
- Implementation approach
- Key features built
- Why these choices were made

**What to avoid:**
- Generic solution descriptions
- Marketing speak
- Unsubstantiated claims
- Overly technical jargon without context

### Results Section

**Purpose:** Demonstrate measurable impact

**What to include:**
- Specific numbers and percentages
- Time frames for achievement
- Business value delivered
- User experience improvements
- Client testimonial (if available)

**What to avoid:**
- Vague improvement claims
- Unquantified benefits
- Hyperbolic language
- Unmeasurable outcomes

## Content Quality Checklist

Before considering the case study complete:

- [ ] All front matter fields completed
- [ ] Project name clear and descriptive
- [ ] Challenge section includes specific problems
- [ ] Solution section names specific technologies
- [ ] Results section has measurable outcomes (numbers/percentages)
- [ ] No banned buzzwords (synergy, leverage, etc.)
- [ ] Australian English spelling throughout
- [ ] Proper markdown formatting
- [ ] No placeholder text or lorem ipsum
- [ ] Client name accurate (or appropriately anonymised)
- [ ] Build script processes file without errors
- [ ] Case study displays correctly in portfolio
- [ ] Links work correctly
- [ ] Voice and tone audit passes

## Example Case Studies

Refer to existing case studies for examples:

1. **`antarctic-doctrine-application.md`**
   - Excellent example of specific technical detail
   - Clear measurable outcomes
   - Good balance of context and solution

2. **`border-security-digital-verification.md`**
   - Strong problem/solution structure
   - Specific technologies named
   - Quantified results

3. **`university-canberra-travel-management.md`**
   - Good duration and timeline details
   - Clear business value
   - Appropriate level of technical detail

## Related Commands

- **@voice-audit**: Check voice and tone compliance
- **@content-audit**: Verify content quality
- **@build**: Build and preview the case study
- **@cpp**: Commit and push when ready

## Common Mistakes to Avoid

1. **Too Generic**
   - ❌ "Built a solution that improved things"
   - ✅ "Built offline-first PWA that reduced sync time by 78%"

2. **Missing Numbers**
   - ❌ "Significantly faster processing"
   - ✅ "45% faster processing over 8-week implementation"

3. **Vague Technologies**
   - ❌ "Cloud-based modern platform"
   - ✅ "Azure-hosted Dynamics 365 with PowerApps frontend"

4. **Buzzword Heavy**
   - ❌ "Leveraged synergistic paradigm to empower digital transformation"
   - ✅ "Implemented Dynamics 365 to streamline procurement workflow"

5. **Missing Context**
   - ❌ "Built an app"
   - ✅ "Built offline-first mobile app for field workers in remote Antarctica with zero connectivity"

---

*Last Updated: 16/10/2025*

