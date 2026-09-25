/**
 * Master Synchronization Script for Global Header & Footer
 * Reads canonical components/header.html and components/footer.html
 * and synchronizes all HTML pages across the website with a single command.
 */
const fs = require('fs');
const path = require('path');

const HEADER_TEMPLATE = fs.readFileSync(path.join('components', 'header.html'), 'utf8');
const FOOTER_TEMPLATE = fs.readFileSync(path.join('components', 'footer.html'), 'utf8');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    if (item.name.startsWith('.') || item.name === 'node_modules' || item.name === 'companiesbuilder-tools' || item.name === 'components') continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(getHtmlFiles(full));
    } else if (item.name.endsWith('.html')) {
      results.push(full.replace(/\\/g, '/'));
    }
  }
  return results;
}

function determineActiveSection(filePath) {
  const norm = filePath.replace(/\\/g, '/').toLowerCase();
  if (norm === 'index.html') return 'home';
  if (norm.startsWith('about/')) return 'about';
  if (norm.startsWith('services/')) return 'services';
  if (norm.startsWith('careers/')) return 'careers';
  if (norm.startsWith('tools/')) return 'tools';
  if (norm.startsWith('blogs/')) return 'blogs';
  if (norm.startsWith('contact/')) return 'contact';
  if (norm.startsWith('pricing/')) return 'pricing';
  if (norm.startsWith('write-for-us/') || norm.startsWith('resources/')) return 'resources';
  return '';
}

function buildHeaderForFile(filePath) {
  const section = determineActiveSection(filePath);
  let header = HEADER_TEMPLATE;

  if (section === 'services') {
    header = header.replace('id="servicesDrop" role="button"', 'id="servicesDrop" role="button" class="nav-link dropdown-toggle active"');
  } else if (section === 'resources') {
    header = header.replace('id="resourcesDrop" role="button"', 'id="resourcesDrop" role="button" class="nav-link dropdown-toggle active"');
  } else if (section) {
    // Add active class to corresponding nav link
    const targetTag = `data-nav="${section}"`;
    header = header.replace(targetTag, `${targetTag} class="nav-link active" aria-current="page"`);
  }

  return header;
}

const files = getHtmlFiles('.');
console.log(`Starting synchronization of Global Header & Footer across ${files.length} pages...\n`);

let updatedCount = 0;
const navRegex = /<nav[^>]*class=["'][^"']*navbar[^"']*["'][\s\S]*?<\/nav>/i;
const footerRegex = /<footer[\s\S]*?<\/footer>/i;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // 1. Replace Navbar
  const pageHeader = buildHeaderForFile(filePath);
  if (navRegex.test(content)) {
    content = content.replace(navRegex, pageHeader.trim());
    modified = true;
  } else {
    console.warn(`[WARN] No navbar found in ${filePath}`);
  }

  // 2. Replace Footer
  if (footerRegex.test(content)) {
    content = content.replace(footerRegex, FOOTER_TEMPLATE.trim());
    modified = true;
  } else {
    console.warn(`[WARN] No footer found in ${filePath}`);
  }

  // 3. Ensure global-nav.js script tag is present before </body>
  if (!content.includes('global-nav.js')) {
    const scriptTag = '  <script src="/assets/js/global-nav.js" defer></script>\n</body>';
    if (content.includes('</body>')) {
      content = content.replace('</body>', scriptTag);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`Synced [OK]: ${filePath}`);
  }
});

console.log(`\nSynchronization Complete! Updated ${updatedCount} / ${files.length} pages.`);
