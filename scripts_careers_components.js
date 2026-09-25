const fs = require('fs');
const path = require('path');
const { jobs } = require('./scripts_careers_data.js');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Common Header Navbar Component
function getNavbar(activePage = 'careers') {
  return `  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="siteNav" aria-label="Main navigation">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center gap-2" href="/" aria-label="Companies Builder home">
        <img src="/assets/images/CB-logo.png" alt="Companies Builder logo" height="36" width="36">
        <span>Companies Builder</span>
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
        aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
          <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="/about/">About</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/services/" id="servicesDrop" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">Services</a>
            <ul class="dropdown-menu" aria-labelledby="servicesDrop">
              <li><a class="dropdown-item" href="/services/web-development-and-designing/"><i
                    class="bi bi-code-slash me-2 opacity-75"></i>Web Development &amp; Designing</a></li>
              <li><a class="dropdown-item" href="/services/seo-services-in-hyderabad/"><i
                    class="bi bi-bar-chart-line me-2 opacity-75"></i>SEO Services in Hyderabad</a></li>
              <li><a class="dropdown-item" href="/services/social-media-marketing-company-in-hyderabad/"><i
                    class="bi bi-megaphone me-2 opacity-75"></i>Social Media Marketing</a></li>
              <li><a class="dropdown-item" href="/services/b2b-digital-marketing-agency/"><i
                    class="bi bi-briefcase me-2 opacity-75"></i>B2B Digital Marketing</a></li>
              <li><hr class="dropdown-divider my-1"></li>
              <li><a class="dropdown-item fw-bold" href="/services/"><i class="bi bi-grid me-2 opacity-75"></i>All Services</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="resourcesDrop" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Resources</a>
            <ul class="dropdown-menu" aria-labelledby="resourcesDrop">
              <li><a class="dropdown-item" href="/resources/checklists/"><i class="bi bi-ui-checks me-2 opacity-75"></i>Checklists</a></li>
              <li><a class="dropdown-item" href="/write-for-us/"><i class="bi bi-pencil-square me-2 opacity-75"></i>Write for Us</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="/tools/">Tools</a></li>
          <li class="nav-item"><a class="nav-link" href="/blogs/">Blogs</a></li>
          <li class="nav-item"><a class="nav-link" href="/contact/">Contact</a></li>
          <li class="nav-item ms-lg-2 mt-2 mt-lg-0"><a class="nav-btn nav-pricing" href="/pricing">Pricing</a></li>
          <li class="nav-item ms-lg-2 mt-2 mt-lg-0"><button class="theme-toggle-btn" id="themeToggle" type="button" aria-label="Toggle light and dark mode" title="Toggle light and dark mode"><i class="bi bi-moon-stars" aria-hidden="true"></i></button></li>
          <li class="nav-item ms-lg-2 mt-2 mt-lg-0"><a class="nav-btn nav-demo" href="/demo/">Request a Demo</a></li>
        </ul>
      </div>
    </div>
  </nav>`;
}

// Common Footer Component
function getFooter() {
  return `  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <div class="row g-4 pb-4">
        <div class="col-md-4 col-lg-3">
          <a href="/" style="display:inline-flex;align-items:center;gap:10px;text-decoration:none;margin-bottom:16px">
            <img src="/assets/images/CB-logo.png" alt="Companies Builder logo" height="36" width="36"
              style="height:36px;width:auto;display:inline-block">
            <span style="font-family:var(--font-display);font-weight:700;color:#fff;font-size:1rem">Companies
              Builder</span>
          </a>
          <p class="footer-brand-desc">Digital marketing agency and web development company in Hyderabad, serving
            startups and SMBs across India.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61579509437210" target="_blank" rel="noopener" aria-label="Facebook"><i
                class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/companiesbuilder" target="_blank" rel="noopener"
              aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/company/companiesbuilder" target="_blank" rel="noopener"
              aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
            <a href="https://x.com/CB_technologies" target="_blank" rel="noopener" aria-label="Twitter / X"><i
                class="bi bi-twitter-x"></i></a>
          </div>
        </div>
        <div class="col-6 col-md-2 col-lg-2 offset-lg-1">
          <h3>Quick Links</h3>
          <ul class="list-unstyled">
            <li><a href="/">Home</a></li>
            <li><a href="/about/">About Us</a></li>
            <li><a href="/services/">Services</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/resources/checklists/">Checklists</a></li>
            <li><a href="/tools/">Free SEO Tools</a></li>
            <li><a href="/blogs/">Blog</a></li>
            <li><a href="/contact/">Contact</a></li>
            <li><a href="/write-for-us/">Write for Us</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-3 col-lg-3">
          <h3>Services</h3>
          <ul class="list-unstyled">
            <li><a href="/services/web-development-and-designing/">Web Development &amp; Design</a></li>
            <li><a href="/services/seo-services-in-hyderabad/">SEO Services in Hyderabad</a></li>
            <li><a href="/services/social-media-marketing-company-in-hyderabad/">Social Media Marketing</a></li>
            <li><a href="/services/b2b-digital-marketing-agency/">B2B Digital Marketing</a></li>
            <li><a href="/demo/">Request a Demo</a></li>
          </ul>
        </div>
        <div class="col-md-3 col-lg-3">
          <h3>Get in Touch</h3>
          <ul class="list-unstyled">
            <li style="margin-bottom:10px"><a href="mailto:info@companiesbuilder.com"
                style="display:flex;align-items:center;gap:8px"><i class="bi bi-envelope"
                  style="color:var(--violet-light);font-size:.9rem"></i>info@companiesbuilder.com</a></li>
            <li style="margin-bottom:10px"><a href="tel:+916302787953"
                style="display:flex;align-items:center;gap:8px"><i class="bi bi-telephone"
                  style="color:var(--violet-light);font-size:.9rem"></i>+91 63027 87953</a></li>
            <li><a href="/demo/" style="display:flex;align-items:center;gap:8px"><i class="bi bi-calendar-check"
                  style="color:var(--green);font-size:.9rem"></i>Request a Demo</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 Companies Builder. All rights reserved.</span>
        <span class="footer-badge">Hyderabad, India</span>
        <span><a href="/privacy-policy/" style="margin-right:16px">Privacy Policy</a><a
            href="/sitemap.xml">Sitemap</a></span>
      </div>
    </div>
  </footer>`;
}

// Common Theme & Form JavaScript
function getCommonScripts() {
  return `  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>
  <!-- Theme Toggle & Common Interactions -->
  <script>
    (function () {
      var nav = document.getElementById('siteNav');
      var onScroll = function () { nav.classList.toggle('is-scrolled', window.scrollY > 10); };
      document.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      var root = document.documentElement;
      var btn = document.getElementById('themeToggle');
      function applyTheme(t) {
        root.setAttribute('data-theme', t);
        localStorage.setItem('cb-theme', t);
        if (btn) {
          var i = btn.querySelector('i');
          if (i) i.className = (t === 'dark') ? 'bi bi-sun' : 'bi bi-moon-stars';
        }
      }
      var saved = localStorage.getItem('cb-theme');
      var pref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(saved || (pref ? 'dark' : 'light'));

      if (btn) {
        btn.addEventListener('click', function () {
          var current = root.getAttribute('data-theme');
          applyTheme(current === 'dark' ? 'light' : 'dark');
        });
      }
    })();
  </script>`;
}

// Common CSS
function getCommonStyles() {
  return `
    :root {
      --navy-950: #060910;
      --navy-900: #0e1424;
      --navy-800: #161d33;
      --navy-700: #212a48;
      --ink: #eef0f9;
      --ink-dim: #9aa3be;
      --paper: #f4f5fb;
      --paper-card: #fff;
      --ink-on-paper: #141826;
      --muted-on-paper: #5b6478;
      --violet: #6c63ff;
      --violet-light: #8b83ff;
      --blue: #3d8bff;
      --blue-light: #60a5fa;
      --amber: #ffb020;
      --green: #22d3a0;
      --pink: #f471b5;
      --line-dark: rgba(255, 255, 255, .08);
      --line-light: rgba(15, 20, 40, .07);
      --grad-brand: linear-gradient(135deg, #6c63ff, #3d8bff);
      --grad-amber: linear-gradient(135deg, #ffc048, #ff9233);
      --grad-green: linear-gradient(135deg, #22d3a0, #059669);
      --font-display: 'Space Grotesk', Arial, sans-serif;
      --font-body: 'Inter', Arial, sans-serif;
      --radius: 16px;
      --radius-btn: 10px;
      --shadow: 0 20px 60px rgba(0, 0, 0, .08);
      --shadow-dark: 0 24px 80px rgba(0, 0, 0, .45);
      --ease: .28s cubic-bezier(.4, 0, .2, 1)
    }

    [data-theme="light"] {
      --navy-950: #f8f9fd;
      --navy-900: #eef1f8;
      --navy-800: #e2e6f2;
      --navy-700: #d4daea;
      --ink: #141826;
      --ink-dim: #555e75;
      --paper: #fff;
      --paper-card: #f8f9fd;
      --ink-on-paper: #141826;
      --muted-on-paper: #5b6478;
      --line-dark: rgba(15, 20, 40, .08);
      --line-light: rgba(15, 20, 40, .06);
      --shadow-dark: 0 20px 50px rgba(0, 0, 0, .08)
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0 }
    html { scroll-behavior: smooth; -webkit-text-size-adjust: 100% }
    body {
      font-family: var(--font-body);
      background: var(--navy-950);
      color: var(--ink);
      line-height: 1.65;
      overflow-x: hidden;
      transition: background-color var(--ease), color var(--ease)
    }
    a { color: inherit; text-decoration: none }

    /* SKIP LINK */
    .skip-link {
      position: absolute; top: -60px; left: 16px;
      background: var(--violet); color: #fff;
      padding: 10px 18px; border-radius: 8px; font-weight: 600;
      z-index: 9999; transition: top var(--ease)
    }
    .skip-link:focus { top: 16px }

    /* NAVBAR */
    .navbar {
      background: rgba(6, 9, 16, .82) !important;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--line-dark);
      padding: 12px 0;
      transition: background var(--ease), box-shadow var(--ease)
    }
    [data-theme="light"] .navbar { background: rgba(248, 249, 253, .85) !important }
    .navbar.is-scrolled {
      background: rgba(6, 9, 16, .96) !important;
      box-shadow: 0 8px 30px rgba(0, 0, 0, .35)
    }
    [data-theme="light"] .navbar.is-scrolled {
      background: rgba(248, 249, 253, .96) !important;
      box-shadow: 0 8px 30px rgba(0, 0, 0, .08)
    }
    .navbar-brand img { height: 36px; width: auto; display: inline-block }
    .navbar-brand span {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--ink)
    }
    .nav-link {
      color: var(--ink-dim) !important;
      font-weight: 500;
      font-size: .92rem;
      padding: 6px 14px !important;
      transition: color var(--ease)
    }
    .nav-link:hover, .nav-link.active { color: var(--ink) !important }
    .dropdown-menu {
      background: var(--navy-900);
      border: 1px solid var(--line-dark);
      border-radius: 12px;
      padding: 8px;
      box-shadow: var(--shadow-dark);
      min-width: 220px
    }
    .dropdown-item {
      color: var(--ink-dim);
      border-radius: 8px;
      padding: 9px 14px;
      font-size: .9rem;
      transition: background var(--ease), color var(--ease)
    }
    .dropdown-item:hover, .dropdown-item.active {
      color: #fff;
      background: rgba(108, 99, 255, .18)
    }
    @media(min-width:992px) {
      .navbar .dropdown:hover>.dropdown-menu { display: block; margin-top: 0 }
    }
    .nav-btn {
      font-weight: 600; font-size: .88rem; padding: 8px 18px;
      border-radius: var(--radius-btn); display: inline-flex; align-items: center; gap: 6px;
      transition: transform var(--ease), box-shadow var(--ease)
    }
    .nav-pricing { border: 1px solid var(--line-dark); color: var(--ink-dim) }
    .nav-pricing:hover { border-color: var(--violet-light); color: #fff }
    .nav-demo {
      background: var(--grad-brand); color: #fff;
      box-shadow: 0 4px 18px rgba(108, 99, 255, .32)
    }
    .nav-demo:hover { color: #fff; transform: translateY(-1px); box-shadow: 0 6px 24px rgba(108, 99, 255, .45) }
    .theme-toggle-btn {
      background: transparent; border: 1px solid var(--line-dark);
      border-radius: var(--radius-btn); padding: 7px 11px; cursor: pointer;
      color: var(--ink-dim); font-size: .95rem;
      transition: color var(--ease), border-color var(--ease)
    }
    .theme-toggle-btn:hover { color: var(--amber); border-color: var(--amber) }

    /* FOOTER */
    .site-footer {
      background: var(--navy-950);
      border-top: 1px solid var(--line-dark);
      padding: 60px 0 24px
    }
    .footer-brand-desc {
      font-size: .88rem; color: var(--ink-dim);
      line-height: 1.6; margin-top: 12px; margin-bottom: 16px
    }
    .footer-social { display: flex; gap: 12px }
    .footer-social a {
      width: 36px; height: 36px; border-radius: 8px;
      background: rgba(255, 255, 255, .05); border: 1px solid var(--line-dark);
      display: flex; align-items: center; justify-content: center;
      color: var(--ink-dim); font-size: .95rem;
      transition: background var(--ease), color var(--ease), border-color var(--ease)
    }
    .footer-social a:hover {
      background: rgba(108, 99, 255, .15); color: #fff; border-color: var(--violet-light)
    }
    .site-footer h3 {
      font-family: var(--font-display); font-size: .95rem;
      font-weight: 700; color: #fff; margin-bottom: 18px; letter-spacing: .02em
    }
    .site-footer ul li { margin-bottom: 10px }
    .site-footer ul li a {
      font-size: .88rem; color: var(--ink-dim); transition: color var(--ease)
    }
    .site-footer ul li a:hover { color: #fff }
    .footer-bottom {
      border-top: 1px solid var(--line-dark);
      padding-top: 24px; margin-top: 40px;
      display: flex; justify-content: space-between; align-items: center;
      flex-wrap: wrap; gap: 14px; font-size: .82rem; color: var(--ink-dim)
    }
    .footer-badge {
      padding: 4px 12px; border-radius: 20px;
      background: rgba(255, 255, 255, .05); border: 1px solid var(--line-dark); font-size: .78rem
    }
  `;
}

console.log('Component helpers ready.');
module.exports = {
  getNavbar,
  getFooter,
  getCommonScripts,
  getCommonStyles
};
