# Python solution for 2025-11-19
# Markdown Heading Converter
import re
def convert(heading):
    m = re.fullmatch(r'\s*(#{1,6})\s+(.+)', heading)

    if not m:
        return 'Invalid format'

    level = len(m.group(1))
    text = m.group(2)

    return f'<h{level}>{text}</h{level}>'