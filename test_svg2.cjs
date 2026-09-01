const fs = require('fs');
const vp = require('./node_modules/vitepress/dist/node/serve-1ed3e028.js');

async function test() {
  const createMarkdownRenderer = vp.f;
  const md = await createMarkdownRenderer('docs', {}, '/');

  const content = fs.readFileSync('docs/开发管理/值集配置/装修等级/index.md', 'utf-8');
  const html = md.render(content);

  // Find the SVG in rendered HTML
  const svgStart = html.indexOf('<svg');
  if (svgStart < 0) {
    console.log('No SVG found in rendered HTML');
    // Check if it was removed or transformed
    const rectIdx = html.indexOf('<rect');
    const textIdx = html.indexOf('<text');
    console.log('rect found:', rectIdx >= 0);
    console.log('text found:', textIdx >= 0);

    // Check what's at the position where SVG was
    const bfIdx = html.indexOf('bf-fc-svg-wrap');
    if (bfIdx >= 0) {
      console.log('\nAround bf-fc-svg-wrap:');
      console.log(html.substring(bfIdx - 20, bfIdx + 200));
    }
    return;
  }

  const svgEnd = html.indexOf('</svg>', svgStart);
  const svg = html.substring(svgStart, svgEnd + 6);
  console.log('SVG found, length:', svg.length);

  // Try compiling just the SVG
  const { parse, compileTemplate } = require('@vue/compiler-sfc');
  const vueSrc = '<template><div>' + svg + '</div></template>';
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
    console.log('SVG compiles OK');
  }
}

test().catch(e => console.error(e));
