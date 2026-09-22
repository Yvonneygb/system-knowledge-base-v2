// Debug script to get the intermediate HTML from VitePress's markdown processor
const fs = require('fs');
const path = require('path');

async function main() {
  // Try to access markdown-it directly from VitePress's dependencies
  const markdownItPath = require.resolve('markdown-it', { paths: [path.resolve(__dirname, 'node_modules/vitepress')] });
  const MarkdownIt = require(markdownItPath);

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  // Read the problematic markdown file
  const filePath = path.resolve(__dirname, 'docs/经销合同管理/销售合同/年度经销合同/index.md');
  const content = fs.readFileSync(filePath, 'utf-8');

  // Process the markdown
  const html = md.render(content);

  // Save the intermediate HTML
  fs.writeFileSync(path.resolve(__dirname, 'debug-output.html'), html);
  console.log('Intermediate HTML saved to debug-output.html');
  console.log('HTML length:', html.length);

  // Check for problematic tags
  const brCount = (html.match(/<br>/g) || []).length;
  const brSelfCount = (html.match(/<br \/>/g) || []).length;
  console.log(`<br> tags: ${brCount}, <br /> tags: ${brSelfCount}`);

  // Now try to parse the HTML with Vue compiler
  const { baseParse } = require('@vue/compiler-core');
  try {
    baseParse(html);
    console.log('Vue compiler: Parse succeeded!');
  } catch(e) {
    console.log('Vue compiler: Parse failed!');
    console.log('Error:', e.message);
    if (e.loc) {
      console.log('Error at line', e.loc.start.line, 'column', e.loc.start.column);
    }
  }
}

main().catch(e => console.error(e));
