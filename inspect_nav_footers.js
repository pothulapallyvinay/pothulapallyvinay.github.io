const fs = require('fs');
const path = require('path');

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

const files = getHtmlFiles('.');
let navMissingCareers = 0;
let footerMissingCareers = 0;

const navRegex = /<nav[^>]*class=["'][^"']*navbar[^"']*["'][\s\S]*?<\/nav>/i;
const footerRegex = /<footer[\s\S]*?<\/footer>/i;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const navMatch = content.match(navRegex);
  const footerMatch = content.match(footerRegex);

  const hasNavCareers = navMatch && navMatch[0].includes('/careers/');
  const hasFooterCareers = footerMatch && footerMatch[0].includes('/careers/');

  if (!hasNavCareers) {
    console.log('[FAIL] Nav missing careers in:', f);
    navMissingCareers++;
  }
  if (!hasFooterCareers) {
    console.log('[FAIL] Footer missing careers in:', f);
    footerMissingCareers++;
  }
});

console.log('Total pages checked:', files.length);
console.log('Pages missing Careers in Nav:', navMissingCareers);
console.log('Pages missing Careers in Footer:', footerMissingCareers);
