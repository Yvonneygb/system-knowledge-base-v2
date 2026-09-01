const fs = require('fs');
const path = require('path');
const vp = require('./node_modules/vitepress/dist/node/serve-1ed3e028.js');

async function test() {
  const createMarkdownRenderer = vp.f;
  const md = await createMarkdownRenderer('docs', {}, '/');
  const { parse, compileTemplate } = require('@vue/compiler-sfc');

  const docsDir = 'docs';
  const errors = [];

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === '.vitepress') continue;
        walk(fullPath);
      } else if (entry.name === 'index.md') {
        try {
          const content = fs.readFileSync(fullPath, 'utf-8');
          const html = md.render(content);
          const vueSrc = '<template><div>' + html + '</div></template>';
          const { descriptor } = parse(vueSrc, { filename: 'test.md' });
          const result = compileTemplate({
            source: descriptor.template.content,
            filename: 'test.md',
            id: 'test'
          });
          if (result.errors && result.errors.length > 0) {
            const firstError = result.errors[0];
            let lineInfo = '';
            if (firstError.loc) {
              const lines = descriptor.template.content.split('\n');
              lineInfo = ` Line:${firstError.loc.start.line} Content:${(lines[firstError.loc.start.line - 1] || '').substring(0, 100)}`;
            }
            errors.push(`${fullPath}: ${firstError.message || firstError}${lineInfo}`);
          }
        } catch (e) {
          errors.push(`${fullPath}: ${e.message}`);
        }
      }
    }
  }

  walk(docsDir);

  if (errors.length === 0) {
    console.log('All files pass!');
  } else {
    console.log(`Found ${errors.length} errors:`);
    errors.forEach(e => console.log(e));
  }
}

test().catch(e => console.error(e));
