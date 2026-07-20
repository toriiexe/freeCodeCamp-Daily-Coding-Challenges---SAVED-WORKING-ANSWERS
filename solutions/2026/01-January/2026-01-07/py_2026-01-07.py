# Python solution for 2026-01-07
# Markdown Unordered List Parser
import re
def parse_unordered_list(markdown):
    items = re.sub(r'-\s+(.+?)(?:\n|$)', r'<li>\1</li>', markdown)
    return '<ul>' + items + '</ul>'