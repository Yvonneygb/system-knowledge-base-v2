const fs = require('fs');
const vp = require('./node_modules/vitepress/dist/node/serve-1ed3e028.js');

async function test() {
  const createMarkdownRenderer = vp.f;
  const md = await createMarkdownRenderer('docs', {}, '/');

  const content = fs.readFileSync('docs/开发管理/值集配置/装修等级/index.md', 'utf-8');
  const html = md.render(content);

  // Find the SVG
  const svgStart = html.indexOf('<svg');
  const svgEnd = html.indexOf('</svg>', svgStart);
  const svg = html.substring(svgStart, svgEnd + 6);

  // Try compiling just the SVG tag
  const { parse, compileTemplate } = require('@vue/compiler-sfc');

  // Test 1: Just the SVG
  let vueSrc = '<template><div>' + svg + '</div></template>';
  let { descriptor } = parse(vueSrc, { filename: 'test.md' });
  let result = compileTemplate({
    source: descriptor.template.content,
    filename: 'test.md',
    id: 'test'
  });

  if (result.errors && result.errors.length > 0) {
    // Find the exact error location in the SVG
    const firstError = result.errors[0];
    if (firstError.loc) {
      const lineNum = firstError.loc.start.line;
      const lines = descriptor.template.content.split('\n');
      console.log('First error at line', lineNum);
      for (let i = Math.max(0, lineNum - 3); i < Math.min(lines.length, lineNum + 3); i++) {
        console.log(`  ${i+1}: ${lines[i].substring(0, 200)}`);
      }
    }
  } else {
    console.log('SVG compiles OK');
  }

  // Test 2: Print first 500 chars of SVG
  console.log('\nSVG first 500 chars:');
  console.log(svg.substring(0, 500));

  // Test 3: Print last 200 chars of SVG
  console.log('\nSVG last 200 chars:');
  console.log(svg.substring(svg.length - 200));
}

test().catch(e => console.error(e));
