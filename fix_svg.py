import os, re

def fix_svg_blank_lines(content):
    """Remove blank lines inside <svg>...</svg> blocks.

    markdown-it treats blank lines as HTML block terminators.
    When an SVG contains blank lines (e.g., between comment groups),
    markdown-it splits the SVG into multiple blocks, breaking the HTML structure.
    """
    def fix_svg(match):
        full = match.group(0)
        # Remove blank lines inside the SVG
        lines = full.split('\n')
        result_lines = [l for l in lines if l.strip() != '' or l == lines[0] or l == lines[-1]]
        return '\n'.join(result_lines)

    return re.sub(r'<svg[^>]*>.*?</svg>', fix_svg, content, flags=re.DOTALL)

docs_dir = 'docs'
count = 0
for root, dirs, files in os.walk(docs_dir):
    for fname in files:
        if fname != 'index.md':
            continue
        fpath = os.path.join(root, fname)
        with open(fpath, encoding='utf-8') as f:
            content = f.read()

        new_content = fix_svg_blank_lines(content)
        if new_content != content:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            count += 1

print(f'Fixed {count} files')
