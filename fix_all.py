import os, re

def fix_pre_blocks(content):
    """Convert <pre class="..." v-pre><code>...</code></pre> to markdown code fences."""
    pattern = r'<pre class="([^"]*)" v-pre><code>(.*?)</code></pre>'
    
    def replace_pre(match):
        cls = match.group(1)
        inner = match.group(2)
        inner = inner.replace('&amp;', '&')
        inner = inner.replace('&lt;', '<')
        inner = inner.replace('&gt;', '>')
        inner = inner.replace('&#35;', '#')
        inner = inner.replace('&#123;', '{')
        inner = inner.replace('&#125;', '}')
        inner = inner.replace('&quot;', '"')
        inner = inner.replace('&#39;', "'")
        if 'detail-sql' in cls or 'sql' in cls:
            lang = 'sql'
        elif 'lang-text' in cls or 'text' in cls:
            lang = 'text'
        else:
            lang = 'text'
        return f'```{lang}\n' + inner.strip('\n') + '\n```'
    
    result = re.sub(pattern, replace_pre, content, flags=re.DOTALL)
    # Ensure blank line before code fences after any HTML line ending with >
    result = re.sub(r'(>)[ \t]*\n(```)', r'\1\n\n\2', result)
    return result

def fix_svg_blank_lines(content):
    """Remove blank lines inside <svg>...</svg> blocks."""
    def fix_svg(match):
        full = match.group(0)
        lines = full.split('\n')
        result_lines = [l for l in lines if l.strip() != '' or l == lines[0] or l == lines[-1]]
        return '\n'.join(result_lines)
    return re.sub(r'<svg[^>]*>.*?</svg>', fix_svg, content, flags=re.DOTALL)

def fix_html_block_blank_lines(content):
    """Remove blank lines inside HTML blocks that markdown-it would split.

    markdown-it terminates HTML blocks at blank lines. This causes issues
    when HTML blocks (like divs, tables, etc.) contain blank lines.

    We need to remove blank lines that are inside HTML block contexts.
    An HTML block is a sequence of lines starting with < and ending with >.
    """
    lines = content.split('\n')
    result = []
    in_html_block = False
    html_block_depth = 0

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Check if this line starts an HTML block
        if stripped.startswith('<') and not stripped.startswith('```') and not stripped.startswith('|'):
            # Check if it's a complete HTML block (starts with <tag)
            if re.match(r'<[a-zA-Z/!]', stripped):
                in_html_block = True
                # Count opening and closing tags
                opens = len(re.findall(r'<[a-zA-Z][^>]*[^/>]>', line))
                closes = len(re.findall(r'</[a-zA-Z][^>]*>', line))
                html_block_depth += opens - closes

        if in_html_block and stripped == '':
            # Check if the next non-empty line is also HTML
            j = i + 1
            while j < len(lines) and lines[j].strip() == '':
                j += 1
            if j < len(lines):
                next_stripped = lines[j].strip()
                if next_stripped.startswith('<') and re.match(r'<[a-zA-Z/!]', next_stripped):
                    # Skip the blank line - it would split the HTML block
                    i += 1
                    continue

        # Check if HTML block ends
        if in_html_block:
            if stripped.startswith('```') or stripped.startswith('|') or (not stripped.startswith('<') and stripped != '' and not re.match(r'^[ \t]*<', line)):
                in_html_block = False

        result.append(line)
        i += 1

    return '\n'.join(result)

docs_dir = 'docs'
count = 0
for root, dirs, files in os.walk(docs_dir):
    if '.vitepress' in dirs:
        dirs.remove('.vitepress')
    for fname in files:
        if fname != 'index.md':
            continue
        fpath = os.path.join(root, fname)
        with open(fpath, encoding='utf-8') as f:
            content = f.read()

        new_content = fix_pre_blocks(content)
        new_content = fix_svg_blank_lines(new_content)
        # Don't use fix_html_block_blank_lines as it's too aggressive
        # new_content = fix_html_block_blank_lines(new_content)

        if new_content != content:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            count += 1

print(f'Fixed {count} files')
