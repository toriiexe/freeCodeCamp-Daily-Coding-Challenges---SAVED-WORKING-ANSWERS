# Python solution for 2025-12-03
# Markdown Ordered List Item Converter
import re
def convert_list_item(markdown):
    match = re.match(r'^\s*([1-9]\d*)\.\s+(.+)$', markdown)
    if match:
        return f'<li>{match.group(2)}</li>'
    return 'Invalid format'