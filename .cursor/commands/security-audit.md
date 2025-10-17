---
name: Security Audit
description: Ensures the portfolio website adheres to secure-by-design principles, privacy-by-design standards, and regulatory compliance requirements with comprehensive security architecture review
version: 1.0.0
category: audit
last_updated: 16/10/2025
triggers: ["security-audit", "sec-audit", "security-review"]
---

# Security Audit

## Purpose
Ensures the portfolio website adheres to secure-by-design principles, privacy-by-design standards, and regulatory compliance requirements. This audit incorporates perspectives from Security Architecture, Governance Risk & Compliance, DevSecOps, and Privacy & Data Protection to protect user data and maintain trust.

## Pre-Audit Setup

- [ ] Review relevant documentation:
  - `.docs/architecture/` - Technical architecture documents
  - `.docs/deployment/` - Deployment configurations
  - Australian Privacy Principles (APPs)
  - ISM/Essential Eight guidelines
  - OWASP Top 10
- [ ] Install security testing tools:
  - OWASP ZAP or Burp Suite Community
  - npm audit
  - Snyk or similar dependency scanner
  - Browser security headers checker
  - SSL/TLS testing tools (SSL Labs)
- [ ] Prepare testing environment:
  - Non-production testing instance
  - Security testing credentials
  - Network monitoring tools

---

## 1. Security Architecture Review

### Secure-by-Design Principles
- [ ] Verify defence-in-depth strategy is implemented
- [ ] Confirm principle of least privilege applied throughout
- [ ] Check fail-secure mechanisms (not fail-open)
- [ ] Validate separation of concerns in architecture
- [ ] Ensure security controls are layered appropriately
- [ ] Verify single points of failure have mitigations

### Threat Modelling
- [ ] Identify and document all system entry points
- [ ] Map data flows through the application
- [ ] Document trust boundaries
- [ ] Identify potential threat actors and motivations
- [ ] Apply STRIDE threat modelling methodology:
  - **S**poofing identity
  - **T**ampering with data
  - **R**epudiation
  - **I**nformation disclosure
  - **D**enial of service
  - **E**levation of privilege
- [ ] Document identified threats and countermeasures
- [ ] Assess residual risk after controls applied

### Zero-Trust Architecture
- [ ] Verify explicit authentication for all resources
- [ ] Confirm least privilege access controls
- [ ] Validate assume breach mentality in design
- [ ] Check continuous verification mechanisms
- [ ] Ensure micro-segmentation where applicable
- [ ] Verify all data flows are authenticated and authorised

### Cloud Security Patterns
- [ ] Validate secure configuration of hosting platform
- [ ] Check CDN security settings and configurations
- [ ] Verify static site hosting security controls
- [ ] Ensure secure defaults are maintained
- [ ] Check infrastructure-as-code security (if applicable)
- [ ] Validate backup and disaster recovery procedures

### Encryption Standards
- [ ] Confirm TLS 1.2 minimum, prefer TLS 1.3
- [ ] Verify strong cipher suites configured
- [ ] Check perfect forward secrecy (PFS) enabled
- [ ] Validate certificate chain and expiry
- [ ] Ensure HTTPS enforced (no mixed content)
- [ ] Check HSTS header configured correctly
- [ ] Verify data at rest encryption (if applicable)

---

## 2. Governance, Risk & Compliance (GRC)

### ISO 27001 Alignment
- [ ] Verify information security policy exists
- [ ] Check asset management documentation
- [ ] Confirm access control policies documented
- [ ] Validate cryptographic controls documented
- [ ] Ensure security in development lifecycle
- [ ] Check incident response procedures exist
- [ ] Verify business continuity planning

### ISM/Essential Eight Compliance
- [ ] **Application Control:** Verify no unauthorised code execution
- [ ] **Patch Applications:** Check all dependencies up-to-date
- [ ] **Configure Microsoft Office Macros:** N/A for static site
- [ ] **User Application Hardening:** Verify secure browser defaults encouraged
- [ ] **Restrict Administrative Privileges:** Check deployment access controls
- [ ] **Patch Operating Systems:** Verify hosting environment patching
- [ ] **Multi-factor Authentication:** Check for admin/deployment access
- [ ] **Regular Backups:** Verify backup procedures and testing

### Privacy Act Compliance (Australia)
- [ ] Verify collection notice present (if collecting data)
- [ ] Confirm purpose limitation documented
- [ ] Check data quality mechanisms
- [ ] Validate security safeguards in place
- [ ] Ensure transparency in data handling
- [ ] Verify individual access and correction rights
- [ ] Check unique identifier usage justified
- [ ] Confirm no disclosure without consent
- [ ] Validate overseas transfer protections
- [ ] Ensure quality of personal information
- [ ] Check retention and destruction policies

### Data Governance
- [ ] Document all data collected (if any)
- [ ] Classify data by sensitivity level
- [ ] Verify data ownership documented
- [ ] Check data retention schedules defined
- [ ] Ensure data quality standards established
- [ ] Validate data lifecycle management
- [ ] Confirm metadata management practices

### Risk Management
- [ ] Document risk register for the application
- [ ] Assess likelihood and impact of identified risks
- [ ] Verify risk treatment plans documented
- [ ] Check residual risks accepted by owner
- [ ] Ensure risk reviews scheduled regularly
- [ ] Validate risk communication procedures
- [ ] Confirm risk escalation paths defined

### Assurance and Reporting
- [ ] Verify audit trails exist (if applicable)
- [ ] Check logging adequacy for security events
- [ ] Ensure compliance monitoring in place
- [ ] Validate reporting mechanisms established
- [ ] Confirm attestation and certification current
- [ ] Check third-party assurance obtained
- [ ] Verify compliance dashboard accessible

---

## 3. DevSecOps Implementation

### Secure CI/CD Pipeline
- [ ] Verify source code repository access controls
- [ ] Check branch protection rules configured
- [ ] Ensure code review required before merge
- [ ] Validate signed commits (if required)
- [ ] Confirm automated security testing in pipeline
- [ ] Check deployment approval gates configured
- [ ] Verify rollback procedures documented and tested

### Dependency Security
- [ ] Run `npm audit` and review vulnerabilities
- [ ] Check for outdated dependencies (`npm outdated`)
- [ ] Verify dependency lock file committed (`package-lock.json`)
- [ ] Review all direct dependencies for necessity
- [ ] Check transitive dependencies for vulnerabilities
- [ ] Ensure automated dependency update alerts configured
- [ ] Validate dependency source integrity (checksums)
- [ ] Review package provenance and maintainership

**Command to run:**
```bash
npm audit
npm audit --audit-level=moderate
npm outdated
```

### Code Security Analysis
- [ ] Run static application security testing (SAST)
- [ ] Check for hardcoded secrets or credentials
- [ ] Verify no sensitive data in source code
- [ ] Review for common injection vulnerabilities
- [ ] Check for insecure cryptographic implementations
- [ ] Validate error handling doesn't leak information
- [ ] Review code for race conditions and logic flaws

### Container Security (if applicable)
- [ ] Verify base images from trusted sources
- [ ] Check for vulnerabilities in container images
- [ ] Ensure containers run as non-root user
- [ ] Validate minimal attack surface (no unnecessary packages)
- [ ] Check for hardcoded secrets in Dockerfiles
- [ ] Verify container image signing and verification
- [ ] Ensure regular container image updates

### Secrets Management
- [ ] Verify no secrets in version control (`.env` files in `.gitignore`)
- [ ] Check for API keys, tokens, or passwords in code
- [ ] Ensure environment variables used for secrets
- [ ] Validate secrets rotation procedures exist
- [ ] Confirm access to secrets limited by role
- [ ] Check secrets encrypted at rest
- [ ] Verify secrets audit logging enabled

**Command to check for secrets:**
```bash
git log --all --full-history --source --full-diff -- '*.env' '*.key' '*.pem'
grep -r "password\|api_key\|secret" --include="*.js" --include="*.json" .
```

### Continuous Security Monitoring
- [ ] Verify security logging implemented
- [ ] Check log aggregation and analysis configured
- [ ] Ensure alert thresholds defined
- [ ] Validate incident response procedures
- [ ] Confirm security metrics tracked (MTTR, MTTD)
- [ ] Check regular security scanning scheduled
- [ ] Verify security dashboard accessible

### Infrastructure Security
- [ ] Review infrastructure-as-code for security issues
- [ ] Verify secure defaults in all configurations
- [ ] Check for overly permissive access controls
- [ ] Validate network segmentation implemented
- [ ] Ensure firewall rules follow least privilege
- [ ] Check logging and monitoring configured
- [ ] Verify disaster recovery procedures tested

---

## 4. Privacy & Data Protection

### Privacy-by-Design Principles
- [ ] **Proactive not Reactive:** Anticipate privacy issues before they arise
- [ ] **Privacy as Default:** Ensure maximum privacy settings by default
- [ ] **Privacy Embedded:** Integrate privacy into design and architecture
- [ ] **Full Functionality:** Achieve privacy and functionality (not either/or)
- [ ] **End-to-End Security:** Protect data through entire lifecycle
- [ ] **Visibility and Transparency:** Operations remain visible and transparent
- [ ] **User-Centric:** Keep user interests central to design

### Data Minimisation
- [ ] Document legitimate purpose for each data element collected
- [ ] Verify only essential data collected
- [ ] Check no excessive data collection
- [ ] Ensure data retention periods justified and documented
- [ ] Validate automatic deletion after retention period
- [ ] Confirm purpose limitation enforced
- [ ] Review data collection against "need to know" principle

### Information Classification
- [ ] Classify all data assets by sensitivity:
  - **Public:** Intended for public disclosure
  - **Internal:** General internal business information
  - **Confidential:** Sensitive business information
  - **Restricted:** Highly sensitive, regulated data
- [ ] Apply appropriate controls per classification level
- [ ] Verify classification labels applied
- [ ] Ensure handling procedures documented per classification
- [ ] Check access controls match classification requirements

### Privacy Impact Assessment (PIA)
- [ ] Identify personal information collected (if any)
- [ ] Document purposes for collection and use
- [ ] Assess privacy risks and impacts
- [ ] Identify risk mitigation strategies
- [ ] Consult with stakeholders and data subjects
- [ ] Document PIA findings and recommendations
- [ ] Ensure PIA reviewed and approved

**Personal Information Inventory:**
- [ ] Name
- [ ] Email address
- [ ] IP address (analytics)
- [ ] User behaviour data
- [ ] Contact form submissions
- [ ] Cookies and tracking technologies
- [ ] Device information
- [ ] Location data

### Consent Design (if applicable)
- [ ] Ensure consent is freely given
- [ ] Verify consent is specific to purpose
- [ ] Confirm consent is informed (clear language)
- [ ] Check consent is unambiguous (positive opt-in)
- [ ] Validate ability to withdraw consent easily
- [ ] Ensure granular consent options available
- [ ] Check consent records maintained
- [ ] Verify consent refreshed periodically

### Ethical Data Use
- [ ] Document ethical framework for data use
- [ ] Verify no discriminatory data practices
- [ ] Check for potential algorithmic bias (if applicable)
- [ ] Ensure transparency in data-driven decisions
- [ ] Validate fairness in data processing
- [ ] Confirm accountability mechanisms in place
- [ ] Check data use aligns with user expectations

### Cross-Border Data Transfers
- [ ] Identify all countries data is transferred to
- [ ] Verify adequacy decisions or safeguards in place
- [ ] Check Standard Contractual Clauses (SCCs) if required
- [ ] Ensure data processing agreements in place
- [ ] Validate compliance with Australian Privacy Act APP 8
- [ ] Document data transfer mechanisms used
- [ ] Assess risks of overseas data storage/processing

### Individual Rights
- [ ] Verify mechanism for access requests (APP 12)
- [ ] Ensure correction procedure documented (APP 13)
- [ ] Check complaint handling process exists
- [ ] Validate response timeframes defined
- [ ] Confirm identity verification for requests
- [ ] Ensure no fee for reasonable requests
- [ ] Document exemptions and their justifications

---

## 5. Web Application Security

### OWASP Top 10 Assessment

#### A01:2021 – Broken Access Control
- [ ] Verify no unauthorised access to protected resources
- [ ] Check for insecure direct object references
- [ ] Ensure forced browsing protection
- [ ] Validate access control checks on all requests
- [ ] Confirm no privilege escalation possible

#### A02:2021 – Cryptographic Failures
- [ ] Verify HTTPS enforced everywhere
- [ ] Check TLS configuration (minimum TLS 1.2)
- [ ] Ensure no sensitive data transmitted in clear text
- [ ] Validate certificate chain and validity
- [ ] Check for mixed content issues

#### A03:2021 – Injection
- [ ] Verify all user inputs validated and sanitised
- [ ] Check for XSS vulnerabilities
- [ ] Ensure Content Security Policy (CSP) configured
- [ ] Validate no SQL injection risk (if database used)
- [ ] Check for command injection vulnerabilities

#### A04:2021 – Insecure Design
- [ ] Verify secure design patterns used
- [ ] Check threat modelling completed
- [ ] Ensure security requirements defined
- [ ] Validate secure SDLC followed
- [ ] Confirm defense in depth implemented

#### A05:2021 – Security Misconfiguration
- [ ] Verify security headers configured correctly
- [ ] Check for unnecessary features disabled
- [ ] Ensure error messages don't leak information
- [ ] Validate secure default configurations
- [ ] Check for directory listing disabled

#### A06:2021 – Vulnerable and Outdated Components
- [ ] Run dependency vulnerability scan
- [ ] Verify all components up-to-date
- [ ] Check for known vulnerable dependencies
- [ ] Ensure regular update schedule exists
- [ ] Validate component sources trusted

#### A07:2021 – Identification and Authentication Failures
- [ ] Verify authentication mechanisms secure (if applicable)
- [ ] Check for weak password policies
- [ ] Ensure multi-factor authentication available
- [ ] Validate session management secure
- [ ] Check for credential stuffing protections

#### A08:2021 – Software and Data Integrity Failures
- [ ] Verify Subresource Integrity (SRI) used for CDN resources
- [ ] Check for insecure deserialisation risks
- [ ] Ensure CI/CD pipeline secured
- [ ] Validate code signing implemented
- [ ] Check for auto-update mechanisms secured

#### A09:2021 – Security Logging and Monitoring Failures
- [ ] Verify security events logged appropriately
- [ ] Check log retention and protection
- [ ] Ensure monitoring and alerting configured
- [ ] Validate incident response procedures
- [ ] Check for tamper-evident logging

#### A10:2021 – Server-Side Request Forgery (SSRF)
- [ ] Verify no SSRF vulnerabilities present
- [ ] Check input validation for URLs
- [ ] Ensure allow-list validation for remote resources
- [ ] Validate network segmentation
- [ ] Check for DNS rebinding protections

### Input Validation and Output Encoding
- [ ] Verify all user inputs validated on client and server
- [ ] Check for proper input sanitisation
- [ ] Ensure output encoding based on context (HTML, JS, URL)
- [ ] Validate file upload restrictions (if applicable)
- [ ] Check for proper URL validation
- [ ] Ensure form input length limits enforced
- [ ] Validate email and phone number formats

### Cross-Site Scripting (XSS) Prevention
- [ ] Verify Content Security Policy (CSP) configured
- [ ] Check for reflected XSS vulnerabilities
- [ ] Ensure stored XSS prevention (if user content stored)
- [ ] Validate DOM-based XSS prevention
- [ ] Check for X-XSS-Protection header
- [ ] Ensure user-generated content sanitised
- [ ] Validate JavaScript execution contexts secure

---

## 6. Security Headers Configuration

### Essential Security Headers
- [ ] **Content-Security-Policy (CSP)**
  - Configured to prevent XSS and injection attacks
  - Default-src directive set appropriately
  - Script-src restricts JavaScript execution
  - Style-src restricts CSS sources
  - Report-uri configured for CSP violations
  
  **Recommended:**
  ```
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
  ```

- [ ] **Strict-Transport-Security (HSTS)**
  - Max-age set to at least 1 year (31536000)
  - includeSubDomains directive included
  - preload directive considered
  
  **Recommended:**
  ```
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  ```

- [ ] **X-Content-Type-Options**
  - Set to 'nosniff' to prevent MIME type sniffing
  
  **Recommended:**
  ```
  X-Content-Type-Options: nosniff
  ```

- [ ] **X-Frame-Options**
  - Set to 'DENY' or 'SAMEORIGIN' to prevent clickjacking
  
  **Recommended:**
  ```
  X-Frame-Options: DENY
  ```

- [ ] **X-XSS-Protection**
  - Set to '1; mode=block' (legacy browsers)
  
  **Recommended:**
  ```
  X-XSS-Protection: 1; mode=block
  ```

- [ ] **Referrer-Policy**
  - Set to control referrer information disclosure
  
  **Recommended:**
  ```
  Referrer-Policy: strict-origin-when-cross-origin
  ```

- [ ] **Permissions-Policy**
  - Restrict browser features and APIs
  
  **Recommended:**
  ```
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  ```

### Test Security Headers
**Online tools:**
- [SecurityHeaders.com](https://securityheaders.com/)
- [Mozilla Observatory](https://observatory.mozilla.org/)

**Target Grade:** A+ on SecurityHeaders.com

---

## 7. Third-Party and Supply Chain Security

### Third-Party Risk Assessment
- [ ] Document all third-party services used
- [ ] Assess security posture of each third party
- [ ] Verify data processing agreements in place
- [ ] Check for SOC 2 or ISO 27001 certifications
- [ ] Ensure privacy policies reviewed
- [ ] Validate data breach notification procedures
- [ ] Confirm contractual security obligations

### CDN and Hosting Security
- [ ] Verify CDN provider security measures
- [ ] Check DDoS protection capabilities
- [ ] Ensure SSL/TLS properly configured
- [ ] Validate caching security settings
- [ ] Check for rate limiting and WAF options
- [ ] Ensure logging and monitoring available
- [ ] Verify incident response capabilities

### Subresource Integrity (SRI)
- [ ] Verify SRI hashes for all external scripts
- [ ] Check SRI hashes for external stylesheets
- [ ] Ensure crossorigin attribute set correctly
- [ ] Validate fallback mechanisms if CDN fails
- [ ] Check integrity of fonts and other resources

**Example:**
```html
<script src="https://cdn.example.com/script.js"
        integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
        crossorigin="anonymous"></script>
```

### Supply Chain Transparency
- [ ] Document software bill of materials (SBOM)
- [ ] Verify provenance of all dependencies
- [ ] Check for typosquatting in package names
- [ ] Ensure license compliance documented
- [ ] Validate no malicious packages included
- [ ] Check for abandoned or unmaintained dependencies
- [ ] Verify package maintainer reputation

---

## 8. Analytics and Tracking Privacy

### Cookie Management
- [ ] Document all cookies used
- [ ] Classify cookies (necessary, functional, analytics, marketing)
- [ ] Ensure cookie consent mechanism (if required)
- [ ] Verify cookies have appropriate expiry
- [ ] Check for Secure and HttpOnly flags (where appropriate)
- [ ] Ensure SameSite attribute configured
- [ ] Validate cookie policy document exists

### Analytics Privacy
- [ ] Document analytics tools and data collected
- [ ] Verify IP anonymisation enabled
- [ ] Check for data retention period configured
- [ ] Ensure analytics data not shared without consent
- [ ] Validate user opt-out mechanism available
- [ ] Check for Do Not Track (DNT) header respect
- [ ] Ensure analytics privacy policy accurate

### Tracking and Fingerprinting
- [ ] Document all tracking technologies used
- [ ] Verify transparency about tracking practices
- [ ] Check for user control over tracking
- [ ] Ensure no covert tracking mechanisms
- [ ] Validate fingerprinting techniques minimised
- [ ] Check compliance with ePrivacy requirements
- [ ] Ensure cross-site tracking limited

---

## 9. Incident Response and Business Continuity

### Incident Response Plan
- [ ] Verify incident response plan documented
- [ ] Check incident classification criteria defined
- [ ] Ensure roles and responsibilities assigned
- [ ] Validate contact information current
- [ ] Confirm escalation procedures defined
- [ ] Check communication templates prepared
- [ ] Ensure incident response team trained

### Security Incident Types
- [ ] Data breach response procedures
- [ ] Denial of service (DoS) response
- [ ] Malware or ransomware response
- [ ] Insider threat response
- [ ] Third-party breach notification
- [ ] Vulnerability disclosure response
- [ ] Account compromise response

### Breach Notification
- [ ] Verify notification obligations documented
- [ ] Check regulatory notification timeframes (72 hours GDPR, 30 days Australia)
- [ ] Ensure notification templates prepared
- [ ] Validate affected party notification procedures
- [ ] Confirm media response procedures
- [ ] Check for breach register maintained
- [ ] Ensure post-incident review process

### Business Continuity
- [ ] Verify backup procedures documented and tested
- [ ] Check recovery time objective (RTO) defined
- [ ] Ensure recovery point objective (RPO) defined
- [ ] Validate disaster recovery procedures
- [ ] Confirm failover procedures tested
- [ ] Check for redundancy and resilience
- [ ] Ensure business continuity plan current

---

## 10. Penetration Testing

### Reconnaissance
- [ ] Perform DNS enumeration
- [ ] Check for subdomain discovery
- [ ] Verify WHOIS information privacy
- [ ] Assess public information disclosure
- [ ] Check search engine cached content
- [ ] Validate robots.txt and sitemap.xml

### Vulnerability Scanning
- [ ] Run automated vulnerability scanner
- [ ] Check for known vulnerabilities (CVEs)
- [ ] Verify SSL/TLS configuration (SSL Labs)
- [ ] Assess security headers (SecurityHeaders.com)
- [ ] Check for outdated software versions
- [ ] Validate directory and file enumeration

**Tools:**
- OWASP ZAP (automated scan)
- Nikto web scanner
- SSL Labs (https://www.ssllabs.com/ssltest/)
- SecurityHeaders.com
- Nmap (if appropriate)

### Manual Testing
- [ ] Test for XSS vulnerabilities
- [ ] Check for injection vulnerabilities
- [ ] Test authentication mechanisms (if applicable)
- [ ] Verify session management security
- [ ] Check for business logic flaws
- [ ] Test file upload functionality (if applicable)
- [ ] Validate access control enforcement

### Browser Security Testing
- [ ] Test with browser security extensions
- [ ] Check for mixed content warnings
- [ ] Verify HTTPS enforcement
- [ ] Test cookie security attributes
- [ ] Check for local storage security
- [ ] Validate service worker security (if used)

---

## 11. Compliance Documentation

### Security Documentation Required
- [ ] **Information Security Policy**
  - Scope and objectives
  - Roles and responsibilities
  - Security controls framework
  - Review and update schedule
  
- [ ] **Privacy Policy**
  - Data collection practices
  - Purpose and use of data
  - Data sharing and disclosure
  - Individual rights and access
  - Contact information
  - Complaint procedure
  
- [ ] **Cookie Policy** (if applicable)
  - Types of cookies used
  - Purpose of each cookie
  - Cookie lifespan
  - User control options
  - Third-party cookies
  
- [ ] **Terms of Use**
  - Acceptable use policy
  - Intellectual property rights
  - Limitation of liability
  - Governing law
  
- [ ] **Data Retention Policy**
  - Retention periods by data type
  - Deletion procedures
  - Legal holds
  - Backup retention
  
- [ ] **Incident Response Plan**
  - Incident classification
  - Response procedures
  - Notification obligations
  - Recovery procedures
  
- [ ] **Risk Register**
  - Identified risks
  - Risk ratings
  - Mitigation controls
  - Residual risk acceptance
  
- [ ] **Privacy Impact Assessment**
  - Data flows
  - Privacy risks
  - Mitigation strategies
  - Compliance assessment

### Compliance Attestation
- [ ] Document compliance with Australian Privacy Act
- [ ] Verify alignment with ISM/Essential Eight
- [ ] Check OWASP Top 10 mitigation documented
- [ ] Ensure security control testing evidenced
- [ ] Validate third-party compliance verified
- [ ] Confirm regular compliance reviews scheduled
- [ ] Check compliance reporting procedures

---

## 12. Security Training and Awareness

### Development Team Security
- [ ] Verify secure coding training completed
- [ ] Check OWASP Top 10 awareness
- [ ] Ensure security testing training provided
- [ ] Validate incident response training
- [ ] Confirm privacy awareness training
- [ ] Check security tool training completed

### Continuous Learning
- [ ] Security newsletters and alerts subscribed
- [ ] Regular security updates communicated
- [ ] Security champions program (if applicable)
- [ ] Lunch-and-learn sessions scheduled
- [ ] External security training opportunities
- [ ] Industry security events attended

---

## 13. Automated Security Testing

### CI/CD Integration
- [ ] Verify security tests in CI/CD pipeline
- [ ] Check for automated dependency scanning
- [ ] Ensure SAST tools configured
- [ ] Validate security test failures block deployment
- [ ] Confirm security reports generated
- [ ] Check for automated security alerts

### Regular Scanning Schedule
- [ ] Daily: Dependency vulnerability scanning
- [ ] Weekly: SAST code analysis
- [ ] Monthly: Full security audit
- [ ] Quarterly: Penetration testing
- [ ] Annually: Comprehensive security review

### Security Metrics
- [ ] Track mean time to detect (MTTD) incidents
- [ ] Monitor mean time to respond (MTTR)
- [ ] Measure vulnerability aging
- [ ] Track security test coverage
- [ ] Monitor false positive rates
- [ ] Measure security debt

---

## 14. Documentation and Reporting

### Security Audit Report Sections

1. **Executive Summary**
   - Overall security posture assessment
   - Critical vulnerabilities found
   - Compliance status summary
   - High-priority recommendations

2. **Security Architecture Assessment**
   - Threat model review
   - Architecture security analysis
   - Encryption and transport security
   - Trust boundary analysis

3. **Vulnerability Findings**
   - Vulnerability description
   - CVSS score and severity rating
   - Affected components/pages
   - Proof of concept (if applicable)
   - Remediation recommendations
   - Remediation priority and timeline

4. **Compliance Assessment**
   - ISM/Essential Eight compliance matrix
   - Privacy Act compliance status
   - ISO 27001 control assessment
   - OWASP Top 10 coverage

5. **DevSecOps Maturity**
   - CI/CD security integration
   - Dependency management practices
   - Secret management assessment
   - Continuous monitoring status

6. **Privacy Assessment**
   - Privacy-by-design evaluation
   - Data minimisation compliance
   - Consent mechanisms review
   - Individual rights enablement

7. **Recommendations**
   - Immediate actions (Critical/High)
   - Short-term improvements (Medium)
   - Long-term enhancements (Low)
   - Security roadmap

8. **Appendices**
   - Detailed technical findings
   - Compliance checklists
   - Testing methodology
   - Tools and versions used

### Update Security Documentation
- [ ] Update `.docs/architecture/` with security findings
- [ ] Create remediation tickets for each vulnerability
- [ ] Update risk register with new risks
- [ ] Document accepted risks with justification
- [ ] Update security control documentation
- [ ] Set remediation SLAs based on severity

---

## Security Checklist Summary

**Critical Pass Criteria:**
- ✅ HTTPS enforced with valid certificate
- ✅ TLS 1.2 minimum configured
- ✅ Security headers configured (A+ grade)
- ✅ No critical or high vulnerabilities in dependencies
- ✅ Content Security Policy (CSP) implemented
- ✅ Subresource Integrity (SRI) for external resources
- ✅ No hardcoded secrets or credentials
- ✅ Privacy policy accurate and accessible
- ✅ OWASP Top 10 risks mitigated
- ✅ Incident response procedures documented
- ✅ Regular security scanning scheduled
- ✅ Compliance documentation current
- ✅ Backup and recovery procedures tested
- ✅ No sensitive data in version control
- ✅ Threat model documented and current

**Severity Classification:**
- **Critical:** Immediate exploitation possible, data breach likely
- **High:** Exploitation probable with moderate effort
- **Medium:** Exploitation possible with significant effort
- **Low:** Theoretical risk or requires complex attack chain
- **Informational:** Best practice improvement opportunity

**Remediation SLAs:**
- **Critical:** 24 hours
- **High:** 7 days
- **Medium:** 30 days
- **Low:** 90 days
- **Informational:** Next release cycle

---

## Resources

### Security Tools
- [OWASP ZAP](https://www.zaproxy.org/) - Web application security scanner
- [Snyk](https://snyk.io/) - Dependency vulnerability scanner
- [SSL Labs](https://www.ssllabs.com/ssltest/) - SSL/TLS testing
- [SecurityHeaders.com](https://securityheaders.com/) - Security headers checker
- [Mozilla Observatory](https://observatory.mozilla.org/) - Security assessment
- [Have I Been Pwned](https://haveibeenpwned.com/) - Breach notification

### Security Standards and Guidelines
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [Australian Cyber Security Centre (ACSC)](https://www.cyber.gov.au/)
- [Information Security Manual (ISM)](https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/ism)
- [Essential Eight](https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight)
- [ISO/IEC 27001](https://www.iso.org/isoiec-27001-information-security.html)

### Privacy Resources
- [Australian Privacy Principles](https://www.oaic.gov.au/privacy/australian-privacy-principles)
- [Office of the Australian Information Commissioner (OAIC)](https://www.oaic.gov.au/)
- [Privacy by Design Framework](https://www.ipc.on.ca/wp-content/uploads/Resources/7foundationalprinciples.pdf)
- [GDPR Resources](https://gdpr.eu/) (for international considerations)

### Threat Intelligence
- [CVE Database](https://cve.mitre.org/)
- [National Vulnerability Database](https://nvd.nist.gov/)
- [CERT Australia](https://www.cyber.gov.au/about-us/view-all-content/alerts-and-advisories)
- [Snyk Vulnerability Database](https://security.snyk.io/)

### Internal Documentation
- `.docs/architecture/` - System architecture documentation
- `.docs/deployment/` - Deployment security configurations
- `.docs/processes/` - Security processes and procedures
- `.docs/project/` - Project-specific security documentation

---

**Last Updated:** 15/10/2025  
**Version:** 1.0  
**Related:** Accessibility Specialist Audit, UX/UI Design Audit, DevOps Documentation

**Audit Frequency:** 
- Full security audit: Quarterly
- Dependency scanning: Daily (automated)
- Penetration testing: Annually
- Compliance review: Bi-annually

**Responsible Roles:**
- **Security Architect:** Threat modelling, architecture review, encryption standards
- **GRC Advisor:** Compliance assessment, risk management, policy review
- **DevSecOps Engineer:** Pipeline security, dependency scanning, continuous monitoring
- **Privacy Specialist:** Privacy assessment, data protection, consent mechanisms
