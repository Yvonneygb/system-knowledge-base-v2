const fs = require('fs');
const path = require('path');
const { baseParse } = require('@vue/compiler-core');

const filePath = path.resolve(__dirname, 'docs/经销合同管理/销售合同/年度经销合同/index.md');
const content = fs.readFileSync(filePath, 'utf-8');

try {
  const ast = baseParse(content, {
    filename: filePath,
  });
  console.log('Parse succeeded!');
  console.log('Root children count:', ast.children.length);
} catch (e) {
  console.log('Parse failed!');
  console.log('Error:', e.message);
  if (e.loc) {
    console.log('Error location: line', e.loc.start.line, 'column', e.loc.start.column);
    console.log('Error file:', e.loc.file);

    // Print the lines around the error
    const lines = content.split('\n');
    const errorLine = e.loc.start.line;
    const startLine = Math.max(0, errorLine - 5);
    const endLine = Math.min(lines.length, errorLine + 5);
    for (let i = startLine; i < endLine; i++) {
      const marker = (i + 1 === errorLine) ? '>>>' : '   ';
      console.log(`${marker} ${i + 1}: ${lines[i]}`);
    }
  }
  if (e.stack) {
    console.log('\nStack trace:');
    console.log(e.stack);
  }
}
