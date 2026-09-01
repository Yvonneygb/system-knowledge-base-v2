const fs = require('fs');

async function test() {
  const vp = require('./node_modules/vitepress/dist/node/serve-1ed3e028.js');
  const createMarkdownRenderer = vp.f;
  const md = await createMarkdownRenderer('docs', {}, '/');

  const file = process.argv[2] || 'docs/门店管理/门店装修/门店装修申请变更/index.md';
  const content = fs.readFileSync(file, 'utf-8');
  const html = md.render(content);

  // Wrap in template
  const vueSrc = '<template><div>' + html + '</div></template>';
  const { parse, compileTemplate } = require('@vue/compiler-sfc');
  const { descriptor } = parse(vueSrc, { filename: 'test.md' });
  const result = compileTemplate({
    source: descriptor.template.content,
    filename: 'test.md',
    id: 'test'
  });

  if (result.errors && result.errors.length > 0) {
    result.errors.forEach(e => {
      console.log('Error:', e.message || e);
      if (e.loc) {
        console.log('  Line:', e.loc.start.line, 'Col:', e.loc.start.column);
        const lines = descriptor.template.content.split('\n');
        if (lines[e.loc.start.line - 1]) {
          console.log('  Content:', lines[e.loc.start.line - 1].substring(0, 200));
        }
      }
    });
  } else {
    console.log('No errors!');
  }
}

test().catch(e => console.error(e));
