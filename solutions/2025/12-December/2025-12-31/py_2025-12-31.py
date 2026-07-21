# Python solution for 2025-12-31
# Markdown Italic Parser
import re
def parse_italics(markdown):
    return re.sub(r'([*_])(\S(?:.*?\S)?)\1', r'<i>\2</i>', markdown)