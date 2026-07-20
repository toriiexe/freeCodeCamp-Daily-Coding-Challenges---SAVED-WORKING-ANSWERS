# Python solution for 2026-01-21
# Markdown Inline Code Parser
import re
def parse_inline_code(markdown):
    return re.sub(r'`(.+?)`', r'<code>\1</code>', markdown) 