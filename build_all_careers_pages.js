const fs = require('fs');
const path = require('path');
const { jobs } = require('./scripts_careers_data.js');
const { getNavbar, getFooter, getCommonStyles, getCommonScripts } = require('./scripts_careers_components.js');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// -------------------------------------------------------------
// 1. GENERATE ALL 10 JOB POSTING PAGES
// -------------------------------------------------------------
jobs.forEach(job => {
  const dir = path.join('careers', job.slug);
  ensureDir(dir);

  const otherJobs = jobs.filter(j => j.slug !== job.slug).slice(0, 3);

  const html = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-563QE3BQWN"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-563QE3BQWN');
  </script>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Primary Meta Tags -->
  <title>${job.title} Job in Hyderabad | Careers at Companies Builder</title>
  <meta name="title" content="${job.title} Job in Hyderabad | Careers at Companies Builder">
  <meta name="description" content="Apply for the ${job.title} position at Companies Builder in Hyderabad, India. ${job.summary}">
  <meta name="keywords" content="${job.title}, ${job.title} Hyderabad, ${job.team} careers, digital marketing jobs India, Companies Builder careers">
  <meta name="author" content="Companies Builder">
  <link rel="canonical" href="https://companiesbuilder.com/careers/${job.slug}/">

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/logo-cb-180.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/logo-cb-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/logo-cb-16.png">
  <link rel="icon" href="/assets/images/logo-cb.png">
  <meta name="theme-color" content="#060910">

  <!-- Open Graph / Twitter -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Companies Builder">
  <meta property="og:url" content="https://companiesbuilder.com/careers/${job.slug}/">
  <meta property="og:title" content="${job.title} | Careers at Companies Builder">
  <meta property="og:description" content="${job.summary}">
  <meta property="og:image" content="https://companiesbuilder.com/assets/images/BGhero.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@CB_technologies">
  <meta name="twitter:title" content="${job.title} | Careers at Companies Builder">
  <meta name="twitter:description" content="${job.summary}">
  <meta name="twitter:image" content="https://companiesbuilder.com/assets/images/BGhero.png">

  <!-- Fonts & Styles -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">

  <!-- Theme initialization -->
  <script>
    (function () {
      var saved = localStorage.getItem('cb-theme');
      var pref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = saved || (pref ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    })();
  </script>

  <!-- Google Jobs Structured Data: JobPosting -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": "${job.title}",
    "description": "${job.summary} Key responsibilities include: ${job.responsibilities.join(' ')}",
    "identifier": {
      "@type": "PropertyValue",
      "name": "Companies Builder",
      "value": "CB-${job.slug.toUpperCase().replace(/-/g, '')}"
    },
    "datePosted": "${job.datePosted}",
    "validThrough": "${job.validThrough}",
    "employmentType": "${job.employmentType}",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Companies Builder",
      "sameAs": "https://companiesbuilder.com",
      "logo": "https://companiesbuilder.com/assets/images/CB-logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "${job.salaryCurrency}",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": ${job.salaryMin},
        "maxValue": ${job.salaryMax},
        "unitText": "${job.salaryUnit}"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "India"
    }
  }
  </script>

  <!-- BreadcrumbList Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://companiesbuilder.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Careers",
        "item": "https://companiesbuilder.com/careers/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "${job.title}",
        "item": "https://companiesbuilder.com/careers/${job.slug}/"
      }
    ]
  }
  </script>

  <style>
    ${getCommonStyles()}

    /* JOB HERO */
    .job-hero {
      padding: 130px 0 54px;
      background: radial-gradient(circle at 80% 20%, rgba(108, 99, 255, .15), transparent 50%),
                  radial-gradient(circle at 10% 80%, rgba(61, 139, 255, .12), transparent 45%),
                  var(--navy-950);
      border-bottom: 1px solid var(--line-dark);
      position: relative;
    }
    .breadcrumbs {
      display: flex; align-items: center; flex-wrap: wrap; gap: 8px;
      font-size: .84rem; color: var(--ink-dim); margin-bottom: 20px
    }
    .breadcrumbs a { color: var(--ink-dim); transition: color var(--ease) }
    .breadcrumbs a:hover { color: var(--violet-light) }
    .breadcrumbs .separator { opacity: .4 }

    .job-pill-row {
      display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-bottom: 18px
    }
    .job-badge {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 5px 12px; border-radius: 20px; font-size: .82rem; font-weight: 600
    }
    .badge-dept { background: rgba(108, 99, 255, .15); color: var(--violet-light); border: 1px solid rgba(108, 99, 255, .3) }
    .badge-type { background: rgba(34, 211, 160, .15); color: var(--green); border: 1px solid rgba(34, 211, 160, .3) }
    .badge-loc { background: rgba(255, 176, 32, .15); color: var(--amber); border: 1px solid rgba(255, 176, 32, .3) }

    .job-hero h1 {
      font-family: var(--font-display); font-weight: 700;
      font-size: clamp(2.2rem, 4vw, 3.2rem); line-height: 1.18;
      color: var(--ink); margin-bottom: 16px; letter-spacing: -.02em
    }
    .job-hero-lead {
      font-size: 1.1rem; color: var(--ink-dim); line-height: 1.7; max-width: 820px; margin-bottom: 24px
    }
    .job-hero-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 14px }
    .btn-apply-hero {
      background: var(--grad-brand); color: #fff; font-weight: 700; font-size: .95rem;
      padding: 12px 28px; border-radius: var(--radius-btn);
      box-shadow: 0 6px 24px rgba(108, 99, 255, .35);
      display: inline-flex; align-items: center; gap: 8px;
      transition: transform var(--ease), box-shadow var(--ease)
    }
    .btn-apply-hero:hover {
      color: #fff; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(108, 99, 255, .5)
    }
    .btn-ghost-hero {
      border: 1px solid var(--line-dark); color: var(--ink-dim); font-weight: 600; font-size: .95rem;
      padding: 12px 22px; border-radius: var(--radius-btn);
      display: inline-flex; align-items: center; gap: 8px;
      transition: border-color var(--ease), color var(--ease)
    }
    .btn-ghost-hero:hover { border-color: var(--violet-light); color: #fff }

    /* MAIN CONTENT */
    .job-body-section {
      background: var(--paper); color: var(--ink-on-paper);
      padding: 60px 0 90px;
      transition: background-color var(--ease), color var(--ease)
    }
    .job-layout {
      display: grid; grid-template-columns: 1fr 340px; gap: 44px; align-items: start
    }
    @media(max-width: 991px) {
      .job-layout { grid-template-columns: 1fr; gap: 36px }
    }

    /* ARTICLE */
    .job-article {
      background: var(--paper-card); border: 1px solid var(--line-light);
      border-radius: var(--radius); padding: 44px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, .03)
    }
    @media(max-width: 768px) { .job-article { padding: 26px 20px } }

    .job-article-section { margin-bottom: 40px }
    .job-article-section h2 {
      font-family: var(--font-display); font-size: 1.35rem; font-weight: 700;
      color: var(--ink-on-paper); margin-bottom: 14px; padding-bottom: 8px;
      border-bottom: 1px solid var(--line-light);
      display: flex; align-items: center; gap: 10px
    }
    .job-article-section h2 i { color: var(--violet); font-size: 1.15rem }
    .job-article-section p {
      font-size: .97rem; line-height: 1.75; color: var(--muted-on-paper); margin-bottom: 14px
    }
    .job-article-section ul { padding-left: 20px; margin-bottom: 16px }
    .job-article-section li {
      font-size: .95rem; line-height: 1.75; color: var(--muted-on-paper); margin-bottom: 8px
    }

    /* APPLICATION FORM */
    .apply-card {
      background: var(--navy-900); color: #fff; border-radius: var(--radius);
      padding: 36px; border: 1px solid var(--line-dark); margin-top: 40px;
      box-shadow: var(--shadow-dark); scroll-margin-top: 100px
    }
    [data-theme="light"] .apply-card {
      background: #141826; color: #fff
    }
    .apply-card h2 {
      font-family: var(--font-display); font-size: 1.6rem; font-weight: 700;
      color: #fff; margin-bottom: 8px
    }
    .apply-card p.lead-form {
      font-size: .92rem; color: var(--ink-dim); margin-bottom: 24px
    }
    .form-label {
      font-size: .84rem; font-weight: 600; color: #cbd5e1; margin-bottom: 6px
    }
    .form-control, .form-select {
      background: rgba(255, 255, 255, .05); border: 1px solid rgba(255, 255, 255, .12);
      color: #fff !important; border-radius: 8px; padding: 11px 14px; font-size: .92rem;
      transition: border-color var(--ease), box-shadow var(--ease)
    }
    .form-control:focus, .form-select:focus {
      background: rgba(255, 255, 255, .08); border-color: var(--violet-light);
      box-shadow: 0 0 0 3px rgba(108, 99, 255, .25)
    }
    .form-control::placeholder { color: rgba(255, 255, 255, .4) }
    .form-select option { background: #161d33; color: #fff }

    .file-upload-box {
      border: 2px dashed rgba(108, 99, 255, .35); border-radius: 8px;
      padding: 24px 20px; text-align: center; cursor: pointer;
      background: rgba(108, 99, 255, .03); transition: border-color var(--ease), background var(--ease)
    }
    .file-upload-box:hover {
      border-color: var(--violet-light); background: rgba(108, 99, 255, .08)
    }
    .file-upload-box i { font-size: 2rem; color: var(--violet-light); margin-bottom: 8px; display: inline-block }
    .file-title { font-weight: 600; font-size: .92rem; color: #fff; margin-bottom: 4px }
    .file-desc { font-size: .8rem; color: var(--ink-dim) }
    .file-selected-name { font-size: .84rem; color: var(--green); margin-top: 8px; font-weight: 600 }

    .btn-submit-app {
      background: var(--grad-brand); border: none; color: #fff; font-weight: 700;
      font-size: 1rem; padding: 14px 28px; border-radius: var(--radius-btn);
      width: 100%; cursor: pointer; transition: transform var(--ease), box-shadow var(--ease);
      display: flex; align-items: center; justify-content: center; gap: 8px
    }
    .btn-submit-app:hover {
      transform: translateY(-2px); box-shadow: 0 10px 30px rgba(108, 99, 255, .5)
    }
    .btn-submit-app:disabled { opacity: .6; cursor: not-allowed; transform: none }

    .app-success-box {
      display: none; background: rgba(34, 211, 160, .12); border: 1px solid rgba(34, 211, 160, .3);
      border-radius: var(--radius-btn); padding: 24px; text-align: center; margin-bottom: 24px
    }
    .app-success-box i { font-size: 2.4rem; color: var(--green); margin-bottom: 12px; display: inline-block }
    .app-success-box h3 { font-size: 1.25rem; font-weight: 700; color: #fff; margin-bottom: 6px }
    .app-success-box p { font-size: .9rem; color: #cbd5e1; margin-bottom: 0 }

    /* SIDEBAR */
    .job-sidebar { display: flex; flex-direction: column; gap: 24px }
    .sidebar-card {
      background: var(--paper-card); border: 1px solid var(--line-light);
      border-radius: var(--radius); padding: 28px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, .03)
    }
    .sidebar-card h3 {
      font-family: var(--font-display); font-size: 1.15rem; font-weight: 700;
      color: var(--ink-on-paper); margin-bottom: 18px; padding-bottom: 10px;
      border-bottom: 1px solid var(--line-light)
    }
    .fact-list { list-style: none; padding: 0; margin: 0 }
    .fact-item {
      display: flex; justify-content: space-between; align-items: center;
      padding: 11px 0; border-bottom: 1px solid var(--line-light); font-size: .9rem
    }
    .fact-item:last-child { border-bottom: none }
    .fact-label { color: var(--muted-on-paper); display: flex; align-items: center; gap: 8px }
    .fact-value { font-weight: 600; color: var(--ink-on-paper); text-align: right }

    .other-roles-list { list-style: none; padding: 0; margin: 0 }
    .other-role-item {
      padding: 12px 0; border-bottom: 1px solid var(--line-light)
    }
    .other-role-item:last-child { border-bottom: none }
    .other-role-title { font-weight: 600; font-size: .92rem; color: var(--ink-on-paper); margin-bottom: 3px }
    .other-role-meta { font-size: .8rem; color: var(--muted-on-paper) }
    .other-role-item a:hover .other-role-title { color: var(--violet) }
  </style>
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>

  ${getNavbar('careers')}

  <!-- HERO SECTION -->
  <header class="job-hero">
    <div class="container">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span class="separator">/</span>
        <a href="/careers/">Careers</a>
        <span class="separator">/</span>
        <span style="color:var(--ink)">${job.title}</span>
      </nav>

      <div class="job-pill-row">
        <span class="job-badge badge-dept"><i class="bi bi-diagram-3" aria-hidden="true"></i> ${job.team}</span>
        <span class="job-badge badge-type"><i class="bi bi-clock-history" aria-hidden="true"></i> ${job.type}</span>
        <span class="job-badge badge-loc"><i class="bi bi-geo-alt" aria-hidden="true"></i> ${job.location}</span>
      </div>

      <h1>${job.title}</h1>
      <p class="job-hero-lead">${job.summary}</p>

      <div class="job-hero-actions">
        <a href="#apply" class="btn-apply-hero">
          <i class="bi bi-pencil-square" aria-hidden="true"></i> Apply for this Position
        </a>
        <a href="/careers/" class="btn-ghost-hero">
          <i class="bi bi-arrow-left" aria-hidden="true"></i> View All Openings
        </a>
      </div>
    </div>
  </header>

  <!-- MAIN JOB BODY -->
  <main class="job-body-section" id="main">
    <div class="container">
      <div class="job-layout">

        <!-- ARTICLE / DETAILS -->
        <article class="job-article">

          <!-- Section 1: Overview -->
          <section class="job-article-section">
            <h2><i class="bi bi-compass" aria-hidden="true"></i> Role Overview</h2>
            <p>${job.overview}</p>
          </section>

          <!-- Section 2: Key Responsibilities -->
          <section class="job-article-section">
            <h2><i class="bi bi-check2-circle" aria-hidden="true"></i> Key Responsibilities</h2>
            <p>In this role, your day-to-day focus will center on:</p>
            <ul>
              ${job.responsibilities.map(r => `<li>${r}</li>`).join('\n              ')}
            </ul>
          </section>

          <!-- Section 3: Requirements -->
          <section class="job-article-section">
            <h2><i class="bi bi-person-check" aria-hidden="true"></i> What We Are Looking For</h2>
            <ul>
              ${job.requirements.map(req => `<li>${req}</li>`).join('\n              ')}
            </ul>
          </section>

          <!-- Section 4: Nice to Have -->
          <section class="job-article-section">
            <h2><i class="bi bi-star" aria-hidden="true"></i> Nice to Have (Bonus Skills)</h2>
            <ul>
              ${job.niceToHave.map(nth => `<li>${nth}</li>`).join('\n              ')}
            </ul>
          </section>

          <!-- Section 5: Learning & Career Growth -->
          <section class="job-article-section">
            <h2><i class="bi bi-graph-up-arrow" aria-hidden="true"></i> What You Will Learn &amp; Career Growth</h2>
            <ul>
              ${job.learnAndGrow.map(lg => `<li>${lg}</li>`).join('\n              ')}
            </ul>
          </section>

          <!-- Section 6: Workplace Benefits -->
          <section class="job-article-section">
            <h2><i class="bi bi-gift" aria-hidden="true"></i> Benefits &amp; Perks at Companies Builder</h2>
            <ul>
              <li><strong>Compensation:</strong> ${job.salaryText}</li>
              <li><strong>Work Flexibility:</strong> Hybrid model with options for remote collaboration and flexible scheduling.</li>
              <li><strong>Learning Stipend:</strong> Dedicated annual budget for courses, certifications, and industry conferences.</li>
              <li><strong>Modern Gear:</strong> High-spec hardware and paid subscriptions to leading marketing and SEO tools.</li>
              <li><strong>Mentorship &amp; Clear Growth:</strong> Regular 1-on-1 coaching sessions and defined milestone promotions.</li>
              <li><strong>Team Culture:</strong> Low-ego, high-accountability environment where good ideas win.</li>
            </ul>
          </section>

          <!-- Section 7: APPLICATION FORM -->
          <section class="apply-card" id="apply">
            <h2>Apply for ${job.title}</h2>
            <p class="lead-form">Fill out the quick form below. Our talent team reviews every submission and responds within 2-3 business days.</p>

            <div id="appSuccess" class="app-success-box">
              <i class="bi bi-check-circle" aria-hidden="true"></i>
              <h3>Application Submitted!</h3>
              <p>Thank you for applying for <strong>${job.title}</strong>. Our hiring team will review your application and contact you shortly.</p>
            </div>

            <form id="jobAppForm" novalidate enctype="multipart/form-data">
              <!-- Honeypot -->
              <input type="text" name="company_website_hp" style="display:none" tabindex="-1" autocomplete="off">
              <input type="hidden" name="applied_role" value="${job.title}">
              <input type="hidden" name="role_slug" value="${job.slug}">

              <div class="row g-3">
                <div class="col-md-6">
                  <label for="app-name" class="form-label">Full Name <span style="color:var(--pink)">*</span></label>
                  <input type="text" class="form-control" id="app-name" name="full-name" required placeholder="Your full name" autocomplete="name">
                </div>
                <div class="col-md-6">
                  <label for="app-email" class="form-label">Email Address <span style="color:var(--pink)">*</span></label>
                  <input type="email" class="form-control" id="app-email" name="email" required placeholder="your.email@example.com" autocomplete="email">
                </div>
                <div class="col-md-6">
                  <label for="app-phone" class="form-label">Phone Number <span style="color:var(--pink)">*</span></label>
                  <input type="tel" class="form-control" id="app-phone" name="phone" required placeholder="10-digit mobile number" pattern="[0-9]{10}" autocomplete="tel">
                </div>
                <div class="col-md-6">
                  <label for="app-linkedin" class="form-label">LinkedIn Profile URL</label>
                  <input type="url" class="form-control" id="app-linkedin" name="linkedin" placeholder="https://linkedin.com/in/username">
                </div>
                <div class="col-md-6">
                  <label for="app-portfolio" class="form-label">Portfolio / GitHub / Website</label>
                  <input type="url" class="form-control" id="app-portfolio" name="portfolio" placeholder="https://yourwork.com">
                </div>
                <div class="col-md-6">
                  <label for="app-notice" class="form-label">Notice Period / Start Date <span style="color:var(--pink)">*</span></label>
                  <select class="form-select" id="app-notice" name="notice-period" required>
                    <option value="">Select availability</option>
                    <option value="Immediate">Immediate (Within 1 week)</option>
                    <option value="15 Days">15 Days</option>
                    <option value="30 Days">30 Days</option>
                    <option value="60 Days">60 Days</option>
                  </select>
                </div>
                <div class="col-12">
                  <label for="app-notes" class="form-label">Brief Introduction / Why Companies Builder?</label>
                  <textarea class="form-control" id="app-notes" name="notes" rows="3" placeholder="Tell us briefly about your background and why you are interested in this role..."></textarea>
                </div>
                <div class="col-12">
                  <label class="form-label">Resume / CV Upload</label>
                  <div class="file-upload-box" id="fileUploadBox" role="button" tabindex="0">
                    <i class="bi bi-cloud-arrow-up" aria-hidden="true"></i>
                    <div class="file-title">Click to upload your resume (or drag and drop)</div>
                    <div class="file-desc">Accepted formats: PDF, DOCX, TXT (Max 10 MB)</div>
                    <input type="file" id="app-resume" name="resume-file" accept=".pdf,.docx,.doc,.txt" style="display:none">
                  </div>
                  <div id="fileSelectedDisplay" class="file-selected-name"></div>
                </div>
                <div class="col-12 mt-2">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="app-consent" name="consent" required>
                    <label class="form-check-label" for="app-consent" style="font-size:.82rem;color:var(--ink-dim)">
                      I confirm that the details provided are accurate and authorize Companies Builder to contact me regarding employment opportunities.
                    </label>
                  </div>
                </div>
                <div class="col-12 mt-3">
                  <button type="submit" class="btn-submit-app" id="appSubmitBtn">
                    <i class="bi bi-send" aria-hidden="true"></i> Submit Application for ${job.title}
                  </button>
                </div>
              </div>
            </form>
          </section>

        </article>

        <!-- SIDEBAR -->
        <aside class="job-sidebar">
          <div class="sidebar-card">
            <h3>Job Overview</h3>
            <ul class="fact-list">
              <li class="fact-item">
                <span class="fact-label"><i class="bi bi-building"></i> Department</span>
                <span class="fact-value">${job.team}</span>
              </li>
              <li class="fact-item">
                <span class="fact-label"><i class="bi bi-briefcase"></i> Job Type</span>
                <span class="fact-value">${job.type}</span>
              </li>
              <li class="fact-item">
                <span class="fact-label"><i class="bi bi-geo-alt"></i> Location</span>
                <span class="fact-value">${job.locality}, India</span>
              </li>
              <li class="fact-item">
                <span class="fact-label"><i class="bi bi-mortarboard"></i> Experience</span>
                <span class="fact-value">${job.experience}</span>
              </li>
              <li class="fact-item">
                <span class="fact-label"><i class="bi bi-currency-rupee"></i> Compensation</span>
                <span class="fact-value" style="color:var(--green)">${job.salaryMin >= 100000 ? '₹' + (job.salaryMin/100000).toFixed(1) + 'L - ' + (job.salaryMax/100000).toFixed(1) + 'L/yr' : '₹' + (job.salaryMin/1000) + 'k - ' + (job.salaryMax/1000) + 'k/mo'}</span>
              </li>
              <li class="fact-item">
                <span class="fact-label"><i class="bi bi-calendar-check"></i> Date Posted</span>
                <span class="fact-value">${job.datePosted}</span>
              </li>
            </ul>
          </div>

          <div class="sidebar-card">
            <h3>Why Companies Builder?</h3>
            <p style="font-size:.88rem;color:var(--muted-on-paper);line-height:1.6;margin-bottom:12px">
              We pair web development with SEO and marketing from day one. You will work on real client systems, measure real results, and grow faster than in a siloed agency.
            </p>
            <a href="/about/" style="font-size:.86rem;color:var(--violet);font-weight:600">Learn more about our agency &rarr;</a>
          </div>

          <div class="sidebar-card">
            <h3>Other Open Positions</h3>
            <ul class="other-roles-list">
              ${otherJobs.map(oj => `
              <li class="other-role-item">
                <a href="/careers/${oj.slug}/">
                  <div class="other-role-title">${oj.title}</div>
                  <div class="other-role-meta">${oj.team} · ${oj.type}</div>
                </a>
              </li>`).join('')}
            </ul>
            <div class="mt-3 text-center">
              <a href="/careers/" style="font-size:.86rem;color:var(--violet);font-weight:600">View All 10 Open Positions &rarr;</a>
            </div>
          </div>
        </aside>

      </div>
    </div>
  </main>

  ${getFooter()}

  ${getCommonScripts()}

  <!-- Custom Job App Script -->
  <script>
    (function () {
      // File upload trigger
      var uploadBox = document.getElementById('fileUploadBox');
      var fileInput = document.getElementById('app-resume');
      var display = document.getElementById('fileSelectedDisplay');

      if (uploadBox && fileInput) {
        uploadBox.addEventListener('click', function () { fileInput.click(); });
        uploadBox.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            fileInput.click();
          }
        });
        uploadBox.addEventListener('dragover', function (e) {
          e.preventDefault();
          uploadBox.style.borderColor = 'var(--violet-light)';
        });
        uploadBox.addEventListener('dragleave', function () {
          uploadBox.style.borderColor = 'rgba(108, 99, 255, .35)';
        });
        uploadBox.addEventListener('drop', function (e) {
          e.preventDefault();
          uploadBox.style.borderColor = 'rgba(108, 99, 255, .35)';
          if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            handleFileSelect(fileInput.files[0]);
          }
        });
        fileInput.addEventListener('change', function () {
          if (fileInput.files.length) handleFileSelect(fileInput.files[0]);
        });
      }

      function handleFileSelect(file) {
        if (!file) return;
        if (file.size > 10 * 1024 * 1024) {
          display.textContent = 'File exceeds 10 MB limit.';
          display.style.color = 'var(--pink)';
          fileInput.value = '';
          return;
        }
        display.innerHTML = '<i class="bi bi-file-earmark-check me-1"></i> Attached: ' + file.name + ' (' + (file.size / 1024).toFixed(1) + ' KB)';
        display.style.color = 'var(--green)';
      }

      function getBase64(file) {
        return new Promise(function (resolve) {
          if (!file) return resolve(null);
          var reader = new FileReader();
          reader.onload = function (ev) {
            var raw = ev.target.result;
            var b64 = raw.indexOf(',') > -1 ? raw.split(',')[1] : raw;
            resolve({
              data: b64,
              name: file.name,
              type: file.type || 'application/octet-stream',
              size: file.size
            });
          };
          reader.onerror = function () { resolve(null); };
          reader.readAsDataURL(file);
        });
      }

      // Form submission
      var form = document.getElementById('jobAppForm');
      var successBox = document.getElementById('appSuccess');
      var submitBtn = document.getElementById('appSubmitBtn');
      var scriptURL = 'https://script.google.com/macros/s/AKfycbwWbLk3F6G2jPgi1XhT2a956tZt_RsndGG2nHDGj2chfTLVLqTKzddSHbXaXq3IQLbk/exec';

      if (form) {
        var lastSubmit = 0;
        form.addEventListener('submit', function (e) {
          e.preventDefault();

          // Honeypot check
          var hp = form.querySelector('[name="company_website_hp"]');
          if (hp && hp.value) return;

          // Rate limit 15s
          var now = Date.now();
          if (now - lastSubmit < 15000) {
            alert('Please wait a moment before resubmitting.');
            return;
          }

          var name = document.getElementById('app-name').value.trim();
          var email = document.getElementById('app-email').value.trim();
          var phone = document.getElementById('app-phone').value.trim();
          var consent = document.getElementById('app-consent').checked;

          if (!name || !email || !phone || !consent) {
            alert('Please fill in all required fields and accept the confirmation.');
            return;
          }

          submitBtn.disabled = true;
          submitBtn.innerHTML = '<i class="bi bi-arrow-repeat" style="animation:spin 1s linear infinite"></i> Submitting Application...';
          lastSubmit = now;

          var fileToUpload = (fileInput && fileInput.files && fileInput.files[0]) ? fileInput.files[0] : null;

          getBase64(fileToUpload).then(function (fileObj) {
            var formData = new FormData(form);
            formData.append('timestamp', new Date().toISOString());
            formData.append('source', 'Careers Job Application - ${job.title}');
            formData.append('your-name', name);
            formData.append('name', name);
            formData.append('your-email', email);
            formData.append('email', email);
            formData.append('your-number', phone);
            formData.append('phone', phone);
            formData.append('interest', 'Job Application: ${job.title}');

            if (fileObj) {
              formData.append('fileData', fileObj.data);
              formData.append('fileName', fileObj.name);
              formData.append('fileMimeType', fileObj.type);
              formData.append('resume', fileObj.name);
              formData.append('document', fileObj.name);
              formData.append('documentName', fileObj.name);
            }

            var linkedin = document.getElementById('app-linkedin') ? document.getElementById('app-linkedin').value : '';
            var portfolio = document.getElementById('app-portfolio') ? document.getElementById('app-portfolio').value : '';
            var notice = document.getElementById('app-notice') ? document.getElementById('app-notice').value : '';
            var notes = document.getElementById('app-notes') ? document.getElementById('app-notes').value : '';

            var compiledMessage = [
              '=== JOB APPLICATION ===',
              'Role: ${job.title}',
              'Name: ' + name,
              'Email: ' + email,
              'Phone: ' + phone,
              'Notice Period: ' + notice,
              linkedin ? 'LinkedIn: ' + linkedin : '',
              portfolio ? 'Portfolio: ' + portfolio : '',
              fileObj ? 'Attached Document: ' + fileObj.name + ' (' + (fileObj.size / 1024).toFixed(1) + ' KB)' : '',
              notes ? 'Notes: ' + notes : ''
            ].filter(Boolean).join('\\n');

            formData.append('message', compiledMessage);

            fetch(scriptURL, { method: 'POST', body: formData })
              .then(function (r) { return r.text(); })
              .then(function (text) {
                if (text && text.trim() === 'Success') {
                  form.style.display = 'none';
                  successBox.style.display = 'block';
                  if (window.gtag) {
                    try { gtag('event', 'job_application_submit', { role: '${job.slug}', job_title: '${job.title}' }); } catch(err) {}
                  }
                } else {
                  alert('Submission received. If you experience an issue, you can also email your CV directly to info@companiesbuilder.com');
                  submitBtn.disabled = false;
                  submitBtn.innerHTML = '<i class="bi bi-send"></i> Submit Application for ${job.title}';
                }
              })
              .catch(function (err) {
                console.error('Job app error:', err);
                alert('There was an issue submitting. You can also send your resume directly to info@companiesbuilder.com.');
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="bi bi-send"></i> Submit Application for ${job.title}';
              });
          });
        });
      }
    })();
  </script>
</body>
</html>`;

  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  console.log(`Generated job page: careers/${job.slug}/index.html`);
});

// -------------------------------------------------------------
// 2. GENERATE UNIVERSAL APPLICATION PAGE: careers/apply/index.html
// -------------------------------------------------------------
const applyDir = path.join('careers', 'apply');
ensureDir(applyDir);

const applyHtml = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-563QE3BQWN"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-563QE3BQWN');
  </script>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Primary Meta Tags -->
  <title>Apply for Open Positions | Careers at Companies Builder</title>
  <meta name="title" content="Apply for Open Positions | Careers at Companies Builder">
  <meta name="description" content="Submit your job application for open marketing, strategy, and sales positions at Companies Builder. Fast hiring process with direct senior team review.">
  <meta name="keywords" content="apply for job Companies Builder, digital marketing application, marketing career application Hyderabad, sales jobs application">
  <meta name="author" content="Companies Builder">
  <link rel="canonical" href="https://companiesbuilder.com/careers/apply/">

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/logo-cb-180.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/logo-cb-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/logo-cb-16.png">
  <link rel="icon" href="/assets/images/logo-cb.png">
  <meta name="theme-color" content="#060910">

  <!-- Open Graph / Twitter -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Companies Builder">
  <meta property="og:url" content="https://companiesbuilder.com/careers/apply/">
  <meta property="og:title" content="Apply for Open Positions | Careers at Companies Builder">
  <meta property="og:description" content="Submit your job application for open marketing, strategy, and sales positions at Companies Builder.">
  <meta property="og:image" content="https://companiesbuilder.com/assets/images/BGhero.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@CB_technologies">
  <meta name="twitter:title" content="Apply for Open Positions | Careers at Companies Builder">
  <meta name="twitter:description" content="Submit your job application for open marketing, strategy, and sales positions at Companies Builder.">
  <meta name="twitter:image" content="https://companiesbuilder.com/assets/images/BGhero.png">

  <!-- Fonts & Styles -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">

  <script>
    (function () {
      var saved = localStorage.getItem('cb-theme');
      var pref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = saved || (pref ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    })();
  </script>

  <!-- BreadcrumbList Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://companiesbuilder.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Careers",
        "item": "https://companiesbuilder.com/careers/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Apply Online",
        "item": "https://companiesbuilder.com/careers/apply/"
      }
    ]
  }
  </script>

  <style>
    ${getCommonStyles()}

    .apply-hero {
      padding: 130px 0 50px;
      background: radial-gradient(circle at 75% 25%, rgba(108, 99, 255, .15), transparent 50%),
                  radial-gradient(circle at 20% 80%, rgba(61, 139, 255, .12), transparent 45%),
                  var(--navy-950);
      border-bottom: 1px solid var(--line-dark);
    }
    .breadcrumbs {
      display: flex; align-items: center; flex-wrap: wrap; gap: 8px;
      font-size: .84rem; color: var(--ink-dim); margin-bottom: 18px
    }
    .breadcrumbs a { color: var(--ink-dim); transition: color var(--ease) }
    .breadcrumbs a:hover { color: var(--violet-light) }
    .breadcrumbs .separator { opacity: .4 }

    .apply-hero h1 {
      font-family: var(--font-display); font-weight: 700;
      font-size: clamp(2.2rem, 4vw, 3.2rem); line-height: 1.18;
      color: var(--ink); margin-bottom: 14px; letter-spacing: -.02em
    }
    .apply-hero-lead {
      font-size: 1.08rem; color: var(--ink-dim); line-height: 1.7; max-width: 760px; margin-bottom: 0
    }

    .apply-body-section {
      background: var(--paper); color: var(--ink-on-paper);
      padding: 60px 0 90px;
      transition: background-color var(--ease), color var(--ease)
    }
    .apply-page-layout {
      display: grid; grid-template-columns: 1fr 340px; gap: 40px; align-items: start
    }
    @media(max-width: 991px) {
      .apply-page-layout { grid-template-columns: 1fr; gap: 36px }
    }

    .form-wrapper-card {
      background: var(--navy-900); color: #fff; border-radius: var(--radius);
      padding: 40px; border: 1px solid var(--line-dark);
      box-shadow: var(--shadow-dark);
    }
    [data-theme="light"] .form-wrapper-card {
      background: #141826; color: #fff
    }
    @media(max-width: 768px) { .form-wrapper-card { padding: 26px 20px } }

    .form-wrapper-card h2 {
      font-family: var(--font-display); font-size: 1.6rem; font-weight: 700;
      color: #fff; margin-bottom: 8px
    }
    .form-wrapper-card p.lead-text {
      font-size: .92rem; color: var(--ink-dim); margin-bottom: 26px
    }

    .form-label {
      font-size: .84rem; font-weight: 600; color: #cbd5e1; margin-bottom: 6px
    }
    .form-control, .form-select {
      background: rgba(255, 255, 255, .05); border: 1px solid rgba(255, 255, 255, .12);
      color: #fff !important; border-radius: 8px; padding: 11px 14px; font-size: .92rem;
      transition: border-color var(--ease), box-shadow var(--ease)
    }
    .form-control:focus, .form-select:focus {
      background: rgba(255, 255, 255, .08); border-color: var(--violet-light);
      box-shadow: 0 0 0 3px rgba(108, 99, 255, .25)
    }
    .form-control::placeholder { color: rgba(255, 255, 255, .4) }
    .form-select option { background: #161d33; color: #fff }

    .file-upload-box {
      border: 2px dashed rgba(108, 99, 255, .35); border-radius: 8px;
      padding: 24px 20px; text-align: center; cursor: pointer;
      background: rgba(108, 99, 255, .03); transition: border-color var(--ease), background var(--ease)
    }
    .file-upload-box:hover {
      border-color: var(--violet-light); background: rgba(108, 99, 255, .08)
    }
    .file-upload-box i { font-size: 2rem; color: var(--violet-light); margin-bottom: 8px; display: inline-block }
    .file-title { font-weight: 600; font-size: .92rem; color: #fff; margin-bottom: 4px }
    .file-desc { font-size: .8rem; color: var(--ink-dim) }
    .file-selected-name { font-size: .84rem; color: var(--green); margin-top: 8px; font-weight: 600 }

    .btn-submit-app {
      background: var(--grad-brand); border: none; color: #fff; font-weight: 700;
      font-size: 1rem; padding: 14px 28px; border-radius: var(--radius-btn);
      width: 100%; cursor: pointer; transition: transform var(--ease), box-shadow var(--ease);
      display: flex; align-items: center; justify-content: center; gap: 8px
    }
    .btn-submit-app:hover {
      transform: translateY(-2px); box-shadow: 0 10px 30px rgba(108, 99, 255, .5)
    }
    .btn-submit-app:disabled { opacity: .6; cursor: not-allowed; transform: none }

    .app-success-box {
      display: none; background: rgba(34, 211, 160, .12); border: 1px solid rgba(34, 211, 160, .3);
      border-radius: var(--radius-btn); padding: 28px; text-align: center; margin-bottom: 24px
    }
    .app-success-box i { font-size: 2.6rem; color: var(--green); margin-bottom: 12px; display: inline-block }
    .app-success-box h3 { font-size: 1.3rem; font-weight: 700; color: #fff; margin-bottom: 8px }
    .app-success-box p { font-size: .92rem; color: #cbd5e1; margin-bottom: 0 }

    /* SIDEBAR */
    .apply-sidebar { display: flex; flex-direction: column; gap: 24px }
    .info-card {
      background: var(--paper-card); border: 1px solid var(--line-light);
      border-radius: var(--radius); padding: 28px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, .03)
    }
    .info-card h3 {
      font-family: var(--font-display); font-size: 1.15rem; font-weight: 700;
      color: var(--ink-on-paper); margin-bottom: 16px; padding-bottom: 10px;
      border-bottom: 1px solid var(--line-light);
      display: flex; align-items: center; gap: 8px
    }
    .info-card h3 i { color: var(--violet) }
    .timeline-list { list-style: none; padding: 0; margin: 0 }
    .timeline-item {
      position: relative; padding-left: 28px; margin-bottom: 16px
    }
    .timeline-item:last-child { margin-bottom: 0 }
    .timeline-item::before {
      content: ''; position: absolute; left: 6px; top: 7px;
      width: 10px; height: 10px; border-radius: 50%; background: var(--violet)
    }
    .timeline-item::after {
      content: ''; position: absolute; left: 10px; top: 19px;
      width: 2px; height: calc(100% - 4px); background: var(--line-light)
    }
    .timeline-item:last-child::after { display: none }
    .timeline-title { font-weight: 600; font-size: .88rem; color: var(--ink-on-paper); margin-bottom: 2px }
    .timeline-desc { font-size: .8rem; color: var(--muted-on-paper); line-height: 1.5 }
  </style>
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>

  ${getNavbar('careers')}

  <header class="apply-hero">
    <div class="container">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span class="separator">/</span>
        <a href="/careers/">Careers</a>
        <span class="separator">/</span>
        <span style="color:var(--ink)">Apply Online</span>
      </nav>

      <h1>Apply for an Open Position</h1>
      <p class="apply-hero-lead">Join our growth-oriented team at Companies Builder. Fill out the application form below and take the next step in your career.</p>
    </div>
  </header>

  <main class="apply-body-section" id="main">
    <div class="container">
      <div class="apply-page-layout">

        <!-- FORM CARD -->
        <div class="form-wrapper-card">
          <h2>Candidate Application Form</h2>
          <p class="lead-text">Please provide accurate contact details and background info. Our hiring team reviews applications daily.</p>

          <div id="universalAppSuccess" class="app-success-box">
            <i class="bi bi-check-circle" aria-hidden="true"></i>
            <h3>Application Received!</h3>
            <p>Thank you for submitting your application to Companies Builder. We will review your qualifications and reach out within 2-3 business days.</p>
            <div class="mt-4">
              <a href="/careers/" class="btn-ghost-hero" style="color:#fff;border-color:rgba(255,255,255,.2);display:inline-flex">
                <i class="bi bi-arrow-left"></i> Return to Careers Page
              </a>
            </div>
          </div>

          <form id="universalAppForm" novalidate enctype="multipart/form-data">
            <!-- Honeypot -->
            <input type="text" name="company_website_hp" style="display:none" tabindex="-1" autocomplete="off">

            <div class="row g-3">
              <div class="col-12">
                <label for="pos-select" class="form-label">Position You Are Applying For <span style="color:var(--pink)">*</span></label>
                <select class="form-select" id="pos-select" name="applied_position" required>
                  <option value="">Select a role</option>
                  ${jobs.map(j => `<option value="${j.title}" data-slug="${j.slug}">${j.title} (${j.team})</option>`).join('\n                  ')}
                  <option value="General Application">General Application (Other Role)</option>
                </select>
              </div>

              <div class="col-md-6">
                <label for="cand-name" class="form-label">Full Name <span style="color:var(--pink)">*</span></label>
                <input type="text" class="form-control" id="cand-name" name="full-name" required placeholder="e.g. Rahul Sharma" autocomplete="name">
              </div>

              <div class="col-md-6">
                <label for="cand-email" class="form-label">Email Address <span style="color:var(--pink)">*</span></label>
                <input type="email" class="form-control" id="cand-email" name="email" required placeholder="name@example.com" autocomplete="email">
              </div>

              <div class="col-md-6">
                <label for="cand-phone" class="form-label">Phone Number <span style="color:var(--pink)">*</span></label>
                <input type="tel" class="form-control" id="cand-phone" name="phone" required placeholder="10-digit mobile number" pattern="[0-9]{10}" autocomplete="tel">
              </div>

              <div class="col-md-6">
                <label for="cand-exp" class="form-label">Total Experience <span style="color:var(--pink)">*</span></label>
                <select class="form-select" id="cand-exp" name="experience" required>
                  <option value="">Select experience level</option>
                  <option value="Fresher / College Student">Fresher / College Student</option>
                  <option value="1-2 Years">1-2 Years</option>
                  <option value="3-5 Years">3-5 Years</option>
                  <option value="5-8 Years">5-8 Years</option>
                  <option value="8+ Years">8+ Years</option>
                </select>
              </div>

              <div class="col-md-6">
                <label for="cand-linkedin" class="form-label">LinkedIn Profile URL</label>
                <input type="url" class="form-control" id="cand-linkedin" name="linkedin" placeholder="https://linkedin.com/in/username">
              </div>

              <div class="col-md-6">
                <label for="cand-portfolio" class="form-label">Portfolio / GitHub / Website</label>
                <input type="url" class="form-control" id="cand-portfolio" name="portfolio" placeholder="https://yourwork.com">
              </div>

              <div class="col-md-6">
                <label for="cand-notice" class="form-label">Notice Period / Availability <span style="color:var(--pink)">*</span></label>
                <select class="form-select" id="cand-notice" name="notice-period" required>
                  <option value="">Select availability</option>
                  <option value="Immediate">Immediate</option>
                  <option value="15 Days">15 Days</option>
                  <option value="30 Days">30 Days</option>
                  <option value="60 Days">60 Days</option>
                </select>
              </div>

              <div class="col-md-6">
                <label for="cand-salary" class="form-label">Expected CTC / Stipend</label>
                <input type="text" class="form-control" id="cand-salary" name="expected-ctc" placeholder="e.g. ₹6-8 LPA or negotiable">
              </div>

              <div class="col-12">
                <label for="cand-intro" class="form-label">Cover Note / Why Companies Builder?</label>
                <textarea class="form-control" id="cand-intro" name="intro" rows="3" placeholder="Highlight key achievements, relevant experience, or what excites you about this opportunity..."></textarea>
              </div>

              <div class="col-12">
                <label class="form-label">Resume / CV Upload</label>
                <div class="file-upload-box" id="fileUploadBox" role="button" tabindex="0">
                  <i class="bi bi-cloud-arrow-up" aria-hidden="true"></i>
                  <div class="file-title">Click to upload your resume (or drag and drop)</div>
                  <div class="file-desc">Accepted formats: PDF, DOCX, TXT (Max 10 MB)</div>
                  <input type="file" id="cand-resume" name="resume-file" accept=".pdf,.docx,.doc,.txt" style="display:none">
                </div>
                <div id="fileSelectedDisplay" class="file-selected-name"></div>
              </div>

              <div class="col-12 mt-2">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="cand-consent" name="consent" required>
                  <label class="form-check-label" for="cand-consent" style="font-size:.82rem;color:var(--ink-dim)">
                    I confirm that the information provided is accurate and authorize Companies Builder to contact me regarding employment opportunities.
                  </label>
                </div>
              </div>

              <div class="col-12 mt-3">
                <button type="submit" class="btn-submit-app" id="universalSubmitBtn">
                  <i class="bi bi-send" aria-hidden="true"></i> Submit Job Application
                </button>
              </div>
            </div>
          </form>
        </div>

        <!-- SIDEBAR -->
        <aside class="apply-sidebar">
          <div class="info-card">
            <h3><i class="bi bi-lightning-charge"></i> Hiring Timeline</h3>
            <ul class="timeline-list">
              <li class="timeline-item">
                <div class="timeline-title">1. Review (48-72h)</div>
                <div class="timeline-desc">Our team examines your profile against role requirements.</div>
              </li>
              <li class="timeline-item">
                <div class="timeline-title">2. Discovery Chat (30m)</div>
                <div class="timeline-desc">Introductory call discussing goals, culture fit, and expectations.</div>
              </li>
              <li class="timeline-item">
                <div class="timeline-title">3. Practical Task</div>
                <div class="timeline-desc">A realistic brief or live portfolio review assessing your craft.</div>
              </li>
              <li class="timeline-item">
                <div class="timeline-title">4. Offer &amp; Onboarding</div>
                <div class="timeline-desc">Fast-turnaround offer letter with clear growth milestones.</div>
              </li>
            </ul>
          </div>

          <div class="info-card">
            <h3><i class="bi bi-people"></i> Join Talent Network</h3>
            <p style="font-size:.88rem;color:var(--muted-on-paper);line-height:1.6;margin-bottom:12px">
              Looking for a future role or want us to keep your profile on file? Join our general talent network.
            </p>
            <a href="/careers/talent-pool/" style="font-size:.86rem;color:var(--violet);font-weight:600">Join General Talent Pool &rarr;</a>
          </div>

          <div class="info-card">
            <h3><i class="bi bi-geo-alt"></i> Office Location</h3>
            <p style="font-size:.88rem;color:var(--muted-on-paper);line-height:1.6;margin-bottom:8px">
              <strong>Companies Builder</strong><br>
              Hyderabad, Telangana, India
            </p>
            <p style="font-size:.84rem;color:var(--muted-on-paper);margin-bottom:0">
              Email inquiries: <a href="mailto:info@companiesbuilder.com" style="color:var(--violet)">info@companiesbuilder.com</a>
            </p>
          </div>
        </aside>

      </div>
    </div>
  </main>

  ${getFooter()}

  ${getCommonScripts()}

  <script>
    (function () {
      // Parse query params to pre-select position
      var urlParams = new URLSearchParams(window.location.search);
      var roleParam = urlParams.get('role');
      var posSelect = document.getElementById('pos-select');

      if (roleParam && posSelect) {
        for (var i = 0; i < posSelect.options.length; i++) {
          var opt = posSelect.options[i];
          if (opt.getAttribute('data-slug') === roleParam || opt.value.toLowerCase().replace(/[^a-z0-9]/g, '-') === roleParam.toLowerCase()) {
            posSelect.selectedIndex = i;
            break;
          }
        }
      }

      // Resume file picker
      var uploadBox = document.getElementById('fileUploadBox');
      var fileInput = document.getElementById('cand-resume');
      var display = document.getElementById('fileSelectedDisplay');

      if (uploadBox && fileInput) {
        uploadBox.addEventListener('click', function () { fileInput.click(); });
        uploadBox.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            fileInput.click();
          }
        });
        uploadBox.addEventListener('dragover', function (e) {
          e.preventDefault();
          uploadBox.style.borderColor = 'var(--violet-light)';
        });
        uploadBox.addEventListener('dragleave', function () {
          uploadBox.style.borderColor = 'rgba(108, 99, 255, .35)';
        });
        uploadBox.addEventListener('drop', function (e) {
          e.preventDefault();
          uploadBox.style.borderColor = 'rgba(108, 99, 255, .35)';
          if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            handleFile(fileInput.files[0]);
          }
        });
        fileInput.addEventListener('change', function () {
          if (fileInput.files.length) handleFile(fileInput.files[0]);
        });
      }

      function handleFile(file) {
        if (!file) return;
        if (file.size > 10 * 1024 * 1024) {
          display.textContent = 'File exceeds 10 MB limit.';
          display.style.color = 'var(--pink)';
          fileInput.value = '';
          return;
        }
        display.innerHTML = '<i class="bi bi-file-earmark-check me-1"></i> Attached: ' + file.name + ' (' + (file.size / 1024).toFixed(1) + ' KB)';
        display.style.color = 'var(--green)';
      }

      function getBase64(file) {
        return new Promise(function (resolve) {
          if (!file) return resolve(null);
          var reader = new FileReader();
          reader.onload = function (ev) {
            var raw = ev.target.result;
            var b64 = raw.indexOf(',') > -1 ? raw.split(',')[1] : raw;
            resolve({
              data: b64,
              name: file.name,
              type: file.type || 'application/octet-stream',
              size: file.size
            });
          };
          reader.onerror = function () { resolve(null); };
          reader.readAsDataURL(file);
        });
      }

      // Submission
      var form = document.getElementById('universalAppForm');
      var successBox = document.getElementById('universalAppSuccess');
      var submitBtn = document.getElementById('universalSubmitBtn');
      var scriptURL = 'https://script.google.com/macros/s/AKfycbwWbLk3F6G2jPgi1XhT2a956tZt_RsndGG2nHDGj2chfTLVLqTKzddSHbXaXq3IQLbk/exec';

      if (form) {
        var lastSubmit = 0;
        form.addEventListener('submit', function (e) {
          e.preventDefault();

          var hp = form.querySelector('[name="company_website_hp"]');
          if (hp && hp.value) return;

          var now = Date.now();
          if (now - lastSubmit < 15000) {
            alert('Please wait a moment before resubmitting.');
            return;
          }

          var role = posSelect ? posSelect.value : '';
          var name = document.getElementById('cand-name').value.trim();
          var email = document.getElementById('cand-email').value.trim();
          var phone = document.getElementById('cand-phone').value.trim();
          var exp = document.getElementById('cand-exp').value;
          var consent = document.getElementById('cand-consent').checked;

          if (!role || !name || !email || !phone || !exp || !consent) {
            alert('Please fill in all required fields and accept the confirmation.');
            return;
          }

          submitBtn.disabled = true;
          submitBtn.innerHTML = '<i class="bi bi-arrow-repeat" style="animation:spin 1s linear infinite"></i> Submitting Application...';
          lastSubmit = now;

          var fileToUpload = (fileInput && fileInput.files && fileInput.files[0]) ? fileInput.files[0] : null;

          getBase64(fileToUpload).then(function (fileObj) {
            var formData = new FormData(form);
            formData.append('timestamp', new Date().toISOString());
            formData.append('source', 'Universal Careers Application');
            formData.append('your-name', name);
            formData.append('name', name);
            formData.append('your-email', email);
            formData.append('email', email);
            formData.append('your-number', phone);
            formData.append('phone', phone);
            formData.append('interest', 'Job Application: ' + role);

            if (fileObj) {
              formData.append('fileData', fileObj.data);
              formData.append('fileName', fileObj.name);
              formData.append('fileMimeType', fileObj.type);
              formData.append('resume', fileObj.name);
              formData.append('document', fileObj.name);
              formData.append('documentName', fileObj.name);
            }

            var linkedin = document.getElementById('cand-linkedin') ? document.getElementById('cand-linkedin').value : '';
            var portfolio = document.getElementById('cand-portfolio') ? document.getElementById('cand-portfolio').value : '';
            var notice = document.getElementById('cand-notice') ? document.getElementById('cand-notice').value : '';
            var salary = document.getElementById('cand-salary') ? document.getElementById('cand-salary').value : '';
            var intro = document.getElementById('cand-intro') ? document.getElementById('cand-intro').value : '';

            var compiledMessage = [
              '=== UNIVERSAL JOB APPLICATION ===',
              'Selected Role: ' + role,
              'Name: ' + name,
              'Email: ' + email,
              'Phone: ' + phone,
              'Experience: ' + exp,
              'Notice Period: ' + notice,
              salary ? 'Expected CTC: ' + salary : '',
              linkedin ? 'LinkedIn: ' + linkedin : '',
              portfolio ? 'Portfolio: ' + portfolio : '',
              fileObj ? 'Attached Document: ' + fileObj.name + ' (' + (fileObj.size / 1024).toFixed(1) + ' KB)' : '',
              intro ? 'Cover Note: ' + intro : ''
            ].filter(Boolean).join('\\n');

            formData.append('message', compiledMessage);

            fetch(scriptURL, { method: 'POST', body: formData })
              .then(function (r) { return r.text(); })
              .then(function (text) {
                if (text && text.trim() === 'Success') {
                  form.style.display = 'none';
                  successBox.style.display = 'block';
                  if (window.gtag) {
                    try { gtag('event', 'job_application_submit', { role: role }); } catch(err) {}
                  }
                } else {
                  alert('Submission received. If you experience an issue, please send your resume directly to info@companiesbuilder.com');
                  submitBtn.disabled = false;
                  submitBtn.innerHTML = '<i class="bi bi-send"></i> Submit Job Application';
                }
              })
              .catch(function (err) {
                console.error('Submission error:', err);
                alert('There was an issue submitting. You can also send your resume directly to info@companiesbuilder.com.');
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="bi bi-send"></i> Submit Job Application';
              });
          });
        });
      }
    })();
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(applyDir, 'index.html'), applyHtml, 'utf8');
console.log('Generated: careers/apply/index.html');

// -------------------------------------------------------------
// 3. GENERATE TALENT POOL PAGE: careers/talent-pool/index.html
// -------------------------------------------------------------
const poolDir = path.join('careers', 'talent-pool');
ensureDir(poolDir);

const poolHtml = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-563QE3BQWN"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-563QE3BQWN');
  </script>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Primary Meta Tags -->
  <title>Join Our Talent Network | Careers at Companies Builder</title>
  <meta name="title" content="Join Our Talent Network | Careers at Companies Builder">
  <meta name="description" content="Do not see an exact opening today? Join the Companies Builder general talent pool. We connect with exceptional digital marketers, developers, and sales strategists for upcoming opportunities.">
  <meta name="keywords" content="talent network Companies Builder, digital marketing talent pool, join agency talent pool Hyderabad">
  <meta name="author" content="Companies Builder">
  <link rel="canonical" href="https://companiesbuilder.com/careers/talent-pool/">

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/logo-cb-180.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/logo-cb-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/logo-cb-16.png">
  <link rel="icon" href="/assets/images/logo-cb.png">
  <meta name="theme-color" content="#060910">

  <!-- Open Graph / Twitter -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Companies Builder">
  <meta property="og:url" content="https://companiesbuilder.com/careers/talent-pool/">
  <meta property="og:title" content="Join Our Talent Network | Careers at Companies Builder">
  <meta property="og:description" content="Submit your details to our general talent pool. We reach out when relevant digital marketing and technology roles open up.">
  <meta property="og:image" content="https://companiesbuilder.com/assets/images/BGhero.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@CB_technologies">
  <meta name="twitter:title" content="Join Our Talent Network | Careers at Companies Builder">
  <meta name="twitter:description" content="Submit your details to our general talent pool. We reach out when relevant digital marketing and technology roles open up.">
  <meta name="twitter:image" content="https://companiesbuilder.com/assets/images/BGhero.png">

  <!-- Fonts & Styles -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">

  <script>
    (function () {
      var saved = localStorage.getItem('cb-theme');
      var pref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = saved || (pref ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    })();
  </script>

  <!-- BreadcrumbList Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://companiesbuilder.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Careers",
        "item": "https://companiesbuilder.com/careers/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Talent Network",
        "item": "https://companiesbuilder.com/careers/talent-pool/"
      }
    ]
  }
  </script>

  <style>
    ${getCommonStyles()}

    .pool-hero {
      padding: 130px 0 50px;
      background: radial-gradient(circle at 75% 25%, rgba(34, 211, 160, .12), transparent 50%),
                  radial-gradient(circle at 20% 80%, rgba(108, 99, 255, .15), transparent 45%),
                  var(--navy-950);
      border-bottom: 1px solid var(--line-dark);
    }
    .breadcrumbs {
      display: flex; align-items: center; flex-wrap: wrap; gap: 8px;
      font-size: .84rem; color: var(--ink-dim); margin-bottom: 18px
    }
    .breadcrumbs a { color: var(--ink-dim); transition: color var(--ease) }
    .breadcrumbs a:hover { color: var(--violet-light) }
    .breadcrumbs .separator { opacity: .4 }

    .pool-hero h1 {
      font-family: var(--font-display); font-weight: 700;
      font-size: clamp(2.2rem, 4vw, 3.2rem); line-height: 1.18;
      color: var(--ink); margin-bottom: 14px; letter-spacing: -.02em
    }
    .pool-hero-lead {
      font-size: 1.08rem; color: var(--ink-dim); line-height: 1.7; max-width: 760px; margin-bottom: 0
    }

    .pool-body-section {
      background: var(--paper); color: var(--ink-on-paper);
      padding: 60px 0 90px;
      transition: background-color var(--ease), color var(--ease)
    }
    .pool-page-layout {
      display: grid; grid-template-columns: 1fr 340px; gap: 40px; align-items: start
    }
    @media(max-width: 991px) {
      .pool-page-layout { grid-template-columns: 1fr; gap: 36px }
    }

    .form-wrapper-card {
      background: var(--navy-900); color: #fff; border-radius: var(--radius);
      padding: 40px; border: 1px solid var(--line-dark);
      box-shadow: var(--shadow-dark);
    }
    [data-theme="light"] .form-wrapper-card {
      background: #141826; color: #fff
    }
    @media(max-width: 768px) { .form-wrapper-card { padding: 26px 20px } }

    .form-wrapper-card h2 {
      font-family: var(--font-display); font-size: 1.6rem; font-weight: 700;
      color: #fff; margin-bottom: 8px
    }
    .form-wrapper-card p.lead-text {
      font-size: .92rem; color: var(--ink-dim); margin-bottom: 26px
    }

    .form-label {
      font-size: .84rem; font-weight: 600; color: #cbd5e1; margin-bottom: 6px
    }
    .form-control, .form-select {
      background: rgba(255, 255, 255, .05); border: 1px solid rgba(255, 255, 255, .12);
      color: #fff !important; border-radius: 8px; padding: 11px 14px; font-size: .92rem;
      transition: border-color var(--ease), box-shadow var(--ease)
    }
    .form-control:focus, .form-select:focus {
      background: rgba(255, 255, 255, .08); border-color: var(--violet-light);
      box-shadow: 0 0 0 3px rgba(108, 99, 255, .25)
    }
    .form-control::placeholder { color: rgba(255, 255, 255, .4) }
    .form-select option { background: #161d33; color: #fff }

    .file-upload-box {
      border: 2px dashed rgba(108, 99, 255, .35); border-radius: 8px;
      padding: 24px 20px; text-align: center; cursor: pointer;
      background: rgba(108, 99, 255, .03); transition: border-color var(--ease), background var(--ease)
    }
    .file-upload-box:hover {
      border-color: var(--violet-light); background: rgba(108, 99, 255, .08)
    }
    .file-upload-box i { font-size: 2rem; color: var(--violet-light); margin-bottom: 8px; display: inline-block }
    .file-title { font-weight: 600; font-size: .92rem; color: #fff; margin-bottom: 4px }
    .file-desc { font-size: .8rem; color: var(--ink-dim) }
    .file-selected-name { font-size: .84rem; color: var(--green); margin-top: 8px; font-weight: 600 }

    .btn-submit-pool {
      background: var(--grad-brand); border: none; color: #fff; font-weight: 700;
      font-size: 1rem; padding: 14px 28px; border-radius: var(--radius-btn);
      width: 100%; cursor: pointer; transition: transform var(--ease), box-shadow var(--ease);
      display: flex; align-items: center; justify-content: center; gap: 8px
    }
    .btn-submit-pool:hover {
      transform: translateY(-2px); box-shadow: 0 10px 30px rgba(108, 99, 255, .5)
    }
    .btn-submit-pool:disabled { opacity: .6; cursor: not-allowed; transform: none }

    .pool-success-box {
      display: none; background: rgba(34, 211, 160, .12); border: 1px solid rgba(34, 211, 160, .3);
      border-radius: var(--radius-btn); padding: 28px; text-align: center; margin-bottom: 24px
    }
    .pool-success-box i { font-size: 2.6rem; color: var(--green); margin-bottom: 12px; display: inline-block }
    .pool-success-box h3 { font-size: 1.3rem; font-weight: 700; color: #fff; margin-bottom: 8px }
    .pool-success-box p { font-size: .92rem; color: #cbd5e1; margin-bottom: 0 }

    .pool-sidebar { display: flex; flex-direction: column; gap: 24px }
    .sidebar-block {
      background: var(--paper-card); border: 1px solid var(--line-light);
      border-radius: var(--radius); padding: 28px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, .03)
    }
    .sidebar-block h3 {
      font-family: var(--font-display); font-size: 1.15rem; font-weight: 700;
      color: var(--ink-on-paper); margin-bottom: 14px; padding-bottom: 10px;
      border-bottom: 1px solid var(--line-light);
      display: flex; align-items: center; gap: 8px
    }
    .sidebar-block h3 i { color: var(--green) }
    .sidebar-block p {
      font-size: .88rem; color: var(--muted-on-paper); line-height: 1.65; margin-bottom: 14px
    }
  </style>
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>

  ${getNavbar('careers')}

  <header class="pool-hero">
    <div class="container">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span class="separator">/</span>
        <a href="/careers/">Careers</a>
        <span class="separator">/</span>
        <span style="color:var(--ink)">Talent Network</span>
      </nav>

      <h1>Join the Companies Builder Talent Network</h1>
      <p class="pool-hero-lead">Do not see the exact role you are looking for right now? Share your background with us. When new engineering, design, marketing, or sales positions open up, our leadership team looks here first.</p>
    </div>
  </header>

  <main class="pool-body-section" id="main">
    <div class="container">
      <div class="pool-page-layout">

        <!-- FORM CARD -->
        <div class="form-wrapper-card">
          <h2>Submit Your Profile to Our Talent Pool</h2>
          <p class="lead-text">Tell us about your craft, your past achievements, and what kind of impact you want to create next.</p>

          <div id="poolSuccess" class="pool-success-box">
            <i class="bi bi-check-circle" aria-hidden="true"></i>
            <h3>You Are on Our Talent Radar!</h3>
            <p>Thank you for submitting your profile to Companies Builder. When matching openings or special projects arise, our recruiting team will contact you directly.</p>
            <div class="mt-4">
              <a href="/careers/" class="btn-ghost-hero" style="color:#fff;border-color:rgba(255,255,255,.2);display:inline-flex">
                <i class="bi bi-arrow-left"></i> Explore Current Openings
              </a>
            </div>
          </div>

          <form id="talentPoolForm" novalidate enctype="multipart/form-data">
            <!-- Honeypot -->
            <input type="text" name="company_website_hp" style="display:none" tabindex="-1" autocomplete="off">

            <div class="row g-3">
              <div class="col-md-6">
                <label for="pool-name" class="form-label">Full Name <span style="color:var(--pink)">*</span></label>
                <input type="text" class="form-control" id="pool-name" name="full-name" required placeholder="e.g. Ananya Reddy" autocomplete="name">
              </div>

              <div class="col-md-6">
                <label for="pool-email" class="form-label">Email Address <span style="color:var(--pink)">*</span></label>
                <input type="email" class="form-control" id="pool-email" name="email" required placeholder="name@example.com" autocomplete="email">
              </div>

              <div class="col-md-6">
                <label for="pool-phone" class="form-label">Phone Number <span style="color:var(--pink)">*</span></label>
                <input type="tel" class="form-control" id="pool-phone" name="phone" required placeholder="10-digit mobile number" pattern="[0-9]{10}" autocomplete="tel">
              </div>

              <div class="col-md-6">
                <label for="pool-discipline" class="form-label">Primary Discipline / Craft <span style="color:var(--pink)">*</span></label>
                <select class="form-select" id="pool-discipline" name="discipline" required>
                  <option value="">Select your specialty</option>
                  <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO & Technical SEO)</option>
                  <option value="Performance Marketing & Paid Ads">Performance Marketing & Paid Ads (Meta, Google, LinkedIn)</option>
                  <option value="Full-Stack Web Development">Full-Stack Web Development (HTML/JS, React, Node, WordPress)</option>
                  <option value="Content Strategy & Copywriting">Content Strategy, Editorial & Copywriting</option>
                  <option value="UI/UX & Brand Design">UI/UX, Product Design & Visual Branding</option>
                  <option value="B2B Sales & Business Development">B2B Sales, Business Development & Lead Gen</option>
                  <option value="Client Success & Account Management">Client Success & Account Management</option>
                  <option value="Marketing Leadership / Operations">Marketing Leadership & Operations</option>
                  <option value="Other">Other Specialty</option>
                </select>
              </div>

              <div class="col-md-6">
                <label for="pool-experience" class="form-label">Experience Level <span style="color:var(--pink)">*</span></label>
                <select class="form-select" id="pool-experience" name="experience-level" required>
                  <option value="">Select years of experience</option>
                  <option value="Fresher / Intern">Fresher / Intern (0-1 Year)</option>
                  <option value="Early Career">Early Career (1-3 Years)</option>
                  <option value="Mid-Level">Mid-Level (3-6 Years)</option>
                  <option value="Senior Specialist">Senior Specialist (6-9 Years)</option>
                  <option value="Leadership / Executive">Leadership / Executive (9+ Years)</option>
                </select>
              </div>

              <div class="col-md-6">
                <label for="pool-pref" class="form-label">Work Model Preference <span style="color:var(--pink)">*</span></label>
                <select class="form-select" id="pool-pref" name="work-model" required>
                  <option value="">Select work preference</option>
                  <option value="Hybrid (Hyderabad office + remote)">Hybrid (Hyderabad office + remote)</option>
                  <option value="Full-time On-site (Hyderabad)">Full-time On-site (Hyderabad)</option>
                  <option value="Remote across India">Remote across India</option>
                  <option value="Open to any model">Open to any model</option>
                </select>
              </div>

              <div class="col-md-6">
                <label for="pool-linkedin" class="form-label">LinkedIn Profile URL</label>
                <input type="url" class="form-control" id="pool-linkedin" name="linkedin" placeholder="https://linkedin.com/in/username">
              </div>

              <div class="col-md-6">
                <label for="pool-portfolio" class="form-label">Portfolio / GitHub / Work Samples</label>
                <input type="url" class="form-control" id="pool-portfolio" name="portfolio" placeholder="https://yourportfolio.com">
              </div>

              <div class="col-12">
                <label for="pool-vision" class="form-label">What Drives You? / Ideal Next Step</label>
                <textarea class="form-control" id="pool-vision" name="vision" rows="3" placeholder="Tell us about the kinds of problems you enjoy solving and what you look for in your next team..."></textarea>
              </div>

              <div class="col-12">
                <label class="form-label">Resume / CV Upload</label>
                <div class="file-upload-box" id="fileUploadBoxPool" role="button" tabindex="0">
                  <i class="bi bi-cloud-arrow-up" aria-hidden="true"></i>
                  <div class="file-title">Click to upload your resume (or drag and drop)</div>
                  <div class="file-desc">Accepted formats: PDF, DOCX, TXT (Max 10 MB)</div>
                  <input type="file" id="pool-resume" name="resume-file" accept=".pdf,.docx,.doc,.txt" style="display:none">
                </div>
                <div id="fileSelectedDisplayPool" class="file-selected-name"></div>
              </div>

              <div class="col-12 mt-2">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="pool-consent" name="consent" required>
                  <label class="form-check-label" for="pool-consent" style="font-size:.82rem;color:var(--ink-dim)">
                    I consent to Companies Builder storing my profile and contacting me about relevant future career openings.
                  </label>
                </div>
              </div>

              <div class="col-12 mt-3">
                <button type="submit" class="btn-submit-pool" id="poolSubmitBtn">
                  <i class="bi bi-person-plus" aria-hidden="true"></i> Join Companies Builder Talent Network
                </button>
              </div>
            </div>
          </form>
        </div>

        <!-- SIDEBAR -->
        <aside class="pool-sidebar">
          <div class="sidebar-block">
            <h3><i class="bi bi-check2-circle"></i> Why Join the Network?</h3>
            <p>We review talent pool submissions first whenever a new headcount is budgeted. Being in our network means skipping cold applications and getting contacted directly by hiring managers.</p>
            <p style="margin-bottom:0">We value proactive builders who want to create measurable business growth.</p>
          </div>

          <div class="sidebar-block">
            <h3><i class="bi bi-briefcase"></i> View Current Openings</h3>
            <p>Curious about what we are actively hiring for right now? Browse all 10 active positions across marketing, SEO, and sales.</p>
            <a href="/careers/" style="font-size:.86rem;color:var(--violet);font-weight:600">See All Open Positions &rarr;</a>
          </div>

          <div class="sidebar-block">
            <h3><i class="bi bi-shield-check"></i> Privacy Promise</h3>
            <p style="margin-bottom:0">Your information is kept confidential within our hiring team. We never share your candidate profile or contact details with third parties.</p>
          </div>
        </aside>

      </div>
    </div>
  </main>

  ${getFooter()}

  ${getCommonScripts()}

  <script>
    (function () {
      var uploadBox = document.getElementById('fileUploadBoxPool');
      var fileInput = document.getElementById('pool-resume');
      var display = document.getElementById('fileSelectedDisplayPool');

      if (uploadBox && fileInput) {
        uploadBox.addEventListener('click', function () { fileInput.click(); });
        uploadBox.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            fileInput.click();
          }
        });
        uploadBox.addEventListener('dragover', function (e) {
          e.preventDefault();
          uploadBox.style.borderColor = 'var(--violet-light)';
        });
        uploadBox.addEventListener('dragleave', function () {
          uploadBox.style.borderColor = 'rgba(108, 99, 255, .35)';
        });
        uploadBox.addEventListener('drop', function (e) {
          e.preventDefault();
          uploadBox.style.borderColor = 'rgba(108, 99, 255, .35)';
          if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            handleFile(fileInput.files[0]);
          }
        });
        fileInput.addEventListener('change', function () {
          if (fileInput.files.length) handleFile(fileInput.files[0]);
        });
      }

      function handleFile(file) {
        if (!file) return;
        if (file.size > 10 * 1024 * 1024) {
          display.textContent = 'File exceeds 10 MB limit.';
          display.style.color = 'var(--pink)';
          fileInput.value = '';
          return;
        }
        display.innerHTML = '<i class="bi bi-file-earmark-check me-1"></i> Attached: ' + file.name + ' (' + (file.size / 1024).toFixed(1) + ' KB)';
        display.style.color = 'var(--green)';
      }

      function getBase64(file) {
        return new Promise(function (resolve) {
          if (!file) return resolve(null);
          var reader = new FileReader();
          reader.onload = function (ev) {
            var raw = ev.target.result;
            var b64 = raw.indexOf(',') > -1 ? raw.split(',')[1] : raw;
            resolve({
              data: b64,
              name: file.name,
              type: file.type || 'application/octet-stream',
              size: file.size
            });
          };
          reader.onerror = function () { resolve(null); };
          reader.readAsDataURL(file);
        });
      }

      var form = document.getElementById('talentPoolForm');
      var successBox = document.getElementById('poolSuccess');
      var submitBtn = document.getElementById('poolSubmitBtn');
      var scriptURL = 'https://script.google.com/macros/s/AKfycbwWbLk3F6G2jPgi1XhT2a956tZt_RsndGG2nHDGj2chfTLVLqTKzddSHbXaXq3IQLbk/exec';

      if (form) {
        var lastSubmit = 0;
        form.addEventListener('submit', function (e) {
          e.preventDefault();

          var hp = form.querySelector('[name="company_website_hp"]');
          if (hp && hp.value) return;

          var now = Date.now();
          if (now - lastSubmit < 15000) {
            alert('Please wait a moment before resubmitting.');
            return;
          }

          var name = document.getElementById('pool-name').value.trim();
          var email = document.getElementById('pool-email').value.trim();
          var phone = document.getElementById('pool-phone').value.trim();
          var craft = document.getElementById('pool-discipline').value;
          var exp = document.getElementById('pool-experience').value;
          var consent = document.getElementById('pool-consent').checked;

          if (!name || !email || !phone || !craft || !exp || !consent) {
            alert('Please fill in all required fields and accept the confirmation.');
            return;
          }

          submitBtn.disabled = true;
          submitBtn.innerHTML = '<i class="bi bi-arrow-repeat" style="animation:spin 1s linear infinite"></i> Submitting Profile...';
          lastSubmit = now;

          var fileToUpload = (fileInput && fileInput.files && fileInput.files[0]) ? fileInput.files[0] : null;

          getBase64(fileToUpload).then(function (fileObj) {
            var formData = new FormData(form);
            formData.append('timestamp', new Date().toISOString());
            formData.append('source', 'Talent Pool Submission');
            formData.append('your-name', name);
            formData.append('name', name);
            formData.append('your-email', email);
            formData.append('email', email);
            formData.append('your-number', phone);
            formData.append('phone', phone);
            formData.append('interest', 'Talent Pool: ' + craft);

            if (fileObj) {
              formData.append('fileData', fileObj.data);
              formData.append('fileName', fileObj.name);
              formData.append('fileMimeType', fileObj.type);
              formData.append('resume', fileObj.name);
              formData.append('document', fileObj.name);
              formData.append('documentName', fileObj.name);
            }

            var workModel = document.getElementById('pool-pref') ? document.getElementById('pool-pref').value : '';
            var linkedin = document.getElementById('pool-linkedin') ? document.getElementById('pool-linkedin').value : '';
            var portfolio = document.getElementById('pool-portfolio') ? document.getElementById('pool-portfolio').value : '';
            var vision = document.getElementById('pool-vision') ? document.getElementById('pool-vision').value : '';

            var compiledMessage = [
              '=== TALENT POOL SUBMISSION ===',
              'Discipline: ' + craft,
              'Name: ' + name,
              'Email: ' + email,
              'Phone: ' + phone,
              'Experience: ' + exp,
              'Work Preference: ' + workModel,
              linkedin ? 'LinkedIn: ' + linkedin : '',
              portfolio ? 'Portfolio: ' + portfolio : '',
              fileObj ? 'Attached Document: ' + fileObj.name + ' (' + (fileObj.size / 1024).toFixed(1) + ' KB)' : '',
              vision ? 'Candidate Vision: ' + vision : ''
            ].filter(Boolean).join('\\n');

            formData.append('message', compiledMessage);

            fetch(scriptURL, { method: 'POST', body: formData })
              .then(function (r) { return r.text(); })
              .then(function (text) {
                if (text && text.trim() === 'Success') {
                  form.style.display = 'none';
                  successBox.style.display = 'block';
                  if (window.gtag) {
                    try { gtag('event', 'talent_pool_submit', { discipline: craft }); } catch(err) {}
                  }
                } else {
                  alert('Submission received. If you experience an issue, please send your details directly to info@companiesbuilder.com');
                  submitBtn.disabled = false;
                  submitBtn.innerHTML = '<i class="bi bi-person-plus"></i> Join Companies Builder Talent Network';
                }
              })
              .catch(function (err) {
                console.error('Talent pool error:', err);
                alert('There was an issue submitting. You can also send your resume directly to info@companiesbuilder.com.');
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="bi bi-person-plus"></i> Join Companies Builder Talent Network';
              });
          });
        });
      }
    })();
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(poolDir, 'index.html'), poolHtml, 'utf8');
console.log('Generated: careers/talent-pool/index.html');

// -------------------------------------------------------------
// 4. GENERATE REDESIGNED CAREERS HUB: careers/index.html
// -------------------------------------------------------------
const careersHubHtml = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-563QE3BQWN"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-563QE3BQWN');
  </script>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Primary Meta Tags -->
  <title>Careers at Companies Builder | Digital Marketing & Tech Jobs in Hyderabad</title>
  <meta name="title" content="Careers at Companies Builder | Digital Marketing & Tech Jobs in Hyderabad">
  <meta name="description" content="Explore open roles in digital marketing, SEO, performance advertising, and B2B sales at Companies Builder. Join our Hyderabad team with hybrid flexibility and rapid career growth.">
  <meta name="keywords" content="Companies Builder careers, digital marketing jobs Hyderabad, SEO jobs Hyderabad, marketing agency careers India, sales jobs Hyderabad, performance marketing jobs">
  <meta name="author" content="Companies Builder">
  <link rel="canonical" href="https://companiesbuilder.com/careers/">

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/logo-cb-180.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/logo-cb-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/logo-cb-16.png">
  <link rel="icon" href="/assets/images/logo-cb.png">
  <meta name="theme-color" content="#060910">

  <!-- Open Graph / Twitter -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Companies Builder">
  <meta property="og:url" content="https://companiesbuilder.com/careers/">
  <meta property="og:title" content="Careers at Companies Builder | Digital Marketing & Tech Jobs in Hyderabad">
  <meta property="og:description" content="Explore open roles across marketing, SEO, performance ads, and sales at Companies Builder. Join our Hyderabad team.">
  <meta property="og:image" content="https://companiesbuilder.com/assets/images/BGhero.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@CB_technologies">
  <meta name="twitter:title" content="Careers at Companies Builder | Marketing & Sales Roles">
  <meta name="twitter:description" content="Explore open roles in marketing, SEO, and sales at Companies Builder. Fast hiring and competitive packages.">
  <meta name="twitter:image" content="https://companiesbuilder.com/assets/images/BGhero.png">

  <!-- Fonts & Styles -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">

  <script>
    (function () {
      var saved = localStorage.getItem('cb-theme');
      var pref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = saved || (pref ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    })();
  </script>

  <!-- Structured Data: Organization -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Companies Builder",
    "url": "https://companiesbuilder.com",
    "logo": "https://companiesbuilder.com/assets/images/CB-logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/companiesbuilder",
      "https://x.com/CB_technologies",
      "https://www.instagram.com/companiesbuilder",
      "https://www.facebook.com/profile.php?id=61579509437210"
    ]
  }
  </script>

  <!-- Structured Data: BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://companiesbuilder.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Careers",
        "item": "https://companiesbuilder.com/careers/"
      }
    ]
  }
  </script>

  <!-- Structured Data: JobPosting array for Google Jobs -->
  <script type="application/ld+json">
  [
    ${jobs.map(j => JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      "title": j.title,
      "description": j.summary + " Key responsibilities include: " + j.responsibilities.join(' '),
      "identifier": {
        "@type": "PropertyValue",
        "name": "Companies Builder",
        "value": "CB-" + j.slug.toUpperCase().replace(/-/g, '')
      },
      "datePosted": j.datePosted,
      "validThrough": j.validThrough,
      "employmentType": j.employmentType,
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Companies Builder",
        "sameAs": "https://companiesbuilder.com",
        "logo": "https://companiesbuilder.com/assets/images/CB-logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": j.salaryCurrency,
        "value": {
          "@type": "QuantitativeValue",
          "minValue": j.salaryMin,
          "maxValue": j.salaryMax,
          "unitText": j.salaryUnit
        }
      },
      "applicantLocationRequirements": {
        "@type": "Country",
        "name": "India"
      }
    }, null, 2)).join(',\n    ')}
  ]
  </script>

  <!-- Structured Data: FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the working model at Companies Builder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We operate a flexible hybrid model based out of Hyderabad, India. Team members collaborate in-office on key strategy days while enjoying remote work flexibility throughout the week."
        }
      },
      {
        "@type": "Question",
        "name": "Can final year college students or recent freshers apply for internships?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer high-impact 6-month internships across Digital Marketing, SEO/SEM, and Sales Development with dedicated mentorship and direct PPO (Pre-Placement Offer) conversion tracks for top performers."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the hiring process typically take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our hiring process is straightforward and fast. Most candidates move from initial application to final offer within 2 to 3 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "What should I submit with my job application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Please provide your updated resume (PDF or DOCX), a link to your LinkedIn profile, and any relevant portfolio, GitHub repo, or work samples that demonstrate your practical skills."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the Companies Builder office located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our primary office is located in Hyderabad, Telangana, close to the technology corridors of Hitec City and Gachibowli."
        }
      }
    ]
  }
  </script>

  <style>
    ${getCommonStyles()}

    /* CAREERS HERO */
    .hub-hero {
      padding: 135px 0 65px;
      background: radial-gradient(circle at 80% 20%, rgba(108, 99, 255, .18), transparent 50%),
                  radial-gradient(circle at 15% 85%, rgba(61, 139, 255, .15), transparent 45%),
                  var(--navy-950);
      border-bottom: 1px solid var(--line-dark);
      text-align: center;
      position: relative;
    }
    .hero-badge-pill {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 16px; border-radius: 30px; font-size: .84rem; font-weight: 600;
      background: rgba(108, 99, 255, .12); color: var(--violet-light);
      border: 1px solid rgba(108, 99, 255, .3); margin-bottom: 22px
    }
    .hub-hero h1 {
      font-family: var(--font-display); font-weight: 700;
      font-size: clamp(2.3rem, 5vw, 3.8rem); line-height: 1.15;
      color: var(--ink); margin-bottom: 18px; letter-spacing: -.02em;
      max-width: 920px; margin-left: auto; margin-right: auto
    }
    .hub-hero-lead {
      font-size: 1.15rem; color: var(--ink-dim); line-height: 1.7;
      max-width: 800px; margin: 0 auto 32px
    }
    .hub-hero-actions {
      display: flex; align-items: center; justify-content: center;
      flex-wrap: wrap; gap: 14px; margin-bottom: 48px
    }
    .btn-hero-primary {
      background: var(--grad-brand); color: #fff; font-weight: 700; font-size: 1rem;
      padding: 13px 30px; border-radius: var(--radius-btn);
      box-shadow: 0 6px 24px rgba(108, 99, 255, .35);
      display: inline-flex; align-items: center; gap: 8px;
      transition: transform var(--ease), box-shadow var(--ease)
    }
    .btn-hero-primary:hover {
      color: #fff; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(108, 99, 255, .5)
    }
    .btn-hero-secondary {
      background: rgba(255, 255, 255, .05); border: 1px solid var(--line-dark);
      color: var(--ink); font-weight: 600; font-size: 1rem;
      padding: 13px 26px; border-radius: var(--radius-btn);
      display: inline-flex; align-items: center; gap: 8px;
      transition: background var(--ease), border-color var(--ease)
    }
    .btn-hero-secondary:hover {
      background: rgba(255, 255, 255, .1); border-color: var(--violet-light); color: #fff
    }

    /* STATS BAR */
    .hero-stats-grid {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px;
      max-width: 1040px; margin: 0 auto; text-align: left
    }
    @media(max-width: 991px) {
      .hero-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 14px }
    }
    @media(max-width: 575px) {
      .hero-stats-grid { grid-template-columns: 1fr; gap: 12px }
    }
    .hero-stat-card {
      background: rgba(255, 255, 255, .03); border: 1px solid var(--line-dark);
      border-radius: var(--radius); padding: 20px 22px;
      backdrop-filter: blur(10px);
    }
    .hero-stat-num {
      font-family: var(--font-display); font-size: 1.9rem; font-weight: 700;
      color: #fff; line-height: 1.1; margin-bottom: 4px
    }
    .hero-stat-label {
      font-size: .84rem; color: var(--ink-dim); line-height: 1.4
    }

    /* VALUES & CULTURE */
    .section-pad { padding: 90px 0 }
    .section-light {
      background: var(--paper); color: var(--ink-on-paper);
      transition: background-color var(--ease), color var(--ease)
    }
    .section-header { text-align: center; max-width: 760px; margin: 0 auto 54px }
    .section-tag {
      display: inline-block; font-size: .82rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: .08em; color: var(--violet); margin-bottom: 12px
    }
    .section-title {
      font-family: var(--font-display); font-size: clamp(1.8rem, 3.5vw, 2.6rem);
      font-weight: 700; line-height: 1.25; margin-bottom: 14px
    }
    .section-sub {
      font-size: 1.05rem; color: var(--muted-on-paper); line-height: 1.7; margin: 0
    }

    .values-grid {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px
    }
    @media(max-width: 1199px) { .values-grid { grid-template-columns: repeat(2, 1fr) } }
    @media(max-width: 575px) { .values-grid { grid-template-columns: 1fr } }

    .value-card {
      background: var(--paper-card); border: 1px solid var(--line-light);
      border-radius: var(--radius); padding: 30px 24px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, .03);
      transition: transform var(--ease), box-shadow var(--ease)
    }
    .value-card:hover {
      transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0, 0, 0, .07)
    }
    .value-icon-box {
      width: 52px; height: 52px; border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.4rem; margin-bottom: 20px
    }
    .icon-brand { background: rgba(108, 99, 255, .12); color: var(--violet) }
    .icon-green { background: rgba(34, 211, 160, .12); color: #059669 }
    .icon-amber { background: rgba(255, 176, 32, .12); color: #d97706 }
    .icon-blue { background: rgba(61, 139, 255, .12); color: var(--blue) }

    .value-card h3 {
      font-family: var(--font-display); font-size: 1.15rem; font-weight: 700;
      color: var(--ink-on-paper); margin-bottom: 10px
    }
    .value-card p {
      font-size: .92rem; color: var(--muted-on-paper); line-height: 1.65; margin-bottom: 0
    }

    /* BENEFITS GRID */
    .perks-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px
    }
    @media(max-width: 991px) { .perks-grid { grid-template-columns: repeat(2, 1fr) } }
    @media(max-width: 575px) { .perks-grid { grid-template-columns: 1fr } }

    .perk-card {
      background: var(--paper-card); border: 1px solid var(--line-light);
      border-radius: var(--radius); padding: 28px 24px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, .03)
    }
    .perk-card i { font-size: 1.5rem; color: var(--violet); margin-bottom: 14px; display: inline-block }
    .perk-card h3 {
      font-family: var(--font-display); font-size: 1.08rem; font-weight: 700;
      color: var(--ink-on-paper); margin-bottom: 8px
    }
    .perk-card p {
      font-size: .88rem; color: var(--muted-on-paper); line-height: 1.6; margin-bottom: 0
    }

    /* JOB BOARD */
    .jobs-section {
      background: var(--navy-950); color: var(--ink); padding: 90px 0;
      border-top: 1px solid var(--line-dark); border-bottom: 1px solid var(--line-dark);
      scroll-margin-top: 80px
    }
    .filter-bar {
      display: flex; align-items: center; justify-content: center;
      flex-wrap: wrap; gap: 8px; margin-bottom: 40px
    }
    .filter-btn {
      background: rgba(255, 255, 255, .04); border: 1px solid var(--line-dark);
      color: var(--ink-dim); padding: 8px 18px; border-radius: 20px;
      font-size: .86rem; font-weight: 600; cursor: pointer;
      transition: all var(--ease)
    }
    .filter-btn:hover { background: rgba(255, 255, 255, .08); color: #fff }
    .filter-btn.active {
      background: var(--violet); border-color: var(--violet); color: #fff
    }

    .jobs-list { display: flex; flex-direction: column; gap: 16px }
    .job-card {
      background: var(--navy-900); border: 1px solid var(--line-dark);
      border-radius: var(--radius); padding: 26px 30px;
      display: flex; align-items: center; justify-content: space-between;
      gap: 24px; transition: transform var(--ease), border-color var(--ease), box-shadow var(--ease)
    }
    .job-card:hover {
      transform: translateY(-2px); border-color: rgba(108, 99, 255, .4);
      box-shadow: 0 12px 35px rgba(0, 0, 0, .3)
    }
    @media(max-width: 860px) {
      .job-card { flex-direction: column; align-items: flex-start; gap: 18px; padding: 22px }
    }
    .job-card-info { flex: 1 }
    .job-card-meta {
      display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 10px
    }
    .mini-badge {
      font-size: .76rem; font-weight: 600; padding: 3px 10px; border-radius: 12px
    }
    .badge-dept-mini { background: rgba(108, 99, 255, .15); color: var(--violet-light) }
    .badge-type-mini { background: rgba(34, 211, 160, .15); color: var(--green) }
    .badge-pay-mini { background: rgba(255, 176, 32, .15); color: var(--amber) }

    .job-card-title {
      font-family: var(--font-display); font-size: 1.25rem; font-weight: 700;
      color: #fff; margin-bottom: 8px
    }
    .job-card-title a { color: #fff; transition: color var(--ease) }
    .job-card-title a:hover { color: var(--violet-light) }
    .job-card-desc {
      font-size: .9rem; color: var(--ink-dim); line-height: 1.6; margin-bottom: 0; max-width: 650px
    }
    .job-card-actions {
      display: flex; align-items: center; gap: 12px; flex-shrink: 0
    }
    .btn-job-apply {
      background: var(--grad-brand); color: #fff; font-weight: 700; font-size: .88rem;
      padding: 10px 20px; border-radius: var(--radius-btn);
      display: inline-flex; align-items: center; gap: 6px;
      transition: transform var(--ease), box-shadow var(--ease)
    }
    .btn-job-apply:hover {
      color: #fff; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(108, 99, 255, .4)
    }
    .btn-job-details {
      border: 1px solid var(--line-dark); color: var(--ink-dim); font-weight: 600; font-size: .88rem;
      padding: 10px 18px; border-radius: var(--radius-btn);
      display: inline-flex; align-items: center; gap: 6px;
      transition: border-color var(--ease), color var(--ease)
    }
    .btn-job-details:hover { border-color: var(--violet-light); color: #fff }

    /* HIRING PROCESS STEPS */
    .steps-grid {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; position: relative
    }
    @media(max-width: 991px) { .steps-grid { grid-template-columns: repeat(2, 1fr) } }
    @media(max-width: 575px) { .steps-grid { grid-template-columns: 1fr } }

    .step-card {
      background: var(--paper-card); border: 1px solid var(--line-light);
      border-radius: var(--radius); padding: 30px 22px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, .03); position: relative
    }
    .step-num {
      width: 40px; height: 40px; border-radius: 50%;
      background: var(--grad-brand); color: #fff; font-weight: 700; font-size: 1rem;
      display: flex; align-items: center; justify-content: center; margin-bottom: 18px
    }
    .step-card h3 {
      font-family: var(--font-display); font-size: 1.15rem; font-weight: 700;
      color: var(--ink-on-paper); margin-bottom: 8px
    }
    .step-card p {
      font-size: .88rem; color: var(--muted-on-paper); line-height: 1.6; margin-bottom: 0
    }

    /* FAQ ACCORDION */
    .faq-wrapper { max-width: 820px; margin: 0 auto }
    .accordion-item {
      background: var(--paper-card); border: 1px solid var(--line-light);
      border-radius: 12px !important; margin-bottom: 14px; overflow: hidden
    }
    .accordion-button {
      background: transparent; color: var(--ink-on-paper); font-weight: 600;
      font-size: 1.02rem; padding: 18px 22px; box-shadow: none !important
    }
    .accordion-button:not(.collapsed) {
      background: rgba(108, 99, 255, .05); color: var(--violet)
    }
    .accordion-body {
      font-size: .94rem; color: var(--muted-on-paper); line-height: 1.7; padding: 14px 22px 22px
    }

    /* TALENT POOL BANNER */
    .pool-cta-banner {
      background: radial-gradient(circle at 80% 20%, rgba(108, 99, 255, .2), transparent 50%),
                  var(--navy-900);
      border: 1px solid var(--line-dark); border-radius: var(--radius);
      padding: 50px 40px; text-align: center; margin-top: 70px
    }
    .pool-cta-banner h2 {
      font-family: var(--font-display); font-size: clamp(1.6rem, 3vw, 2.2rem);
      font-weight: 700; color: #fff; margin-bottom: 12px
    }
    .pool-cta-banner p {
      font-size: 1rem; color: var(--ink-dim); max-width: 680px; margin: 0 auto 26px; line-height: 1.7
    }
    .pool-cta-actions {
      display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 14px
    }
  </style>
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>

  ${getNavbar('careers')}

  <!-- HERO SECTION -->
  <header class="hub-hero">
    <div class="container">
      <div class="hero-badge-pill">
        <i class="bi bi-rocket-takeoff-fill" aria-hidden="true"></i> 10 Active Openings in Marketing &amp; Sales
      </div>

      <h1>Build High-Impact Digital Growth. Shape Your Career With Us.</h1>
      <p class="hub-hero-lead">At Companies Builder, we combine modern web engineering with aggressive search optimization and multi-channel performance marketing. We are hiring thinkers, makers, and doers ready to accelerate their careers in Hyderabad.</p>

      <div class="hub-hero-actions">
        <a href="#open-roles" class="btn-hero-primary">
          <i class="bi bi-briefcase" aria-hidden="true"></i> Explore 10 Open Positions
        </a>
        <a href="/careers/talent-pool/" class="btn-hero-secondary">
          <i class="bi bi-people" aria-hidden="true"></i> Join General Talent Pool
        </a>
      </div>

      <!-- STATS BAR -->
      <div class="hero-stats-grid">
        <div class="hero-stat-card">
          <div class="hero-stat-num">10</div>
          <div class="hero-stat-label">Active Openings across Internships &amp; Full-Time roles</div>
        </div>
        <div class="hero-stat-card">
          <div class="hero-stat-num">100%</div>
          <div class="hero-stat-label">Direct mentorship from senior strategists and founders</div>
        </div>
        <div class="hero-stat-card">
          <div class="hero-stat-num">Hybrid</div>
          <div class="hero-stat-label">Flexible workplace model based in Hyderabad, India</div>
        </div>
        <div class="hero-stat-card">
          <div class="hero-stat-num">2-3 Wks</div>
          <div class="hero-stat-label">Average transparent timeline from application to offer</div>
        </div>
      </div>
    </div>
  </header>

  <main id="main">
    <!-- VALUES & CULTURE -->
    <section class="section-pad section-light" id="culture">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Agency Culture &amp; Values</span>
          <h2 class="section-title">Why Ambitious Marketers &amp; Sellers Choose Companies Builder</h2>
          <p class="section-sub">We do not believe in bureaucratic silos, endless slide decks, or vanity metrics. We build real systems that grow real businesses.</p>
        </div>

        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon-box icon-brand">
              <i class="bi bi-bullseye" aria-hidden="true"></i>
            </div>
            <h3>Direct Client Impact</h3>
            <p>You work on live client campaigns from day one. See your creative copy, SEO architectures, and ad setups drive measurable business revenue.</p>
          </div>

          <div class="value-card">
            <div class="value-icon-box icon-green">
              <i class="bi bi-chat-heart" aria-hidden="true"></i>
            </div>
            <h3>Radical Transparency</h3>
            <p>Low ego, open debate, and constructive feedback. Good ideas win regardless of job title, experience level, or tenure.</p>
          </div>

          <div class="value-card">
            <div class="value-icon-box icon-amber">
              <i class="bi bi-mortarboard" aria-hidden="true"></i>
            </div>
            <h3>Continuous Learning</h3>
            <p>Every team member receives paid access to premium tools (Ahrefs, SEMrush, GA4, Meta Suite) and an annual stipend for certifications.</p>
          </div>

          <div class="value-card">
            <div class="value-icon-box icon-blue">
              <i class="bi bi-graph-up-arrow" aria-hidden="true"></i>
            </div>
            <h3>Merit-Based Growth</h3>
            <p>Promotions and bonuses are tied to real outcomes and ownership, not politics. Strong internship performers receive immediate full-time PPOs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- BENEFITS & PERKS -->
    <section class="section-pad section-light" style="padding-top:0" id="perks">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Benefits &amp; Perks</span>
          <h2 class="section-title">Designed for Balance, Health &amp; Mastery</h2>
          <p class="section-sub">We provide comprehensive support so you can do the best work of your career.</p>
        </div>

        <div class="perks-grid">
          <div class="perk-card">
            <i class="bi bi-currency-rupee" aria-hidden="true"></i>
            <h3>Competitive Compensation</h3>
            <p>Market-leading base salaries, performance bonuses, and uncapped incentives for commercial roles.</p>
          </div>

          <div class="perk-card">
            <i class="bi bi-laptop" aria-hidden="true"></i>
            <h3>Hybrid Work Flexibility</h3>
            <p>Balanced schedule combining collaborative office whiteboarding in Hyderabad with focused remote days.</p>
          </div>

          <div class="perk-card">
            <i class="bi bi-book" aria-hidden="true"></i>
            <h3>Learning &amp; Books Budget</h3>
            <p>Annual budget for industry courses, book purchases, Google/Meta certifications, and workshop attendance.</p>
          </div>

          <div class="perk-card">
            <i class="bi bi-cpu" aria-hidden="true"></i>
            <h3>Modern Tool Stack</h3>
            <p>State-of-the-art marketing, analytics, and CRM software so you spend time optimizing, not doing busywork.</p>
          </div>

          <div class="perk-card">
            <i class="bi bi-heart-pulse" aria-hidden="true"></i>
            <h3>Health &amp; Wellness Support</h3>
            <p>Comprehensive health coverage guidelines, generous annual leave, and dedicated mental wellness recharge days.</p>
          </div>

          <div class="perk-card">
            <i class="bi bi-cup-hot" aria-hidden="true"></i>
            <h3>Vibrant Hyderabad Hub</h3>
            <p>Modern workspace in Hyderabad with stocked snacks, specialty coffee, and weekly collaborative learning sessions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- OPEN POSITIONS BOARD -->
    <section class="jobs-section" id="open-roles">
      <div class="container">
        <div class="section-header">
          <span class="section-tag" style="color:var(--violet-light)">Current Openings</span>
          <h2 class="section-title" style="color:#fff">Explore Open Positions at Companies Builder</h2>
          <p class="section-sub" style="color:var(--ink-dim)">Click any role to read the full description or apply directly online.</p>
        </div>

        <!-- Category Filters -->
        <div class="filter-bar" role="tablist" aria-label="Job category filters">
          <button class="filter-btn active" data-filter="all">All Roles (10)</button>
          <button class="filter-btn" data-filter="Marketing">Marketing (6)</button>
          <button class="filter-btn" data-filter="Sales & Growth">Sales &amp; Growth (4)</button>
          <button class="filter-btn" data-filter="Internship">Internships (3)</button>
          <button class="filter-btn" data-filter="Full-time">Full-Time (7)</button>
        </div>

        <!-- Job Cards List -->
        <div class="jobs-list" id="jobsContainer">
          ${jobs.map(j => `
          <div class="job-card" data-category="${j.category}" data-type="${j.type.includes('Internship') ? 'Internship' : 'Full-time'}">
            <div class="job-card-info">
              <div class="job-card-meta">
                <span class="mini-badge badge-dept-mini"><i class="bi bi-building"></i> ${j.team}</span>
                <span class="mini-badge badge-type-mini"><i class="bi bi-clock"></i> ${j.type}</span>
                <span class="mini-badge badge-pay-mini"><i class="bi bi-tag"></i> ${j.salaryMin >= 100000 ? '₹' + (j.salaryMin/100000).toFixed(1) + 'L - ' + (j.salaryMax/100000).toFixed(1) + 'L/yr' : '₹' + (j.salaryMin/1000) + 'k - ' + (j.salaryMax/1000) + 'k/mo'}</span>
              </div>
              <h3 class="job-card-title"><a href="/careers/${j.slug}/">${j.title}</a></h3>
              <p class="job-card-desc">${j.summary}</p>
            </div>
            <div class="job-card-actions">
              <a href="/careers/${j.slug}/" class="btn-job-details">
                <i class="bi bi-eye"></i> Details
              </a>
              <a href="/careers/${j.slug}/#apply" class="btn-job-apply">
                <i class="bi bi-pencil-square"></i> Apply Now
              </a>
            </div>
          </div>`).join('')}
        </div>

        <!-- TALENT POOL CTA BANNER -->
        <div class="pool-cta-banner">
          <h2>Do Not See Your Exact Role?</h2>
          <p>We are always eager to connect with gifted software developers, copywriters, graphic designers, and enterprise sales hunters. Join our general talent network, and we will reach out as new openings emerge.</p>
          <div class="pool-cta-actions">
            <a href="/careers/talent-pool/" class="btn-hero-primary">
              <i class="bi bi-person-plus-fill"></i> Join General Talent Pool
            </a>
            <a href="/careers/apply/" class="btn-hero-secondary">
              <i class="bi bi-file-earmark-text"></i> Universal Application Form
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- HIRING PROCESS -->
    <section class="section-pad section-light" id="process">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">How We Hire</span>
          <h2 class="section-title">A Fast, Respectful 4-Step Hiring Process</h2>
          <p class="section-sub">We respect your time. We do not do multi-month interview loops or endless unpaid trial tasks.</p>
        </div>

        <div class="steps-grid">
          <div class="step-card">
            <div class="step-num">1</div>
            <h3>Application Review</h3>
            <p>Our talent team evaluates your resume and portfolio against specific role requirements within 48 to 72 hours.</p>
          </div>

          <div class="step-card">
            <div class="step-num">2</div>
            <h3>Discovery Chat</h3>
            <p>A friendly 30-minute video or phone conversation to understand your career goals, expectations, and mutual culture fit.</p>
          </div>

          <div class="step-card">
            <div class="step-num">3</div>
            <h3>Practical Craft Check</h3>
            <p>A focused discussion or short real-world exercise evaluating how you solve problems, communicate, and execute.</p>
          </div>

          <div class="step-card">
            <div class="step-num">4</div>
            <h3>Offer &amp; Onboarding</h3>
            <p>A transparent, competitive offer letter detailing compensation, role milestones, and your day-one onboarding roadmap.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="section-pad section-light" style="padding-top:0" id="faq">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Candidate FAQ</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-sub">Everything you need to know about applying and working at Companies Builder.</p>
        </div>

        <div class="faq-wrapper">
          <div class="accordion" id="careersFaqAccordion">
            <div class="accordion-item">
              <h3 class="accordion-header" id="faqH1">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqC1" aria-expanded="true" aria-controls="faqC1">
                  What is the working model at Companies Builder?
                </button>
              </h3>
              <div id="faqC1" class="accordion-collapse collapse show" aria-labelledby="faqH1" data-bs-parent="#careersFaqAccordion">
                <div class="accordion-body">
                  We follow a flexible hybrid model based in Hyderabad, India. Team members spend specific days in the office collaborating on client strategies, brainstorms, and sprints, with the flexibility to work remotely on other days.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h3 class="accordion-header" id="faqH2">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqC2" aria-expanded="false" aria-controls="faqC2">
                  Can final-year students or freshers apply for internships?
                </button>
              </h3>
              <div id="faqC2" class="accordion-collapse collapse" aria-labelledby="faqH2" data-bs-parent="#careersFaqAccordion">
                <div class="accordion-body">
                  Yes, absolutely. We welcome energetic students and fresh graduates. Our 6-month internships provide live account experience, hands-on tool access, and dedicated senior mentorship, with formal PPO tracks for top performers.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h3 class="accordion-header" id="faqH3">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqC3" aria-expanded="false" aria-controls="faqC3">
                  How long does the hiring process take from start to finish?
                </button>
              </h3>
              <div id="faqC3" class="accordion-collapse collapse" aria-labelledby="faqH3" data-bs-parent="#careersFaqAccordion">
                <div class="accordion-body">
                  Our interview loop typically takes 2 to 3 weeks. We communicate status updates after each round so you are never left guessing where you stand.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h3 class="accordion-header" id="faqH4">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqC4" aria-expanded="false" aria-controls="faqC4">
                  What should I submit with my job application?
                </button>
              </h3>
              <div id="faqC4" class="accordion-collapse collapse" aria-labelledby="faqH4" data-bs-parent="#careersFaqAccordion">
                <div class="accordion-body">
                  Please submit an updated resume (PDF or DOCX), your LinkedIn profile URL, and links to any live websites, client case studies, ad campaigns, or GitHub repositories that showcase your abilities.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h3 class="accordion-header" id="faqH5">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqC5" aria-expanded="false" aria-controls="faqC5">
                  Where is the Companies Builder office located?
                </button>
              </h3>
              <div id="faqC5" class="accordion-collapse collapse" aria-labelledby="faqH5" data-bs-parent="#careersFaqAccordion">
                <div class="accordion-body">
                  Our headquarters is located in Hyderabad, Telangana, strategically situated for easy access from Hitec City, Madhapur, Gachibowli, and surrounding tech zones.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>

  ${getFooter()}

  ${getCommonScripts()}

  <!-- Job Filter JS -->
  <script>
    (function () {
      var filterBtns = document.querySelectorAll('.filter-btn');
      var jobCards = document.querySelectorAll('.job-card');

      filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          filterBtns.forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');

          var f = btn.getAttribute('data-filter');
          jobCards.forEach(function (card) {
            var cat = card.getAttribute('data-category');
            var type = card.getAttribute('data-type');
            if (f === 'all' || cat === f || type === f) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    })();
  </script>
</body>
</html>`;

fs.writeFileSync(path.join('careers', 'index.html'), careersHubHtml, 'utf8');
console.log('Generated: careers/index.html (Redesigned Main Careers Hub)');
