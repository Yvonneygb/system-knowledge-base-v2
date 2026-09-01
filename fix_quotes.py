import os, re

def fix_title_quotes(content):
    """Fix unescaped quotes in HTML attribute values.

    Problem: title="Q1：报"未获取到门店申请信息"" — the inner " breaks the attribute.
    Solution: Replace inner " with &quot; or use Chinese quotes.
    """
    # Find all title="..." attributes
    # The issue is when the title value contains " (regular double quotes)
    # We need to escape them as &quot;

    def fix_attr(match):
        full = match.group(0)
        attr_name = match.group(1)
        attr_value = match.group(2)

        # If the value contains unescaped ", we need to escape them
        # The value is between the first " and the last "
        # Inner " should be escaped
        if '"' in attr_value:
            # Escape inner quotes
            attr_value = attr_value.replace('"', '&quot;')
            return f'{attr_name}="{attr_value}"'
        return full

    # Match title="..." where the value might contain nested quotes
    # We need to be careful: title="value with " inside" is ambiguous
    # Strategy: find title=" and then find the matching " by looking at context
    # A safer approach: find patterns where title has an odd number of "

    # Match title="..." where ... contains " followed by more text and another "
    # This is tricky with regex, so let's use a different approach

    # Find all occurrences of title=" and fix them
    result = content
    # Pattern: title="..."" or title="..."..."..."
    # Replace " inside the value with &quot;

    # Use a simpler approach: find title="..." where there are extra " before the closing "
    # Pattern: title="(.*?)"(?=\s|>|/>)
    # This matches title="..." where ... doesn't contain "
    # But if ... contains ", we need a different approach

    # Let's match title="..." where the ... part has " followed by non-space
    def replace_title(match):
        before = match.group(1)  # title=
        quote = match.group(2)   # "
        value = match.group(3)   # the value
        after = match.group(4)   # closing " and what follows

        # Escape inner " in value
        if '"' in value:
            value = value.replace('"', '&quot;')
        return before + quote + value + after

    # Match: title="value" followed by > or space
    # But value might contain " which makes this ambiguous
    # Let's use a different approach: find title=" and then find the LAST " before > or space

    # Pattern: title="([^"]*("[^"]*)*)"(\s|>|/>)
    # This is still ambiguous. Let's just find all KbCard tags with title and fix them.

    lines = result.split('\n')
    fixed_lines = []
    for line in lines:
        # Find all KbCard title attributes
        # Match: <KbCard ... title="..." ...>
        def fix_line(line):
            # Find title="..." in the line
            # The value ends at the last " before > or space+attribute
            pattern = r'title="([^"]*(?:"[^"]*)*?)"(\s|>|/>)'
            # This is still complex. Let's use a simpler heuristic:
            # Find title=" and then find the matching " by counting
            idx = line.find('title="')
            if idx < 0:
                return line

            start = idx + 7  # after title="
            # Find the last " before > or /> or space+letter
            # Look for " followed by > or /> or space
            best_end = -1
            for i in range(start, len(line)):
                if line[i] == '"':
                    # Check what follows
                    rest = line[i+1:].lstrip()
                    if rest.startswith('>') or rest.startswith('/>') or rest == '' or rest[0].isalpha():
                        best_end = i
                        # Don't break - keep looking for the last one

            if best_end < 0:
                return line

            value = line[start:best_end]
            if '"' in value:
                value = value.replace('"', '&quot;')
                line = line[:start] + value + line[best_end:]

            return line

        fixed_lines.append(fix_line(line))

    return '\n'.join(fixed_lines)

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

        new_content = fix_title_quotes(content)
        if new_content != content:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            count += 1

print(f'Fixed {count} files')
