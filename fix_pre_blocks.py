import os, re

def fix_pre_blocks(content):
    """Convert <pre class="..." v-pre><code>...</code></pre> to markdown code fences.

    markdown-it breaks <pre> blocks by inserting <p> tags at blank lines,
    which causes Vue to see raw #{...} MyBatis syntax as v-slot shorthand.

    Solution: replace <pre v-pre><code> blocks with markdown fences,
    which VitePress's Shiki highlighter handles correctly (escapes <, >, #, etc).
    """
    # Match <pre class="..." v-pre><code>...</code></pre>
    pattern = r'<pre class="([^"]*)" v-pre><code>(.*?)</code></pre>'
    
    def replace_pre(match):
        cls = match.group(1)
        inner = match.group(2)
        # Unescape HTML entities back to original for markdown code fence
        inner = inner.replace('&amp;', '&')
        inner = inner.replace('&lt;', '<')
        inner = inner.replace('&gt;', '>')
        inner = inner.replace('&#35;', '#')
        inner = inner.replace('&#123;', '{')
        inner = inner.replace('&#125;', '}')
        inner = inner.replace('&quot;', '"')
        inner = inner.replace('&#39;', "'")
        # Determine language from class
        if 'detail-sql' in cls or 'sql' in cls:
            lang = 'sql'
        elif 'lang-text' in cls or 'text' in cls:
            lang = 'text'
        else:
            lang = 'text'
        # Return as markdown code fence
        return f'```{lang}\n' + inner.strip('\n') + '\n```'
    
    result = re.sub(pattern, replace_pre, content, flags=re.DOTALL)
    
    # Ensure code fences have blank lines before them when preceded by any HTML line
    # markdown-it requires a blank line between HTML blocks and code fences
    # Match any line ending with > followed immediately by ``` on next line
    result = re.sub(r'(>)[ \t]*\n(```)', r'\1\n\n\2', result)
    
    return result

docs_dir = 'docs'
count = 0
for root, dirs, files in os.walk(docs_dir):
    for fname in files:
        if fname != 'index.md':
            continue
        fpath = os.path.join(root, fname)
        with open(fpath, encoding='utf-8') as f:
            content = f.read()
        
        new_content = fix_pre_blocks(content)
        if new_content != content:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            count += 1

print(f'Fixed {count} files')
