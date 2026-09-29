const fs=require('fs'),path=require('path');
const markdownItPath = require.resolve('markdown-it', { paths: [path.resolve(__dirname,'node_modules/vitepress')] });
const MarkdownIt = require(markdownItPath);
const md = new MarkdownIt({html:true,linkify:true,typographer:true});
const { baseParse } = require('@vue/compiler-core');
const fp = process.argv[2];
const content = fs.readFileSync(fp,'utf-8').replace(/\r\n/g,'\n');
const html = md.render(content);
try { baseParse(html); console.log('Parse OK'); }
catch(e){
  console.log('Parse FAILED:', e.message);
  const lines=html.split('\n'); const ln=e.loc?e.loc.start.line:0;
  for(let i=Math.max(0,ln-5);i<Math.min(lines.length,ln+3);i++) console.log((i+1)+': '+(lines[i]||'').slice(0,190));
}
