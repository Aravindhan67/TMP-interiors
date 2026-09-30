const fs = require('fs');
const path = require('path');

const files = [
  'src/app/page.tsx',
  'src/app/residential/page.tsx',
  'src/app/commercial/page.tsx',
  'src/app/contact/page.tsx'
];

for (const file of files) {
  const p = path.join(__dirname, '..', file);
  if (!fs.existsSync(p)) {
    console.log('Not found: ' + file);
    continue;
  }
  let content = fs.readFileSync(p, 'utf8');

  // Replace imports
  content = content.replace(/import ScrollFloat from "@\/components\/ScrollFloat";\n?/g, '');
  content = content.replace(/import ScrollBlurReveal from "@\/components\/ScrollBlurReveal";\n?/g, '');
  
  if (!content.includes('import ScrollAwake')) {
    content = 'import ScrollAwake from "@/components/ScrollAwake";\n' + content;
  }

  // Replace ScrollFloat with ScrollAwake for section titles
  content = content.replace(/<ScrollFloat containerClassName="([^"]+)"(?: textClassName="[^"]+")?>([^<]+)<\/ScrollFloat>/g, '<ScrollAwake tag="h2" className="$1">$2</ScrollAwake>');

  // Replace ScrollBlurReveal with ScrollAwake for images
  content = content.replace(/<ScrollBlurReveal className="([^"]+)"([^>]*) \/>/g, '<ScrollAwake className="$1"$2 />');
  content = content.replace(/<ScrollBlurReveal className="([^"]+)">([\s\S]*?)<\/ScrollBlurReveal>/g, '<ScrollAwake className="$1">$2</ScrollAwake>');

  fs.writeFileSync(p, content);
  console.log('Updated ' + file);
}
