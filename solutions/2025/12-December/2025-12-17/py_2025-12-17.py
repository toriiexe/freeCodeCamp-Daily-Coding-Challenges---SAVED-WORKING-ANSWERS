# Python solution for 2025-12-17
# Markdown Blockquote Parser
import re
def parse_blockquote(markdown):
    return re.sub(r'\s*>\s+(.*)', r'<blockquote>\1</blockquote>', markdown)