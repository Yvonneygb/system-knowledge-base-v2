#!/usr/bin/env python3
"""
Sync MD source files to knowledge base pages.
For each page:
- KEEP biz-intro and biz-flow sections unchanged
- REWRITE key-logic, detail-logic, faq, changelog from MD source
"""

import os
import re
import sys

MD_DIR = r'D:/VIP冰/项目/DMS/完整源码-外层/逻辑梳理-MD'
DOCS_DIR = 'docs'

# ── MD parsing ──────────────────────────────────────────────

def split_h2_sections(md):
    """Split MD content into {h2_title: content} dict."""
    lines = md.split('\n')
    sections = {}
    current_h2 = None
    current_lines = []

    for line in lines:
        if line.startswith('## '):
            if current_h2 is not None:
                sections[current_h2] = '\n'.join(current_lines).strip()
            current_h2 = line[3:].strip()
            current_lines = []
        elif line.startswith('# ') and current_h2 is None:
            # Skip the H1 title
            continue
        else:
            current_lines.append(line)

    if current_h2 is not None:
        sections[current_h2] = '\n'.join(current_lines).strip()

    return sections


def split_h3_subsections(content):
    """Split content into list of (h3_title, sub_content)."""
    lines = content.split('\n')
    subsections = []
    current_h3 = None
    current_lines = []

    for line in lines:
        if line.startswith('### '):
            if current_h3 is not None:
                subsections.append((current_h3, '\n'.join(current_lines).strip()))
            current_h3 = line[4:].strip()
            current_lines = []
        else:
            current_lines.append(line)

    if current_h3 is not None:
        subsections.append((current_h3, '\n'.join(current_lines).strip()))
    elif not subsections:
        # No H3 subsections, return the whole content
        subsections.append(('', content))

    return subsections


# ── MD to HTML conversion ───────────────────────────────────

def escape_html(text):
    """Escape HTML special characters."""
    return text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def escape_html_preserve_inline_code(text):
    """Escape HTML special chars but preserve <code>...</code> inline code tags.

    First extract inline code spans, escape the rest, then restore.
    Code content is also escaped.
    """
    # Extract <code>...</code> spans (already converted from MD `code`)
    code_spans = []
    def save_code(m):
        code_spans.append(m.group(1))
        return f'\x00CODE{len(code_spans)-1}\x00'

    text = re.sub(r'<code>(.*?)</code>', save_code, text, flags=re.DOTALL)

    # Also preserve <strong>...</strong> tags
    strong_spans = []
    def save_strong(m):
        strong_spans.append(m.group(1))
        return f'\x00STRONG{len(strong_spans)-1}\x00'

    text = re.sub(r'<strong>(.*?)</strong>', save_strong, text, flags=re.DOTALL)

    # Escape HTML special chars
    text = escape_html(text)

    # Escape curly braces for Vue (outside of code/strong spans)
    text = text.replace('{', '&#123;').replace('}', '&#125;')

    # Restore strong tags (content was already escaped before extraction)
    for i, content in enumerate(strong_spans):
        text = text.replace(f'\x00STRONG{i}\x00', f'<strong>{content}</strong>')

    # Restore code tags (escape the code content too)
    for i, content in enumerate(code_spans):
        escaped_content = escape_html(content)
        # Also escape curly braces in code content for Vue
        escaped_content = escaped_content.replace('{', '&#123;').replace('}', '&#125;')
        text = text.replace(f'\x00CODE{i}\x00', f'<code>{escaped_content}</code>')

    return text


def convert_md_table_to_html(md_table):
    """Convert a MD table block to HTML table."""
    lines = md_table.strip().split('\n')
    if not lines:
        return ''

    # Parse header
    header_line = lines[0].strip()
    headers = [h.strip() for h in header_line.split('|')]
    # Remove empty first/last from leading/trailing |
    if headers and headers[0] == '':
        headers = headers[1:]
    if headers and headers[-1] == '':
        headers = headers[:-1]

    # Skip separator line (line[1])
    # Parse data rows
    data_lines = lines[2:] if len(lines) > 2 else []

    html = '<table class="kb-field-tbl">\n<thead>\n<tr>'
    for h in headers:
        html += f'<th>{escape_html_preserve_inline_code(h)}</th>'
    html += '</tr>\n</thead>\n<tbody>\n'

    for row_line in data_lines:
        row_line = row_line.strip()
        if not row_line or row_line.startswith('|-') or set(row_line.replace('|', '').replace('-', '').replace(' ', '')) == set():
            continue
        cells = [c.strip() for c in row_line.split('|')]
        if cells and cells[0] == '':
            cells = cells[1:]
        if cells and cells[-1] == '':
            cells = cells[:-1]
        html += '<tr>'
        for c in cells:
            html += f'<td>{escape_html_preserve_inline_code(c)}</td>'
        html += '</tr>\n'

    html += '</tbody>\n</table>'
    return html


def convert_md_codeblock_to_html(code_block, lang=''):
    """Convert a MD code block to HTML pre block."""
    code = code_block.strip()
    # Escape HTML special chars in code
    code = escape_html(code)
    cls = 'detail-sql' if lang in ('sql', '') else f'lang-{lang}'
    return f'<pre class="{cls}" v-pre><code>{code}</code></pre>'


def convert_inline_md_to_html(text):
    """Convert inline MD (bold, code, links) to HTML."""
    # Bold: **text** -> <strong>text</strong>
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    # Inline code: `code` -> <code>code</code>
    text = re.sub(r'`([^`]+)`', r'<code>\1</code>', text)
    return text


def convert_md_content_to_html(md_content):
    """Convert arbitrary MD content (paragraphs, tables, code blocks, lists) to HTML."""
    if not md_content or not md_content.strip():
        return ''

    lines = md_content.split('\n')
    html_parts = []
    i = 0
    in_table = False
    table_lines = []
    in_code = False
    code_lines = []
    code_lang = ''

    while i < len(lines):
        line = lines[i]

        # Code block
        if line.strip().startswith('```'):
            if in_code:
                # End code block
                html_parts.append(convert_md_codeblock_to_html('\n'.join(code_lines), code_lang))
                code_lines = []
                in_code = False
            else:
                # Start code block
                code_lang = line.strip()[3:].strip()
                in_code = True
            i += 1
            continue

        if in_code:
            code_lines.append(line)
            i += 1
            continue

        # Table detection
        if '|' in line and line.strip().startswith('|'):
            if not in_table:
                in_table = True
                table_lines = []
            table_lines.append(line)
            i += 1
            continue
        else:
            if in_table:
                html_parts.append(convert_md_table_to_html('\n'.join(table_lines)))
                table_lines = []
                in_table = False

        # Skip empty lines
        if not line.strip():
            i += 1
            continue

        # Skip separator lines (---)
        if line.strip() == '---' or line.strip().startswith('---'):
            i += 1
            continue

        # Headings (####, #####)
        if line.startswith('#### '):
            html_parts.append(f'<h4>{escape_html_preserve_inline_code(line[5:].strip())}</h4>')
            i += 1
            continue
        if line.startswith('##### '):
            html_parts.append(f'<h5>{escape_html_preserve_inline_code(line[6:].strip())}</h5>')
            i += 1
            continue

        # Blockquote
        if line.startswith('> '):
            quote_text = line[2:].strip()
            # Collect multi-line blockquote
            while i + 1 < len(lines) and lines[i + 1].startswith('> '):
                i += 1
                quote_text += '\n' + lines[i][2:].strip()
            quote_text = escape_html_preserve_inline_code(convert_inline_md_to_html(quote_text))
            html_parts.append(f'<blockquote>{quote_text}</blockquote>')
            i += 1
            continue

        # List items
        if line.startswith('- ') or line.startswith('  - '):
            list_items = []
            while i < len(lines) and (lines[i].startswith('- ') or lines[i].startswith('  - ')):
                item_text = lines[i].lstrip(' -').strip()
                item_text = escape_html_preserve_inline_code(convert_inline_md_to_html(item_text))
                list_items.append(f'<li>{item_text}</li>')
                i += 1
            html_parts.append('<ul>' + ''.join(list_items) + '</ul>')
            continue

        # Regular paragraph
        para_text = convert_inline_md_to_html(line.strip())
        para_text = escape_html_preserve_inline_code(para_text)
        if para_text:
            html_parts.append(f'<p>{para_text}</p>')

        i += 1

    # Flush remaining table
    if in_table and table_lines:
        html_parts.append(convert_md_table_to_html('\n'.join(table_lines)))

    # Flush remaining code
    if in_code and code_lines:
        html_parts.append(convert_md_codeblock_to_html('\n'.join(code_lines), code_lang))

    return '\n'.join(html_parts)


# ── Section HTML generators ─────────────────────────────────

def generate_key_logic_html(md_sections):
    """Generate key-logic div from MD ## 重点逻辑 section."""
    content = md_sections.get('重点逻辑', '')
    if not content.strip():
        content = md_sections.get('重点逻辑（数据生成）', '')

    inner = ''

    if content.strip():
        subsections = split_h3_subsections(content)
        idx = 0
        for title, sub_content in subsections:
            idx += 1
            card_title = title if title else f'重点逻辑{idx}'
            card_inner = convert_md_content_to_html(sub_content)
            inner += f'<KbCard num="{idx}" title="{card_title}">\n{card_inner}\n</KbCard>\n\n'
    else:
        inner = '<!-- 无重点逻辑 -->\n'

    return f'''<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
{inner}</div>
</div>
</div>'''


def generate_detail_logic_html(md_sections):
    """Generate detail-logic div from MD ## 详细逻辑 + ## 数据库表详解 sections."""
    detail_content = md_sections.get('详细逻辑', '')
    db_content = md_sections.get('数据库表详解', '')

    inner = ''

    # Process detailed logic section
    if detail_content.strip():
        subsections = split_h3_subsections(detail_content)
        for title, sub_content in subsections:
            card_title = title if title else '详细逻辑'
            card_inner = convert_md_content_to_html(sub_content)
            inner += f'<KbCard title="{card_title}">\n{card_inner}\n</KbCard>\n\n'

    # Process database table section
    if db_content.strip():
        subsections = split_h3_subsections(db_content)
        for title, sub_content in subsections:
            card_title = title if title else '数据库表'
            card_inner = convert_md_content_to_html(sub_content)
            inner += f'<KbCard title="{card_title}">\n{card_inner}\n</KbCard>\n\n'

    if not inner.strip():
        inner = '<!-- 无详细逻辑 -->\n'

    return f'''<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
{inner}</div>
</div>
</div>'''


def generate_faq_html(md_sections):
    """Generate faq div from MD ## 常见问题FAQ section."""
    content = md_sections.get('常见问题FAQ', '')

    inner = ''

    if content.strip():
        subsections = split_h3_subsections(content)
        for title, sub_content in subsections:
            card_title = title if title else '常见问题'
            card_inner = convert_md_content_to_html(sub_content)
            inner += f'<KbCard title="{card_title}">\n{card_inner}\n</KbCard>\n\n'
    else:
        inner = '<!-- 无FAQ -->\n'

    return f'''<div id="faq" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
{inner}</div>
</div>
</div>'''


def generate_changelog_html(md_sections):
    """Generate changelog div from MD ## 更新记录 section."""
    content = md_sections.get('更新记录', '')

    inner = ''

    if content.strip():
        card_inner = convert_md_content_to_html(content)
        inner = f'<KbCard title="更新记录">\n{card_inner}\n</KbCard>\n'
    else:
        inner = '<!-- 无更新记录 -->\n'

    return f'''<div id="changelog" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
{inner}</div>
</div>
</div>'''


def generate_history_html():
    """Generate empty history div."""
    return f'''<div id="history" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="历史排查记录">

<!-- 空白:待补充 -->

</KbCard>
</div>
</div>
</div>'''


# ── Page section extraction ─────────────────────────────────

def find_div_section_bounds(html, div_id):
    """Find the start and end positions of a <div id="xxx"> section.

    Returns (start, end) where:
    - start is the position of the opening <div
    - end is the position just after the matching </div>

    Returns None if not found.
    """
    # Find the opening div tag
    pattern = f'<div id="{div_id}"'
    start = html.find(pattern)
    if start == -1:
        return None

    # Find the matching closing div by counting depth
    depth = 0
    pos = start
    while pos < len(html):
        # Find next <div or </div
        next_open = html.find('<div', pos)
        next_close = html.find('</div>', pos)

        if next_close == -1:
            # No more closing divs - malformed
            return None

        if next_open != -1 and next_open < next_close:
            # Found an opening div first
            depth += 1
            pos = next_open + 4  # Skip past '<div'
        else:
            # Found a closing div first
            depth -= 1
            if depth == 0:
                return (start, next_close + 6)
            pos = next_close + 6  # Skip past '</div>'

    return None


def extract_div_section(html, div_id):
    """Extract a div section by its id. Returns (section_html, remaining_html)."""
    bounds = find_div_section_bounds(html, div_id)
    if bounds is None:
        return None, html
    start, end = bounds
    return html[start:end], html[:start] + html[end:]


# ── Main processing ─────────────────────────────────────────

def md_filename_to_page_path(md_filename):
    """Convert MD filename to page path.

    Examples:
    - 财务管理-预提与冲销-工程服务费冲销.md -> docs/财务管理/预提与冲销/工程服务费冲销/index.md
    - 产品中心-产品资料-产品列表.md -> docs/产品中心/产品资料/产品列表/index.md
    """
    name = md_filename.replace('.md', '')
    parts = name.split('-')

    if len(parts) >= 3:
        category = parts[0]
        subcategory = parts[1]
        menu_name = '-'.join(parts[2:])
        return os.path.join(DOCS_DIR, category, subcategory, menu_name, 'index.md')
    elif len(parts) == 2:
        category = parts[0]
        menu_name = parts[1]
        return os.path.join(DOCS_DIR, category, menu_name, 'index.md')
    else:
        return None


def process_page(md_path, page_path):
    """Process a single page: keep biz-intro/biz-flow, rewrite rest from MD."""
    # Read MD source
    with open(md_path, encoding='utf-8') as f:
        md_content = f.read()

    # Read current page
    with open(page_path, encoding='utf-8') as f:
        page_content = f.read()

    # Parse MD sections
    md_sections = split_h2_sections(md_content)

    # Extract biz-intro section (keep unchanged)
    biz_intro, remaining = extract_div_section(page_content, 'biz-intro')
    if biz_intro is None:
        biz_intro = '<div id="biz-intro" style="display:none;">\n<!-- 无业务介绍 -->\n</div>'

    # Extract biz-flow section (keep unchanged)
    biz_flow, remaining = extract_div_section(remaining, 'biz-flow')
    if biz_flow is None:
        biz_flow = '<div id="biz-flow" style="display:none;">\n<!-- 无业务流程 -->\n</div>'

    # Generate new sections from MD
    key_logic = generate_key_logic_html(md_sections)
    detail_logic = generate_detail_logic_html(md_sections)
    faq = generate_faq_html(md_sections)
    changelog = generate_changelog_html(md_sections)
    history = generate_history_html()

    # Get the BreadcrumbTabs line and any content before the first div
    breadcrumb = ''
    pre_content = page_content
    # Find BreadcrumbTabs
    bt_match = re.search(r'<BreadcrumbTabs\s*/>', page_content)
    if bt_match:
        breadcrumb = bt_match.group() + '\n\n'

    # Assemble new page
    new_page = breadcrumb + biz_intro + '\n\n' + biz_flow + '\n\n' + key_logic + '\n\n' + detail_logic + '\n\n' + faq + '\n\n' + changelog + '\n\n' + history

    # Write
    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(new_page)

    return True


def main():
    # Get all MD source files
    md_files = []
    for f in sorted(os.listdir(MD_DIR)):
        if f.endswith('.md') and not f.startswith('_') and not f.startswith('dms-') and not f.startswith('gen_') and not f.startswith('check'):
            md_files.append(f)

    print(f"Found {len(md_files)} MD source files")

    # Process each
    success = 0
    failed = 0
    for md_file in md_files:
        md_path = os.path.join(MD_DIR, md_file)
        page_path = md_filename_to_page_path(md_file)

        if page_path is None:
            print(f"  SKIP (no path): {md_file}")
            continue

        if not os.path.exists(page_path):
            print(f"  SKIP (no page): {md_file} -> {page_path}")
            continue

        try:
            process_page(md_path, page_path)
            success += 1
        except Exception as e:
            print(f"  FAIL: {md_file} -> {e}")
            failed += 1

    print(f"\nDone: {success} success, {failed} failed")


if __name__ == '__main__':
    main()
