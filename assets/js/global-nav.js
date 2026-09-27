/**
 * Companies Builder - Global Header & Navigation Script
 * Controls scroll effects, active menu states, and mobile behavior globally across all pages.
 */
(function () {
  'use strict';

  // 1. Reset / Remove Theme Attributes & Storage
  function cleanupTheme() {
    var root = document.documentElement;
    root.removeAttribute('data-theme');
    root.removeAttribute('data-bs-theme');
    if (document.body) {
      document.body.removeAttribute('data-theme');
      document.body.removeAttribute('data-bs-theme');
    }
    var toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
      toggleBtn.style.display = 'none';
      if (toggleBtn.parentElement && toggleBtn.parentElement.classList.contains('nav-item')) {
        toggleBtn.parentElement.style.display = 'none';
      }
    }
    try {
      localStorage.removeItem('cb-theme');
    } catch (e) {}
  }

  // 2. Navbar Scroll State
  function initNavScroll() {
    var nav = document.getElementById('siteNav');
    if (!nav) return;

    function onScroll() {
      if (window.scrollY > 20) {
        nav.classList.add('is-scrolled');
      } else {
        nav.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 3. Active Nav Link Highlighting
  function initActiveNav() {
    var nav = document.getElementById('siteNav');
    if (!nav) return;

    var currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    var links = nav.querySelectorAll('.nav-link:not(.dropdown-toggle)');

    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      var cleanHref = href.replace(/\/$/, '') || '/';

      if (cleanHref === currentPath || (cleanHref !== '/' && currentPath.indexOf(cleanHref) === 0)) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });

    // Check dropdowns
    var servicesDrop = document.getElementById('servicesDrop');
    if (servicesDrop && currentPath.indexOf('/services') === 0) {
      servicesDrop.classList.add('active');
    }
    var resourcesDrop = document.getElementById('resourcesDrop');
    if (resourcesDrop && (currentPath.indexOf('/resources') === 0 || currentPath.indexOf('/write-for-us') === 0)) {
      resourcesDrop.classList.add('active');
    }
  }

  // 4. Mobile Menu Auto-close
  function initMobileMenu() {
    var mainNav = document.getElementById('mainNav');
    if (!mainNav) return;

    var links = mainNav.querySelectorAll('a.nav-link:not(.dropdown-toggle), a.dropdown-item, a.nav-btn');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992 && mainNav.classList.contains('show')) {
          var bsCollapse = window.bootstrap && window.bootstrap.Collapse ? window.bootstrap.Collapse.getInstance(mainNav) : null;
          if (bsCollapse) {
            bsCollapse.hide();
          } else {
            mainNav.classList.remove('show');
          }
        }
      });
    });
  }

  cleanupTheme();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      cleanupTheme();
      initNavScroll();
      initActiveNav();
      initMobileMenu();
    });
  } else {
    cleanupTheme();
    initNavScroll();
    initActiveNav();
    initMobileMenu();
  }
})();
